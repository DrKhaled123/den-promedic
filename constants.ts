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
    doseEn: '500-100mg q6h',
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

  // --- Antibiotics (Oral) ---
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
    brandNames: ['Flagyl', 'Amrizole', 'Metrogyl'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Anaerobes/Protozoa. Disulfiram reaction with alcohol. Metallic taste.',
    descriptionAr: 'للاهوائيات والطفيليات. تفاعل خطير مع الكحول (Disulfiram-like). طعم معدني.',
    doseEn: '500mg q8h (Max 14 days)',
    doseAr: '500 مجم كل 8 ساعات (حد أقصى 14 يوم)'
  },
  {
    id: 'ab6',
    genericName: 'Ciprofloxacin',
    brandNames: ['Ciprobay'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Severe gum infections. Avoid in children/pregnancy (Cartilage).',
    descriptionAr: 'لالتهابات اللثة الشديدة. ممنوع للأطفال والحوامل (يؤثر على الغضاريف).',
    doseEn: '500mg q12h',
    doseAr: '500 مجم كل 12 ساعة'
  },
  {
    id: 'ab7',
    genericName: 'Doxycycline',
    brandNames: ['Vibramycin'],
    category: 'Antibiotic',
    categoryAr: 'مضاد حيوي',
    descriptionEn: 'Gum infections. Avoid in pregnancy/children (Stains teeth).',
    descriptionAr: 'لالتهابات اللثة. ممنوع للحوامل والأطفال (يصبغ الأسنان).',
    doseEn: '100mg daily',
    doseAr: '100 مجم يومياً'
  },

  // --- New Antibiotics (Injectable/Broad Spectrum) ---
  {
    id: 'ab8',
    genericName: 'Ceftriaxone',
    brandNames: ['Rocephin', 'Epicephin', 'Cefotrix', 'Longacef'],
    category: 'Antibiotic (Cephalosporin)',
    categoryAr: 'مضاد حيوي (سيفالوسبورين)',
    descriptionEn: '3rd Gen. Pneumonia, Meningitis, Sepsis. Single dose for Gonorrhea.',
    descriptionAr: 'جيل ثالث. للالتهاب الرئوي، السحايا، تسمم الدم. جرعة واحدة للسيلان.',
    doseEn: '1-2g IV/IM q24h',
    doseAr: '1-2 جرام وريد/عضل كل 24 ساعة'
  },
  {
    id: 'ab9',
    genericName: 'Cofotaxime',
    brandNames: ['Claforan', 'Ceftax', 'Taxim'],
    category: 'Antibiotic (Cephalosporin)',
    categoryAr: 'مضاد حيوي (سيفالوسبورين)',
    descriptionEn: '3rd Gen. Good CNS penetration. Short half-life (q8h).',
    descriptionAr: 'جيل ثالث. اختراق جيد للسائل الدماغي. عمر نصفي قصير (كل 8 ساعات).',
    doseEn: '1-2g IV/IM q8h',
    doseAr: '1-2 جرام وريد/عضل كل 8 ساعات'
  },
  {
    id: 'ab10',
    genericName: 'Ampicillin/Sulbactam',
    brandNames: ['Unasyn', 'Ampictam', 'Sulbin', 'Ultracillin'],
    category: 'Antibiotic (Penicillin)',
    categoryAr: 'مضاد حيوي (بنسلين)',
    descriptionEn: 'Beta-lactamase inhibitor combo. Intra-abdominal, skin infections.',
    descriptionAr: 'مثبط بيتا لاكتاماز. لعدوى البطن والجلد والأنسجة الرخوة.',
    doseEn: '1.5-3g IV q6h',
    doseAr: '1.5-3 جرام وريد كل 6 ساعات'
  },
  {
    id: 'ab11',
    genericName: 'Cefepime',
    brandNames: ['Maxipime', 'Cifipime'],
    category: 'Antibiotic (Cephalosporin)',
    categoryAr: 'مضاد حيوي (سيفالوسبورين)',
    descriptionEn: '4th Gen. Severe hospital-acquired infections. Neurotoxicity risk in renal failure.',
    descriptionAr: 'جيل رابع. لعدوى المستشفيات الشديدة. خطر سمية عصبية مع الفشل الكلوي.',
    doseEn: '1-2g IV q8-12h',
    doseAr: '1-2 جرام وريد كل 8-12 ساعة'
  },

  // --- Neurological Agents ---
  {
    id: 'neur1',
    genericName: 'Gabapentin',
    brandNames: ['Gaptin', 'Conventin', 'Neurontin', 'Lepticure'],
    category: 'Neurological / Anticonvulsant',
    categoryAr: 'أعصاب / مضاد للصرع',
    descriptionEn: 'Neuropathic pain, PHN, Epilepsy. Titrate slowly to avoid dizziness.',
    descriptionAr: 'لألم الأعصاب، الحزام الناري، الصرع. ابدأ بجرعة صغيرة لتجنب الدوخة.',
    doseEn: 'Start 300mg day 1, ↑ to 900-1800mg/day',
    doseAr: 'ابدأ 300 مجم يوم 1، زد تدريجياً لـ 900-1800 مجم/يوم'
  },
  {
    id: 'neur2',
    genericName: 'Levetiracetam',
    brandNames: ['Keppra', 'Levetiracetam Generics'],
    category: 'Neurological / Anticonvulsant',
    categoryAr: 'أعصاب / مضاد للصرع',
    descriptionEn: 'Focal/Generalized seizures. Behavioral side effects (aggression).',
    descriptionAr: 'للصرع البؤري والعام. قد يسبب تغيرات سلوكية (عدوانية).',
    doseEn: '500mg BID (Maintenance 1000-3000mg/day)',
    doseAr: '500 مجم مرتين يومياً'
  },

  // --- Antiemetics ---
  {
    id: 'ae1',
    genericName: 'Ondansetron',
    brandNames: ['Zofran', 'Danset', 'Onset'],
    category: 'Antiemetic',
    categoryAr: 'مضاد للقيء',
    descriptionEn: 'Post-op/Chemo nausea. QT prolongation risk.',
    descriptionAr: 'لقيء ما بعد العمليات/الكيماوي. خطر على كهرباء القلب (QT).',
    doseEn: '4-8mg IV/PO q8h',
    doseAr: '4-8 مجم وريد/فم كل 8 ساعات'
  },
  {
    id: 'ae2',
    genericName: 'Metoclopramide',
    brandNames: ['Primperan', 'Cerucal'],
    category: 'Antiemetic',
    categoryAr: 'مضاد للقيء',
    descriptionEn: 'Gastroparesis, GERD. Risk of Extrapyramidal symptoms (Dystonia).',
    descriptionAr: 'لشلل المعدة والارتجاع. خطر أعراض خارج هرمية (تشنجات) خاصة الأطفال.',
    doseEn: '10mg IV/PO q8h (Max 5 days)',
    doseAr: '10 مجم وريد/فم كل 8 ساعات'
  },
  {
    id: 'ae3',
    genericName: 'Domperidone',
    brandNames: ['Motilium', 'Gastromotil'],
    category: 'Antiemetic',
    categoryAr: 'مضاد للقيء',
    descriptionEn: 'Nausea/Dyspepsia. QT risk. Contraindicated with CYP3A4 inhibitors.',
    descriptionAr: 'للغثيان وعسر الهضم. ممنوع مع مثبطات CYP3A4 (مثل الفلوكونازول).',
    doseEn: '10mg PO q8h',
    doseAr: '10 مجم فم كل 8 ساعات'
  },

  // --- Cardiovascular (Anticoagulants/Antiplatelets/Arrhythmia) ---
  {
    id: 'cv1',
    genericName: 'Amiodarone',
    brandNames: ['Cordarone'],
    category: 'Antiarrhythmic',
    categoryAr: 'مضاد لعدم انتظام ضربات القلب',
    descriptionEn: 'Life-threatening arrhythmias. Toxicity: Thyroid, Lung, Liver, Cornea.',
    descriptionAr: 'لضربات القلب الخطيرة. سمية محتملة: الغدة الدرقية، الرئة، الكبد، العين.',
    doseEn: 'Maintenance 200-400mg/day',
    doseAr: 'الاستمرارية 200-400 مجم/يوم'
  },
  {
    id: 'cv2',
    genericName: 'Clopidogrel',
    brandNames: ['Plavix', 'Clopidogrel'],
    category: 'Antiplatelet',
    categoryAr: 'مضاد للصفائح',
    descriptionEn: 'Post-stent/MI. Stop 5-7 days pre-op. Interactions with Omeprazole.',
    descriptionAr: 'بعد الدعامات/الجلطات. يوقف 5-7 أيام قبل الجراحة. يتفاعل مع الأوميبرازول.',
    doseEn: '75mg daily',
    doseAr: '75 مجم يومياً'
  },
  {
    id: 'cv3',
    genericName: 'Aspirin',
    brandNames: ['Aspirin Protect', 'Aspocid'],
    category: 'Antiplatelet / NSAID',
    categoryAr: 'مضاد للصفائح / مسكن',
    descriptionEn: 'Cardio-protection. GI bleeding risk. Stop 5-7 days pre-op (Major surgery).',
    descriptionAr: 'حماية للقلب. خطر نزيف المعدة. يوقف 5-7 أيام قبل الجراحات الكبرى.',
    doseEn: '75-100mg daily (Prevention)',
    doseAr: '75-100 مجم يومياً (وقاية)'
  },
  {
    id: 'cv4',
    genericName: 'Heparin (Unfractionated)',
    brandNames: ['Heparin'],
    category: 'Anticoagulant',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'Acute VTE/ACS. Monitor aPTT. Risk of HIT.',
    descriptionAr: 'للجلطات الحادة. يحتاج مراقبة تحليل aPTT. خطر نقص الصفائح (HIT).',
    doseEn: 'Protocol based (IV Infusion)',
    doseAr: 'حسب البروتوكول (وريد)'
  },
  {
    id: 'cv5',
    genericName: 'Enoxaparin',
    brandNames: ['Clexane', 'Lovenox'],
    category: 'Anticoagulant (LMWH)',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'VTE prophylaxis/treatment. Renally adjusted. No monitoring usually.',
    descriptionAr: 'للوقاية/علاج الجلطات. يعدل لمرضى الكلى. لا يحتاج مراقبة روتينية.',
    doseEn: '40mg SC daily (Prophylaxis)',
    doseAr: '40 مجم تحت الجلد يومياً (وقاية)'
  },
  {
    id: 'cv6',
    genericName: 'Apixaban',
    brandNames: ['Eliquis'],
    category: 'Anticoagulant (DOAC)',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'Stroke prevention/VTE. No INR needed. Stop 48h pre-op (High risk).',
    descriptionAr: 'للوقاية من الجلطات. لا يحتاج تحليل سيولة. يوقف 48 ساعة قبل الجراحة.',
    doseEn: '5mg BID',
    doseAr: '5 مجم مرتين يومياً'
  },
  {
    id: 'cv7',
    genericName: 'Fondaparinux',
    brandNames: ['Arixtra'],
    category: 'Anticoagulant',
    categoryAr: 'مضاد للتجلط',
    descriptionEn: 'VTE prophylaxis. Synthetic anti-Xa. No HIT risk.',
    descriptionAr: 'للوقاية من الجلطات. لا يسبب نقص الصفائح المناعي (HIT).',
    doseEn: '2.5mg SC daily',
    doseAr: '2.5 مجم تحت الجلد يومياً'
  },

  // --- GI Agents ---
  {
    id: 'gi1',
    genericName: 'Lactulose',
    brandNames: ['Duphalac', 'Sedolac'],
    category: 'Laxative',
    categoryAr: 'ملين',
    descriptionEn: 'Constipation, Hepatic Encephalopathy. Safe in pregnancy.',
    descriptionAr: 'للإمساك والغيبوبة الكبدية. آمن للحوامل.',
    doseEn: '15-30ml daily',
    doseAr: '15-30 مل يومياً'
  },
  {
    id: 'gi2',
    genericName: 'Omeprazole / Pantoprazole',
    brandNames: ['Losec', 'Controloc', 'Omez', 'Zurcal'],
    category: 'PPI (Stomach)',
    categoryAr: 'معدة (PPI)',
    descriptionEn: 'GERD, Ulcers. Omeprazole inhibits Clopidogrel (Use Pantoprazole).',
    descriptionAr: 'للحموضة والقرحة. الأوميبرازول يضعف البلافيكس (استخدم بانتوبرازول).',
    doseEn: '20-40mg daily (Empty stomach)',
    doseAr: '20-40 مجم يومياً (على معدة فارغة)'
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