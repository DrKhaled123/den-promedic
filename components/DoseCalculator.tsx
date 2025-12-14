import React, { useState, useMemo } from 'react';
import { Calculator, Scale, AlertCircle, Syringe, Pill, Info, Stethoscope, Activity } from 'lucide-react';
import { DRUGS } from '../constants';
import { Drug } from '../types';

type ReferenceResult = { type: 'reference'; drug: Drug };
type AnestheticResult = { type: 'anesthetic'; drug: Drug; maxMg: number; maxCartridges: number; mgPerCartridge: number; formula: string };
type PediatricDailyResult = { type: 'pediatric_daily'; drug: Drug; minDaily?: number; maxDaily?: number; val?: number; notes: string };
type PediatricDoseResult = { type: 'pediatric_dose'; drug: Drug; minDose: number; maxDose: number; freq: string; dailyMax?: number; notes: string };

interface RegimenItem {
    label: string;
    val: string;
}

type RegimenResult = { type: 'regimen'; drug: Drug; items: RegimenItem[]; notes: string };

type CalculationResult = 
    | ReferenceResult
    | AnestheticResult
    | PediatricDailyResult
    | PediatricDoseResult
    | RegimenResult
    | null;

const DoseCalculator: React.FC = () => {
    const [weight, setWeight] = useState<string>('');
    const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
    const [selectedDrugId, setSelectedDrugId] = useState<string>(DRUGS[0].id);

    // Group drugs by category for the dropdown
    const groupedDrugs = useMemo<Record<string, Drug[]>>(() => {
        const groups: Record<string, Drug[]> = {};
        DRUGS.forEach(drug => {
            if (!groups[drug.category]) groups[drug.category] = [];
            groups[drug.category].push(drug);
        });
        return groups;
    }, []);

    const calculate = (): CalculationResult => {
        const w = parseFloat(weight);
        if (isNaN(w) || w <= 0) return null;
        
        const weightKg = unit === 'lb' ? w * 0.453592 : w;
        const drug = DRUGS.find(d => d.id === selectedDrugId);
        
        if (!drug) return null;

        // --- Local Anesthetics Logic (Standard 1.8ml Cartridge) ---
        if (drug.category.includes('Local Anesthetic')) {
            let mgPerKg = 0;
            let maxMgAbs = 0;
            let mgPerCartridge = 0;

            switch (drug.id) {
                case 'la1': // Lidocaine 2%
                    mgPerKg = 7; maxMgAbs = 500; mgPerCartridge = 36;
                    break;
                case 'la2': // Articaine 4%
                    mgPerKg = 7; maxMgAbs = 500; mgPerCartridge = 72;
                    break;
                case 'la3': // Mepivacaine 3%
                    mgPerKg = 6.6; maxMgAbs = 400; mgPerCartridge = 54;
                    break;
                case 'la4': // Bupivacaine 0.5%
                    mgPerKg = 2; maxMgAbs = 90; mgPerCartridge = 9;
                    break;
                case 'la5': // Prilocaine 4%
                    mgPerKg = 8; maxMgAbs = 600; mgPerCartridge = 72;
                    break;
                default:
                    return { type: 'reference', drug };
            }

            const maxMg = Math.min(weightKg * mgPerKg, maxMgAbs);
            const maxCartridges = Math.floor((maxMg / mgPerCartridge) * 10) / 10;

            return {
                type: 'anesthetic',
                drug,
                maxMg: Math.round(maxMg),
                maxCartridges,
                mgPerCartridge,
                formula: `${mgPerKg}mg/kg (Max ${maxMgAbs}mg)`
            };
        }

        // --- Pediatric Antibiotics, Analgesics & Neurological Logic ---
        
        // Amoxicillin (ab1)
        if (drug.id === 'ab1') {
            const minDaily = Math.round(weightKg * 20);
            const maxDaily = Math.round(weightKg * 50);
            return {
                type: 'pediatric_daily',
                drug,
                minDaily,
                maxDaily,
                notes: 'Divided every 8 hours (TID). For severe infections, up to 90mg/kg/day.'
            };
        }

        // Augmentin (ab2)
        if (drug.id === 'ab2') {
            const minDaily = Math.round(weightKg * 20);
            const maxDaily = Math.round(weightKg * 40);
            return {
                type: 'pediatric_daily',
                drug,
                minDaily,
                maxDaily,
                notes: 'Based on Amoxicillin component. Divided q12h or q8h depending on formulation.'
            };
        }

        // Clindamycin (ab3)
        if (drug.id === 'ab3') {
            const minDaily = Math.round(weightKg * 8);
            const maxDaily = Math.round(weightKg * 20);
            return {
                type: 'pediatric_daily',
                drug,
                minDaily,
                maxDaily,
                notes: 'Divided into 3 or 4 equal doses (q6h or q8h).'
            };
        }

        // Azithromycin (ab4)
        if (drug.id === 'ab4') {
            const day1 = Math.round(weightKg * 10);
            const day2_5 = Math.round(weightKg * 5);
            return {
                type: 'regimen',
                drug,
                items: [
                    { label: 'Day 1', val: `${day1} mg (Once daily)` },
                    { label: 'Days 2-5', val: `${day2_5} mg (Once daily)` }
                ],
                notes: 'Oral suspension. Administer 1 hour before or 2 hours after a meal.'
            };
        }

        // Metronidazole (ab5) - 30-50mg/kg/day for Amebiasis, 30mg for Anaerobes
        if (drug.id === 'ab5') {
            const daily = Math.round(weightKg * 30);
            return {
                type: 'pediatric_daily',
                drug,
                val: daily,
                notes: 'Divided into 3-4 doses (q6-8h). Avoid alcohol.'
            };
        }

        // --- Injectable Antibiotics ---
        // Ceftriaxone (ab8)
        if (drug.id === 'ab8') {
            const minDaily = Math.round(weightKg * 50);
            const maxDaily = Math.round(weightKg * 75);
            return {
                type: 'pediatric_daily',
                drug,
                minDaily,
                maxDaily,
                notes: 'Given IV/IM once daily (q24h). Max 2g/day generally.'
            };
        }

        // Cefotaxime (ab9)
        if (drug.id === 'ab9') {
            const minDaily = Math.round(weightKg * 50);
            const maxDaily = Math.round(weightKg * 100);
            return {
                type: 'pediatric_daily',
                drug,
                minDaily,
                maxDaily,
                notes: 'Divided q6-8h. Up to 150-200 mg/kg/day for severe meningitis.'
            };
        }

        // Unasyn (ab10)
        if (drug.id === 'ab10') {
             const minDaily = Math.round(weightKg * 150);
             const maxDaily = Math.round(weightKg * 300);
             return {
                 type: 'pediatric_daily',
                 drug,
                 minDaily,
                 maxDaily,
                 notes: 'Dosage based on Ampicillin component. Divided q6h.'
             };
        }

        // Cefepime (ab11)
        if (drug.id === 'ab11') {
             const daily = Math.round(weightKg * 100); // 50mg/kg q12h
             return {
                 type: 'pediatric_daily',
                 drug,
                 val: daily,
                 notes: '50 mg/kg every 12 hours. For meningitis/severe: every 8 hours.'
             };
        }

        // --- Neurological Agents ---
        // Gabapentin (neur1) - Child 3-12y
        if (drug.id === 'neur1') {
             const startDaily = Math.round(weightKg * 10);
             const maintDaily = Math.round(weightKg * 30);
             return {
                 type: 'pediatric_daily',
                 drug,
                 minDaily: startDaily,
                 maxDaily: maintDaily,
                 notes: 'Titrate slowly. Start 10-15 mg/kg/day, up to 35-50 mg/kg/day. Divided TID.'
             };
        }
        
        // Levetiracetam (neur2)
        if (drug.id === 'neur2') {
             const daily = Math.round(weightKg * 40); // 20mg/kg BID = 40/day
             return {
                 type: 'pediatric_daily',
                 drug,
                 val: daily,
                 notes: 'Start 20 mg/kg/day (divided BID), increase to 40-60 mg/kg/day.'
             };
        }

        // --- Antiemetics ---
        // Ondansetron (ae1)
        if (drug.id === 'ae1') {
             const dose = (weightKg * 0.1).toFixed(1);
             return {
                 type: 'pediatric_dose',
                 drug,
                 minDose: parseFloat(dose),
                 maxDose: parseFloat(dose),
                 freq: 'q8h',
                 notes: '0.1 mg/kg IV/PO (Max 4mg/dose for children < 15kg).'
             };
        }

        // Metoclopramide (ae2)
        if (drug.id === 'ae2') {
             const dose = (weightKg * 0.1).toFixed(1);
             return {
                 type: 'pediatric_dose',
                 drug,
                 minDose: parseFloat(dose),
                 maxDose: parseFloat(dose),
                 freq: 'q8h',
                 dailyMax: Math.round(weightKg * 0.5),
                 notes: 'Caution: Risk of EPS in children. Max 0.5 mg/kg/day.'
             };
        }

         // Domperidone (ae3)
         if (drug.id === 'ae3') {
             const dose = (weightKg * 0.25).toFixed(1);
             return {
                 type: 'pediatric_dose',
                 drug,
                 minDose: parseFloat(dose),
                 maxDose: parseFloat(dose),
                 freq: '3-4 times daily',
                 dailyMax: Math.round(weightKg * 2.4),
                 notes: 'Max 2.4 mg/kg/day.'
             };
        }

        // --- Analgesics ---
        // Ibuprofen (an1)
        if (drug.id === 'an1') {
            const minDose = Math.round(weightKg * 5);
            const maxDose = Math.round(weightKg * 10);
            const dailyMax = Math.round(Math.min(weightKg * 40, 2400));
            return {
                type: 'pediatric_dose',
                drug,
                minDose,
                maxDose,
                freq: 'q6-8h',
                dailyMax,
                notes: 'Max 40mg/kg/day. Do not exceed 400mg/dose for children.'
            };
        }

        // Paracetamol (an4)
        if (drug.id === 'an4') {
            const minDose = Math.round(weightKg * 10);
            const maxDose = Math.round(weightKg * 15);
            return {
                type: 'pediatric_dose',
                drug,
                minDose,
                maxDose,
                freq: 'q4-6h',
                notes: 'Max 5 doses in 24 hours. Do not exceed 4g/day (Adults) or 75mg/kg/day (Child).'
            };
        }

        // Default: Show Reference Dose
        return {
            type: 'reference',
            drug
        };
    };

    const result = calculate();

    return (
        <div className="animate-fade-in max-w-4xl mx-auto space-y-6 pb-12">
            <div className="text-center space-y-2 mb-8">
                <div className="inline-block p-3 bg-blue-100 text-blue-700 rounded-full mb-2">
                    <Calculator size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Dose Calculator</h2>
                <p className="text-slate-500 max-w-lg mx-auto">
                    Calculate safe maximum doses for anesthetics and pediatric formulations. 
                    Includes reference values for adult medications.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
                {/* Input Section */}
                <div className="md:col-span-5 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-bold text-slate-700 mb-2 block flex items-center gap-2">
                                    <Scale size={16} className="text-blue-500" /> Patient Weight
                                </label>
                                <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                                    <input 
                                        type="number" 
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="w-full px-4 py-3 outline-none text-lg font-medium text-slate-800 placeholder:text-slate-300"
                                        placeholder="0.0"
                                    />
                                    <select 
                                        value={unit}
                                        onChange={(e) => setUnit(e.target.value as 'kg' | 'lb')}
                                        className="bg-slate-50 border-l border-slate-300 px-4 py-3 text-slate-600 font-bold outline-none cursor-pointer hover:bg-slate-100"
                                    >
                                        <option value="kg">kg</option>
                                        <option value="lb">lb</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-slate-700 mb-2 block flex items-center gap-2">
                                    <Pill size={16} className="text-blue-500" /> Medication
                                </label>
                                <div className="relative">
                                    <select 
                                        value={selectedDrugId}
                                        onChange={(e) => setSelectedDrugId(e.target.value)}
                                        className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800 appearance-none font-medium"
                                    >
                                        {Object.entries(groupedDrugs).map(([category, drugs]) => (
                                            <optgroup key={category} label={category}>
                                                {(drugs as Drug[]).map(drug => (
                                                    <option key={drug.id} value={drug.id}>
                                                        {drug.genericName}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-3 text-sm text-amber-800">
                        <AlertCircle className="flex-shrink-0 mt-0.5" size={18} />
                        <p className="leading-relaxed">
                            <strong>Clinical Warning:</strong> Calculations are for reference only. 
                            Always adjust for patient history (cardiac, renal, hepatic) and follow manufacturer's official prescribing information.
                        </p>
                    </div>
                </div>

                {/* Result Section */}
                <div className="md:col-span-7">
                    {result ? (
                        <div className="h-full">
                            {/* Anesthetic Result */}
                            {result.type === 'anesthetic' && (
                                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                                            <Syringe size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-emerald-900">Maximum Safe Dose</h3>
                                            <p className="text-emerald-700 text-sm">Local Anesthetic (Standard 1.8ml)</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-white/60 p-4 rounded-xl text-center">
                                            <p className="text-sm text-emerald-800 font-medium mb-1">Cartridges</p>
                                            <p className="text-4xl font-bold text-emerald-600">{result.maxCartridges}</p>
                                        </div>
                                        <div className="bg-white/60 p-4 rounded-xl text-center">
                                            <p className="text-sm text-emerald-800 font-medium mb-1">Total mg</p>
                                            <p className="text-4xl font-bold text-emerald-600">{result.maxMg}<span className="text-lg text-emerald-500 ml-1">mg</span></p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <div className="flex justify-between text-sm text-emerald-800 border-b border-emerald-100 pb-2">
                                            <span>Formula Used:</span>
                                            <span className="font-mono">{result.formula}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-emerald-800 border-b border-emerald-100 pb-2">
                                            <span>Concentration:</span>
                                            <span className="font-mono">{result.mgPerCartridge}mg / cartridge</span>
                                        </div>
                                        <p className="text-xs text-emerald-700 mt-2">
                                            *For cardiac patients using epinephrine, limit to 2 cartridges (0.04mg Epi) regardless of weight-based calculation.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Pediatric Daily Result */}
                            {result.type === 'pediatric_daily' && (
                                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                            <Activity size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-blue-900">Pediatric Daily Dosage</h3>
                                            <p className="text-blue-700 text-sm">{result.drug.genericName}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-6 rounded-xl text-center mb-6">
                                        {result.val ? (
                                            <p className="text-4xl font-bold text-blue-600">{result.val} <span className="text-lg">mg/day</span></p>
                                        ) : (
                                            <p className="text-4xl font-bold text-blue-600">
                                                {result.minDaily} - {result.maxDaily} <span className="text-lg">mg/day</span>
                                            </p>
                                        )}
                                        <p className="text-blue-500 text-sm mt-2 font-medium">Total Daily Amount</p>
                                    </div>

                                    <div className="bg-blue-100/50 p-4 rounded-lg mt-auto">
                                        <h4 className="font-bold text-blue-900 text-sm mb-1">Administration Instructions:</h4>
                                        <p className="text-blue-800 text-sm leading-relaxed">
                                            {result.notes}
                                        </p>
                                    </div>
                                </div>
                            )}

                             {/* Pediatric Single Dose Result */}
                             {result.type === 'pediatric_dose' && (
                                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                            <Pill size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-indigo-900">Single Dose Range</h3>
                                            <p className="text-indigo-700 text-sm">Analgesic for Child</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/60 p-6 rounded-xl text-center mb-6">
                                        <p className="text-4xl font-bold text-indigo-600">
                                            {result.minDose} - {result.maxDose} <span className="text-lg">mg</span>
                                        </p>
                                        <p className="text-indigo-500 text-sm mt-2 font-medium">Amount Per Dose</p>
                                    </div>

                                    <div className="space-y-2 text-indigo-800 text-sm mt-auto">
                                        <div className="flex justify-between border-b border-indigo-200 pb-2">
                                            <span>Frequency:</span>
                                            <span className="font-bold">{result.freq}</span>
                                        </div>
                                        {result.dailyMax && (
                                            <div className="flex justify-between border-b border-indigo-200 pb-2">
                                                <span>Daily Max:</span>
                                                <span className="font-bold">{result.dailyMax} mg/day</span>
                                            </div>
                                        )}
                                        <p className="text-xs mt-3 pt-2 opacity-80">{result.notes}</p>
                                    </div>
                                </div>
                            )}

                             {/* Regimen Result */}
                             {result.type === 'regimen' && (
                                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 h-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                            <Stethoscope size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-purple-900">Treatment Regimen</h3>
                                            <p className="text-purple-700 text-sm">{result.drug.genericName}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        {(result as RegimenResult).items.map((item, idx) => (
                                            <div key={idx} className="bg-white/60 p-4 rounded-xl flex justify-between items-center">
                                                <span className="font-bold text-purple-900">{item.label}</span>
                                                <span className="text-lg font-bold text-purple-600">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-purple-800 bg-purple-100/50 p-4 rounded-lg">
                                        {result.notes}
                                    </p>
                                </div>
                             )}

                            {/* Reference Result */}
                            {result.type === 'reference' && (
                                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full flex flex-col justify-center text-center">
                                    <div className="mx-auto bg-slate-100 p-4 rounded-full text-slate-400 mb-4">
                                        <Info size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Standard Dosage</h3>
                                    <p className="text-slate-500 mb-6">
                                        Weight-based calculation is not standard for this medication in general dental practice. Please refer to the standard dosage below.
                                    </p>
                                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                        <p className="text-lg font-medium text-slate-800">
                                            {result.drug.doseEn}
                                        </p>
                                        <p className="text-sm text-slate-400 mt-2 font-arabic">
                                            {result.drug.doseAr}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="h-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center p-8 text-center text-slate-400">
                            <div>
                                <Scale size={48} className="mx-auto mb-4 opacity-50" />
                                <p className="text-lg font-medium">Enter patient weight to see calculation results</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DoseCalculator;