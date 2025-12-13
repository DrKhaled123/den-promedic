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
    descriptionEn: 'Most common. Duration 60-90 min. Contraindicated in amide allergy.',
    descriptionAr: 'الأكثر شيوعًا في مصر. فعال لمدة 60-90 دقيقة. ممنوع في حالات فرط الحساسية للأميدات.',
    doseEn: 'Max 7mg/kg (w/ Epi)',
    doseAr: 'القصوى 7 مجم/كجم'
  },
  {
    id: 'la2',
    genericName: 'Articaine 4%',
    brandNames: ['Ubistesin Forte', 'Septanest', 'Artinib'],
    category: 'Local Anesthetic',
    categoryAr: 'مخدر موضعي',
    descriptionEn: 'High bone penetration. Ideal for mandibular molars. Duration 45-60 min.',
    descriptionAr: 'أقوى انتشارًا في العظم. مثالي لخلع الضروس السفلية. مدة التأثير 45-60 دقيقة.',
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
    descriptionEn: 'Long acting (4-8 hrs). For long surgeries/post-op pain. Slow onset.',
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
    descriptionEn: 'Alternative for cardiac patients. Risk of methemoglobinemia.',
    descriptionAr: 'بديل لمرضى القلب. خطر الميتهيموغلوبينيميا عند الأطفال.',
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
    descriptionEn: 'First line for dental pain. Anti-inflammatory. Avoid in ulcers/asthma.',
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
    descriptionEn: 'Strongest NSAID. Severe pain only. Max 5 days. High bleeding risk.',
    descriptionAr: 'أقوى مسكن. للآلام الشديدة. ممنوع > 5 أيام. خطر نزيف.',
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
    doseEn: '50-100mg q6h',
    doseAr: '50-100 مجم كل 6 ساعات'
  },
  {
    id: 'an6',
    genericName: 'Mefenamic Acid',
    brandNames: ['Ponstan', 'Mefacit'],
    category: 'Analgesic (NSAID)',
    categoryAr: 'مسكنات (NSAID)',
    descriptionEn: 'Anti-inflammatory. Good for pulpitis. May cause diarrhea.',
    descriptionAr: 'مضاد للالتهاب. جيد لالتهاب اللب. قد يسبب إسهال.',
    doseEn: '500mg q8h',
    doseAr: '500 مجم كل 8 ساعات'
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
    brandNames: ['Augmentin', 'Curam', 'Amoclan', 'Clavimox'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Strongest for resistant infections. Diarrhea risk.',
    descriptionAr: 'الأقوى للالتهابات المقاومة. خطر الإسهال.',
    doseEn: '625mg/1g q12h',
    doseAr: '625 مجم أو 1 جرام كل 12 ساعة'
  },
  {
    id: 'ab3',
    genericName: 'Clindamycin',
    brandNames: ['Dalacin C', 'Clinzex'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Alternative for Penicillin allergy. Anaerobes.',
    descriptionAr: 'بديل لحساسية البنسلين. للبكتيريا اللاهوائية.',
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
    descriptionEn: 'Anaerobes only. NO ALCOHOL.',
    descriptionAr: 'للاهوائيات فقط. ممنوع الكحول.',
    doseEn: '500mg q8h',
    doseAr: '500 مجم كل 8 ساعات'
  },
  {
    id: 'ab6',
    genericName: 'Ciprofloxacin',
    brandNames: ['Ciprobay'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Severe gum infections. Avoid in children.',
    descriptionAr: 'لالتهابات اللثة الشديدة. لا يستخدم للأطفال.',
    doseEn: '500mg q12h',
    doseAr: '500 مجم كل 12 ساعة'
  },
  {
    id: 'ab7',
    genericName: 'Doxycycline',
    brandNames: ['Vibramycin'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Gum infections. Avoid in pregnancy/children.',
    descriptionAr: 'لالتهابات اللثة. ممنوع للحوامل والأطفال.',
    doseEn: '100mg daily',
    doseAr: '100 مجم يومياً'
  },

  // --- Antifungals ---
  {
    id: 'af1',
    genericName: 'Nystatin',
    brandNames: ['Mycostatin', 'Nystatin EIPICO'],
    category: 'Antifungal',
    categoryAr: 'مضاد للفطريات',
    descriptionEn: 'Oral candidiasis. Swish and spit/swallow.',
    descriptionAr: 'للفطريات الفموية. يمسح أو يمضمض.',
    doseEn: '100,000 IU 4x/day',
    doseAr: '100,000 وحدة 4 مرات يومياً'
  },
  {
    id: 'af2',
    genericName: 'Miconazole',
    brandNames: ['Daktarin Gel', 'Miconaz'],
    category: 'Antifungal',
    categoryAr: 'مضاد للفطريات',
    descriptionEn: 'Oral gel. Warning: Warfarin interaction.',
    descriptionAr: 'جل فموي. تحذير: تفاعل مع الوارفارين.',
    doseEn: '2.5ml 4x/day',
    doseAr: '2.5 مل 4 مرات يومياً'
  },
  {
    id: 'af3',
    genericName: 'Fluconazole',
    brandNames: ['Diflucan'],
    category: 'Antifungal',
    categoryAr: 'مضاد للفطريات',
    descriptionEn: 'Systemic for chronic cases.',
    descriptionAr: 'للحالات المزمنة.',
    doseEn: '50mg daily',
    doseAr: '50 مجم يومياً'
  },

  // --- Antiseptics ---
  {
    id: 'as1',
    genericName: 'Chlorhexidine 0.12%',
    brandNames: ['Corsodyl', 'Orovex'],
    category: 'Antiseptic',
    categoryAr: 'مطهر',
    descriptionEn: 'Gold standard for gingivitis. Stains teeth.',
    descriptionAr: 'الأفضل للثة. يصبغ الأسنان بعد أسبوعين.',
    doseEn: 'Rinse bid',
    doseAr: 'مضمضة مرتين يومياً'
  },
  {
    id: 'as2',
    genericName: 'Povidone-Iodine',
    brandNames: ['Betadine'],
    category: 'Antiseptic',
    categoryAr: 'مطهر',
    descriptionEn: 'Pre-op antiseptic. Iodine allergy risk.',
    descriptionAr: 'مطهر قبل الجراحة. خطر حساسية اليود.',
    doseEn: 'Rinse',
    doseAr: 'مضمضة'
  },

  // --- Corticosteroids ---
  {
    id: 'cs1',
    genericName: 'Dexamethasone',
    brandNames: ['Epidron', 'Dexamethasone'],
    category: 'Corticosteroid',
    categoryAr: 'كورتيزون',
    descriptionEn: 'For severe swelling. Avoid in diabetics.',
    descriptionAr: 'للتورم الشديد. تجنب في مرضى السكري.',
    doseEn: '4-8mg pre-op',
    doseAr: '4-8 مجم قبل الجراحة'
  },

  // --- Emergency ---
  {
    id: 'em1',
    genericName: 'Epinephrine 1:1000',
    brandNames: ['Adrenaline'],
    category: 'Emergency',
    categoryAr: 'طوارئ',
    descriptionEn: 'For Anaphylaxis. 0.3-0.5mg IM.',
    descriptionAr: 'لصدمة الحساسية. 0.3-0.5 مجم عضل.',
    doseEn: '0.3-0.5mg IM',
    doseAr: '0.3-0.5 مجم عضل'
  },
  {
    id: 'em2',
    genericName: 'Hydrocortisone',
    brandNames: ['Solu-Cortef'],
    category: 'Emergency',
    categoryAr: 'طوارئ',
    descriptionEn: 'For shock/severe allergic reaction.',
    descriptionAr: 'للصدمة والحساسية الشديدة.',
    doseEn: '100mg IV',
    doseAr: '100 مجم وريد'
  },
  
  // --- Other ---
  {
    id: 'ot1',
    genericName: 'Alvogyl',
    brandNames: ['Alvogyl', 'Septodont'],
    category: 'Dry Socket',
    categoryAr: 'سنخ جاف',
    descriptionEn: 'Instantly relieves dry socket pain.',
    descriptionAr: 'يخفف ألم السنخ الجاف فوراً.',
    doseEn: 'Local app',
    doseAr: 'تطبيق موضعي'
  },
  {
    id: 'ot2',
    genericName: 'Tranexamic Acid',
    brandNames: ['Kapron', 'Cyklokapron'],
    category: 'Hemostatic',
    categoryAr: 'وقف النزيف',
    descriptionEn: 'For bleeding. Local or systemic.',
    descriptionAr: 'للنزيف. موضعي أو جهازي.',
    doseEn: '500mg',
    doseAr: '500 مجم'
  }
];

// NOTE: GUIDELINES and INSTRUCTIONS are removed from here as they are now fully implemented 
// as rich UI components in ClinicalGuidelines.tsx and PatientInstructions.tsx respectively.
export const GUIDELINES: Guideline[] = []; 
export const INSTRUCTIONS: PatientInstruction[] = [];
