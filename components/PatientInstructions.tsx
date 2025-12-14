import React, { useState } from 'react';
import { ChevronDown, Share2, Search, Check } from 'lucide-react';

const PatientInstructions: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const toggle = (id: string) => setOpenId(openId === id ? null : id);

    const handleShare = async (id: string, title: string, text: string) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `DentOS Instructions: ${title}`,
                    text: text
                });
            } catch (err) {
                console.log('Share failed', err);
            }
        } else {
            // Fallback to copy
            const shareText = `${title}\n\n${text}\n\nShared via DentOS`;
            navigator.clipboard.writeText(shareText);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        }
    };

    const filteredInstructions = INSTRUCTIONS_DATA.filter(item => 
        item.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.titleAr.includes(searchTerm)
    );

    return (
        <div className="space-y-6 animate-fade-in pb-12">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg mb-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Patient Instructions</h2>
                <p className="text-slate-300 font-arabic text-lg">بروتوكولات التغذية والاحتياطات</p>
                
                <div className="max-w-xl mx-auto mt-6 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search instructions (e.g. 'Extraction', 'Whitening')..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                    />
                </div>
            </div>

            <div className="grid gap-6">
                {filteredInstructions.map(item => {
                    const isOpen = openId === item.id;
                    const isCopied = copiedId === item.id;
                    
                    return (
                        <div 
                            key={item.id}
                            className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${item.borderColor} ${isOpen ? 'ring-4 ring-opacity-20 ring-slate-300' : ''}`}
                        >
                            <button 
                                onClick={() => toggle(item.id)}
                                className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className={`text-lg font-bold ${item.textColor}`}>{item.titleEn}</h3>
                                        <p className="text-slate-500 font-arabic">{item.titleAr}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isOpen && (
                                <div className="border-t border-slate-100">
                                    <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 xl:divide-x divide-slate-100">
                                        <div className="flex-1 p-6 bg-white">
                                            <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-4">ENGLISH</span>
                                            {item.contentEn}
                                        </div>
                                        <div className="flex-1 p-6 bg-slate-50/50" dir="rtl">
                                            <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-4 font-arabic">العربية</span>
                                            <div className="font-arabic">
                                                {item.contentAr}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-end">
                                        <button 
                                            onClick={() => handleShare(item.id, item.titleEn, `Instructions for ${item.titleEn}\n\nSee full details in DentOS app.`)}
                                            className={`text-sm font-bold flex items-center gap-2 transition-colors px-4 py-2 rounded-lg
                                                ${isCopied ? 'bg-green-100 text-green-700' : 'text-blue-600 hover:bg-blue-50'}`}
                                        >
                                            {isCopied ? <Check size={16} /> : <Share2 size={16} />}
                                            {isCopied ? 'Copied Link' : 'Share / مشاركة'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* General Notes Section - Always Visible */}
                {!searchTerm && (
                    <div className="space-y-4 mt-8 animate-slide-up">
                        <div className="border border-slate-300 rounded-lg overflow-hidden">
                            <div className="bg-slate-100 p-4 font-bold text-slate-700 flex items-center gap-2">
                                ⚠️ General Prohibitions / محظورات عامة
                            </div>
                            <div className="p-4 bg-white text-sm grid md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                    <li><strong>No floss or hard brush</strong> in first 24-48 hours.</li>
                                    <li><strong>No smoking</strong> (reduces blood flow by 50% & delays healing).</li>
                                    <li><strong>No alcohol</strong> (interacts with antibiotics & increases bleeding).</li>
                                    <li><strong>No vigorous exercise</strong> for 72 hours.</li>
                                    <li><strong>No sleeping on surgical side.</strong></li>
                                    <li><strong>No hot water</strong> for rinses (dilates blood vessels).</li>
                                </ul>
                                <ul className="list-disc pr-5 space-y-1 text-right font-arabic text-slate-700" dir="rtl">
                                    <li><strong>لا تستخدم الخيط أو الفرشاة الصلبة</strong> في أول 24-48 ساعة.</li>
                                    <li><strong>لا تدخن</strong> (يقلل التدفق الدموي ويؤخر الشفاء).</li>
                                    <li><strong>لا كحول</strong> (يتفاعل مع الأدوية ويزيد النزيف).</li>
                                    <li><strong>لا رياضة عنيفة</strong> لمدة 72 ساعة.</li>
                                    <li><strong>لا تنم على الجهة الجراحية.</strong></li>
                                    <li><strong>لا ماء ساخن</strong> للمضمضة (يوسع الأوعية الدموية).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-blue-200 rounded-lg overflow-hidden">
                            <div className="bg-blue-50 p-4 font-bold text-blue-700 flex items-center gap-2">
                                💡 Golden Tips / نصائح ذهبية
                            </div>
                            <div className="p-4 bg-white text-sm grid md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                    <li><strong>Sleep 8 hours</strong> (reduces inflammation by 30%).</li>
                                    <li><strong>Drink 2-3L water</strong> daily (transports nutrients).</li>
                                    <li><strong>Protein</strong> 1.2g/kg body weight daily.</li>
                                    <li><strong>Vitamin C</strong> 1000-2000mg with Bioflavonoids.</li>
                                    <li><strong>Zinc</strong> 30-50mg (with food).</li>
                                    <li><strong>Probiotics</strong> daily with antibiotics.</li>
                                </ul>
                                <ul className="list-disc pr-5 space-y-1 text-right font-arabic text-slate-700" dir="rtl">
                                    <li><strong>نوم 8 ساعات</strong> (يقلل الالتهاب بنسبة 30%).</li>
                                    <li><strong>شرب 2-3 لتر ماء</strong> يومياً (ينقل المغذيات).</li>
                                    <li><strong>البروتين</strong> 1.2 جم/كجم من وزن الجسم يومياً.</li>
                                    <li><strong>فيتامين C</strong> بجرعة 1000-2000 مجم.</li>
                                    <li><strong>الزنك</strong> 30-50 مجم (مع الأكل).</li>
                                    <li><strong>البروبيوتيك</strong> يومياً مع المضادات الحيوية.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-red-200 rounded-lg overflow-hidden">
                            <div className="bg-red-50 p-4 font-bold text-red-700 flex items-center gap-2">
                                🚨 Emergency Symptoms / أعراض تستدعي الطوارئ
                            </div>
                            <div className="p-4 bg-white text-sm grid md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                    <li><strong>Bleeding</strong> not stopping after 4 hours despite pressure.</li>
                                    <li><strong>Difficulty breathing</strong> or swallowing.</li>
                                    <li><strong>Fever</strong> &gt; 39°C or chills.</li>
                                    <li><strong>Swelling</strong> closing eye or affecting breathing.</li>
                                    <li><strong>Severe pain</strong> unresponsive to opioids.</li>
                                    <li><strong>Green/yellow discharge</strong> (infection).</li>
                                    <li><strong>Stiffness</strong> in neck or jaw.</li>
                                </ul>
                                <ul className="list-disc pr-5 space-y-1 text-right font-arabic text-slate-700" dir="rtl">
                                    <li><strong>نزيف</strong> لا يتوقف بعد 4 ساعات رغم الضغط المستمر.</li>
                                    <li><strong>صعوبة</strong> في التنفس أو البلع.</li>
                                    <li><strong>حمى</strong> &gt; 39°C أو قشعريرة.</li>
                                    <li><strong>تورم</strong> يغلق العين أو يؤثر على التنفس.</li>
                                    <li><strong>ألم شديد</strong> لا يستجيب لمسكنات الأفيون.</li>
                                    <li><strong>إفرازات خضراء أو صفراء</strong> (عدوى).</li>
                                    <li><strong>تصلب</strong> في الرقبة أو الفك.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Content Data ---

const INSTRUCTIONS_DATA = [
    {
        id: 'extraction',
        titleEn: "Simple Tooth Extraction",
        titleAr: "حالات خلع الأسنان البسيط",
        icon: "🦷",
        borderColor: "border-blue-500",
        textColor: "text-blue-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-blue-800">التغذية خلال 24 ساعة الأولى:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ <strong>ممنوع:</strong> الأكل ساخن، مضغ على الجهة المخدرة، الشرب بالشفطة، المشروبات الغازية، البذور، المكسرات.</li>
                    <li>✅ <strong>مسموح:</strong> سوائل باردة (لبن، عصير تفاح، ماء)، مهلبية، بطاطس مهروسة مبردة، زبادي بارد.</li>
                    <li><strong>وجبات مثالية:</strong> حساء اليقطين البارد، مهلبية أرز، موز مهروس مع لبن.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">الأسبوع الأول:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>أطعمة ناعمة: بيض مسلوق، جبن طري، سمك مهروس، مكرونة مسلوقة جيداً.</li>
                    <li>تجنب: الأرز (يتجمع في الجرح)، الخبز المحمص، المقرمشات.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">احتياطات حرجة:</p>
                <ol className="list-decimal pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>لا تبصق</strong> لمدة 24 ساعة (ابلع اللعاب برفق).</li>
                    <li><strong>لا تغسل فمك</strong> بالماء أو المضمضة لمدة 24 ساعة.</li>
                    <li>ارفع رأسك أثناء النوم (وسادتين) لمدة 3 ليالي.</li>
                    <li>كمادات باردة (15 دقيقة) على الخد لمدة 24 ساعة.</li>
                </ol>
                <p className="font-bold mb-2 text-blue-800">نصائح دوائية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>تناول المضاد الحيوي مع الطعام لتجنب التهاب المعدة.</li>
                    <li>لا تستخدم الأسبرين أبداً (يسبب نزيف).</li>
                    <li>انتظر زوال التخدير تماماً قبل الأكل.</li>
                </ul>
                <p className="text-red-600 font-bold text-sm bg-red-50 p-2 rounded">
                    طوارئ: نزيف > 4 ساعات، حمى > 38.5، ألم يزداد بعد اليوم الثالث.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-blue-800">24-Hour Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ <strong>Avoid:</strong> Hot foods, chewing on numb side, straws, carbonated drinks, seeds, nuts.</li>
                    <li>✅ <strong>Allowed:</strong> Cool liquids (milk, apple juice, water), pudding, cold mashed potatoes, yogurt.</li>
                    <li><strong>Ideal Meals:</strong> Pumpkin soup, rice pudding, banana smoothie.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">First Week:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Soft foods: Scrambled eggs, soft cheese, mashed fish, well-cooked pasta.</li>
                    <li>Avoid: Rice (gets stuck), toast, crunchy foods.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">Critical Precautions:</p>
                <ol className="list-decimal pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>No spitting</strong> for 24 hours (swallow gently).</li>
                    <li><strong>No rinsing</strong> for 24 hours.</li>
                    <li>Sleep with head elevated (2 pillows) for 3 nights.</li>
                    <li>Cold compress (15 min on/off) for 24 hours.</li>
                </ol>
                <p className="font-bold mb-2 text-blue-800">Medication Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Take antibiotics with food.</li>
                    <li>Never use Aspirin.</li>
                    <li>Wait for numbness to wear off before eating.</li>
                </ul>
                <p className="text-red-600 font-bold text-sm bg-red-50 p-2 rounded">
                    Emergency: Bleeding > 4 hrs, Fever > 38.5, Pain increases after day 3.
                </p>
            </>
        )
    },
    {
        id: 'rct',
        titleEn: "Root Canal Treatment",
        titleAr: "علاج لب السن (جراحة)",
        icon: "🔧",
        borderColor: "border-green-500",
        textColor: "text-green-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-green-800">التغذية 24-48 ساعة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ <strong>ممنوع:</strong> المضغ على السن، الأطعمة اللاصقة (توفي)، المكسرات.</li>
                    <li>✅ <strong>مسموح:</strong> المثلجات (مفيد للتورم)، العصائر، الشوربات المصفاة، زبادي يوناني.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">الأسبوع الأول:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>أطعمة دافئة وليست ساخنة.</li>
                    <li>تجنب الفشار والحلوى الصلبة.</li>
                    <li>أطعمة مهدئة: شوفان، عسل، بابونج.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">احتياطات خاصة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>التاج المؤقت قابل للكسر</strong> - لا تضغط عليه.</li>
                    <li>إذا سقط التاج، احتفظ به واتصل بالطبيب فوراً.</li>
                    <li>تناول بروبيوتيك مع المضاد الحيوي.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">نصائح دوائية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Augmentin أفضل من Amoxicillin لوحده.</li>
                    <li>تناول المسكنات قبل الأكل إذا كان المضغ صعباً.</li>
                </ul>
                <p className="text-sm bg-green-50 p-2 rounded text-green-800">
                    <strong>تغذية علاجية:</strong> فيتامين C (1000mg)، فيتامين D والكالسيوم لتقوية السن.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-green-800">24-48 Hour Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ <strong>Avoid:</strong> Chewing on tooth, sticky foods, nuts.</li>
                    <li>✅ <strong>Allowed:</strong> Ice cream (good for swelling), juices, strained soups, Greek yogurt.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">First Week:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Warm (not hot) foods.</li>
                    <li>Avoid popcorn, hard candy.</li>
                    <li>Soothing foods: Oatmeal, honey, chamomile.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Temporary crown is fragile</strong> - no pressure.</li>
                    <li>If crown falls, save it and call dentist immediately.</li>
                    <li>Take probiotics with antibiotics.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">Medication Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Augmentin is preferred.</li>
                    <li>Take painkillers before meals if chewing is difficult.</li>
                </ul>
                <p className="text-sm bg-green-50 p-2 rounded text-green-800">
                    <strong>Tip:</strong> Vitamin C (1000mg) & Vitamin D strengthen the tooth.
                </p>
            </>
        )
    },
    {
        id: 'implant',
        titleEn: "Dental Implants",
        titleAr: "زراعة الأسنان",
        icon: "🦴",
        borderColor: "border-red-500",
        textColor: "text-red-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-red-800">التغذية حسب المرحلة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>يوم 1-3 (سوائل):</strong> عصائر خضار، مرق دجاج، ماء جوز هند. ممنوع القهوة/الكحول.</li>
                    <li><strong>يوم 4-10 (ناعم):</strong> بطاطس مهروسة، بيض، جبن طري، أفوكادو، سمك. ممنوع الأرز/الخبز.</li>
                    <li><strong>أسبوع 2-6 (طري):</strong> ديك رومي مفروم، فاصوليا مهروسة، موز.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">احتياطات حرجة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>لا تدخن</strong> (72 ساعة على الأقل).</li>
                    <li><strong>لا تلمس</strong> المنطقة بلسانك.</li>
                    <li>لا تنم على جانب الزرعة.</li>
                    <li>لا ترتدي طقم الأسنان المؤقت حتى يسمح الطبيب.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">نصائح دوائية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Clindamycin أفضل للفك السفلي.</li>
                    <li>ابدأ الكلورهيكسيدين بعد أسبوع.</li>
                    <li>فيتامين K لتقليل النزيف.</li>
                </ul>
                <p className="text-sm bg-red-50 p-2 rounded text-red-800">
                    <strong>تغذية علاجية:</strong> البروتين (90-120g)، فيتامين C، أوميجا 3، كولاجين.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-red-800">Nutrition by Stage:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-3 (Liquids):</strong> Veggie juice, broth, coconut water. No coffee/alcohol.</li>
                    <li><strong>Day 4-10 (Soft):</strong> Mashed potato, eggs, soft cheese, avocado, fish. No rice/toast.</li>
                    <li><strong>Week 2-6 (Tender):</strong> Ground turkey, mashed beans, banana.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">Critical Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>No smoking</strong> (72 hrs min).</li>
                    <li><strong>Don't touch</strong> area with tongue.</li>
                    <li>Don't sleep on implant side.</li>
                    <li>Don't wear temporary denture until cleared.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">Medication Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Clindamycin preferred for lower jaw.</li>
                    <li>Start Chlorhexidine after 1 week.</li>
                    <li>Vitamin K to reduce bleeding.</li>
                </ul>
                <p className="text-sm bg-red-50 p-2 rounded text-red-800">
                    <strong>Tip:</strong> Protein (90-120g), Vitamin C, Omega-3, Collagen essential for healing.
                </p>
            </>
        )
    },
    {
        id: 'gum',
        titleEn: "Gum Surgery",
        titleAr: "جراحة اللثة",
        icon: "🩸",
        borderColor: "border-yellow-500",
        textColor: "text-yellow-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-yellow-800">التغذية المرحلية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>يوم 1-3 (سوائل دافئة):</strong> شوربة خضار مصفاة، زبادي دافئ. ممنوع الحامض والملح.</li>
                    <li><strong>يوم 4-7 (ناعم دافئ):</strong> بطاطس مهروسة بالزبدة، بيض، سمك. (حرارة فاترة).</li>
                </ul>
                <p className="font-bold mb-2 text-yellow-800">احتياطات اللثة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تغسل فمك لمدة 24 ساعة.</li>
                    <li>ابدأ الكلورهيكسيدين بعد 24 ساعة (مرتين يومياً).</li>
                    <li>لا تستخدم الفرشاة في مكان الجراحة لمدة أسبوع.</li>
                    <li>تجنب التدخين 5 أيام.</li>
                    <li>تجنب NSAIDs (قد تسبب نزيف).</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-2 rounded text-yellow-800">
                    <strong>تغذية علاجية:</strong> فيتامين K (سبانخ)، فيتامين C، بروتين 80g، زنك.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-yellow-800">Stage Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-3 (Warm Liquids):</strong> Strained soup, warm yogurt. No acidic/salty.</li>
                    <li><strong>Day 4-7 (Soft Warm):</strong> Mashed potato, eggs, fish. (Lukewarm).</li>
                </ul>
                <p className="font-bold mb-2 text-yellow-800">Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>No rinsing for 24 hrs.</li>
                    <li>Start Chlorhexidine after 24 hrs (BID).</li>
                    <li>No brush on site for 1 week.</li>
                    <li>No smoking for 5 days.</li>
                    <li>Avoid NSAIDs (bleed risk).</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-2 rounded text-yellow-800">
                    <strong>Tip:</strong> Vitamin K (Spinach), Vitamin C, Protein 80g, Zinc.
                </p>
            </>
        )
    },
    {
        id: 'crowns',
        titleEn: "Fillings & Crowns",
        titleAr: "حشوات وتيجان (مؤقتة/دائمة)",
        icon: "👑",
        borderColor: "border-purple-600",
        textColor: "text-purple-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-purple-800">التيجان المؤقتة (48 ساعة):</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ ممنوع اللزج (لبان، توفي)، المكسرات الصلبة.</li>
                    <li>لا تضغط عليها أثناء المضغ.</li>
                    <li>لا تستخدم خيط الأسنان حولها.</li>
                    <li>إذا سقطت، ادهنها بمعجون وأعدها واتصل بالطبيب.</li>
                </ul>
                <p className="font-bold mb-2 text-purple-800">التيجان الدائمة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تأكل عليها لمدة 24 ساعة (حتى يجف السمنت).</li>
                    <li>إذا شعرت بألم عند العض، العضة عالية (راجع الطبيب).</li>
                    <li>تجنب الصودا (تذيب السمنت).</li>
                    <li>تجنب أدوات حادة أو كسر الثلج بالأسنان.</li>
                </ul>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-purple-800">Temporary Crowns (48 hrs):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ No sticky foods (gum, toffee), hard nuts.</li>
                    <li>No pressure when chewing.</li>
                    <li>No flossing around it.</li>
                    <li>If it falls, apply toothpaste, place back, call dentist.</li>
                </ul>
                <p className="font-bold mb-2 text-purple-800">Permanent Crowns:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Do not eat on it for 24 hrs.</li>
                    <li>Pain on biting = High spot (Call dentist).</li>
                    <li>Avoid soda (dissolves cement).</li>
                    <li>Don't crack ice/nuts.</li>
                </ul>
            </>
        )
    },
    {
        id: 'wisdom',
        titleEn: "Wisdom Tooth Extraction",
        titleAr: "خلع ضرس العقل (جراحة)",
        icon: "🦷",
        borderColor: "border-orange-500",
        textColor: "text-orange-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-orange-800">التغذية المرحلية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>يوم 1-2 (سوائل باردة):</strong> آيس كريم، عصائر خضار، ماء جوز هند. ممنوع الماصة (Straw). حرارة &lt;10°.</li>
                    <li><strong>يوم 3-5 (مهروسات):</strong> بطاطس باردة، زبادي، بيض، أفوكادو.</li>
                    <li><strong>يوم 6-10:</strong> مكرونة مهروسة، سمك مفروم.</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">احتياطات حرجة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تبصق 72 ساعة.</li>
                    <li>لا تدخن 5 أيام.</li>
                    <li>نم على وسادتين لأسبوع.</li>
                    <li>لا NSAIDs في اليوم الأول.</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">نصائح علاجية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Dexamethasone 4mg قبل الجراحة.</li>
                    <li>البروبيوتيك مع Clindamycin.</li>
                    <li>البروميلين (أناناس) والكركمين للتورم.</li>
                </ul>
                <p className="text-red-600 font-bold text-sm bg-red-50 p-2 rounded">
                    طوارئ: نزيف لا يتوقف، صعوبة فتح الفك، مذاق كريه.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-orange-800">Stage Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-2 (Cold Liquids):</strong> Ice cream, veggie juice, coconut water. NO STRAWS. Temp &lt;10°.</li>
                    <li><strong>Day 3-5 (Purees):</strong> Cold potato, yogurt, eggs, avocado.</li>
                    <li><strong>Day 6-10:</strong> Mashed pasta, flaked fish.</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">Critical Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>No spitting 72 hrs.</li>
                    <li>No smoking 5 days.</li>
                    <li>Sleep on 2 pillows for 1 week.</li>
                    <li>No NSAIDs on Day 1.</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">Therapeutic Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Dexamethasone 4mg pre-op.</li>
                    <li>Probiotics with Clindamycin.</li>
                    <li>Bromelain (Pineapple) & Curcumin for swelling.</li>
                </ul>
                <p className="text-red-600 font-bold text-sm bg-red-50 p-2 rounded">
                    Emergency: Unstoppable bleeding, Trismus (locked jaw), foul taste.
                </p>
            </>
        )
    },
    {
        id: 'ortho',
        titleEn: "Orthodontics (Braces)",
        titleAr: "تقويم الأسنان (الأقواس)",
        icon: "⚡",
        borderColor: "border-teal-500",
        textColor: "text-teal-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-teal-800">التغذية المسموحة:</p>
                <p className="text-sm mb-2 text-slate-700">موز، تفاح مهروس، بطاطس، بيض، سمك، مكرونة، ألبان.</p>
                <p className="font-bold mb-2 text-teal-800">الممنوعات التامة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>اللزج (لبان، كراميل).</li>
                    <li>الصلب (مكسرات، فشار، بذور).</li>
                    <li>المقرمش (شيبس، خبز محمص).</li>
                    <li>القاسي (تفاح كامل، جزر نيء - قطعهم صغيراً).</li>
                </ul>
                <p className="font-bold mb-2 text-teal-800">نصائح:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>امضغ بالأضراس الخلفية.</li>
                    <li>باراسيتامول فقط للألم (تجنب البروفين).</li>
                    <li>فيتامين C و D لتقوية الأوتار والعظم.</li>
                    <li>شمع التقويم للأسلاك الحادة.</li>
                </ul>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-teal-800">Allowed Nutrition:</p>
                <p className="text-sm mb-2 text-slate-700">Banana, mashed apple, potato, eggs, fish, pasta, dairy.</p>
                <p className="font-bold mb-2 text-teal-800">Forbidden:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Sticky (gum, caramel).</li>
                    <li>Hard (nuts, popcorn, seeds).</li>
                    <li>Crunchy (chips, toast).</li>
                    <li>Tough (whole apple, raw carrot - cut small).</li>
                </ul>
                <p className="font-bold mb-2 text-teal-800">Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Chew with back teeth.</li>
                    <li>Paracetamol only for pain (Avoid NSAIDs).</li>
                    <li>Vitamin C & D for ligaments/bone.</li>
                    <li>Orthodontic wax for sharp wires.</li>
                </ul>
            </>
        )
    },
    {
        id: 'whitening',
        titleEn: "Teeth Whitening",
        titleAr: "تبييض الأسنان",
        icon: "✨",
        borderColor: "border-pink-500",
        textColor: "text-pink-600",
        contentAr: (
            <>
                <p className="font-bold mb-2 text-pink-700">الحمية البيضاء (48 ساعة):</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>✅ <strong>مسموح:</strong> ماء، لبن، أرز أبيض، دجاج، موز، بطاطس. (ألوان بيضاء/شفافة).</li>
                    <li>🚫 <strong>ممنوع:</strong> قهوة، شاي، صلصة طماطم، كاري، شوكولا، كولا، توت، صويا.</li>
                </ul>
                <p className="font-bold mb-2 text-pink-700">احتياطات الحساسية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>استخدم معجون للأسنان الحساسة.</li>
                    <li>تجنب الماء البارد جداً أو الساخن.</li>
                    <li>لا تفرش بقوة لمدة أسبوع (ابدأ بعد 24 ساعة برفق).</li>
                    <li>لا تستخدم معجون مبيض لأسبوعين.</li>
                </ul>
                <p className="text-sm bg-pink-50 p-2 rounded text-pink-800">
                    <strong>نصيحة:</strong> اشرب الماء (3 لتر) لطرد الأكسجين النشط. الكالسيوم لترميم المينا.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-pink-700">White Diet (48 hrs):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>✅ <strong>Allowed:</strong> Water, milk, white rice, chicken, banana, potato. (White/Clear).</li>
                    <li>🚫 <strong>No:</strong> Coffee, tea, tomato sauce, curry, chocolate, cola, berries, soy.</li>
                </ul>
                <p className="font-bold mb-2 text-pink-700">Sensitivity Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Use sensitivity toothpaste.</li>
                    <li>Avoid extreme temperatures.</li>
                    <li>Don't brush hard for 1 week (Start gently after 24h).</li>
                    <li>No whitening paste for 2 weeks.</li>
                </ul>
                <p className="text-sm bg-pink-50 p-2 rounded text-pink-800">
                    <strong>Tip:</strong> Drink 3L water. Calcium to repair enamel.
                </p>
            </>
        )
    }
];

export default PatientInstructions;