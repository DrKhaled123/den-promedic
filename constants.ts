import { Drug, Guideline, PatientInstruction, ComparisonRow } from './types';

export const DICLOFENAC_COMPARISON: ComparisonRow[] = [
  {
    aspectEn: 'Onset of Action', aspectAr: 'بداية المفعول',
    valA_En: 'Slower (peak 2-4 hrs)', valA_Ar: 'أبطأ (ذروة في 2-4 ساعات)',
    valB_En: 'Faster (peak 30-60 mins)', valB_Ar: 'أسرع (ذروة في 30-60 دقيقة)'
  },
  {
    aspectEn: 'Best For', aspectAr: 'الأفضل لـ',
    valA_En: 'Chronic/Prolonged pain', valA_Ar: 'الألم المزمن أو المستمر',
    valB_En: 'Acute/Sudden pain', valB_Ar: 'الألم الحاد المفاجئ'
  },
  {
    aspectEn: 'Duration', aspectAr: 'مدة التأثير',
    valA_En: 'Longer (6-8 hrs)', valA_Ar: 'أطول (6-8 ساعات)',
    valB_En: 'Shorter (4-6 hrs)', valB_Ar: 'أقصر (4-6 ساعات)'
  },
  {
    aspectEn: 'Stomach Irritation', aspectAr: 'تهيج المعدة',
    valA_En: 'Lower (coated)', valA_Ar: 'أقل قليلاً (مغلف)',
    valB_En: 'Higher (rapid release)', valB_Ar: 'أعلى قليلاً (إفراج سريع)'
  }
];

