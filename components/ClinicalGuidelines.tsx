import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

// --- Components (Helpers) ---

const DetailSection: React.FC<{titleEn: string, titleAr: string, color: string, children: React.ReactNode, isOpenDefault?: boolean}> = ({titleEn, titleAr, color, children, isOpenDefault = false}) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    
    const colors: Record<string, string> = {
        blue: 'border-blue-200 bg-blue-50 text-blue-900',
        slate: 'border-slate-200 bg-slate-50 text-slate-900',
        cyan: 'border-cyan-200 bg-cyan-50 text-cyan-900',
        indigo: 'border-indigo-200 bg-indigo-50 text-indigo-900',
        purple: 'border-purple-200 bg-purple-50 text-purple-900',
        green: 'border-green-200 bg-green-50 text-green-900',
        amber: 'border-amber-200 bg-amber-50 text-amber-900',
        red: 'border-red-200 bg-red-50 text-red-900',
        teal: 'border-teal-200 bg-teal-50 text-teal-900',
    };

    return (
        <div className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-blue-500/20 shadow-md' : ''}`}>
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
                <div className="border-t border-slate-100 animate-fade-in">
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
    <div className={`space-y-4 ${rtl ? 'font-arabic' : 'font-sans'}`}>{children}</div>
);

const InfoCard: React.FC<{title: string, children: React.ReactNode, rtl?: boolean}> = ({title, children, rtl}) => (
    <div className={`p-4 rounded-lg border border-slate-200 bg-white shadow-sm mb-4 ${rtl ? 'text-right' : 'text-left'}`}>
        <h4 className={`font-bold text-slate-700 mb-2 ${rtl ? 'font-arabic' : ''}`}>{title}</h4>
        <div className="text-sm text-slate-600">{children}</div>
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
        titleEn: "1. Diagnostic Protocols",
        titleAr: "1. بروتوكولات التشخيص",
        color: "teal",
        contentEn: (
            <>
                <HighlightBox>
                    <strong>Statistic:</strong> 1 in 3 patients experience diagnostic errors.
                </HighlightBox>
                <h3 className="font-bold text-lg text-slate-800">Non-Negotiable Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li><strong>Radiographs:</strong> Bitewings every 12-24 months.</li>
                    <li><strong>Periapical:</strong> 2 angles for ALL endo/restorative cases.</li>
                    <li><strong>Vision:</strong> Minimum 2.5x-4.5x loupes magnification.</li>
                    <li><strong>Lighting:</strong> ≥15,000 lux LED.</li>
                    <li><strong>Perio:</strong> 6-point probing per tooth.</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <HighlightBox rtl>
                    <strong>إحصائية:</strong> 1 من كل 3 مرضى يتعرض لأخطاء تشخيصية.
                </HighlightBox>
                <h3 className="font-bold text-lg text-slate-800 font-arabic">متطلبات غير قابلة للتفاوض</h3>
                <ul className="list-disc pr-5 space-y-2 text-sm text-slate-700 font-arabic">
                    <li><strong>الأشعة:</strong> أشعة بينية كل 12-24 شهر.</li>
                    <li><strong>ذروية:</strong> زاويتين لكل حالات العصب والتركيبات.</li>
                    <li><strong>الرؤية:</strong> تكبير (Loupes) لا يقل عن 2.5x-4.5x.</li>
                    <li><strong>الإضاءة:</strong> ≥15,000 لوكس.</li>
                    <li><strong>اللثة:</strong> فحص 6 نقاط لكل سن.</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "2. Composite Resins & Bonding",
        titleAr: "2. الكومبوزيت واللصق",
        color: "blue",
        contentEn: (
            <>
                <HighlightBox>
                    <strong>Failure Rate:</strong> 20-30% fail within 5 years due to technique errors.
                </HighlightBox>
                <h3 className="font-bold text-lg text-slate-800">Critical Protocol</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li><strong>Shade:</strong> Select under natural light within 30s.</li>
                    <li><strong>Etch:</strong> Enamel 15-30s, Dentin 10-15s MAX.</li>
                    <li><strong>Bond:</strong> 2 coats, wait 20s, air-thin 5s.</li>
                    <li><strong>Place:</strong> ≤2mm increments.</li>
                    <li><strong>Cure:</strong> {'>'}500 mW/cm², 20-40s/layer, tip 1-2mm away.</li>
                </ul>
                <div className="mt-4">
                    <InfoCard title="Material Selection">
                         <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Microhybrid:</strong> Universal posterior.</li>
                            <li><strong>Nanofilled:</strong> High aesthetic/gloss.</li>
                            <li><strong>Bulk-Fill:</strong> Deep cavities (max 4mm).</li>
                         </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <HighlightBox rtl>
                    <strong>معدل الفشل:</strong> 20-30% تفشل خلال 5 سنوات بسبب أخطاء التقنية.
                </HighlightBox>
                <h3 className="font-bold text-lg text-slate-800 font-arabic">البروتوكول الحرج</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li><strong>اللون:</strong> ضوء طبيعي، خلال 30 ثانية.</li>
                    <li><strong>الحفر:</strong> مينا 15-30ث، عاج 10-15ث كحد أقصى.</li>
                    <li><strong>الربط:</strong> طبقتين، انتظر 20ث، هواء 5ث.</li>
                    <li><strong>الوضع:</strong> طبقات ≤2 مم.</li>
                    <li><strong>البلمرة:</strong> {'>'}500 mW/cm²، 20-40ث، مسافة 1-2 مم.</li>
                </ul>
                <div className="mt-4">
                    <InfoCard title="اختيار المادة" rtl>
                         <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>مايكروهايبرد:</strong> خلفي عام.</li>
                            <li><strong>نانوفيلد:</strong> تجميلي عالي اللمعان.</li>
                            <li><strong>حشو مجمع:</strong> تجاويف عميقة (4 مم).</li>
                         </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "3. Endodontics (RCT)",
        titleAr: "3. علاج الجذور",
        color: "indigo",
        contentEn: (
            <>
                <HighlightBox>
                    <strong>Critical Success Factor:</strong> Coronal seal within 2 weeks.
                    Error Rate: 32.8% procedural errors.
                </HighlightBox>
                <h3 className="font-bold text-slate-800">Protocol</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700 mb-4">
                    <li><strong>Isolation:</strong> Rubber dam MANDATORY.</li>
                    <li><strong>WL:</strong> Apex locator + X-ray.</li>
                    <li><strong>Irrigation:</strong> 2.5% NaOCl + 17% EDTA.</li>
                    <li><strong>Success:</strong> Primary 85-95%, Re-tx 75-85%.</li>
                </ol>
            </>
        ),
        contentAr: (
            <>
                <HighlightBox rtl>
                    <strong>عامل النجاح الحرج:</strong> الإغلاق التاجي خلال أسبوعين.
                    معدل الخطأ: 32.8% أخطاء إجرائية.
                </HighlightBox>
                <h3 className="font-bold text-slate-800 font-arabic">البروتوكول</h3>
                <ol className="list-decimal pr-5 space-y-1 text-sm text-slate-700 mb-4 font-arabic">
                    <li><strong>العزل:</strong> سدادة مطاطية إجبارية.</li>
                    <li><strong>الطول:</strong> محدد ذروة + أشعة.</li>
                    <li><strong>الغسيل:</strong> كلور 2.5% + EDTA.</li>
                    <li><strong>النجاح:</strong> أولي 85-95%، إعادة 75-85%.</li>
                </ol>
            </>
        )
    },
    {
        titleEn: "4. Crown Preparation",
        titleAr: "4. تحضير التيجان",
        color: "cyan",
        contentEn: (
            <>
                <div className="bg-cyan-50 p-4 rounded-lg text-cyan-900 border border-cyan-100 mb-4">
                    <p><strong>Failure Rate:</strong> 30-50% due to prep errors.</p>
                </div>
                <h3 className="font-bold text-slate-800">Critical Measurements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mt-2">
                    <div className="border p-2 rounded"><strong>Occlusal (All-Ceramic):</strong> 2.0mm</div>
                    <div className="border p-2 rounded"><strong>Occlusal (PFM):</strong> 1.5mm</div>
                    <div className="border p-2 rounded"><strong>Axial Reduction:</strong> 1.0-1.5mm</div>
                    <div className="border p-2 rounded"><strong>Margin Depth:</strong> 0.8-1.2mm</div>
                    <div className="border p-2 rounded"><strong>Taper:</strong> 10-12° Total</div>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="bg-cyan-50 p-4 rounded-lg text-cyan-900 border border-cyan-100 mb-4 font-arabic">
                    <p><strong>معدل الفشل:</strong> 30-50% بسبب أخطاء التحضير.</p>
                </div>
                <h3 className="font-bold text-slate-800 font-arabic">المقاسات الحرجة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mt-2 font-arabic">
                    <div className="border p-2 rounded"><strong>إطباقي (سيراميك):</strong> 2.0 مم</div>
                    <div className="border p-2 rounded"><strong>إطباقي (معدن):</strong> 1.5 مم</div>
                    <div className="border p-2 rounded"><strong>تخفيض محوري:</strong> 1.0-1.5 مم</div>
                    <div className="border p-2 rounded"><strong>عمق الحافة:</strong> 0.8-1.2 مم</div>
                    <div className="border p-2 rounded"><strong>الميل:</strong> 10-12° كلي</div>
                </div>
            </>
        )
    },
    {
        titleEn: "5. Safety Protocols",
        titleAr: "5. بروتوكولات الأمان",
        color: "red",
        contentEn: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Patient Safety">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>History:</strong> Update every visit.</li>
                            <li><strong>Anticoagulants:</strong> Verify INR/Schedule.</li>
                            <li><strong>Aspiration:</strong> Rubber dam mandatory.</li>
                            <li><strong>Cardiac:</strong> Max Epi 0.04mg (Digoxin/Cardiac).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Dentist Safety">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Ergonomics:</strong> 2-min break every 30 mins.</li>
                            <li><strong>Mercury:</strong> Urine {'<'}5 μg/L annually.</li>
                            <li><strong>PPE:</strong> N95 for aerosols.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="سلامة المريض" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>التاريخ:</strong> تحديث كل زيارة.</li>
                            <li><strong>السيولة:</strong> تحقق من INR.</li>
                            <li><strong>الاستنشاق:</strong> السدادة المطاطية إجبارية.</li>
                            <li><strong>القلب:</strong> أقصى إبينفرين 0.04 مجم.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="سلامة الطبيب" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>الراحة:</strong> دقيقتين كل 30 دقيقة.</li>
                            <li><strong>الزئبق:</strong> فحص بول سنوي ({'<'}5).</li>
                            <li><strong>الحماية:</strong> N95 للرواسب.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "6. Sterilization Protocol",
        titleAr: "6. بروتوكول التعقيم",
        color: "amber",
        contentEn: (
            <>
                <h3 className="font-bold text-slate-800">Processing Times</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 mb-4">
                    <li><strong>Pre-clean:</strong> Within 30 mins.</li>
                    <li><strong>Ultrasonic:</strong> 10 mins minimum.</li>
                    <li><strong>Autoclave (Class B):</strong> 134°C for 3.5-18 mins.</li>
                </ul>
                <h3 className="font-bold text-slate-800">Quality Assurance</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li><strong>Daily:</strong> Chemical indicator check.</li>
                    <li><strong>Weekly:</strong> Spore test (Biological) - MANDATORY.</li>
                    <li><strong>Shelf Life:</strong> Wrapped 6 months, Unwrapped 30 days.</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-slate-800 font-arabic">أوقات المعالجة</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 mb-4 font-arabic">
                    <li><strong>تنظيف أولي:</strong> خلال 30 دقيقة.</li>
                    <li><strong>موجات صوتية:</strong> 10 دقائق على الأقل.</li>
                    <li><strong>أوتوكلاف (B):</strong> 134 درجة (3.5-18 دقيقة).</li>
                </ul>
                <h3 className="font-bold text-slate-800 font-arabic">ضمان الجودة</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li><strong>يومياً:</strong> مؤشر كيميائي.</li>
                    <li><strong>أسبوعياً:</strong> اختبار أبواغ (بيولوجي) - إلزامي.</li>
                    <li><strong>الصلاحية:</strong> مغلف 6 أشهر، غير مغلف 30 يوم.</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "7. When to Refer",
        titleAr: "7. متى تحول الحالة",
        color: "purple",
        contentEn: (
            <>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">Endodontics</strong>
                        <ul className="list-disc pl-4 text-slate-700">
                            <li>Complex anatomy/Curved</li>
                            <li>Failed RCT</li>
                            <li>Perforation {'>'}1mm</li>
                            <li>Broken instrument</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">Oral Surgery</strong>
                        <ul className="list-disc pl-4 text-slate-700">
                            <li>IAN proximity {'<'}2mm</li>
                            <li>Sinus involvement</li>
                            <li>Dilacerated roots</li>
                            <li>Limited opening</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">Periodontics</strong>
                        <ul className="list-disc pl-4 text-slate-700">
                            <li>Miller Class III/IV</li>
                            <li>Aggressive disease</li>
                        </ul>
                    </div>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid md:grid-cols-3 gap-3 text-sm font-arabic">
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">علاج جذور</strong>
                        <ul className="list-disc pr-4 text-slate-700">
                            <li>تشريح معقد/منحني</li>
                            <li>فشل سابق</li>
                            <li>ثقب {'>'}1 مم</li>
                            <li>أداة مكسورة</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">جراحة</strong>
                        <ul className="list-disc pr-4 text-slate-700">
                            <li>قرب العصب {'<'}2 مم</li>
                            <li>تورط الجيب</li>
                            <li>جذور ملتوية</li>
                            <li>فتحة فم محدودة</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded border border-purple-100">
                        <strong className="block text-purple-900 mb-2">لثة</strong>
                        <ul className="list-disc pr-4 text-slate-700">
                            <li>تراجع درجة 3/4</li>
                            <li>مرض عدواني</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    },
    {
        titleEn: "8. Legal & Documentation",
        titleAr: "8. القانون والتوثيق",
        color: "green",
        contentEn: (
            <>
                <h3 className="font-bold text-slate-800">Retention & Rules</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 mb-4">
                    <li><strong>Charts/X-rays:</strong> 10 years.</li>
                    <li><strong>Spore Tests:</strong> 3 years.</li>
                    <li><strong>NEVER:</strong> Alter existing records (Addendum only).</li>
                    <li><strong>NEVER:</strong> Chart from memory at end of day.</li>
                </ul>
                <h3 className="font-bold text-slate-800">Consent Elements</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>Use visual aids (models/x-ray).</li>
                    <li>Document questions & answers.</li>
                    <li>Cooling-off period for elective work.</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-slate-800 font-arabic">الحفظ والقواعد</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 mb-4 font-arabic">
                    <li><strong>الملفات/الأشعة:</strong> 10 سنوات.</li>
                    <li><strong>اختبارات التعقيم:</strong> 3 سنوات.</li>
                    <li><strong>أبداً:</strong> لا تعدل السجلات (أضف ملحقاً فقط).</li>
                    <li><strong>أبداً:</strong> لا تسجل من الذاكرة آخر اليوم.</li>
                </ul>
                <h3 className="font-bold text-slate-800 font-arabic">عناصر الموافقة</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li>استخدم وسائل بصرية.</li>
                    <li>وثق الأسئلة والأجوبة.</li>
                    <li>فترة تفكير للحالات الاختيارية.</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "9. Emergency Protocols",
        titleAr: "9. بروتوكولات الطوارئ",
        color: "slate",
        contentEn: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Syncope (Fainting)">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Signs:</strong> Pale, sweaty, slow pulse.</li>
                            <li><strong>Action:</strong> Supine, legs up, ammonia.</li>
                            <li><strong>Prevent:</strong> No fasting appointments.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Anaphylaxis">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Action:</strong> Epinephrine 0.3mg IM (EpiPen).</li>
                            <li><strong>Support:</strong> Oxygen 6L/min, Call 911.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="الإغماء" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>علامات:</strong> شحوب، عرق، نبض بطيء.</li>
                            <li><strong>إجراء:</strong> استلقاء، رفع رجلين، أمونيا.</li>
                            <li><strong>وقاية:</strong> لا مواعيد مع صيام.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="صدمة الحساسية" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>إجراء:</strong> إبينيفرين 0.3 مجم عضل.</li>
                            <li><strong>دعم:</strong> أكسجين 6 لتر، طوارئ.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    }
];

const ClinicalGuidelines: React.FC = () => {
    const [lang, setLang] = useState<'en' | 'ar' | 'both'>('en');
    const [searchTerm, setSearchTerm] = useState('');

    const shouldShowEn = lang === 'en' || lang === 'both';
    const shouldShowAr = lang === 'ar' || lang === 'both';

    // Filter logic based on titles
    const filteredSections = SECTIONS.filter(section => 
        section.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        section.titleAr.includes(searchTerm)
    );

    return (
        <div className="space-y-6 animate-fade-in font-sans pb-12">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
                 {/* Background pattern */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                 
                 <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Dental Materials & Procedures</h1>
                    <p className="text-slate-300 text-lg font-arabic">دليل مواد وإجراءات طب الأسنان الشامل</p>
                    <p className="text-slate-400 text-sm mt-2">v1.0 | Updated: 2025-12-15</p>
                    
                    <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="flex bg-slate-700/50 p-1 rounded-full backdrop-blur-sm">
                             {['en', 'ar', 'both'].map((l) => (
                                <button 
                                    key={l}
                                    onClick={() => setLang(l as any)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all
                                        ${lang === l ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                                >
                                    {l === 'en' ? 'English' : l === 'ar' ? 'العربية' : 'Both / كلاهما'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar - Sticky */}
            <div className="sticky top-20 z-10 md:top-4">
                <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-slate-200/50 max-w-2xl mx-auto flex items-center gap-3 px-4">
                    <Search className="text-slate-400" size={20} />
                    <input 
                        type="text"
                        placeholder="Search guidelines (e.g., 'Root Canal', 'Composite')..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 h-10"
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="text-xs font-bold text-slate-400 hover:text-slate-600">
                            CLEAR
                        </button>
                    )}
                </div>
            </div>

            <div className="space-y-6">
                {filteredSections.length > 0 ? (
                    filteredSections.map((section, idx) => (
                        <DetailSection 
                            key={idx}
                            titleEn={section.titleEn} 
                            titleAr={section.titleAr}
                            color={section.color}
                            isOpenDefault={searchTerm.length > 0} // Auto-expand when searching
                        >
                            <BilingualContent showEn={shouldShowEn} showAr={shouldShowAr}>
                                <ContentSide>{section.contentEn}</ContentSide>
                                <ContentSide rtl>{section.contentAr}</ContentSide>
                            </BilingualContent>
                        </DetailSection>
                    ))
                ) : (
                    <div className="text-center py-12 text-slate-400">
                        <p>No guidelines found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>

            <div className="mt-12 p-6 bg-slate-800 text-slate-400 text-center rounded-xl text-sm border border-slate-700/50">
                <p><strong>Last Updated:</strong> December 2025 | <strong>Clinical Guidelines for Dental Practice</strong></p>
                <p className="font-arabic mt-1">يرجى اتباع تعليمات المصنع والمعايير الطبية الحالية دائماً</p>
            </div>
        </div>
    );
};

export default ClinicalGuidelines;