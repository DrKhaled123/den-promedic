import React, { useState } from 'react';
import { ChevronDown, Table as TableIcon } from 'lucide-react';

// --- Components (Helpers) ---

const DetailSection: React.FC<{titleEn: string, titleAr: string, color: string, children: React.ReactNode}> = ({titleEn, titleAr, color, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const colors: Record<string, string> = {
        blue: 'border-blue-200 bg-blue-50 text-blue-900',
        slate: 'border-slate-200 bg-slate-50 text-slate-900',
        cyan: 'border-cyan-200 bg-cyan-50 text-cyan-900',
        indigo: 'border-indigo-200 bg-indigo-50 text-indigo-900',
        purple: 'border-purple-200 bg-purple-50 text-purple-900',
        green: 'border-green-200 bg-green-50 text-green-900',
        amber: 'border-amber-200 bg-amber-50 text-amber-900',
        red: 'border-red-200 bg-red-50 text-red-900',
    };

    return (
        <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-blue-500/20' : ''}`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${colors[color] || colors.slate}`}
            >
                <div>
                    <h3 className="text-lg md:text-xl font-bold">{titleEn}</h3>
                    <p className="text-sm md:text-base opacity-80 font-arabic mt-1">{titleAr}</p>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={24} />
            </button>
            {isOpen && (
                <div className="border-t border-slate-100">
                    {children}
                </div>
            )}
        </div>
    );
};

const BilingualContent: React.FC<{showEn: boolean, showAr: boolean, children: React.ReactNode}> = ({showEn, showAr, children}) => {
    const kids = React.Children.toArray(children);
    return (
        <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-slate-100">
            {showEn && <div className="flex-1 p-6 bg-white">{kids[0]}</div>}
            {showAr && <div className="flex-1 p-6 bg-slate-50/50" dir="rtl">{kids[1]}</div>}
        </div>
    );
};

const ContentSide: React.FC<{children: React.ReactNode, rtl?: boolean}> = ({children, rtl}) => (
    <div className={rtl ? 'font-arabic' : 'font-sans'}>{children}</div>
);

const InfoCard: React.FC<{title: string, children: React.ReactNode, rtl?: boolean}> = ({title, children, rtl}) => (
    <div className={`p-4 rounded-lg border border-slate-200 bg-white shadow-sm mb-4 ${rtl ? 'text-right' : 'text-left'}`}>
        <h4 className={`font-bold text-slate-700 mb-2 ${rtl ? 'font-arabic' : ''}`}>{title}</h4>
        {children}
    </div>
);

const HighlightBox: React.FC<{children: React.ReactNode, rtl?: boolean}> = ({children, rtl}) => (
    <div className={`p-4 my-4 rounded-lg bg-yellow-50 border-yellow-200 text-yellow-900 text-sm leading-relaxed ${rtl ? 'border-r-4 text-right font-arabic' : 'border-l-4 text-left'}`}>
        {children}
    </div>
);

// --- Data Content ---

const SECTIONS = [
    {
        titleEn: "1. Composite Resin Materials",
        titleAr: "1. مواد الكومبوزيت الراتنجية",
        color: "blue",
        contentEn: (
            <>
                <h3 className="font-bold text-lg text-slate-800 mb-3">Composition & Properties</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Composition">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Resin matrix (Bis-GMA, UDMA): 20-25%</li>
                            <li>Filler particles (silica, quartz): 70-80%</li>
                            <li>Coupling agent (silane): 1-2%</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Properties">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Compressive strength: 300-400 MPa</li>
                            <li>Polymerization shrinkage: 1.5-3%</li>
                        </ul>
                    </InfoCard>
                </div>
                
                <HighlightBox>
                    <strong>Best for:</strong> Anterior restorations, aesthetic zones, direct veneers.<br/>
                    <strong>Avoid:</strong> Large posterior restorations, heavy bruxism, deep subgingival margins.
                </HighlightBox>

                <h3 className="font-bold text-lg text-slate-800 mb-3">Clinical Procedure</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 font-medium">
                    <li>Shade selection (natural light, 30s).</li>
                    <li>Isolation (Rubber dam/cotton).</li>
                    <li>Prep with beveled margins (1-2mm).</li>
                    <li>Etch 37% Phos. Acid (15-30s enamel).</li>
                    <li>Bond (2 coats, air thin).</li>
                    <li>Incremental placement (2mm max).</li>
                    <li>Cure 20-40s. Finish & Polish.</li>
                </ol>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-lg text-slate-800 mb-3 font-arabic">التركيب والخصائص</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="التركيب الكيميائي" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>مصفوفة راتنجية: 20-25%</li>
                            <li>حشوات دقيقة: 70-80%</li>
                            <li>عامل ربط سيلان: 1-2%</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="الخصائص الميكانيكية" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>قوة ضغطية: 300-400 ميجا باسكال</li>
                            <li>انكماش البلمرة: 1.5-3%</li>
                        </ul>
                    </InfoCard>
                </div>

                <HighlightBox rtl>
                    <strong>أفضل استخدام:</strong> ترميمات أمامية، مناطق جمالية.<br/>
                    <strong>تجنب:</strong> ترميمات خلفية كبيرة، صرير أسنان.
                </HighlightBox>

                <h3 className="font-bold text-lg text-slate-800 mb-3 font-arabic">خطوات الإجراء</h3>
                <ol className="list-decimal pr-5 space-y-2 text-sm text-slate-700 font-medium font-arabic">
                    <li>اختيار اللون (ضوء طبيعي).</li>
                    <li>العزل (سدادة مطاطية).</li>
                    <li>تحضير حواف مائلة (1-2 مم).</li>
                    <li>تخريش 37% (15-30 ثانية).</li>
                    <li>مادة رابطة (طبقتان).</li>
                    <li>وضع طبقي (2 مم حد أقصى).</li>
                    <li>تصلب ضوئي وتشطيب.</li>
                </ol>
            </>
        )
    },
    {
        titleEn: "2. Dental Amalgam",
        titleAr: "2. الملغم (الزئبق الفضي)",
        color: "slate",
        contentEn: (
            <>
                <h3 className="font-bold text-lg text-slate-800 mb-3">Composition & Properties</h3>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 font-bold text-slate-800">
                            <tr>
                                <th className="p-2 border-b">Component</th>
                                <th className="p-2 border-b">%</th>
                                <th className="p-2 border-b">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">Silver (Ag)</td><td className="p-2">40-60%</td><td className="p-2">Strength</td></tr>
                            <tr><td className="p-2">Tin (Sn)</td><td className="p-2">27-30%</td><td className="p-2">Workability</td></tr>
                            <tr><td className="p-2">Copper (Cu)</td><td className="p-2">13-30%</td><td className="p-2">Strength</td></tr>
                            <tr><td className="p-2">Mercury</td><td className="p-2">43-50%</td><td className="p-2">Binding</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="Indications">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Large Class I & II posterior.</li>
                            <li>Foundation for crowns.</li>
                            <li>High stress areas (Bruxism).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Safety Protocol">
                         <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Use pre-capsulated alloys.</li>
                            <li>High-volume evacuation.</li>
                            <li>Store scrap in sealed container.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-lg text-slate-800 mb-3 font-arabic">التركيب والخصائص</h3>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-right font-arabic">
                        <thead className="bg-slate-100 font-bold text-slate-800">
                            <tr>
                                <th className="p-2 border-b">المكون</th>
                                <th className="p-2 border-b">%</th>
                                <th className="p-2 border-b">الوظيفة</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">فضة</td><td className="p-2">40-60%</td><td className="p-2">القوة</td></tr>
                            <tr><td className="p-2">قصدير</td><td className="p-2">27-30%</td><td className="p-2">التشكيل</td></tr>
                            <tr><td className="p-2">نحاس</td><td className="p-2">13-30%</td><td className="p-2">القوة</td></tr>
                            <tr><td className="p-2">زئبق</td><td className="p-2">43-50%</td><td className="p-2">الربط</td></tr>
                        </tbody>
                    </table>
                </div>

                 <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="دواعي الاستخدام" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>ترميمات خلفية كبيرة (فئة 1 و 2).</li>
                            <li>تحت التيجان.</li>
                            <li>مناطق الضغط العالي.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="بروتوكول السلامة" rtl>
                         <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>كبسولات مغلقة مسبقاً.</li>
                            <li>شفط عالي الحجم.</li>
                            <li>تخزين البقايا في حاويات محكمة.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "3. Ceramic & Porcelain Materials",
        titleAr: "3. مواد السيراميك والبورسلين",
        color: "cyan",
        contentEn: (
            <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="Lithium Disilicate (e.max)">
                        <p className="text-sm text-slate-600 mb-2">High aesthetics + strength (360-400 MPa).</p>
                        <p className="text-xs text-slate-500">Best for: Veneers, Anterior Crowns.</p>
                    </InfoCard>
                    <InfoCard title="Zirconia (Y-TZP)">
                        <p className="text-sm text-slate-600 mb-2">Exceptional strength (900-1200 MPa). Biocompatible.</p>
                        <p className="text-xs text-slate-500">Best for: Posterior Crowns, Bridges, Bruxers.</p>
                    </InfoCard>
                </div>
                
                <h3 className="font-bold text-lg text-slate-800 mb-2">Cementation Protocol</h3>
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                         <li><strong>Clean:</strong> Ultrasonic or steam clean restoration.</li>
                         <li><strong>Pre-treat:</strong>
                            <ul className="list-disc pl-4 mt-1 text-xs">
                                <li>Glass Ceramic: Etch (HF) + Silane.</li>
                                <li>Zirconia: Sandblast + MDP Primer.</li>
                            </ul>
                         </li>
                         <li><strong>Cement:</strong> Resin cement (Dual cure for crowns).</li>
                         <li><strong>Cure:</strong> Light cure margins 40s.</li>
                    </ol>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="ديسيليكات الليثيوم (e.max)" rtl>
                        <p className="text-sm text-slate-600 mb-2 font-arabic">جمالية عالية + قوة (360-400 ميجا باسكال).</p>
                        <p className="text-xs text-slate-500 font-arabic">أفضل لـ: القشور، التيجان الأمامية.</p>
                    </InfoCard>
                    <InfoCard title="الزركونيا (Y-TZP)" rtl>
                        <p className="text-sm text-slate-600 mb-2 font-arabic">قوة استثنائية (900-1200 ميجا باسكال). توافق حيوي.</p>
                        <p className="text-xs text-slate-500 font-arabic">أفضل لـ: التيجان الخلفية، الجسور.</p>
                    </InfoCard>
                </div>

                <h3 className="font-bold text-lg text-slate-800 mb-2 font-arabic">بروتوكول التسريب</h3>
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                    <ol className="list-decimal pr-5 space-y-2 text-sm text-slate-700 font-arabic">
                         <li><strong>تنظيف:</strong> موجات صوتية أو بخار.</li>
                         <li><strong>المعالجة المسبقة:</strong>
                            <ul className="list-disc pr-4 mt-1 text-xs font-arabic">
                                <li>سيراميك زجاجي: حفر (HF) + سيلان.</li>
                                <li>زركونيا: ترميل + برايمر MDP.</li>
                            </ul>
                         </li>
                         <li><strong>السمنت:</strong> سمنت راتنجي (ثنائي التصلب).</li>
                         <li><strong>التصلب:</strong> ضوئي 40 ثانية.</li>
                    </ol>
                </div>
            </>
        )
    },
    {
        titleEn: "4. Root Canal Treatment Protocol",
        titleAr: "4. بروتوكول علاج العصب",
        color: "indigo",
        contentEn: (
            <>
                <InfoCard title="Diagnosis & Planning">
                    <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                        <li>2 PA radiographs (different angles).</li>
                        <li>Cold test/EPT & Percussion.</li>
                        <li>CBCT for complex anatomy.</li>
                    </ul>
                </InfoCard>

                <h3 className="font-bold text-lg text-slate-800 mb-2">Procedure Steps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 font-medium">
                    <li>Anesthesia & Rubber Dam (Critical).</li>
                    <li>Access (Remove all caries).</li>
                    <li>Working length (Apex locator + X-ray).</li>
                    <li>Preparation (NiTi Rotary).</li>
                    <li>Irrigation: NaOCl 2.5% + EDTA 17%.</li>
                    <li>Obturation (Gutta-percha + Sealer).</li>
                    <li><strong>Coronal Seal:</strong> Immediate restoration.</li>
                </ol>

                <HighlightBox>
                    <strong>Success Rate:</strong> 85-95% (Primary).<br/>
                    Critical factor: Coronal seal within 2 weeks.
                </HighlightBox>
            </>
        ),
        contentAr: (
            <>
                <InfoCard title="التشخيص والتخطيط" rtl>
                    <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                        <li>صورتين أشعة PA بزوايا مختلفة.</li>
                        <li>اختبار البرودة/القرع.</li>
                        <li>أشعة مقطعية CBCT للحالات المعقدة.</li>
                    </ul>
                </InfoCard>

                <h3 className="font-bold text-lg text-slate-800 mb-2 font-arabic">خطوات الإجراء</h3>
                <ol className="list-decimal pr-5 space-y-2 text-sm text-slate-700 font-medium font-arabic">
                    <li>التخدير والعزل المطاطي (ضروري).</li>
                    <li>فتح الدخول (إزالة التسوس).</li>
                    <li>الطول العامل (محدد الذروة + أشعة).</li>
                    <li>التحضير (مبارد دوارة).</li>
                    <li>الغسيل: هيبوكلوريت 2.5% + EDTA.</li>
                    <li>الحشو (جوتا بيرشا + سيلر).</li>
                    <li><strong>الختم التاجي:</strong> ترميم فوري.</li>
                </ol>

                <HighlightBox rtl>
                    <strong>معدل النجاح:</strong> 85-95% (أولي).<br/>
                    العامل الحاسم: جودة الختم التاجي خلال أسبوعين.
                </HighlightBox>
            </>
        )
    },
    {
        titleEn: "5. Crown Preparation",
        titleAr: "5. تحضير التيجان",
        color: "purple",
        contentEn: (
            <>
                <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">Occlusal</div>
                        <div className="font-bold text-purple-900">1.5 - 2.0 mm</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">Axial</div>
                        <div className="font-bold text-purple-900">1.0 - 1.5 mm</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">Margin</div>
                        <div className="font-bold text-purple-900">0.5 mm</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">Placement</div>
                        <div className="font-bold text-purple-900">Supragingival</div>
                    </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-bold text-slate-800 mb-2">Procedural Steps</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600">
                        <li>Guiding grooves.</li>
                        <li>Occlusal reduction first.</li>
                        <li>Axial reduction.</li>
                        <li>Margin refinement.</li>
                        <li>Retraction cord (00/000).</li>
                        <li>Impression (Scan/PVS).</li>
                    </ol>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid grid-cols-2 gap-3 mb-4 text-center font-arabic">
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">إطباقي</div>
                        <div className="font-bold text-purple-900">1.5 - 2.0 مم</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">محوري</div>
                        <div className="font-bold text-purple-900">1.0 - 1.5 مم</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">الحافة</div>
                        <div className="font-bold text-purple-900">0.5 مم</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <div className="text-xs uppercase text-purple-600 font-bold">الموضع</div>
                        <div className="font-bold text-purple-900">فوق اللثة</div>
                    </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-bold text-slate-800 mb-2 font-arabic">خطوات الإجراء</h4>
                    <ol className="list-decimal pr-5 space-y-1 text-sm text-slate-600 font-arabic">
                        <li>أخاديد توجيهية.</li>
                        <li>تخفيض إطباقي أولاً.</li>
                        <li>تخفيض محوري.</li>
                        <li>تنقيح الحافة.</li>
                        <li>خيط التبعيد (00/000).</li>
                        <li>الانطباع (مسح/PVS).</li>
                    </ol>
                </div>
            </>
        )
    },
    {
        titleEn: "6. Infection Control & Sterilization",
        titleAr: "6. التحكم في العدوى والتعقيم",
        color: "green",
        contentEn: (
            <>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="Pre-Cleaning">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Within 30 mins of use.</li>
                            <li>Ultrasonic: 6-10 mins.</li>
                            <li>Rinse & Dry thoroughly.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Packaging">
                         <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Internal/External indicators.</li>
                            <li>Label date & contents.</li>
                            <li>Shelf life: 6 months (wrapped).</li>
                        </ul>
                    </InfoCard>
                </div>

                <div className="overflow-x-auto border rounded-lg mb-4">
                     <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 font-bold text-slate-800">
                            <tr>
                                <th className="p-2 border-b">Method</th>
                                <th className="p-2 border-b">Temp</th>
                                <th className="p-2 border-b">Time</th>
                                <th className="p-2 border-b">Bar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">Autoclave (B)</td><td className="p-2">134°C</td><td className="p-2">3.5-18m</td><td className="p-2">2.1</td></tr>
                            <tr><td className="p-2">Dry Heat</td><td className="p-2">160°C</td><td className="p-2">120m</td><td className="p-2">-</td></tr>
                        </tbody>
                     </table>
                </div>

                <HighlightBox>
                    <strong>QC:</strong> Weekly Spore tests. Daily mechanical check (Pressure/Temp).
                </HighlightBox>
            </>
        ),
        contentAr: (
            <>
                 <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="التنظيف المبدئي" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>خلال 30 دقيقة.</li>
                            <li>موجات صوتية: 6-10 دقائق.</li>
                            <li>شطف وتجفيف جيد.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="التغليف" rtl>
                         <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>مؤشرات داخلية/خارجية.</li>
                            <li>كتابة التاريخ والمحتوى.</li>
                            <li>الصلاحية: 6 أشهر (مغلف).</li>
                        </ul>
                    </InfoCard>
                </div>

                <div className="overflow-x-auto border rounded-lg mb-4">
                     <table className="w-full text-sm text-right font-arabic">
                        <thead className="bg-slate-100 font-bold text-slate-800">
                            <tr>
                                <th className="p-2 border-b">الطريقة</th>
                                <th className="p-2 border-b">حرارة</th>
                                <th className="p-2 border-b">وقت</th>
                                <th className="p-2 border-b">ضغط</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">أوتوكلاف (B)</td><td className="p-2">134°</td><td className="p-2">3.5-18د</td><td className="p-2">2.1</td></tr>
                            <tr><td className="p-2">حرارة جافة</td><td className="p-2">160°</td><td className="p-2">120د</td><td className="p-2">-</td></tr>
                        </tbody>
                     </table>
                </div>

                <HighlightBox rtl>
                    <strong>الجودة:</strong> اختبار أبواغ أسبوعي. فحص ميكانيكي يومي.
                </HighlightBox>
            </>
        )
    },
    {
        titleEn: "7. Biocompatibility & Material Selection",
        titleAr: "7. اختيار المواد والتوافق الحيوي",
        color: "amber",
        contentEn: (
            <>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-amber-100 font-bold text-amber-900">
                            <tr>
                                <th className="p-2 border-b border-amber-100">Location</th>
                                <th className="p-2 border-b border-amber-100">Primary Choice</th>
                                <th className="p-2 border-b border-amber-100">Key Consideration</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr><td className="p-2 font-medium">Anterior</td><td className="p-2">Microfilled Composite</td><td className="p-2">Aesthetics</td></tr>
                            <tr><td className="p-2 font-medium">Posterior</td><td className="p-2">Packable Composite</td><td className="p-2">Stress</td></tr>
                            <tr><td className="p-2 font-medium">Full Ant. Crown</td><td className="p-2">Lithium Disilicate</td><td className="p-2">Translucency</td></tr>
                            <tr><td className="p-2 font-medium">Full Post. Crown</td><td className="p-2">Zirconia</td><td className="p-2">Wear</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="High Caries Risk">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Glass ionomer (Fluoride).</li>
                            <li>RMGI cement.</li>
                            <li>Sealants.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Metal Allergy">
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li>Titanium implants only.</li>
                            <li>All-ceramic restorations.</li>
                            <li>Pure Gold.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-right font-arabic">
                        <thead className="bg-amber-100 font-bold text-amber-900">
                            <tr>
                                <th className="p-2 border-b border-amber-100">الموقع</th>
                                <th className="p-2 border-b border-amber-100">الاختيار الأول</th>
                                <th className="p-2 border-b border-amber-100">الاعتبار الرئيسي</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr><td className="p-2 font-medium">أمامي</td><td className="p-2">كومبوزيت ميكروفي</td><td className="p-2">الجمالية</td></tr>
                            <tr><td className="p-2 font-medium">خلفي</td><td className="p-2">كومبوزيت قابل للحشو</td><td className="p-2">تحمل الضغط</td></tr>
                            <tr><td className="p-2 font-medium">تاج أمامي</td><td className="p-2">ديسيليكات الليثيوم</td><td className="p-2">الشفافية</td></tr>
                            <tr><td className="p-2 font-medium">تاج خلفي</td><td className="p-2">زركونيا</td><td className="p-2">مقاومة البلى</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="مخاطر تسوس عالية" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>زجاج أيوني (فلورايد).</li>
                            <li>سمنت RMGI.</li>
                            <li>سد الشقوق.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="حساسية المعادن" rtl>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>زرعات تيتانيوم فقط.</li>
                            <li>سيراميك كامل.</li>
                            <li>ذهب نقي.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "8. Common Clinical Errors & Critical Guidelines",
        titleAr: "8. الأخطاء السريرية الشائعة والإرشادات الحرجة",
        color: "red",
        contentEn: (
            <>
                <div className="space-y-6">
                    {/* Diagnostic */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-red-100 p-1 rounded text-red-600">🔍</span> Diagnostic Protocols
                        </h3>
                        <InfoCard title="Requirements & Red Flags">
                            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                                <li><strong>Bitewings:</strong> Every 12-24 mos for caries.</li>
                                <li><strong>Periapical:</strong> 2 angles for all Endodontic/Restorative.</li>
                                <li><strong>Perio Probing:</strong> 6 sites per tooth mandatory.</li>
                                <li><strong>Red Flag:</strong> Suspicious lesions → Oral Pathologist immediately.</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Composite */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-blue-100 p-1 rounded text-blue-600">🦷</span> Composite Critical Steps
                        </h3>
                        <HighlightBox>
                            <strong>Failure Alert:</strong> 20-30% fail in 5 years due to technique.
                            <br/><strong>Key:</strong> Max 2mm thickness (Never bulk fill).
                        </HighlightBox>
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700">
                            <li><strong>Etching:</strong> Enamel 15-30s, Dentin 10-15s MAX.</li>
                            <li><strong>Bonding:</strong> 2 coats, air-thin 5s, cure 10s.</li>
                            <li><strong>Curing:</strong> &gt;500 mW/cm², 20-40s/layer.</li>
                            <li><strong>Error:</strong> Over-etching dentin causes sensitivity.</li>
                        </ol>
                    </div>

                    {/* Endo */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-indigo-100 p-1 rounded text-indigo-600">⚕️</span> Root Canal Protocol
                        </h3>
                        <InfoCard title="Success Factors">
                            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                                <li><strong>WL:</strong> Apex locator reading minus 0.5mm.</li>
                                <li><strong>Irrigation:</strong> NaOCl 2.5% constant + EDTA 17%.</li>
                                <li><strong>Critical:</strong> Coronal seal within 2 weeks is more important than obturation quality.</li>
                                <li><strong>Stop:</strong> If ledge forms, do not force. Pre-curve files.</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Crown Prep */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-purple-100 p-1 rounded text-purple-600">👑</span> Crown Preparation
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-2 text-center text-sm">
                            <div className="bg-slate-50 p-2 rounded border">Occlusal: 1.5-2.0mm</div>
                            <div className="bg-slate-50 p-2 rounded border">Margin: 0.8-1.2mm</div>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                            <li><strong>Error:</strong> Insufficient reduction is #1 failure cause.</li>
                            <li><strong>Must:</strong> Use putty index to verify reduction depth.</li>
                            <li><strong>Taper:</strong> 10-12° max total taper.</li>
                        </ul>
                    </div>

                    {/* Sterilization */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-green-100 p-1 rounded text-green-600">🦠</span> Sterilization Non-Negotiables
                        </h3>
                        <div className="bg-red-50 p-3 rounded border border-red-100 text-sm text-red-800">
                            <strong>Weekly Spore Test</strong> is MANDATORY. Failed sterilization = Malpractice liability.
                        </div>
                         <ul className="list-disc pl-4 mt-2 space-y-1 text-sm text-slate-600">
                            <li>Clean instruments within 30 mins.</li>
                            <li>Ultrasonic 10 mins minimum.</li>
                            <li>Autoclave 134°C for 3.5-18 mins (Class B).</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                            <span className="bg-amber-100 p-1 rounded text-amber-600">📝</span> Legal & Safety
                        </h3>
                        <InfoCard title="Documentation & Referral">
                             <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
                                <li><strong>SOAP Format:</strong> Subjective, Objective, Assessment, Plan.</li>
                                <li><strong>Photos:</strong> Pre-op, Prep, Post-op for EVERY case.</li>
                                <li><strong>Refer Immediately:</strong> Complex Endo, Impacted Wisdom (close to nerve), Perio Class III/IV.</li>
                            </ul>
                        </InfoCard>
                    </div>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="space-y-6">
                     {/* Diagnostic */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-red-100 p-1 rounded text-red-600">🔍</span> بروتوكولات التشخيص
                        </h3>
                        <InfoCard title="المتطلبات وعلامات الخطر" rtl>
                            <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                                <li><strong>أشعة Bitewing:</strong> كل 12-24 شهر للتسوس.</li>
                                <li><strong>أشعة ذروية (PA):</strong> زاويتان لكل حالات العصب والحشو.</li>
                                <li><strong>فحص اللثة:</strong> تسجيل 6 نقاط لكل سن إلزامي.</li>
                                <li><strong>خطر:</strong> آفات مشبوهة ← إحالة لأخصائي أمراض فم فوراً.</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Composite */}
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-blue-100 p-1 rounded text-blue-600">🦷</span> خطوات الكومبوزيت الحرجة
                        </h3>
                        <HighlightBox rtl>
                            <strong>تنبيه الفشل:</strong> 20-30% تفشل في 5 سنوات بسبب التكتيك.<br/>
                            <strong>المفتاح:</strong> سمك الطبقة 2 مم كحد أقصى (ممنوع الحشو الكتلي).
                        </HighlightBox>
                        <ol className="list-decimal pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                            <li><strong>التخريش:</strong> مينا 15-30ث، عاج 10-15ث كحد أقصى.</li>
                            <li><strong>الربط (Bonding):</strong> طبقتان، فرد بالهواء 5ث، تصليب 10ث.</li>
                            <li><strong>التصليب الضوئي:</strong> &gt;500 mW/cm²، 20-40ث لكل طبقة.</li>
                            <li><strong>خطأ شائع:</strong> التخريش الزائد للعاج يسبب حساسية.</li>
                        </ol>
                    </div>

                    {/* Endo */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-indigo-100 p-1 rounded text-indigo-600">⚕️</span> بروتوكول علاج العصب
                        </h3>
                        <InfoCard title="عوامل النجاح" rtl>
                            <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                                <li><strong>الطول العامل:</strong> قراءة محدد الذروة ناقص 0.5 مم.</li>
                                <li><strong>الغسيل:</strong> هيبوكلوريت 2.5% باستمرار + EDTA 17%.</li>
                                <li><strong>حاسم:</strong> الختم التاجي الجيد خلال أسبوعين أهم من جودة حشو العصب.</li>
                                <li><strong>توقف:</strong> إذا تشكلت عتبة (Ledge)، لا تضغط. احني المبرد مسبقاً.</li>
                            </ul>
                        </InfoCard>
                    </div>

                    {/* Crown Prep */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-purple-100 p-1 rounded text-purple-600">👑</span> تحضير التيجان
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-2 text-center text-sm font-arabic">
                            <div className="bg-slate-50 p-2 rounded border">إطباقي: 1.5-2.0 مم</div>
                            <div className="bg-slate-50 p-2 rounded border">الحافة: 0.8-1.2 مم</div>
                        </div>
                        <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                            <li><strong>خطأ:</strong> التحضير غير الكافي هو السبب الأول للفشل.</li>
                            <li><strong>يجب:</strong> استخدام دليل سيليكون (Putty Index) للتحقق من العمق.</li>
                            <li><strong>الميل (Taper):</strong> 10-12 درجة كحد أقصى إجمالي.</li>
                        </ul>
                    </div>

                    {/* Sterilization */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-green-100 p-1 rounded text-green-600">🦠</span> التعقيم (لا جدال فيه)
                        </h3>
                        <div className="bg-red-50 p-3 rounded border border-red-100 text-sm text-red-800 font-arabic">
                            <strong>اختبار الأبواغ الأسبوعي</strong> إلزامي. فشل التعقيم = مسؤولية قانونية جسيمة.
                        </div>
                         <ul className="list-disc pr-4 mt-2 space-y-1 text-sm text-slate-600 font-arabic">
                            <li>تنظيف الأدوات خلال 30 دقيقة من الاستخدام.</li>
                            <li>موجات صوتية (Ultrasonic) لمدة 10 دقائق على الأقل.</li>
                            <li>أوتوكلاف 134 درجة لمدة 3.5-18 دقيقة (Class B).</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                         <h3 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2 font-arabic">
                            <span className="bg-amber-100 p-1 rounded text-amber-600">📝</span> قانوني وسلامة
                        </h3>
                        <InfoCard title="التوثيق والإحالة" rtl>
                             <ul className="list-disc pr-4 space-y-1 text-sm text-slate-600 font-arabic">
                                <li><strong>صيغة SOAP:</strong> (شخصي، موضوعي، تقييم، خطة).</li>
                                <li><strong>الصور:</strong> قبل، أثناء التحضير، وبعد لكل حالة.</li>
                                <li><strong>إحالة فورية:</strong> عصب معقد، عقل مدفون (قريب للعصب)، لثة متقدمة.</li>
                            </ul>
                        </InfoCard>
                    </div>
                </div>
            </>
        )
    }
];

const ClinicalGuidelines: React.FC = () => {
    const [lang, setLang] = useState<'en' | 'ar' | 'both'>('en');

    const shouldShowEn = lang === 'en' || lang === 'both';
    const shouldShowAr = lang === 'ar' || lang === 'both';

    return (
        <div className="space-y-6 animate-fade-in font-sans pb-12">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center shadow-lg">
                <h1 className="text-3xl font-bold mb-2">Dental Materials & Procedures</h1>
                <p className="text-slate-300 text-lg font-arabic">دليل مواد وإجراءات طب الأسنان الشامل</p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['en', 'ar', 'both'].map((l) => (
                        <button 
                            key={l}
                            onClick={() => setLang(l as any)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border border-white/20
                                ${lang === l ? 'bg-blue-600 text-white shadow-md border-transparent' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                        >
                            {l === 'en' ? 'English' : l === 'ar' ? 'العربية' : 'Both / كلاهما'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                {SECTIONS.map((section, idx) => (
                    <DetailSection 
                        key={idx}
                        titleEn={section.titleEn} 
                        titleAr={section.titleAr}
                        color={section.color}
                    >
                        <BilingualContent showEn={shouldShowEn} showAr={shouldShowAr}>
                            <ContentSide>{section.contentEn}</ContentSide>
                            <ContentSide rtl>{section.contentAr}</ContentSide>
                        </BilingualContent>
                    </DetailSection>
                ))}
            </div>

            <div className="mt-12 p-6 bg-slate-800 text-slate-400 text-center rounded-xl text-sm">
                <p><strong>Last Updated:</strong> December 2025 | <strong>Clinical Guidelines for Dental Practice</strong></p>
                <p className="font-arabic mt-1">يرجى اتباع تعليمات المصنع والمعايير الطبية الحالية دائماً</p>
            </div>
        </div>
    );
};

export default ClinicalGuidelines;