export const DRUGS: Drug[] = [
  // --- Local Anesthetics ---
  {
    id: 'la1',
    genericName: 'Lidocaine 2%',
    brandNames: ['Xylocaine', 'Lidocaine EIPICO', 'Lidocaine Adwia'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'Standard. Max 7mg/kg (500mg absolute max).',
    descriptionAr: 'القياسي. الحد الأقصى 7 مجم/كجم (500 مجم كحد مطلق).',
    doseEn: 'Max 7mg/kg (w/ Epi)',
    doseAr: 'القصوى 7 مجم/كجم'
  },
  {
    id: 'la2',
    genericName: 'Articaine 4%',
    brandNames: ['Ubistesin Forte', 'Septanest', 'Artinib'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'High bone penetration. Max 7mg/kg (500mg absolute max).',
    descriptionAr: 'اختراق عظمي عالي. الحد الأقصى 7 مجم/كجم (500 مجم كحد مطلق).',
    doseEn: 'Max 7mg/kg',
    doseAr: 'القصوى 7 مجم/كجم'
  },
  {
    id: 'la3',
    genericName: 'Mepivacaine 3%',
    brandNames: ['Scandonest', 'Mepivacaine Adwia'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'No epinephrine (Safe for cardiac). Short duration (20-40 min).',
    descriptionAr: 'بدون إبينفرين (آمن لمرضى القلب). مدة قصيرة (20-40 دقيقة).',
    doseEn: 'Max 6.6mg/kg',
    doseAr: 'القصوى 6.6 مجم/كجم'
  },
  {
    id: 'la4',
    genericName: 'Bupivacaine 0.5%',
    brandNames: ['Marcaine', 'Bupivacaine EIPICO'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'Long acting (4-8 hrs). For long surgeries/post-op pain.',
    descriptionAr: 'تخدير طويل المدى (4-8 ساعات). بطء البدء.',
    doseEn: 'Max 2mg/kg',
    doseAr: 'القصوى 2 مجم/كجم'
  },
  {
    id: 'la5',
    genericName: 'Prilocaine 4%',
    brandNames: ['Citanest'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'Risk of methemoglobinemia. Avoid in congenital heart defects.',
    descriptionAr: 'خطر الميتهيموغلوبينيميا. تجنب في عيوب القلب الخلقية.',
    doseEn: 'Max 8mg/kg',
    doseAr: 'القصوى 8 مجم/كجم'
  },

  // --- Analgesics ---
  {
    id: 'an1',
    genericName: 'Ibuprofen',
    brandNames: ['Brufen', 'Adol', 'Profen'],
    category: 'Analgesic (NSAID)',
    categoryAr: 'مسكنات (NSAID)',
    descriptionEn: 'First line. Anti-inflammatory. Avoid in ulcers/asthma.',
    descriptionAr: 'الخيار الأول. مضاد للالتهاب. ممنوع مع القرحة والربو.',
    doseEn: '400-600mg q6-8h',
    doseAr: '400-600 مجم كل 6-8 ساعات'
  },
  {
    id: 'an2',
    genericName: 'Diclofenac Potassium',
    brandNames: ['Cataflam', 'Catafast', 'Dicloran'],
    category: 'Analgesic (NSAID)',
    categoryAr: 'مسكنات (NSAID)',
    descriptionEn: 'Rapid onset. Stomach/Kidney risk. Max 3 days.',
    descriptionAr: 'سريع المفعول. خطر على المعدة والكلى. لا تتجاوز 3 أيام.',
    doseEn: '50mg q8h',
    doseAr: '50 مجم كل 8 ساعات'
  },
  {
    id: 'an3',
    genericName: 'Ketorolac',
    brandNames: ['Toradol', 'Ketolac'],
    category: 'Analgesic (NSAID)',
    categoryAr: 'مسكنات (NSAID)',
    descriptionEn: 'Severe pain only. Max 5 days. High bleeding risk.',
    descriptionAr: 'للآلام الشديدة. ممنوع > 5 أيام. خطر نزيف.',
    doseEn: '10mg q4-6h',
    doseAr: '10 مجم كل 4-6 ساعات'
  },
  {
    id: 'an4',
    genericName: 'Paracetamol',
    brandNames: ['Panadol', 'Cetal', 'Abimol'],
    category: 'Analgesic',
    categoryAr: 'مسكنات',
    descriptionEn: 'Safe for children/pregnancy. Not anti-inflammatory.',
    descriptionAr: 'الآمن للأطفال والحوامل. لا مضاد للالتهاب.',
    doseEn: '500-1000mg q6h',
    doseAr: '500-1000 مجم كل 6 ساعات'
  },
  {
    id: 'an5',
    genericName: 'Tramadol',
    brandNames: ['Tramal', 'Contramal'],
    category: 'Analgesic (Opioid)',
    categoryAr: 'مسكن (أفيوني)',
    descriptionEn: 'For severe pain. Addictive potential. Prescription only.',
    descriptionAr: 'للآلام الشديدة. يسبب الإدمان. يحتاج وصفة.',
    doseEn: '500-100mg q6h',
    doseAr: '50-100 مجم كل 6 ساعات'
  },

  // --- Antibiotics ---
  {
    id: 'ab1',
    genericName: 'Amoxicillin',
    brandNames: ['Amoxil', 'Amoxytex'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'First line for abscesses. Contraindicated in Penicillin allergy.',
    descriptionAr: 'الخط الأول للخراجات. ممنوع في حساسية البنسلين.',
    doseEn: '500mg q8h',
    doseAr: '500 مجم كل 8 ساعات'
  },
  {
    id: 'ab2',
    genericName: 'Amoxicillin/Clavulanate',
    brandNames: ['Augmentin', 'Curam', 'Clavimox'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'First-line for odontogenic infections. Take with food. Renal adj if CrCl<30.',
    descriptionAr: 'الخط الأول لعدوى الأسنان. يؤخذ مع الطعام. يعدل في الفشل الكلوي.',
    doseEn: '875/125mg q12h OR 1g q12h',
    doseAr: '875/125 مجم كل 12 ساعة أو 1 جم'
  },
  {
    id: 'ab3',
    genericName: 'Clindamycin',
    brandNames: ['Dalacin C', 'Clinzex'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Alternative for Penicillin allergy. Good for bone/anaerobes.',
    descriptionAr: 'بديل لحساسية البنسلين. جيد للعظم والبكتيريا اللاهوائية.',
    doseEn: '300mg q6h',
    doseAr: '300 مجم كل 6 ساعات'
  },
  {
    id: 'ab4',
    genericName: 'Azithromycin',
    brandNames: ['Zithromax', 'Azro'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Penicillin allergy. Once daily. Good compliance.',
    descriptionAr: 'لحساسية البنسلين. جرعة واحدة يومياً.',
    doseEn: '500mg daily x3',
    doseAr: '500 مجم يومياً لمدة 3 أيام'
  },
  {
    id: 'ab5',
    genericName: 'Metronidazole',
    brandNames: ['Flagyl', 'Amrizole'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Anaerobes. Warfarin interaction (↑INR). Disulfiram reaction with alcohol.',
    descriptionAr: 'للاهوائيات. يرفع سيولة الوارفارين. تفاعل خطير مع الكحول.',
    doseEn: '500mg q8h',
    doseAr: '500 مجم كل 8 ساعات'
  },
  {
    id: 'ab6',
    genericName: 'Ciprofloxacin',
    brandNames: ['Ciprobay'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Severe gum infections. Avoid in children/pregnancy.',
    descriptionAr: 'لالتهابات اللثة الشديدة. ممنوع للأطفال والحوامل.',
    doseEn: '500mg q12h',
    doseAr: '500 مجم كل 12 ساعة'
  },
  {
    id: 'ab8',
    genericName: 'Ceftriaxone',
    brandNames: ['Rocephin', 'Cefotrix'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Severe infections. CONTRAINDICATED with Calcium IV (Fatal).',
    descriptionAr: 'للعدوى الشديدة. ممنوع تماماً مع الكالسيوم الوريدي (قاتل).',
    doseEn: '1-2g IV/IM q24h',
    doseAr: '1-2 جرام وريد/عضل كل 24 ساعة'
  },
  {
    id: 'ab10',
    genericName: 'Ampicillin/Sulbactam',
    brandNames: ['Unasyn', 'Ultracillin'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Intra-abdominal, skin infections. IV/IM.',
    descriptionAr: 'لعدوى البطن والجلد. وريد/عضل.',
    doseEn: '1.5-3g IV q6h',
    doseAr: '1.5-3 جرام وريد كل 6 ساعات'
  },
  {
    id: 'ab12',
    genericName: 'Teicoplanin',
    brandNames: ['Targocid'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'For serious MRSA. Not first-line for dental. Ototoxicity risk.',
    descriptionAr: 'لعدوى MRSA الشديدة. ليس خط أول للأسنان. خطر على السمع.',
    doseEn: '400mg q12h x3 doses (Loading)',
    doseAr: 'تحميل 400 مجم كل 12 ساعة (3 جرعات)'
  },

  // --- Cardiovascular ---
  {
    id: 'cv8',
    genericName: 'Warfarin',
    brandNames: ['Coumadin', 'Marevan'],
    category: 'Anticoagulant',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'Target INR 2-3. Stop if INR >3 for surgery. Interact: Metronidazole.',
    descriptionAr: 'الهدف INR 2-3. يوقف للجراحة إذا >3. يتفاعل مع الميترونيدازول.',
    doseEn: 'Target INR 2.0-3.0',
    doseAr: 'حسب تحليل INR'
  },
  {
    id: 'cv9',
    genericName: 'Rivaroxaban',
    brandNames: ['Xarelto'],
    category: 'Anticoagulant (DOAC)',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'Stop 24h pre-op if high bleed risk. Resume 12-24h post-op.',
    descriptionAr: 'يوقف 24 ساعة قبل الجراحة (خطر نزيف عالي). يستأنف بعد 12-24 ساعة.',
    doseEn: '20mg daily',
    doseAr: '20 مجم يومياً'
  },
  {
    id: 'cv2',
    genericName: 'Clopidogrel',
    brandNames: ['Plavix'],
    category: 'Antiplatelet',
    categoryAr: 'مضاد للصفائح',
    descriptionEn: 'Stop 5-7 days pre-op. Interactions with Omeprazole.',
    descriptionAr: 'يوقف 5-7 أيام قبل الجراحة. يتفاعل مع الأوميبرازول.',
    doseEn: '75mg daily',
    doseAr: '75 مجم يومياً'
  },
  {
    id: 'cv10',
    genericName: 'Digoxin',
    brandNames: ['Lanoxin'],
    category: 'Cardiovascular',
    categoryAr: 'القلب والأوعية',
    descriptionEn: 'Limit Epinephrine to 0.04mg. Risk of arrhythmia. Monitor pulse.',
    descriptionAr: 'قلل الإبينفرين لـ 0.04 مجم. خطر عدم انتظام ضربات القلب.',
    doseEn: '0.125-0.25mg daily',
    doseAr: '0.125-0.25 مجم يومياً'
  },

  // --- Neurological ---
  {
    id: 'neur1',
    genericName: 'Gabapentin',
    brandNames: ['Gaptin', 'Neurontin'],
    category: 'Neurological / Anticonvulsant',
    categoryAr: 'أعصاب / مضاد للصرع',
    descriptionEn: 'Neuropathic pain. Titrate slowly.',
    descriptionAr: 'لألم الأعصاب. زد الجرعة تدريجياً.',
    doseEn: 'Start 300mg -> 900-1800mg',
    doseAr: 'ابدأ 300 -> 900-1800 مجم'
  },
  {
    id: 'neur3',
    genericName: 'Phenytoin',
    brandNames: ['Dilantin', 'Epanutin'],
    category: 'Neurological / Anticonvulsant',
    categoryAr: 'أعصاب / مضاد للصرع',
    descriptionEn: 'Causes Gingival Hyperplasia (50%). Meticulous hygiene needed.',
    descriptionAr: 'يسبب تضخم اللثة (50%). يتطلب عناية فائقة بالفم.',
    doseEn: '100mg q8h',
    doseAr: '100 مجم كل 8 ساعات'
  },

  // --- Antiemetics ---
  {
    id: 'ae1',
    genericName: 'Ondansetron',
    brandNames: ['Zofran', 'Danset'],
    category: 'Antiemetic',
    categoryAr: 'مضاد للقيء',
    descriptionEn: 'Post-op nausea. QT risk.',
    descriptionAr: 'غثيان ما بعد الجراحة. خطر QT.',
    doseEn: '4-8mg q8h',
    doseAr: '4-8 مجم كل 8 ساعات'
  },

  // --- Antifungals ---
  {
    id: 'af1',
    genericName: 'Nystatin',
    brandNames: ['Mycostatin'],
    category: 'Antifungal',
    categoryAr: 'مضاد للفطريات',
    descriptionEn: 'Oral candidiasis. Swish & swallow.',
    descriptionAr: 'للفطريات الفموية. مضمضة وبلع.',
    doseEn: '100,000 IU 4x/day',
    doseAr: '100,000 وحدة 4 مرات'
  },

  // --- Emergency ---
  {
    id: 'em1',
    genericName: 'Epinephrine',
    brandNames: ['Adrenaline'],
    category: 'Emergency',
    categoryAr: 'طوارئ',
    descriptionEn: 'Anaphylaxis. 0.3mg IM.',
    descriptionAr: 'للحساسية المفرطة. 0.3 مجم عضل.',
    doseEn: '0.3-0.5mg IM',
    doseAr: '0.3-0.5 مجم عضل'
  }
];

export const GUIDELINES: Guideline[] = []; 
export const INSTRUCTIONS: PatientInstruction[] = [];