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
        titleEn: "1. Composite Resin Materials",
        titleAr: "1. مواد الكومبوزيت الراتنجية",
        color: "blue",
        contentEn: (
            <>
                <HighlightBox>
                    <strong>Key Principle:</strong> Match composite type to specific clinical situation - using wrong type leads to 50% higher failure rate.
                </HighlightBox>

                <h3 className="font-bold text-lg text-slate-800">Composite Types & Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Microhybrid Composites">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Best for:</strong> Universal posterior restorations.</li>
                            <li><strong>Advantage:</strong> Excellent polish (85% retention at 3yrs), good strength.</li>
                            <li><strong>Shades:</strong> A2, A3, A3.5 cover 80% of cases.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Nanofilled Composites">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Best for:</strong> High aesthetic zones, veneers.</li>
                            <li><strong>Advantage:</strong> Superior polish, high gloss.</li>
                            <li><strong>Translucency:</strong> 15-18% (excellent for incisal).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Bulk-Fill Composites">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Best for:</strong> Deep Class I, II (Time critical).</li>
                            <li><strong>Limit:</strong> Up to 4mm single layer.</li>
                            <li><strong>Caution:</strong> Check light output {'>'}1000 mW/cm².</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Flowable Composites">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Best for:</strong> Liners, small cavities, Class V.</li>
                            <li><strong>Use:</strong> 0.5mm liner first, then packable.</li>
                            <li><strong>Avoid:</strong> Stress-bearing areas (low strength).</li>
                        </ul>
                    </InfoCard>
                </div>

                <h3 className="font-bold text-lg text-slate-800 mt-4">Layering Strategies</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li><strong>Deep Posterior ({'>'}5mm):</strong> 0.5mm flowable liner → 2mm dentin shade → 2mm enamel shade → 0.5mm final enamel.</li>
                    <li><strong>Anterior Aesthetic:</strong> Dentin shade (body) → Enamel shade (overlay) → Translucent (incisal).</li>
                    <li><strong>Class V:</strong> Flowable only (adapts to concave). No etching if on cementum (use self-etch).</li>
                </ul>

                <h3 className="font-bold text-lg text-slate-800 mt-4">Practical Chairside Techniques</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-sm mb-2">Rubber Dam Mastery (2-Min Technique)</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600">
                        <li>Pre-punch holes (#19-32 typically).</li>
                        <li>Clamp: Wingless (Posterior), Winged (Anterior).</li>
                        <li>Technique: Clamp on tooth first → Stretch dam over → Frame.</li>
                        <li><strong>Invert dam</strong> into sulcus with air + plastic instrument.</li>
                    </ol>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-2">
                    <h4 className="font-bold text-sm mb-2">Local Anesthesia Quick Wins</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                        <li><strong>Buffering:</strong> Add sodium bicarb 8.4% (1:10) for 2x faster onset.</li>
                        <li><strong>Warm:</strong> To body temp reduces pain 30%.</li>
                        <li><strong>Articaine:</strong> 4x more effective in posterior maxilla infiltration.</li>
                    </ul>
                </div>
            </>
        ),
        contentAr: (
            <>
                <HighlightBox rtl>
                    <strong>المبدأ الأساسي:</strong> مطابقة نوع الكومبوزيت للحالة السريرية - النوع الخطأ يزيد الفشل بنسبة 50%.
                </HighlightBox>

                <h3 className="font-bold text-lg text-slate-800 font-arabic">أنواع الكومبوزيت والتطبيقات</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="المايكروهايبر د (Microhybrid)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>أفضل لـ:</strong> الترميمات الخلفية العامة.</li>
                            <li><strong>المميزات:</strong> تلميع وقوة ممتازة.</li>
                            <li><strong>الظلال:</strong> A2, A3, A3.5 تغطي 80%.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="النانوفيل د (Nanofilled)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>أفضل لـ:</strong> المناطق الجمالية، القشور.</li>
                            <li><strong>المميزات:</strong> لمعان فائق وشفافية عالية.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="الحشو المجمع (Bulk-Fill)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>أفضل لـ:</strong> الفئة I و II العميقة (عند الاستعجال).</li>
                            <li><strong>الحد:</strong> طبقة واحدة حتى 4 مم.</li>
                            <li><strong>تنبيه:</strong> تأكد من قوة الضوء {'>'}1000.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="السائل (Flowable)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>أفضل لـ:</strong> البطانات، الفئة V.</li>
                            <li><strong>الاستخدام:</strong> طبقة 0.5 مم أولاً.</li>
                            <li><strong>تجنب:</strong> مناطق الضغط (قوة ضعيفة).</li>
                        </ul>
                    </InfoCard>
                </div>

                <h3 className="font-bold text-lg text-slate-800 mt-4 font-arabic">استراتيجيات الطبقات</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li><strong>خلفي عميق ({'>'}5مم):</strong> 0.5 مم سائل (بطانة) ← 2 مم عاج ← 2 مم مينا ← 0.5 مم نهائي.</li>
                    <li><strong>أمامي جمالي:</strong> ظل عاجي (جسم) ← ظل مينائي (غطاء) ← شفاف (قاطع).</li>
                    <li><strong>فئة V:</strong> سائل فقط. لا تحفر السمنتوم (استخدم لاصق ذاتي).</li>
                </ul>

                <h3 className="font-bold text-lg text-slate-800 mt-4 font-arabic">تقنيات عملية</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-sm mb-2 font-arabic">إتقان السدادة المطاطية (دقيقتين)</h4>
                    <ol className="list-decimal pr-5 space-y-1 text-sm text-slate-600 font-arabic">
                        <li>ثقب مسبق للأسنان.</li>
                        <li>المشبك: بدون أجنحة (خلفي)، بأجنحة (أمامي).</li>
                        <li>التقنية: المشبك على السن ← شد الغشاء ← الإطار.</li>
                        <li><strong>اقلب الغشاء</strong> في اللثة بالهواء وأداة.</li>
                    </ol>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-2">
                    <h4 className="font-bold text-sm mb-2 font-arabic">أسرار التخدير الموضعي</h4>
                    <ul className="list-disc pr-5 space-y-1 text-sm text-slate-600 font-arabic">
                        <li><strong>تخفيف (Buffering):</strong> بيكربونات صوديوم (1:10) لبدء أسرع.</li>
                        <li><strong>تدفئة:</strong> لحرارة الجسم تقلل الألم 30%.</li>
                        <li><strong>أرتيكايين:</strong> 4 مرات أقوى في الفك العلوي الخلفي.</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        titleEn: "2. Safety Precautions",
        titleAr: "2. الاحتياطات الأمنية",
        color: "red",
        contentEn: (
            <>
                <h3 className="font-bold text-lg text-slate-800">2.1 Dentist Health</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="Ergonomics">
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Patient height: 10-15cm below elbow.</li>
                            <li>Hip angle 90°, Knee angle 110-120°.</li>
                            <li>Loupes declination: 20-25°.</li>
                            <li>Breaks: 2 min every 30 min.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Aerosol Control">
                        <ul className="list-disc pl-4 space-y-1">
                            <li>N95/KN95 fit-tested.</li>
                            <li>Face shield over loupes.</li>
                            <li>HEPA filtration (12-15 changes/hr).</li>
                            <li>15-min fallow time post-aerosol.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Mercury Safety">
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Urine test {'<'}5 μg/L annually.</li>
                            <li>N95 during removal.</li>
                            <li>Ventilation 10-15 changes/hr.</li>
                            <li>Sulfur powder for spills.</li>
                        </ul>
                    </InfoCard>
                </div>

                <h3 className="font-bold text-lg text-slate-800">2.2 Patient Safety</h3>
                <HighlightBox>
                    <strong>Critical Pre-Op Check:</strong> Anticoagulants (INR {'<'}3.5?), Bisphosphonates ({'>'}3yrs = ONJ risk), Radiation ({'>'}50Gy), Allergies.
                </HighlightBox>
                
                <h4 className="font-bold text-sm text-slate-700 mt-2">Pre-Medication Requirements</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                    <li><strong>Heart Valves:</strong> Amoxicillin 2g (1hr pre-op).</li>
                    <li><strong>Joints ({'>'}2yrs):</strong> No antibiotics usually required.</li>
                    <li><strong>Stents:</strong> NEVER stop DAPT without cardio consult.</li>
                </ul>

                <h4 className="font-bold text-sm text-slate-700 mt-2">Safety Max Doses</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                    <li><strong>Lidocaine:</strong> 7mg/kg (Max 500mg).</li>
                    <li><strong>Articaine:</strong> 7mg/kg (Max 500mg).</li>
                    <li><strong>Children:</strong> ALWAYS calculate by weight.</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-lg text-slate-800 font-arabic">2.1 سلامة الطبيب</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <InfoCard title="البيوميكانيكا (Ergonomics)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li>ارتفاع المريض: 10-15 سم تحت الكوع.</li>
                            <li>زاوية الورك 90°، الركبة 110°.</li>
                            <li>زاوية العدسات: 20-25°.</li>
                            <li>استراحة دقيقتين كل 30 دقيقة.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="التحكم بالرواسب" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li>كمامة N95 مجربة.</li>
                            <li>واقي وجه فوق العدسات.</li>
                            <li>فلتر HEPA (12-15 تغيير/ساعة).</li>
                            <li>وقت انتظار 15 دقيقة بعد الرواسب.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="الوقاية من الزئبق" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li>اختبار بول سنوي {'<'}5.</li>
                            <li>كمامة N95 عند الإزالة.</li>
                            <li>تهوية 10-15 مرة/ساعة.</li>
                            <li>كبريت للانسكابات.</li>
                        </ul>
                    </InfoCard>
                </div>

                <h3 className="font-bold text-lg text-slate-800 font-arabic">2.2 سلامة المريض</h3>
                <HighlightBox rtl>
                    <strong>فحص حرج:</strong> سيولة الدم (INR {'<'}3.5)، بايفوسفونات ({'>'}3 سنوات = خطر نخر)، إشعاع، حساسية.
                </HighlightBox>

                <h4 className="font-bold text-sm text-slate-700 mt-2 font-arabic">أدوية ما قبل العملية</h4>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-600 font-arabic">
                    <li><strong>صمامات القلب:</strong> أموكسيسيلين 2 جم.</li>
                    <li><strong>المفاصل الصناعية:</strong> لا مضاد حيوي عادةً.</li>
                    <li><strong>الدعامات:</strong> لا توقف مسيلات الدم (DAPT) أبداً.</li>
                </ul>

                <h4 className="font-bold text-sm text-slate-700 mt-2 font-arabic">الجرعات القصوى</h4>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-600 font-arabic">
                    <li><strong>ليدوكايين:</strong> 7 مجم/كجم (أقصى 500).</li>
                    <li><strong>أرتيكايين:</strong> 7 مجم/كجم (أقصى 500).</li>
                    <li><strong>أطفال:</strong> احسب الوزن دائماً.</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "3. Common Errors & Prevention",
        titleAr: "3. الأخطاء الشائعة والوقاية",
        color: "amber",
        contentEn: (
            <>
                <div className="space-y-4">
                    <InfoCard title="3.1 Diagnostic Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Missed Caries:</strong> Confusing stain w/ decay. Relying only on visual.</li>
                            <li><strong>Prevention:</strong> Bitewings every 12-24mo. Loupes (2.5x+). Systematic exam.</li>
                            <li><strong>Pathology:</strong> Missing early cancer. <strong>Fix:</strong> Refer suspicious lesions immediately.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.2 Composite Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Sensitivity:</strong> Over-etching dentin ({'>'}15s).</li>
                            <li><strong>Failure:</strong> Moisture contamination. Bulk filling ({'>'}2mm).</li>
                            <li><strong>Fix:</strong> Etch enamel 30s/dentin 10s. Rubber dam mandatory. Incremental fill.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.3 Root Canal Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Short/Long:</strong> Not using Apex locator.</li>
                            <li><strong>Ledge/Perforation:</strong> Forcing files.</li>
                            <li><strong>Fix:</strong> Crown-down technique. Never skip files. Irrigation NaOCl 2.5%.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.4 Crown Prep Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Failure #1:</strong> Insufficient reduction ({'<'}1.5mm).</li>
                            <li><strong>Retention:</strong> Taper {'>'}20°.</li>
                            <li><strong>Fix:</strong> Use putty index to check depth. Target 10-12° taper.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.5 Extraction Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Root Fracture:</strong> Excessive force/torque.</li>
                            <li><strong>Wrong Tooth:</strong> Counting error.</li>
                            <li><strong>Fix:</strong> Slow steady force. Count twice. Section multi-rooted teeth.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.6 Impression Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Poor Margins:</strong> No retraction.</li>
                            <li><strong>Tears/Bubbles:</strong> Removed too soon.</li>
                            <li><strong>Fix:</strong> Double cord (00/000). Leave cord 5 min. Hemostasis (AlCl).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.7 Sterilization Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Failure:</strong> Overloading, no spore tests.</li>
                            <li><strong>Fix:</strong> Weekly biological indicator (Geobacillus). Ultrasonic 10 min.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.8 Communication Errors">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Legal Risk:</strong> Poor consent/docs.</li>
                            <li><strong>Fix:</strong> SOAP notes immediately. Visual aids for consent.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="space-y-4">
                    <InfoCard title="3.1 أخطاء التشخيص" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>تسوس مفقود:</strong> خلط التصبغ بالتسوس. الاعتماد البصري فقط.</li>
                            <li><strong>الحل:</strong> أشعة دورية. عدسات تكبير. فحص منهجي.</li>
                            <li><strong>أمراض:</strong> إغفال سرطان الفم. <strong>الحل:</strong> إحالة فورية للآفات.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.2 أخطاء الكومبوزيت" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>حساسية:</strong> حفر العاج كثيراً ({'>'}15ث).</li>
                            <li><strong>فشل:</strong> رطوبة. حشو كتلي ({'>'}2مم).</li>
                            <li><strong>الحل:</strong> حفر العاج 10ث فقط. سدادة مطاطية. حشو طبقي.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.3 أخطاء العصب" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>طول خطأ:</strong> عدم استخدام محدد الذروة.</li>
                            <li><strong>ثقب/عتبة:</strong> إجبار الملفات.</li>
                            <li><strong>الحل:</strong> تقنية تاج-لأسفل. لا تتخطى قياسات. غسيل مستمر.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.4 أخطاء التيجان" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>الفشل #1:</strong> تخفيض غير كافٍ ({'<'}1.5مم).</li>
                            <li><strong>الثبات:</strong> ميلان زائد {'>'}20°.</li>
                            <li><strong>الحل:</strong> دليل سيليكون للعمق. ميلان 10-12°.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.5 أخطاء القلع" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>كسر الجذر:</strong> قوة مفرطة/عزم مفاجئ.</li>
                            <li><strong>السن الخطأ:</strong> خطأ في العد.</li>
                            <li><strong>الحل:</strong> قوة بطيئة. عد مرتين. تقسيم الأسنان.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.6 أخطاء الانطباعات" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>حواف سيئة:</strong> عدم استخدام خيط نكب.</li>
                            <li><strong>فقاعات:</strong> إزالة مبكرة.</li>
                            <li><strong>الحل:</strong> خيط مزدوج (5 دقائق). وقف النزيف.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.7 أخطاء التعقيم" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>فشل:</strong> تحميل زائد، لا اختبارات.</li>
                            <li><strong>الحل:</strong> اختبار أبواغ أسبوعي. تنظيف بالموجات 10د.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="3.8 أخطاء التواصل" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>خطر قانوني:</strong> موافقة/توثيق ضعيف.</li>
                            <li><strong>الحل:</strong> ملاحظات SOAP فورية. شرح بصري.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "4. Core Clinical Protocols",
        titleAr: "4. البروتوكولات السريرية الأساسية",
        color: "indigo",
        contentEn: (
            <>
                <h3 className="font-bold text-slate-800">4.1 Root Canal Treatment</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700 mb-4">
                    <li><strong>Isolation:</strong> Rubber dam mandatory.</li>
                    <li><strong>Access:</strong> Remove all caries, unroof chamber.</li>
                    <li><strong>WL:</strong> Apex locator + X-ray confirmation.</li>
                    <li><strong>Prep:</strong> Crown-down, NiTi rotary.</li>
                    <li><strong>Irrigation:</strong> 2.5% NaOCl constant + 17% EDTA.</li>
                    <li><strong>Obturation:</strong> Gutta-percha + Sealer.</li>
                    <li><strong>Critical:</strong> Coronal seal within 2 weeks.</li>
                </ol>

                <h3 className="font-bold text-slate-800">4.2 Crown Preparation</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
                    <div className="bg-indigo-50 p-2 rounded">Occlusal: 1.5-2.0mm</div>
                    <div className="bg-indigo-50 p-2 rounded">Axial: 1.0-1.5mm</div>
                    <div className="bg-indigo-50 p-2 rounded">Margin: 0.8-1.2mm</div>
                    <div className="bg-indigo-50 p-2 rounded">Taper: 10-12° Total</div>
                </div>

                <h3 className="font-bold text-slate-800">4.3 Extraction Protocol</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 mb-4">
                    <li><strong>Pre-Op:</strong> PA + Bitewing. Check history (Bisphosphonates?).</li>
                    <li><strong>Refer if:</strong> Nerve &lt;2mm, Sinus involvement, Dilacerated.</li>
                    <li><strong>Post-Op:</strong> Verify root tip, irrigate, check sinus (Valsalva).</li>
                </ul>

                <h3 className="font-bold text-slate-800">4.4 Sterilization</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li><strong>Ultrasonic:</strong> 10 mins minimum.</li>
                    <li><strong>Autoclave (Class B):</strong> 134°C, 3.5-18 mins.</li>
                    <li><strong>QA:</strong> Weekly Spore Test (Mandatory).</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <h3 className="font-bold text-slate-800 font-arabic">4.1 علاج العصب</h3>
                <ol className="list-decimal pr-5 space-y-1 text-sm text-slate-700 mb-4 font-arabic">
                    <li><strong>العزل:</strong> سدادة مطاطية إلزامية.</li>
                    <li><strong>الوصول:</strong> إزالة التسوس، كشف السقف.</li>
                    <li><strong>الطول:</strong> محدد ذروة + أشعة.</li>
                    <li><strong>التحضير:</strong> تاج-لأسفل، مبارد دوارة.</li>
                    <li><strong>الغسيل:</strong> كلور 2.5% + EDTA.</li>
                    <li><strong>الحشو:</strong> جوتا بيرشا + سيلر.</li>
                    <li><strong>هام:</strong> حشوة تاجية خلال أسبوعين.</li>
                </ol>

                <h3 className="font-bold text-slate-800 font-arabic">4.2 تحضير التيجان</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 mb-4 font-arabic">
                    <div className="bg-indigo-50 p-2 rounded">إطباقي: 1.5-2.0 مم</div>
                    <div className="bg-indigo-50 p-2 rounded">محوري: 1.0-1.5 مم</div>
                    <div className="bg-indigo-50 p-2 rounded">الحافة: 0.8-1.2 مم</div>
                    <div className="bg-indigo-50 p-2 rounded">الميل: 10-12° إجمالي</div>
                </div>

                <h3 className="font-bold text-slate-800 font-arabic">4.3 بروتوكول القلع</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 mb-4 font-arabic">
                    <li><strong>قبل العملية:</strong> أشعة PA + بينية. تاريخ مرضي (هشاشة عظام؟).</li>
                    <li><strong>إحالة إذا:</strong> العصب &lt;2 مم، تورط الجيب، جذور ملتوية.</li>
                    <li><strong>بعد العملية:</strong> تحقق من طرف الجذر، اغسل، افحص الجيب.</li>
                </ul>

                <h3 className="font-bold text-slate-800 font-arabic">4.4 التعقيم</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li><strong>موجات صوتية:</strong> 10 دقائق على الأقل.</li>
                    <li><strong>أوتوكلاف (B):</strong> 134 درجة، 3.5-18 دقيقة.</li>
                    <li><strong>الجودة:</strong> اختبار أبواغ أسبوعي (إلزامي).</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "5. Emergency Protocols",
        titleAr: "5. بروتوكولات الطوارئ",
        color: "slate",
        contentEn: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Syncope (Fainting)">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Signs:</strong> Pale, sweaty, slow pulse.</li>
                            <li><strong>Action:</strong> Supine position, legs up, ammonia.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Anaphylaxis">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Action:</strong> Epinephrine 0.3mg IM (EpiPen). Call 911. Oxygen.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Cardiac (Angina/MI)">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Angina:</strong> Nitroglycerin 0.4mg SL.</li>
                            <li><strong>MI:</strong> Call 911. Aspirin 325mg chewable.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Respiratory">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Asthma:</strong> Albuterol 2-4 puffs.</li>
                            <li><strong>Choking:</strong> Heimlich maneuver.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="الإغماء (Syncope)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>علامات:</strong> شحوب، عرق، نبض بطيء.</li>
                            <li><strong>إجراء:</strong> وضع الاستلقاء، رفع القدمين.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="صدمة الحساسية" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>إجراء:</strong> إبينيفرين 0.3 مجم عضل. اتصل بالطوارئ.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="القلب (ذبحة/جلطة)" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>ذبحة:</strong> نيتروجليسرين تحت اللسان.</li>
                            <li><strong>جلطة:</strong> طوارئ. أسبرين 325 مضغ.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="التنفس" rtl>
                        <ul className="list-disc pr-4 space-y-1 font-arabic">
                            <li><strong>ربو:</strong> بخاخ فينتولين.</li>
                            <li><strong>اختناق:</strong> مناورة هايمليك.</li>
                        </ul>
                    </InfoCard>
                </div>
            </>
        )
    },
    {
        titleEn: "6. Legal & Documentation",
        titleAr: "6. القانون والتوثيق",
        color: "green",
        contentEn: (
            <>
                <HighlightBox>
                    <strong>Rule #1:</strong> If it's not written, it didn't happen. Poor documentation is the #1 cause of malpractice loss.
                </HighlightBox>
                <h3 className="font-bold text-slate-800">Mandatory Records</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li><strong>SOAP Notes:</strong> Subjective, Objective, Assessment, Plan.</li>
                    <li><strong>Informed Consent:</strong> Risks, Benefits, Alternatives (Signed!).</li>
                    <li><strong>Anesthesia:</strong> Type, Amount (mg), Vasoconstrictor.</li>
                    <li><strong>Post-Op:</strong> Written instructions given.</li>
                </ul>
                <h3 className="font-bold text-slate-800 mt-4">Record Retention</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>Patient Charts/X-rays: 7-10 years.</li>
                    <li>Spore Tests: 3 years minimum.</li>
                </ul>
                <div className="bg-red-50 p-2 mt-2 rounded border border-red-200 text-sm text-red-800">
                    <strong>NEVER:</strong> Alter existing records. Add an addendum with date/time if needed.
                </div>
            </>
        ),
        contentAr: (
            <>
                <HighlightBox rtl>
                    <strong>قاعدة #1:</strong> إن لم يُكتب، فهو لم يحدث. التوثيق السيء هو السبب الأول للخسارة القانونية.
                </HighlightBox>
                <h3 className="font-bold text-slate-800 font-arabic">سجلات إلزامية</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li><strong>ملاحظات SOAP:</strong> شخصي، موضوعي، تقييم، خطة.</li>
                    <li><strong>موافقة مستنيرة:</strong> مخاطر، فوائد، بدائل (موقعة!).</li>
                    <li><strong>التخدير:</strong> النوع، الكمية، القابض للأوعية.</li>
                    <li><strong>ما بعد العملية:</strong> تعليمات مكتوبة.</li>
                </ul>
                <h3 className="font-bold text-slate-800 mt-4 font-arabic">حفظ السجلات</h3>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li>الملفات والأشعة: 7-10 سنوات.</li>
                    <li>اختبارات التعقيم: 3 سنوات.</li>
                </ul>
                <div className="bg-red-50 p-2 mt-2 rounded border border-red-200 text-sm text-red-800 font-arabic">
                    <strong>أبداً:</strong> لا تغير السجلات القديمة. أضف ملحقاً بالتاريخ والوقت.
                </div>
            </>
        )
    },
    {
        titleEn: "7. Material Science Data",
        titleAr: "7. بيانات علم المواد",
        color: "cyan",
        contentEn: (
            <>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-cyan-50 font-bold text-cyan-900">
                            <tr>
                                <th className="p-2">Material</th>
                                <th className="p-2">Flexural Strength</th>
                                <th className="p-2">Use Case</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">Composite</td><td className="p-2">100-150 MPa</td><td className="p-2">Direct Fillings</td></tr>
                            <tr><td className="p-2">e.max (Lithium Disilicate)</td><td className="p-2">360-400 MPa</td><td className="p-2">Veneers, Ant. Crowns</td></tr>
                            <tr><td className="p-2">Zirconia (Y-TZP)</td><td className="p-2">900-1200 MPa</td><td className="p-2">Post. Crowns, Bridges</td></tr>
                            <tr><td className="p-2">Amalgam</td><td className="p-2">500 MPa (Compressive)</td><td className="p-2">Large Post. Stress</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4 className="font-bold text-sm">Curing Requirements (Composite)</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>Intensity: {'>'}500 mW/cm².</li>
                    <li>Wavelength: 450-490nm (Blue).</li>
                    <li>Depth: 2mm max per increment.</li>
                </ul>
            </>
        ),
        contentAr: (
            <>
                <div className="overflow-x-auto border rounded-lg mb-4">
                    <table className="w-full text-sm text-right font-arabic">
                        <thead className="bg-cyan-50 font-bold text-cyan-900">
                            <tr>
                                <th className="p-2">المادة</th>
                                <th className="p-2">قوة الانحناء</th>
                                <th className="p-2">الاستخدام</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700">
                            <tr><td className="p-2">كومبوزيت</td><td className="p-2">100-150 MPa</td><td className="p-2">حشوات مباشرة</td></tr>
                            <tr><td className="p-2">إي ماكس</td><td className="p-2">360-400 MPa</td><td className="p-2">قشور، تيجان أمامية</td></tr>
                            <tr><td className="p-2">زركونيا</td><td className="p-2">900-1200 MPa</td><td className="p-2">تيجان خلفية، جسور</td></tr>
                            <tr><td className="p-2">ملغم</td><td className="p-2">500 MPa (ضغط)</td><td className="p-2">خلفي ضغط عالي</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4 className="font-bold text-sm font-arabic">متطلبات البلمرة</h4>
                <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                    <li>الشدة: {'>'}500.</li>
                    <li>الطول الموجي: 450-490 نانومتر.</li>
                    <li>العمق: 2 مم كحد أقصى.</li>
                </ul>
            </>
        )
    },
    {
        titleEn: "8. Final Critical Reminders",
        titleAr: "8. تذكيرات حرجة نهائية",
        color: "purple",
        contentEn: (
            <>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">When in Doubt → REFER</h3>
                    <ul className="list-disc pl-5 text-sm text-purple-800 space-y-1">
                        <li>Complex Endo (Curved roots, Calcified).</li>
                        <li>Surgical Extractions (Nerve proximity, Sinus).</li>
                        <li>Medically compromised patients (Uncontrolled Diab/BP).</li>
                        <li>Pediatric sedation cases.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold text-slate-800">Success Predictors</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                        <li><strong>Composite:</strong> 85% at 3yrs with proper isolation.</li>
                        <li><strong>RCT:</strong> 95% with good coronal seal.</li>
                        <li><strong>Crowns:</strong> 94% at 10yrs with proper prep.</li>
                    </ul>
                </div>
            </>
        ),
        contentAr: (
            <>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2 font-arabic">عند الشك → حوّل الحالة</h3>
                    <ul className="list-disc pr-5 text-sm text-purple-800 space-y-1 font-arabic">
                        <li>عصب معقد (جذور منحنية/متكلسة).</li>
                        <li>قلع جراحي (قرب عصب/جيب).</li>
                        <li>مرضى الخطر الطبي.</li>
                        <li>أطفال يحتاجون تخدير عام.</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold text-slate-800 font-arabic">توقعات النجاح</h3>
                    <ul className="list-disc pr-5 space-y-1 text-sm text-slate-700 font-arabic">
                        <li><strong>كومبوزيت:</strong> 85% عند 3 سنوات مع عزل جيد.</li>
                        <li><strong>عصب:</strong> 95% مع ختم تاجي جيد.</li>
                        <li><strong>تيجان:</strong> 94% عند 10 سنوات مع تحضير سليم.</li>
                    </ul>
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