import React, { useState } from 'react';
import { ChevronDown, Share2 } from 'lucide-react';

const PatientInstructions: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(openId === id ? null : id);

    return (
        <div className="space-y-6 animate-fade-in pb-12">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Patient Instructions</h2>
                <p className="text-slate-300 font-arabic text-lg">بروتوكولات التغذية والاحتياطات</p>
                <p className="text-xs text-slate-500 mt-4">Click boxes to expand / اضغط للتفاصيل</p>
            </div>

            <div className="grid gap-6">
                {INSTRUCTIONS_DATA.map(item => {
                    const isOpen = openId === item.id;
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
                                    <div className="p-3 bg-slate-50 border-t border-slate-100 text-right">
                                        <button className="text-sm text-blue-600 font-bold flex items-center justify-end gap-2 hover:underline">
                                            <Share2 size={16} /> Share / مشاركة
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* General Notes Section */}
                <div className="space-y-4 mt-8">
                     <div className="border border-slate-300 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 font-bold text-slate-700 flex items-center gap-2">
                            ⚠️ General Prohibitions / محظورات عامة
                        </div>
                        <div className="p-4 bg-white text-sm grid md:grid-cols-2 gap-4">
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li><strong>No smoking</strong> (reduces blood flow by 50% & delays healing).</li>
                                <li><strong>No alcohol</strong> (interacts with antibiotics & increases bleeding).</li>
                                <li><strong>No vigorous exercise</strong> for 72 hours.</li>
                                <li><strong>No hot water</strong> for rinses.</li>
                            </ul>
                            <ul className="list-disc pr-5 space-y-1 text-right font-arabic text-slate-700" dir="rtl">
                                <li><strong>لا تدخن</strong> (يقلل التدفق الدموي ويؤخر الشفاء).</li>
                                <li><strong>لا كحول</strong> (يتفاعل مع الأدوية ويزيد النزيف).</li>
                                <li><strong>لا رياضة عنيفة</strong> لمدة 72 ساعة.</li>
                                <li><strong>لا ماء ساخن</strong> للمضمضة.</li>
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
                                <li><strong>Drink 2-3L water</strong> daily.</li>
                                <li><strong>Protein & Vitamin C</strong> for fast healing.</li>
                            </ul>
                            <ul className="list-disc pr-5 space-y-1 text-right font-arabic text-slate-700" dir="rtl">
                                <li><strong>نوم 8 ساعات</strong> (يقلل الالتهاب بنسبة 30%).</li>
                                <li><strong>شرب 2-3 لتر ماء</strong> يومياً.</li>
                                <li><strong>البروتين وفيتامين C</strong> لشفاء سريع.</li>
                            </ul>
                        </div>
                     </div>
                </div>
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
                    <li>❌ <strong>ممنوع:</strong> الأكل ساخن، مضغ على الجهة المخدرة، الشرب بالشفطة، المشروبات الغازية.</li>
                    <li>✅ <strong>مسموح:</strong> سوائل باردة (لبن، عصير تفاح)، مهلبية، بطاطس مهروسة مبردة، زبادي بارد.</li>
                    <li><strong>وجبات مثالية:</strong> شوربة يقطين باردة، مهلبية أرز، موز مهروس مع لبن.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">احتياطات حرجة:</p>
                <ol className="list-decimal pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>لا تبصق</strong> لمدة 24 ساعة (ابلع اللعاب برفق).</li>
                    <li><strong>لا تغسل فمك</strong> بالماء أو المضمضة لمدة 24 ساعة.</li>
                    <li>ارفع رأسك أثناء النوم (وسادتين).</li>
                    <li>كمادات باردة (15 دقيقة) على الخد.</li>
                </ol>
                <p className="font-bold mb-2 text-blue-800">نصائح دوائية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>تناول المضاد الحيوي مع الطعام.</li>
                    <li>لا تستخدم الأسبرين أبداً.</li>
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
                    <li>❌ <strong>Avoid:</strong> Hot foods, chewing on numb side, straws, carbonated drinks.</li>
                    <li>✅ <strong>Allowed:</strong> Cool liquids (milk, apple juice), pudding, cold mashed potatoes, yogurt.</li>
                    <li><strong>Ideal Meals:</strong> Cold soup, rice pudding, banana smoothie.</li>
                </ul>
                <p className="font-bold mb-2 text-blue-800">Critical Precautions:</p>
                <ol className="list-decimal pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>No spitting</strong> for 24 hours.</li>
                    <li><strong>No rinsing</strong> for 24 hours.</li>
                    <li>Sleep with head elevated.</li>
                    <li>Cold compress (15 min on/off).</li>
                </ol>
                <p className="font-bold mb-2 text-blue-800">Medication Tips:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Take antibiotics with food.</li>
                    <li>Never use Aspirin.</li>
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
                    <li>✅ <strong>مسموح:</strong> المثلجات (مفيد للتورم)، العصائر، الشوربات المصفاة.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">احتياطات خاصة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>التاج المؤقت قابل للكسر</strong> - لا تضغط عليه.</li>
                    <li>إذا سقط التاج، احتفظ به واتصل بالطبيب.</li>
                    <li>Augmentin أفضل من Amoxicillin لوحده.</li>
                </ul>
                <p className="text-sm bg-green-50 p-2 rounded text-green-800">
                    <strong>تغذية علاجية:</strong> فيتامين C (1000mg) وفيتامين D لتقوية السن.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-green-800">24-48 Hour Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ <strong>Avoid:</strong> Chewing on tooth, sticky foods, nuts.</li>
                    <li>✅ <strong>Allowed:</strong> Ice cream (good for swelling), juices, strained soups.</li>
                </ul>
                <p className="font-bold mb-2 text-green-800">Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Temporary crown is fragile</strong> - no pressure.</li>
                    <li>If crown falls, save it and call dentist.</li>
                    <li>Augmentin is preferred.</li>
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
                    <li><strong>يوم 4-10 (ناعم):</strong> بطاطس مهروسة، بيض، جبن طري. ممنوع الأرز/الخبز.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">احتياطات حرجة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>لا تدخن</strong> (72 ساعة على الأقل).</li>
                    <li><strong>لا تلمس</strong> المنطقة بلسانك.</li>
                    <li>ابدأ الكلورهيكسيدين بعد أسبوع.</li>
                    <li>لا تنم على جانب الزرعة.</li>
                </ul>
                <p className="text-sm bg-red-50 p-2 rounded text-red-800">
                    <strong>نصيحة:</strong> البروتين (90-120g) ضروري لالتئام العظم.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-red-800">Nutrition by Stage:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-3 (Liquids):</strong> Veggie juice, broth, coconut water. No coffee/alcohol.</li>
                    <li><strong>Day 4-10 (Soft):</strong> Mashed potato, eggs, soft cheese. No rice/toast.</li>
                </ul>
                <p className="font-bold mb-2 text-red-800">Critical Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>No smoking</strong> (72 hrs min).</li>
                    <li><strong>Don't touch</strong> area with tongue.</li>
                    <li>Start Chlorhexidine after 1 week.</li>
                    <li>Don't sleep on implant side.</li>
                </ul>
                <p className="text-sm bg-red-50 p-2 rounded text-red-800">
                    <strong>Tip:</strong> Protein (90-120g) is essential for bone healing.
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
                <p className="font-bold mb-2 text-yellow-800">التغذية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>يوم 1-3:</strong> سوائل دافئة (شوربة خضار مصفاة، زبادي دافئ). ممنوع الحامض والملح.</li>
                    <li><strong>يوم 4-7:</strong> أطعمة ناعمة دافئة (بطاطس، سمك مهروس).</li>
                </ul>
                <p className="font-bold mb-2 text-yellow-800">احتياطات اللثة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تغسل فمك لمدة 24 ساعة.</li>
                    <li>ابدأ الكلورهيكسيدين بعد 24 ساعة.</li>
                    <li>لا تستخدم الفرشاة في مكان الجراحة لمدة أسبوع.</li>
                    <li>تجنب التدخين 5 أيام.</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-2 rounded text-yellow-800">
                    <strong>فيتامين K:</strong> سبانخ مهروسة لتقليل النزيف.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-yellow-800">Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-3:</strong> Warm liquids (strained soup, warm yogurt). No acidic/salty.</li>
                    <li><strong>Day 4-7:</strong> Soft warm foods (potato, mashed fish).</li>
                </ul>
                <p className="font-bold mb-2 text-yellow-800">Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>No rinsing for 24 hrs.</li>
                    <li>Start Chlorhexidine after 24 hrs.</li>
                    <li>No brush on site for 1 week.</li>
                    <li>No smoking for 5 days.</li>
                </ul>
                <p className="text-sm bg-yellow-50 p-2 rounded text-yellow-800">
                    <strong>Vitamin K:</strong> Mashed spinach to reduce bleeding.
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
                <p className="font-bold mb-2 text-purple-800">التيجان المؤقتة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ ممنوع اللزج (لبان، توفي)، المكسرات الصلبة.</li>
                    <li>لا تضغط عليها أثناء المضغ.</li>
                    <li>لا تستخدم خيط الأسنان حولها.</li>
                </ul>
                <p className="font-bold mb-2 text-purple-800">التيجان الدائمة:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تأكل عليها لمدة 24 ساعة (حتى يجف السمنت).</li>
                    <li>إذا شعرت بألم عند العض، العضة عالية (راجع الطبيب).</li>
                    <li>تجنب الصودا (تذيب السمنت).</li>
                </ul>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-purple-800">Temporary Crowns:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>❌ No sticky foods (gum, toffee), hard nuts.</li>
                    <li>No pressure when chewing.</li>
                    <li>No flossing around it.</li>
                </ul>
                <p className="font-bold mb-2 text-purple-800">Permanent Crowns:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Do not eat on it for 24 hrs.</li>
                    <li>Pain on biting = High spot (Call dentist).</li>
                    <li>Avoid soda (dissolves cement).</li>
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
                <p className="font-bold mb-2 text-orange-800">التغذية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>يوم 1-2:</strong> سوائل باردة فقط (آيس كريم، عصير). ممنوع المصاصة (Straw).</li>
                    <li><strong>يوم 3-5:</strong> مهروسات باردة (بطاطس، زبادي، بيض).</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">هام جداً:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>لا تبصق 72 ساعة.</li>
                    <li>لا تدخن 5 أيام.</li>
                    <li>نم على وسادتين.</li>
                    <li>Dexamethasone قبل الجراحة يقلل التورم.</li>
                </ul>
                <p className="text-red-600 font-bold text-sm bg-red-50 p-2 rounded">
                    طوارئ: نزيف لا يتوقف، صعوبة فتح الفك، مذاق كريه.
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-orange-800">Nutrition:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li><strong>Day 1-2:</strong> Cold liquids only (Ice cream). NO STRAWS.</li>
                    <li><strong>Day 3-5:</strong> Cold purees (Potato, yogurt, eggs).</li>
                </ul>
                <p className="font-bold mb-2 text-orange-800">Very Important:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>No spitting 72 hrs.</li>
                    <li>No smoking 5 days.</li>
                    <li>Sleep on 2 pillows.</li>
                    <li>Dexamethasone pre-op reduces swelling.</li>
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
                <p className="font-bold mb-2 text-teal-800">الأكل المسموح:</p>
                <p className="text-sm mb-2 text-slate-700">موز، بطاطس مهروسة، بيض، سمك، مكرونة.</p>
                <p className="font-bold mb-2 text-teal-800">الممنوعات:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>اللزج (لبان، كراميل).</li>
                    <li>الصلب (مكسرات، فشار).</li>
                    <li>المقرمش (شيبس).</li>
                    <li>قطع الطعام لقطع صغيرة (1-2 سم).</li>
                </ul>
                <p className="text-sm bg-teal-50 p-2 rounded text-teal-800">
                    <strong>نصيحة:</strong> باراسيتامول فقط للألم (تجنب البروفين لأنه يبطئ الحركة).
                </p>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-teal-800">Allowed:</p>
                <p className="text-sm mb-2 text-slate-700">Banana, mashed potato, eggs, fish, pasta.</p>
                <p className="font-bold mb-2 text-teal-800">Forbidden:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Sticky (gum, caramel).</li>
                    <li>Hard (nuts, popcorn).</li>
                    <li>Crunchy (chips).</li>
                    <li>Cut food into small pieces (1-2 cm).</li>
                </ul>
                <p className="text-sm bg-teal-50 p-2 rounded text-teal-800">
                    <strong>Tip:</strong> Paracetamol only for pain (Avoid NSAIDs).
                </p>
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
                    <li>✅ <strong>مسموح:</strong> ماء، لبن، أرز أبيض، دجاج، موز، بطاطس.</li>
                    <li>🚫 <strong>ممنوع:</strong> قهوة، شاي، صلصة طماطم، كاري، شوكولا، كولا، توت.</li>
                </ul>
                <p className="font-bold mb-2 text-pink-700">احتياطات الحساسية:</p>
                <ul className="list-disc pr-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>استخدم معجون للأسنان الحساسة.</li>
                    <li>تجنب الماء البارد جداً.</li>
                    <li>لا تفرش بقوة لمدة أسبوع.</li>
                </ul>
            </>
        ),
        contentEn: (
            <>
                <p className="font-bold mb-2 text-pink-700">White Diet (48 hrs):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>✅ <strong>Allowed:</strong> Water, milk, white rice, chicken, banana, potato.</li>
                    <li>🚫 <strong>No:</strong> Coffee, tea, tomato sauce, curry, chocolate, cola, berries.</li>
                </ul>
                <p className="font-bold mb-2 text-pink-700">Sensitivity Precautions:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-slate-700">
                    <li>Use sensitivity toothpaste.</li>
                    <li>Avoid very cold water.</li>
                    <li>Don't brush hard for 1 week.</li>
                </ul>
            </>
        )
    }
];

export default PatientInstructions;
