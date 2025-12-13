import React, { useState } from 'react';
import { DRUGS, DICLOFENAC_COMPARISON } from '../constants';
import { Search, ChevronDown, ChevronUp, AlertTriangle, Activity, Pill, Languages, Info } from 'lucide-react';

const DrugGuide: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [lang, setLang] = useState<'en' | 'ar'>('en');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [showComparison, setShowComparison] = useState(false);

    // Extract categories based on language
    const categoriesSet = new Set(DRUGS.map(d => lang === 'en' ? d.category : d.categoryAr));
    const categories = ['All', ...Array.from(categoriesSet)];

    const filteredDrugs = DRUGS.filter(drug => {
        const matchesSearch = 
            drug.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            drug.brandNames.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'All' || 
            (lang === 'en' ? drug.category === selectedCategory : drug.categoryAr === selectedCategory);

        return matchesSearch && matchesCategory;
    });

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="space-y-6 animate-fade-in pb-12">
            {/* Header Area */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Pill size={120} />
                </div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {lang === 'en' ? 'Dental Drug Database' : 'دليل أدوية الأسنان'}
                        </h2>
                        <button 
                            onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}
                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all font-medium text-sm"
                        >
                            <Languages size={18} />
                            {lang === 'en' ? 'العربية' : 'English'}
                        </button>
                    </div>
                    
                    <p className="text-blue-100 opacity-90 max-w-xl text-sm md:text-base mb-6">
                        {lang === 'en' 
                            ? 'Search generic names, brands, and find dosages and interactions.' 
                            : 'ابحث عن الأسماء العلمية والتجارية، الجرعات، والتفاعلات الدوائية.'}
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl">
                        <Search className={`absolute ${lang === 'en' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-slate-400`} size={20} />
                        <input 
                            dir={lang === 'en' ? 'ltr' : 'rtl'}
                            type="text"
                            placeholder={lang === 'en' ? "Search generic or brand name..." : "بحث باسم الدواء..."}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full ${lang === 'en' ? 'pl-12 pr-4' : 'pr-12 pl-4'} py-3 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border-none shadow-xl`}
                        />
                    </div>
                </div>
            </div>

            {/* Diclofenac Comparison Toggle */}
            <button 
                onClick={() => setShowComparison(!showComparison)}
                className="w-full bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-800 p-4 rounded-xl flex items-center justify-between transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="bg-orange-200 p-2 rounded-lg">
                        <Info size={20} className="text-orange-700" />
                    </div>
                    <span className="font-bold">
                        {lang === 'en' ? 'Compare: Diclofenac Sodium vs Potassium' : 'مقارنة: ديكلوفيناك الصوديوم والبوتاسيوم'}
                    </span>
                </div>
                {showComparison ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Comparison Table */}
            {showComparison && (
                <div className="bg-white rounded-xl border border-orange-200 shadow-sm overflow-hidden animate-slide-up">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm md:text-base" dir={lang === 'en' ? 'ltr' : 'rtl'}>
                            <thead className="bg-orange-50">
                                <tr>
                                    <th className="p-4 text-start text-orange-900">{lang === 'en' ? 'Aspect' : 'وجه المقارنة'}</th>
                                    <th className="p-4 text-start text-orange-900">{lang === 'en' ? 'Diclofenac Sodium (Voltaren)' : 'ديكلوفيناك صوديوم (فولتارين)'}</th>
                                    <th className="p-4 text-start text-orange-900">{lang === 'en' ? 'Diclofenac Potassium (Cataflam)' : 'ديكلوفيناك بوتاسيوم (كاتافلام)'}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-orange-100">
                                {DICLOFENAC_COMPARISON.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-orange-50/50">
                                        <td className="p-4 font-semibold text-slate-700">{lang === 'en' ? row.aspectEn : row.aspectAr}</td>
                                        <td className="p-4 text-slate-600">{lang === 'en' ? row.valA_En : row.valA_Ar}</td>
                                        <td className="p-4 text-slate-600 font-medium text-orange-700">{lang === 'en' ? row.valB_En : row.valB_Ar}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-3 bg-orange-50 text-xs text-center text-orange-800">
                        {lang === 'en' ? 'Takeaway: Potassium acts faster for acute dental pain.' : 'الخلاصة: البوتاسيوم أسرع مفعولاً لألم الأسنان الحاد.'}
                    </div>
                </div>
            )}

            {/* Movable Slide List (Categories) */}
            <div className="relative group">
                <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide snap-x" dir={lang === 'en' ? 'ltr' : 'rtl'}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap snap-start border
                                ${selectedCategory === cat 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105' 
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'}`}
                        >
                            {cat === 'All' ? (lang === 'en' ? 'All Drugs' : 'كل الأدوية') : cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Drug Cards List */}
            <div className="grid gap-4">
                {filteredDrugs.map(drug => (
                    <div 
                        key={drug.id} 
                        dir={lang === 'en' ? 'ltr' : 'rtl'}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                            expandedId === drug.id ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-slate-200 hover:border-blue-300 shadow-sm'
                        }`}
                    >
                        <div 
                            onClick={() => toggleExpand(drug.id)}
                            className="p-5 cursor-pointer"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-lg md:text-xl font-bold text-slate-800">
                                            {drug.genericName}
                                        </h3>
                                        <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide font-bold
                                            ${drug.category.includes('Antibiotic') ? 'bg-green-100 text-green-700' : 
                                              drug.category.includes('Analgesic') ? 'bg-orange-100 text-orange-700' :
                                              drug.category.includes('Anesthetic') ? 'bg-purple-100 text-purple-700' :
                                              'bg-slate-100 text-slate-700'}`}>
                                            {lang === 'en' ? drug.category : drug.categoryAr}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {drug.brandNames.map(brand => (
                                            <span key={brand} className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100">
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className={`text-slate-400 transition-transform duration-300 ${expandedId === drug.id ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedId === drug.id && (
                            <div className="px-5 pb-6 pt-0 border-t border-slate-100 bg-slate-50/30">
                                <div className="mt-4 space-y-4">
                                    <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                        <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                                            <Info size={16} className="text-blue-500" />
                                            {lang === 'en' ? 'Description & Indications' : 'الوصف ودواعي الاستعمال'}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {lang === 'en' ? drug.descriptionEn : drug.descriptionAr}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <h4 className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
                                            <Activity size={16} /> 
                                            {lang === 'en' ? 'Dosing' : 'الجرعات'}
                                        </h4>
                                        <p className="text-blue-800 text-sm font-medium">
                                            {lang === 'en' ? drug.doseEn : drug.doseAr}
                                        </p>
                                    </div>

                                    {(drug.warningsEn || drug.warningsAr) && (
                                        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                                            <h4 className="text-sm font-bold text-amber-900 mb-1 flex items-center gap-2">
                                                <AlertTriangle size={16} /> 
                                                {lang === 'en' ? 'Warnings / Contraindications' : 'تحذيرات وموانع الاستعمال'}
                                            </h4>
                                            <p className="text-amber-800 text-sm">
                                               {/* Placeholder logic if added in future, currently description covers most */}
                                               {lang === 'en' ? "Consult full monograph for complete safety info." : "راجع النشرة الطبية الكاملة لمعلومات الأمان."}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                
                {filteredDrugs.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <p>{lang === 'en' ? 'No drugs found matching your criteria.' : 'لم يتم العثور على أدوية تطابق بحثك.'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DrugGuide;
