// ═══ DATA ═══
const SERVICES_DATA = {
  ar: [
    {icon:'✈️',badge:'الأكثر شعبية',title:'حجز الطيران',desc:'ابحث واحجز تذاكر الطيران من 500+ شركة طيران عالمية مع مقارنة فورية للأسعار.',tags:['مصر للطيران','الإمارات','قطر','تركيش','فلاي دبي']},
    {icon:'🏨',badge:'أفضل قيمة',title:'حجز الفنادق',desc:'اختر من مليون+ فندق ومنتجع وإقامات بوتيكية مع تقييمات حقيقية وضمان أفضل سعر.',tags:['5 نجوم','شواطئ','بودجت','فاخرة','منتجعات']},
    {icon:'🚗',badge:'سريع وسهل',title:'وسائل النقل',desc:'احجز نقل المطار، استأجر سيارات، وجد خيارات النقل المحلي الأفضل في كل وجهة.',tags:['نقل مطار','تأجير سيارات','ليموزين','قطار','باص']},
    {icon:'🤖',badge:'AI مدعوم',title:'تخطيط الرحلة',desc:'برنامج رحلات ذكي بالذكاء الاصطناعي يصمم خططاً مخصصة يوماً بيوم بناءً على اهتماماتك.',tags:['جولة القاهرة','رحلة إسطنبول','شهر العسل','عائلات','منفرد']},
    {icon:'💳',badge:'متعدد العملات',title:'دفع ذكي',desc:'ادفع بـ EGP, USD, EUR, SAR, AED أو 50+ عملة مع تأكيد فوري وتشفير كامل.',tags:['EGP','USD','EUR','SAR','AED']},
    {icon:'🛡️',badge:'24/7 متاح',title:'دعم الطوارئ',desc:'زر طوارئ فوري مع وصول سريع للسفارات والمستشفيات ومشاركة الموقع للأمان.',tags:['زر SOS','أرقام سفارات','أقرب مستشفى','مشاركة موقع','تأمين']},
    {icon:'🕌',badge:'حصري',title:'الحج والعمرة',desc:'باقات حج وعمرة متكاملة مع جولات مُرشَدة ومساعدة في التأشيرة والإقامة.',tags:['عمرة رمضان','عمرة شهرية','حج 2026','باقات جماعية','VIP']},
    {icon:'📸',badge:'جديد',title:'مذكرات السفر',desc:'وثّق رحلاتك بالصور والملاحظات والذكريات. شارك قصص سفرك مع مجتمعنا.',tags:['ألبوم صور','مذكرات','تاريخ الرحلات','الشبكة الاجتماعية','مشاركة']},
  ],
  en: [
    {icon:'✈️',badge:'Most Popular',title:'Flight Booking',desc:'Search and book flights from 500+ airlines worldwide with real-time price comparison.',tags:['EgyptAir','Emirates','Qatar','Turkish','FlyDubai']},
    {icon:'🏨',badge:'Best Value',title:'Hotel Booking',desc:'Choose from 1M+ hotels, resorts and boutique stays with verified reviews and best price guarantee.',tags:['5-Star','Beach','Budget','Luxury','Resorts']},
    {icon:'🚗',badge:'Fast & Easy',title:'Transport',desc:'Book airport transfers, rent cars, and find the best local transport options at every destination.',tags:['Airport Transfer','Car Rental','Limousine','Train','Bus']},
    {icon:'🤖',badge:'AI Powered',title:'Trip Planning',desc:'AI-powered itinerary builder creates personalized day-by-day travel plans based on your interests.',tags:['Cairo Tour','Istanbul Trip','Honeymoon','Family','Solo']},
    {icon:'💳',badge:'Multi-Currency',title:'Smart Payments',desc:'Pay in EGP, USD, EUR, SAR, AED or 50+ currencies with instant confirmation and full encryption.',tags:['EGP','USD','EUR','SAR','AED']},
    {icon:'🛡️',badge:'24/7 Available',title:'Emergency Support',desc:'Instant emergency button with quick access to embassies, hospitals and location sharing for safety.',tags:['SOS Button','Embassy Numbers','Nearest Hospital','Location Share','Insurance']},
    {icon:'🕌',badge:'Exclusive',title:'Hajj & Umrah',desc:'Complete Hajj and Umrah packages with guided tours, visa assistance and accommodation.',tags:['Ramadan Umrah','Monthly Umrah','Hajj 2026','Group Packages','VIP']},
    {icon:'📸',badge:'New',title:'Trip Journal',desc:'Document your trips with photos, notes and memories. Share your travel stories with our community.',tags:['Photo Album','Diary','Trip History','Social','Share']},
  ]
};

const FEATURES_DATA = [
  {emoji:'🤖',title:'ذكاء اصطناعي',desc:'اقتراحات رحلات مخصصة لك بناءً على اهتماماتك وميزانيتك وسلوكك السابق'},
  {emoji:'📶',title:'Offline Mode',desc:'استخدم التطبيق بدون إنترنت، خرائطك وحجوزاتك دائماً معاك'},
  {emoji:'💰',title:'Budget Tracker',desc:'تتبع مصاريفك لحظة بلحظة وامنع تجاوز الميزانية مع تقارير تفصيلية'},
  {emoji:'💳',title:'Travel Wallet',desc:'محفظة إلكترونية متكاملة مع كاشباك عند كل حجز وعروض حصرية'},
  {emoji:'🎮',title:'Gamification',desc:'اكسب نقاط مع كل رحلة واستبدلها بخصومات ومكافآت حصرية'},
  {emoji:'📸',title:'Trip Journal',desc:'سجل ذكريات رحلاتك بصور وملاحظات وشاركها مع أحبائك'},
  {emoji:'🌍',title:'ترجمة فورية',desc:'ترجمة فورية لأي لغة في العالم لتتواصل بسهولة في أي مكان'},
  {emoji:'💱',title:'متعدد العملات',desc:'ادفع بأي عملة عالمية مع تحويل فوري ومعدلات صرف محدثة'},
  {emoji:'🔔',title:'إشعارات ذكية',desc:'تنبيهات مخصصة لمواعيد رحلاتك وأفضل العروض القريبة منك'},
];

const WHY_FEATURES = [
  {icon:'🚀',title:'كل شيء في مكان واحد',desc:'طيران، فنادق، نقل، تخطيط، دفع، طوارئ — بدون تبديل تطبيقات.'},
  {icon:'🔒',title:'الأمان أولاً',desc:'تشفير من درجة البنوك، حماية بياناتك، وزر طوارئ فوري أينما كنت.'},
  {icon:'💡',title:'ذكاء اصطناعي حقيقي',desc:'تحليل تفضيلاتك وبناء خطة رحلة مثالية تناسب ذوقك وميزانيتك.'},
  {icon:'🌐',title:'يعمل بدون إنترنت',desc:'حجوزاتك وخرائطك معاك حتى في أضعف المناطق من التغطية.'},
];

const DEST_DATA = [
  {cat:'egypt',img:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80&fit=crop',badge:'local',country:'🇪🇬 مصر',name:'القاهرة',price:'من 1,200 ج.م'},
  {cat:'egypt',img:'https://images.unsplash.com/photo-1687787416048-d7acdd89bfc3?w=600&q=80&fit=crop',badge:'local',country:'🇪🇬 مصر',name:'الغردقة',price:'من 2,500 ج.م'},
  {cat:'egypt',img:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&q=80&fit=crop',badge:'local',country:'🇪🇬 مصر',name:'شرم الشيخ',price:'من 3,200 ج.م'},
  {cat:'gulf',img:'https://images.unsplash.com/photo-1724887153804-4e60725f35ba?w=600&q=80&fit=crop',badge:'popular',country:'🇦🇪 الإمارات',name:'دبي',price:'من 4,500 ج.م'},
  {cat:'gulf',img:'https://images.unsplash.com/photo-1709115543911-40a126151fd4?w=600&q=80&fit=crop',badge:'business',country:'🇸🇦 السعودية',name:'الرياض',price:'من 3,800 ج.م'},
  {cat:'gulf',img:'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80&fit=crop',badge:'holy',country:'🇸🇦 السعودية',name:'مكة المكرمة',price:'من 6,000 ج.م'},
  {cat:'europe',img:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop',badge:'trending',country:'🇹🇷 تركيا',name:'إسطنبول',price:'من 5,500 ج.م'},
  {cat:'europe',img:'https://images.unsplash.com/photo-1646513631009-4efa641e144e?w=600&q=80&fit=crop',badge:'premium',country:'🇫🇷 فرنسا',name:'باريس',price:'من 18,500 ج.م'},
  {cat:'asia',img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&fit=crop',badge:'value',country:'🇯🇵 اليابان',name:'طوكيو',price:'من 18,000 ج.م'},
  {cat:'asia',img:'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80&fit=crop',badge:'value',country:'🇹🇭 تايلاند',name:'بانكوك',price:'من 8,500 ج.م'},
  {cat:'africa',img:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop',badge:'trending',country:'🇰🇪 كينيا',name:'نيروبي',price:'من 14,000 ج.م'},
  {cat:'egypt',img:'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&fit=crop',badge:'local',country:'🇪🇬 مصر',name:'الأقصر وأسوان',price:'من 1,800 ج.م'},
];

const PACKAGES_DATA = [
  {name:'🏺 رحلة الأهرامات الذهبية',price:'3,500',period:'للشخص',desc:'باقة 5 أيام شاملة في القاهرة مع فندق 4 نجوم والجولات الكاملة',features:['طيران ذهاب وإياب','فندق 4 نجوم مع إفطار','جولة الأهرامات','وسائل نقل','مرشد سياحي'],badge:'الأكثر حجزاً',featured:false},
  {name:'🌊 شرم الشيخ بريميوم',price:'5,800',period:'للشخص',desc:'باقة 7 أيام فاخرة مع فندق 5 نجوم وأنشطة غوص مميزة',features:['إقامة 5 نجوم','جلسات غوص مع مدرب','جولات القوارب','سبا ومساج','وجبات مدمجة'],badge:'⭐ الأفضل قيمة',featured:true},
  {name:'✈️ دبي الساحرة',price:'8,900',period:'للشخص',desc:'باقة 6 أيام تشمل أفضل الفنادق والتسوق والمعالم الشهيرة',features:['تأشيرة مشمولة','فندق وسط المدينة','دخول برج خليفة','صحراء سفاري','عروض دبي'],badge:null,featured:false},
  {name:'🕌 عمرة مميزة',price:'9,200',period:'للشخص',desc:'باقة عمرة متكاملة تشمل الطيران والإقامة قرب الحرم',features:['تأشيرة عمرة','إقامة قرب الحرم','طيران + نقل','مرشد ديني','تقييم 4 نجوم'],badge:'🕌 مميزة',featured:false},
  {name:'🏛️ روما وباريس',price:'18,500',period:'للشخص',desc:'جولة أوروبية 10 أيام تجمع بين سحر روما وجمال باريس',features:['رحلة أوروبية','تأشيرة شنغن','فنادق بوتيك','جولات تاريخية','قطار روما-باريس'],badge:'🌟 فاخرة',featured:false},
  {name:'🦁 سفاري أفريقيا',price:'22,000',period:'للشخص',desc:'مغامرة سفاري 8 أيام في كينيا مع أفضل المخيمات الفاخرة',features:['طبيعة فريدة','مخيمات فاخرة','سفاري يومي','طبيب مرافق','تغطية تأمينية'],badge:'🦁 مغامرة',featured:false},
];

const REVIEWS_DATA = [
  {stars:5,text:'Voiago غيّر طريقة سفري تماماً. كنت أستخدم 5 تطبيقات مختلفة — الآن كل شيء في مكان واحد. حجزت الطيران والفندق ونقل المطار في 10 دقائق!',name:'أحمد حسن',loc:'مسافر متكرر، القاهرة',trip:'القاهرة ← إسطنبول',avatar:'https://i.pravatar.cc/44?img=11'},
  {stars:5,text:'التطبيق رائع جداً! سهل الاستخدام والأسعار تنافسية. خاصية تتبع الميزانية ساعدتني كثيراً في إدارة مصاريف الرحلة.',name:'سارة محمد',loc:'مسافرة عائلية، الإسكندرية',trip:'شرم الشيخ ← دبي',avatar:'https://i.pravatar.cc/44?img=5'},
  {stars:5,text:'حجزت باقة العمرة من خلال Voiago وكانت التجربة استثنائية. الخدمة ممتازة والأسعار معقولة جداً.',name:'محمد علي',loc:'حاج معتمر، أسيوط',trip:'القاهرة ← مكة المكرمة',avatar:'https://i.pravatar.cc/44?img=15'},
  {stars:5,text:'أفضل تطبيق سفر جربته. المساعد الذكي اقترح لي وجهات ما كنت أفكر فيها، وكانت تجربة لا تُنسى!',name:'نور الهدى',loc:'مسافرة منفردة، القاهرة',trip:'القاهرة ← باريس',avatar:'https://i.pravatar.cc/44?img=9'},
];

const FAQ_DATA = [
  {q:'هل Voiago آمن لمعلوماتي البنكية؟',a:'نعم، جميع المدفوعات تتم عبر بوابات دفع معتمدة ومشفرة بشهادة SSL 256-bit. لا نخزن بيانات بطاقاتك مطلقاً.'},
  {q:'هل أقدر أحجز وأنا في أي بلد؟',a:'بالتأكيد! Voiago يعمل في جميع أنحاء العالم ويدعم جميع العملات الرئيسية. احجز من أي مكان وأي وقت.'},
  {q:'ما الفرق بين الحساب المجاني والـ Premium؟',a:'الحساب المجاني يتيح البحث وحجز واحد شهرياً. Premium يتيح حجوزات غير محدودة، Travel Wallet، كاشباك، عروض حصرية، وذكاء اصطناعي كامل.'},
  {q:'كيف ألغي حجزي؟',a:'يمكنك إلغاء الحجز من داخل التطبيق في أي وقت. الاسترداد يتم حسب سياسة مزود الخدمة. في الغالب حجوزات الطيران والفنادق لها فترة إلغاء مجاني.'},
  {q:'هل التطبيق يعمل بدون إنترنت؟',a:'نعم! بفضل ميزة Offline Mode، خرائطك وحجوزاتك ومعلومات طوارئك متاحة دائماً حتى بدون اتصال بالإنترنت.'},
  {q:'كيف يعمل برنامج النقاط والمكافآت؟',a:'تكسب نقاط مع كل حجز أو استخدام للتطبيق. النقاط تستبدل بخصومات أو حجوزات مجانية أو هدايا من شركائنا.'},
];

// ═══ TRANSLATIONS ═══
const LANG = {
  ar: {
    // NAV
    nav_about:'من نحن', nav_services:'الخدمات', nav_dest:'الوجهات',
    nav_packages:'الباقات', nav_hajj:'الحج والعمرة',
    nav_pricing:'الأسعار', nav_contact:'تواصل معنا',
    nav_signin:'تسجيل الدخول', nav_start:'إنشاء حساب',

    // HERO
    hero_badge:'أذكى طريقة للسفر',
    hero_t1:'تطبيق واحد.',
    hero_t2:'لكل رحلة.',
    hero_t3:'بدون متاعب.',
    hero_sub:'خطط، احجز، ادفع، وسافر بذكاء. Voiago يجمع الطيران والفنادق والنقل ودعم الطوارئ في منصة واحدة.',
    hero_cta1:'🚀 ابدأ رحلتك مجاناً', hero_cta2:'🔍 استكشف الخدمات',

    // SEARCH
    search_dest:'الوجهة', search_date:'تاريخ السفر',
    search_type:'نوع الرحلة', search_btn:'بحث',

    // STATS
    stat_travelers:'مسافر سعيد', stat_dest:'وجهة',
    stat_rating:'تقييم التطبيق', stat_support:'دعم مستمر',

    // SERVICES
    services_tag:'خدماتنا', services_title:'كل خدمات السفر. منصة واحدة.',
    services_sub:'لا مزيد من التنقل بين التطبيقات. Voiago هي أول منصة تجمع كل خدمة سفر في مكان واحد.',

    // DESTINATIONS
    dest_tag:'الوجهات', dest_title:'إلى أين تريد أن تذهب؟',
    dest_sub:'من عجائب مصر المحلية إلى أبرز المعالم الدولية — Voiago يغطي كل وجهة تحلم بها.',
    dest_all:'الكل', dest_egypt:'مصر', dest_gulf:'الخليج',
    dest_europe:'أوروبا', dest_asia:'آسيا', dest_africa:'أفريقيا',
    dest_viewall:'عرض كل الوجهات',
    dest_booknow:'احجز الآن',
    // SERVICES
    svc_tag:'خدماتنا', svc_title:'كل ما تحتاجه في مكان واحد',
    svc_sub:'لا تحتاج إلى تطبيقات متعددة. Voiago يقدم لك كل خدمات السفر بشكل متكامل وذكي.',

    // PACKAGES
    pkg_tag:'الباقات', pkg_title:'باقات سفر مميزة',
    pkg_sub:'باقات متكاملة منظمة لأجمل الوجهات بأفضل الأسعار مع خدمة 5 نجوم',

    // PRICING
    pricing_tag:'الاشتراكات', pricing_title:'اختر باقتك',
    pricing_sub:'ابدأ مجاناً أو احصل على المزايا الكاملة مع Premium',
    plan_free:'مجاني', plan_free_sub:'مجاناً للأبد',
    plan_start:'ابدأ مجاناً', plan_popular:'الأكثر شعبية',
    plan_premium:'Premium', plan_premium_sub:'ج.م / شهر',
    plan_get:'احصل عليه الآن',
    plan_biz:'Business', plan_biz_sub:'ج.م / شهر',
    plan_contact:'تواصل للأعمال',

    // OFFERS
    offers_tag:'عروض حصرية', offers_title:'عروض لا تفوتك',
    offers_sub:'صفقات محدودة منتقاة بعناية لمسافري Voiago. احجز الآن قبل أن تنتهي.',
    offer1_t:'وفّر 20% على الطيران',
    offer1_d:'احجز رحلات الصيف الآن واحصل على خصم حصري على جميع الرحلات الدولية من القاهرة.',
    offer2_t:'أقِم أكثر، ادفع أقل',
    offer2_d:'احجز 3 ليالٍ أو أكثر في أي فندق شريك واستمتع بخصم 15%. سارٍ في دبي وإسطنبول وباريس.',
    offer3_t:'باقة دبي الشاملة',
    offer3_d:'طيران + فندق + جولات في باقة واحدة لا تُقاوَم. 7 ليالٍ من القاهرة ابتداءً من 8,900 ج.م.',
    offer_claim:'احصل عليه', offer_book:'احجز الآن',

    // HAJJ
    hajj_tag:'الحج والعمرة', hajj_title:'رحلات الحج والعمرة',
    hajj_sub:'نقدم باقات مميزة للحج والعمرة بأفضل الأسعار مع خدمة متكاملة وإشراف طوال الرحلة',
    hajj1_t:'عمرة رمضان', hajj1_d:'باقات عمرة خاصة خلال شهر رمضان المبارك تشمل الطيران والإقامة والنقل والمرشد', hajj1_p:'من 8,500 ج.م',
    hajj2_t:'عمرة طوال العام', hajj2_d:'رحلات عمرة شهرية على مدار العام، تناسب جميع الميزانيات مع إمكانية التخصيص الكامل', hajj2_p:'من 6,200 ج.م',
    hajj3_t:'موسم الحج 2026', hajj3_d:'سجل مبكراً لباقات الحج المنظمة مع أفضل الفنادق القريبة من المسجد الحرام والخدمات الكاملة', hajj3_p:'من 35,000 ج.م',
    hajj_book:'احجز الآن', hajj_register:'سجّل الآن',

    // DOWNLOAD
    dl_tag:'التطبيق', dl_title:'سافر أذكى من هاتفك',
    dl_sub:'احصل على تجربة Voiago الكاملة على جهازك المحمول.',
    dl_f1:'احجز في أقل من 60 ثانية', dl_f2:'أمان بمستوى البنوك',
    dl_f3:'يعمل بدون إنترنت', dl_f4:'إشعارات فورية',
    dl_f5:'متعدد العملات — EGP, USD, EUR, SAR, AED +50',
    dl_f6:'اقتراحات رحلات بالذكاء الاصطناعي',
    dl_rating:'تقييم', dl_downloads:'تحميل', dl_size:'حجم',
    qr_title:'امسح للتحميل', qr_sub:'وجّه كاميرا هاتفك لتحميل Voiago فوراً',
    qr_download:'تحميل التطبيق',

    // PARTNERS
    partners_tag:'شركاؤنا', partners_title:'موثوق من كبرى العلامات العالمية',
    partners_sub:'نتعاون مع أفضل شركات الطيران والفنادق وخدمات السفر لنضمن لك أفضل العروض.',
    partner_join:'انضم كشريك', partner_learn:'اعرف أكثر',

    // SEARCH OPTIONS
    type_flight:'طيران', type_hotel:'فندق', type_package:'باقة', type_hajj:'حج وعمرة',
    search_dest_ph:'إلى أين؟',

    // PACKAGES
    packages_tag:'باقاتنا', packages_title:'باقات سفر لكل ذوق وميزانية',
    packages_sub:'اختر من بين باقاتنا المتنوعة المصممة بعناية لتناسب جميع أنواع المسافرين.',
    packages_book:'احجز الباقة',
    packages_includes:'يشمل الباقة:',

    // WHY
    why_tag:'لماذا Voiago', why_title:'التطبيق الوحيد\nالذي يفعل كل شيء.',
    why_sub:'بينما التطبيقات الأخرى تفعل شيئاً واحداً، Voiago يفعل كل شيء.',
    why_quote:'"Voiago ليس مجرد تطبيق — إنه منظومة سفر متكاملة تضع كل خدمة تحتاجها في راحة يدك."',

    // FEATURES
    feat_tag:'المميزات', feat_title:'تقنيات لا مثيل لها',
    feat_sub:'Voiago هو التطبيق الوحيد الذي يجمع كل هذه الميزات الذكية في منصة واحدة.',

    // ABOUT
    about_tag:'من نحن', about_title:'تعرف على Voiago',
    about_sub:'منصة السفر الذكية التي تجمع بين أحدث التقنيات وأفضل الخدمات لتجعل رحلتك أسهل.',

    // REVIEWS
    reviews_tag:'آراء المسافرين', reviews_title:'يحبه ملايين المسافرين',
    reviews_sub:'تجارب حقيقية من مسافرين حقيقيين جعلوا رحلاتهم لا تُنسى مع Voiago.',

    // PRICING
    pricing_tag:'الأسعار', pricing_title:'خطط تناسب الجميع',
    pricing_sub:'ابدأ مجاناً وطوّر تجربتك مع نمو احتياجاتك.',
    pricing_free:'مجاناً', pricing_premium:'بريميوم', pricing_business:'أعمال',
    pricing_month:'شهرياً',
    pricing_start:'ابدأ مجاناً', pricing_try:'جرب 14 يوم', pricing_contact:'تواصل معنا',

    // PARTNERS
    partners_tag:'شركاؤنا', partners_title:'موثوق من أكبر العلامات التجارية',
    partners_sub:'نتعاون مع أفضل شركات الطيران والفنادق وخدمات السفر لنقدم لك أفضل العروض.',
    partner_join:'انضم كشريك', partner_learn:'اعرف أكثر',

    // FAQ
    faq_tag:'الأسئلة الشائعة', faq_title:'أسئلة يسألها الجميع',

    // CONTACT
    contact_tag:'تواصل معنا', contact_title:'تواصل معنا',
    contact_sub:'فريقنا دائماً مستعد لمساعدتك. سواء كان لديك سؤال، اقتراح، أو تعاون محتمل.',

    // FOOTER
    footer_services:'الخدمات', footer_explore:'استكشف',
    footer_support:'الدعم', footer_rights:'© 2026 Voiago. جميع الحقوق محفوظة.',
    footer_made:'صُنع بـ ❤️ في مصر',

    // CHAT
    chat_placeholder:'اكتب رسالتك...', chat_title:'Voiago AI', chat_sub:'مساعدك الذكي',
    chat_welcome:'مرحباً! أنا مساعد Voiago الذكي 🌟 كيف أقدر أساعدك اليوم؟',
  },

  en: {
    // NAV
    nav_about:'About Us', nav_services:'Services', nav_dest:'Destinations',
    nav_packages:'Packages', nav_hajj:'Hajj & Umrah',
    nav_pricing:'Pricing', nav_contact:'Contact',
    nav_signin:'Sign In', nav_start:'Get Started',

    // HERO
    hero_badge:'THE SMARTEST WAY TO TRAVEL',
    hero_t1:'One App.',
    hero_t2:'Every Journey.',
    hero_t3:'Zero Hassle.', 
    hero_sub:'Plan, book, pay, and travel smarter. Voiago brings flights, hotels, transport, and emergency support into one intelligent platform.',
    hero_cta1:'🚀 Start for Free', hero_cta2:'🔍 Explore Services',

    // SEARCH
    search_dest:'Destination', search_date:'Travel Date',
    search_type:'Trip Type', search_btn:'Search',

    // STATS
    stat_travelers:'Happy Travelers', stat_dest:'Destinations',
    stat_rating:'App Rating', stat_support:'Always Online',

    // SERVICES
    services_tag:'Our Services', services_title:'All Travel Services. One Platform.',
    services_sub:'No more switching between apps. Voiago is the first platform to combine every travel service in one place.',

    // DESTINATIONS
    dest_tag:'Destinations', dest_title:'Where Will You Go Next?',
    dest_sub:'From local Egyptian wonders to international hotspots — Voiago covers every destination you dream of.',
    dest_all:'All', dest_egypt:'Egypt', dest_gulf:'Gulf',
    dest_europe:'Europe', dest_asia:'Asia', dest_africa:'Africa',
    dest_viewall:'View All Destinations',
    dest_booknow:'Book Now',
    // SERVICES
    svc_tag:'Our Services', svc_title:'Everything You Need, One Place',
    svc_sub:'No more switching apps. Voiago delivers all travel services in one smart platform.',

    // PACKAGES
    pkg_tag:'Packages', pkg_title:'Featured Travel Packages',
    pkg_sub:'Complete packages to the best destinations at the best prices with 5-star service.',

    // PRICING
    pricing_tag:'Pricing', pricing_title:'Choose Your Plan',
    pricing_sub:'Start free or unlock full features with Premium.',
    plan_free:'Free', plan_free_sub:'Free Forever',
    plan_start:'Get Started Free', plan_popular:'Most Popular',
    plan_premium:'Premium', plan_premium_sub:'EGP / month',
    plan_get:'Get It Now',
    plan_biz:'Business', plan_biz_sub:'EGP / month',
    plan_contact:'Contact for Business',

    // OFFERS
    offers_tag:'Exclusive Offers', offers_title:'Deals You Cannot Miss',
    offers_sub:'Limited deals handpicked for Voiago travelers. Book now before they expire.',
    offer1_t:'Save 20% on Flights',
    offer1_d:'Book summer flights now and get an exclusive discount on all international routes from Cairo.',
    offer2_t:'Stay More, Pay Less',
    offer2_d:'Book 3+ nights at any partner hotel and enjoy 15% off. Valid in Dubai, Istanbul & Paris.',
    offer3_t:'Dubai All-Inclusive Package',
    offer3_d:'Flight + hotel + tours in one unbeatable package. 7 nights from Cairo starting EGP 8,900.',
    offer_claim:'Claim Offer', offer_book:'Book Now',

    // HAJJ
    hajj_tag:'Hajj & Umrah', hajj_title:'Hajj & Umrah Trips',
    hajj_sub:'We offer premium Hajj and Umrah packages at the best prices with full service throughout.',
    hajj1_t:'Ramadan Umrah', hajj1_d:'Special Umrah packages during Ramadan including flights, accommodation, transport & guide', hajj1_p:'From EGP 8,500',
    hajj2_t:'Year-Round Umrah', hajj2_d:'Monthly Umrah trips all year long, suitable for all budgets with full customization', hajj2_p:'From EGP 6,200',
    hajj3_t:'Hajj Season 2026', hajj3_d:'Register early for organized Hajj packages with the best hotels near Al-Masjid Al-Haram', hajj3_p:'From EGP 35,000',
    hajj_book:'Book Now', hajj_register:'Register Now',

    // DOWNLOAD
    dl_tag:'App', dl_title:'Travel Smarter From Your Phone',
    dl_sub:'Get the full Voiago experience on your mobile device.',
    dl_f1:'Book in under 60 seconds', dl_f2:'Bank-grade security',
    dl_f3:'Works offline', dl_f4:'Real-time notifications',
    dl_f5:'Multi-currency — EGP, USD, EUR, SAR, AED +50',
    dl_f6:'AI-powered trip suggestions',
    dl_rating:'Rating', dl_downloads:'Downloads', dl_size:'Size',
    qr_title:'Scan to Download', qr_sub:'Point your camera to download Voiago instantly',
    qr_download:'Download App',

    // PARTNERS
    partners_tag:'Our Partners', partners_title:'Trusted by Leading Global Brands',
    partners_sub:'We partner with the best airlines, hotels and travel services to guarantee you the best deals.',
    partner_join:'Become a Partner', partner_learn:'Learn More',

    // SEARCH OPTIONS
    type_flight:'Flight', type_hotel:'Hotel', type_package:'Package', type_hajj:'Hajj & Umrah',
    search_dest_ph:'Where to?',

    // PACKAGES
    packages_tag:'Our Packages', packages_title:'Travel Packages for Every Taste & Budget',
    packages_sub:'Choose from our carefully curated packages designed to suit all types of travelers.',
    packages_book:'Book Package',
    packages_includes:'Package includes:',

    // WHY
    why_tag:'Why Voiago', why_title:'The Only App\nThat Does It All.',
    why_sub:'While other apps do one thing, Voiago does everything.',
    why_quote:'"Voiago is not just an app — it\'s a complete travel ecosystem that puts every service you need in the palm of your hand."',

    // FEATURES
    feat_tag:'Features', feat_title:'Unmatched Technology',
    feat_sub:'Voiago is the only app that combines all these smart features in one platform.',

    // ABOUT
    about_tag:'About Us', about_title:'Meet Voiago',
    about_sub:'The smart travel platform combining the latest technologies and best services to make your trip easier.',

    // REVIEWS
    reviews_tag:'Traveler Reviews', reviews_title:'Loved by Millions of Travelers',
    reviews_sub:'Real experiences from real travelers who made their journeys unforgettable with Voiago.',

    // PRICING
    pricing_tag:'Pricing', pricing_title:'Plans for Everyone',
    pricing_sub:'Start for free and upgrade as your needs grow.',
    pricing_free:'Free', pricing_premium:'Premium', pricing_business:'Business',
    pricing_month:'per month',
    pricing_start:'Get Started Free', pricing_try:'Try 14 Days', pricing_contact:'Contact Us',

    // PARTNERS
    partners_tag:'Our Partners', partners_title:'Trusted by Leading Travel Brands',
    partners_sub:'We partner with the world\'s top airlines, hotels, and travel services to bring you the best deals.',
    partner_join:'Become a Partner', partner_learn:'Learn More',

    // FAQ
    faq_tag:'FAQ', faq_title:'Frequently Asked Questions',

    // CONTACT
    contact_tag:'Contact', contact_title:'Get in Touch',
    contact_sub:'Our team is always ready to help. Whether you have a question, suggestion, or potential collaboration.',

    // FOOTER
    footer_services:'Services', footer_explore:'Explore',
    footer_support:'Support', footer_rights:'© 2026 Voiago. All rights reserved.',
    footer_made:'Made with ❤️ in Egypt',

    // CHAT
    chat_placeholder:'Type your message...', chat_title:'Voiago AI', chat_sub:'Your Smart Assistant',
    chat_welcome:'Hello! I\'m Voiago\'s smart assistant 🌟 How can I help you today?',
  }
};

let currentLang = 'ar';

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';

  const langTextEl = document.getElementById('langText');
  if (langTextEl) langTextEl.textContent = currentLang === 'ar' ? 'عربي' : 'English';

  const t = LANG[currentLang];

  // ترجمة كل العناصر data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k]) el.textContent = t[k];
  });

  // ترجمة الـ placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k]) el.placeholder = t[k];
  });

  // ترجمة الـ select options
  document.querySelectorAll('select option[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k]) el.textContent = t[k];
  });

  // ترجمة chat placeholder
  const chatInput = document.getElementById('chatInput');
  if (chatInput) chatInput.placeholder = t.chat_placeholder || '';

  // ترجمة footer headers
  const footerCols = document.querySelectorAll('.footer-col h4');
  const footerKeys = ['footer_services', 'footer_explore', 'footer_support'];
  footerCols.forEach((h, i) => { if (t[footerKeys[i]]) h.textContent = t[footerKeys[i]]; });

  // ترجمة footer brand
  const footerBrand = document.querySelector('.footer-brand p');
  if (footerBrand) footerBrand.textContent = currentLang === 'ar'
    ? 'مساعد سفرك الذكي الشخصي. نجمع كل خدمات السفر في منصة واحدة ذكية وأنيقة.'
    : 'Your personal smart travel assistant. All travel services in one elegant platform.';

  // ترجمة contact form title
  const contactTitle = document.querySelector('.contact-form-box h3');
  if (contactTitle) contactTitle.textContent = currentLang === 'ar' ? 'أرسل رسالتك' : 'Send Your Message';

  // ترجمة footer bottom
  const footerBottom = document.querySelectorAll('.footer-bottom p');
  if (footerBottom[0]) footerBottom[0].textContent = t.footer_rights || '';
  if (footerBottom[1]) footerBottom[1].textContent = t.footer_made || '';

  // إعادة رسم المحتوى الديناميكي
  renderServices();
  renderFeatures();
  renderWhy();
  renderDest();
  renderPackages();
  renderReviews();
  renderFAQ();
}

function handleHeroSearch() {
  const destInput = document.getElementById('heroDestInput');
  if (!destInput) return;
  const query = destInput.value.trim();
  if (!query) {
    showToast('⚠️ يرجى إدخال وجهة للبحث', true);
    return;
  }
  
  // Filter destinations
  renderDestSearch(query);
  
  // Scroll to destinations section
  document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

function renderDestSearch(query) {
  const q = query.toLowerCase();
  const filtered = DEST_DATA.filter(d => 
    d.name.toLowerCase().includes(q) || 
    d.country.toLowerCase().includes(q)
  );
  
  const grid = document.getElementById('destGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">
      <div style="font-size: 3rem; margin-bottom: 10px;">🔍</div>
      <h3>عذراً، لم نجد نتائج لـ "${query}"</h3>
      <p>جرب البحث عن مدينة أخرى مثل "القاهرة" أو "دبي"</p>
      <button class="btn-outline" style="margin-top: 20px;" onclick="renderDest('all')">عرض كل الوجهات</button>
    </div>`;
  } else {
    grid.innerHTML = filtered.map(d => `
      <div class="dest-card">
        <img src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="dest-overlay"></div>
        <div class="dest-badge-label ${d.badge}">${{local:'محلي',popular:'الأكثر طلباً',trending:'رائج',holy:'ديني',premium:'فاخر',value:'قيمة',business:'أعمال'}[d.badge]||d.badge}</div>
        <div class="dest-info-overlay">
          <div class="dest-country-tag">${d.country}</div>
          <div class="dest-name">${d.name}</div>
          <div class="dest-price">${d.price}</div>
          <button class="dest-book-btn" onclick="location.href='signup.html'">احجز الآن</button>
        </div>
      </div>
    `).join('');
  }
  initReveal();
}


// ═══ RENDER FUNCTIONS ═══
function renderServices() {
  const data = SERVICES_DATA[currentLang] || SERVICES_DATA.ar;
  document.getElementById('servicesGrid').innerHTML = data.map(s => `
    <div class="service-card reveal">
      <div class="service-icon">${s.icon}</div>
      ${s.badge ? `<div class="service-badge">${s.badge}</div>` : ''}
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="service-tags">${s.tags.map(t=>`<span class="service-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

function renderFeatures() {
  document.getElementById('featuresGrid').innerHTML = FEATURES_DATA.map(f => `
    <div class="feature-card reveal">
      <span class="feature-emoji">${f.emoji}</span>
      <h4 class="feature-title">${f.title}</h4>
      <p class="feature-desc">${f.desc}</p>
    </div>
  `).join('');
}

function renderWhy() {
  document.getElementById('whyFeatures').innerHTML = WHY_FEATURES.map(f => `
    <div class="why-feat">
      <div class="why-feat-icon">${f.icon}</div>
      <div><h4>${f.title}</h4><p>${f.desc}</p></div>
    </div>
  `).join('');
  document.getElementById('whyStats').innerHTML = [
    {val:'50+',label:'خدمات سفر'},{val:'150+',label:'وجهة'},{val:'2M+',label:'مسافر'},{val:'24/7',label:'دعم'}
  ].map(s => `<div class="stat-card"><strong>${s.val}</strong><span>${s.label}</span></div>`).join('');
}

function renderDest(filter='all') {
  const filtered = filter==='all' ? DEST_DATA : DEST_DATA.filter(d=>d.cat===filter);
  document.getElementById('destGrid').innerHTML = filtered.map(d => `
    <div class="dest-card">
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="dest-overlay"></div>
      <div class="dest-badge-label ${d.badge}">${{local:'محلي',popular:'الأكثر طلباً',trending:'رائج',holy:'ديني',premium:'فاخر',value:'قيمة',business:'أعمال'}[d.badge]||d.badge}</div>
      <div class="dest-info-overlay">
        <div class="dest-country-tag">${d.country}</div>
        <div class="dest-name">${d.name}</div>
        <div class="dest-price">${d.price}</div>
        <button class="dest-book-btn" onclick="location.href='signup.html'">احجز الآن</button>
      </div>
    </div>
  `).join('');
  initReveal();
}

function filterDest(cat,btn) {
  document.querySelectorAll('.dest-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderDest(cat);
}

function renderPackages() {
  document.getElementById('packagesGrid').innerHTML = PACKAGES_DATA.map(p => `
    <div class="package-card ${p.featured?'featured':''} reveal">
      <div class="package-header">
        <div>
          <div class="package-name">${p.name}</div>
          <div class="package-price">${p.price} <span>ج.م ${p.period}</span></div>
        </div>
        ${p.badge?`<div class="package-badge-label">${p.badge}</div>`:''}
      </div>
      <div class="package-body">
        <p class="package-desc">${p.desc}</p>
        <ul class="package-features">${p.features.map(f=>`<li><span class="chk">✓</span> ${f}</li>`).join('')}</ul>
        <button class="btn-primary" style="width:100%" onclick="showToast('🎉 سيتم التواصل معك لتأكيد الحجز!')">احجز الباقة</button>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = REVIEWS_DATA.map(r => `
    <div class="review-card reveal">
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <img class="review-avatar" src="${r.avatar}" alt="${r.name}">
        <div class="review-name">
          <strong>${r.name}</strong>
          <span>${r.loc}</span>
          <div class="review-trip">✈️ ${r.trip}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  document.getElementById('faqContainer').innerHTML = FAQ_DATA.map((f,i) => `
    <div class="accordion">
      <div class="accordion-header" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="accordion-arrow">▼</span>
      </div>
      <div class="accordion-body" id="faq${i}">
        <p style="color:var(--text2);line-height:1.8;font-size:.9rem">${f.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const body = document.getElementById(`faq${i}`);
  const header = body.previousElementSibling;
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.accordion-body').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.accordion-header').forEach(h=>h.classList.remove('open'));
  if(!isOpen){body.classList.add('open');header.classList.add('open');}
}

// ═══ AUTH ═══
const ADMIN_SECRET = 'voiago2026';
let currentRole = 'user', authMode = 'register', loggedUser = null;


function logout() {
  loggedUser=null;
  localStorage.removeItem('voiago_user');
  document.getElementById('dashOverlay').classList.remove('active');
  showToast('👋 تم تسجيل الخروج');
  updateNavForAuth();
}

function updateNavForAuth() {
  const actions = document.querySelector('.nav-actions');
  if (!actions) return;
  if (loggedUser) {
    const signInBtn = document.querySelector('button[data-i18n="nav_signin"]');
    const startBtn = document.querySelector('button[data-i18n="nav_start"]');
    if(signInBtn) signInBtn.style.display = 'none';
    if(startBtn) startBtn.style.display = 'none';
    
    if (!document.getElementById('navDashBtn')) {
      const dashBtn = document.createElement('a');
      dashBtn.className = 'btn-primary';
      dashBtn.id = 'navDashBtn';
      dashBtn.innerText = 'لوحة التحكم';
      dashBtn.href = 'dashboard.html';
      dashBtn.style.marginLeft = '10px';
      dashBtn.style.padding = '10px 20px';
      dashBtn.style.borderRadius = '50px';
      dashBtn.style.textDecoration = 'none';
      dashBtn.style.fontSize = '.9rem';
      dashBtn.style.fontWeight = '600';
      actions.insertBefore(dashBtn, document.querySelector('.menu-toggle'));
    }
  } else {
      const signInBtn = document.querySelector('button[data-i18n="nav_signin"]');
      const startBtn = document.querySelector('button[data-i18n="nav_start"]');
      if(signInBtn) signInBtn.style.display = 'inline-block';
      if(startBtn) startBtn.style.display = 'inline-block';
      const dashBtn = document.getElementById('navDashBtn');
      if(dashBtn) dashBtn.remove();
  }
}

// ═══ DASHBOARD ═══
function openDashboard() {
  if(!loggedUser) return;
  const ov = document.getElementById('dashOverlay');
  ov.classList.add('active');
  document.getElementById('dashName').textContent = loggedUser.name;
  const badge = document.getElementById('dashBadge');
  badge.textContent = loggedUser.role==='admin'?'مدير':'سائح';
  badge.className = `badge ${loggedUser.role==='admin'?'badge-warning':'badge-info'}`;
  if(loggedUser.role==='admin') renderAdminDash();
  else renderTouristDash();
}

function renderTouristDash() {
  document.getElementById('dashSidebar').innerHTML = `
    <div class="dash-nav-item active">✈️ رحلاتي</div>
    <div class="dash-nav-item">📋 حجوزاتي</div>
    <div class="dash-nav-item">💳 المحفظة</div>
    <div class="dash-nav-item">🎮 نقاطي</div>
    <div class="dash-nav-item">📸 مذكراتي</div>
    <div class="dash-nav-item">⚙️ الإعدادات</div>
  `;
  document.getElementById('dashMain').innerHTML = `
    <h2 style="margin-bottom:24px;font-size:1.5rem;font-weight:900">مرحباً ${loggedUser.name} 👋</h2>
    <div class="stat-cards">
      <div class="sc"><div class="sc-val" style="color:var(--primary)">3</div><div class="sc-lbl">رحلات مكتملة</div><div class="sc-trend">↑ رحلة جديدة هذا الشهر</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--secondary)">1,250</div><div class="sc-lbl">نقاط Voiago</div><div class="sc-trend">↑ +50 هذا الأسبوع</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--success)">2</div><div class="sc-lbl">حجوزات قادمة</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--accent)">850 ج.م</div><div class="sc-lbl">رصيد المحفظة</div></div>
    </div>
    <h3 style="margin-bottom:16px;font-weight:800">حجوزاتي القادمة</h3>
    <table class="data-table">
      <thead><tr><th>الوجهة</th><th>التاريخ</th><th>النوع</th><th>الحالة</th></tr></thead>
      <tbody>
        <tr><td>القاهرة → دبي</td><td>15 يونيو 2026</td><td>طيران</td><td><span class="badge badge-success">مؤكد</span></td></tr>
        <tr><td>فندق النيل - القاهرة</td><td>20-25 يونيو 2026</td><td>فندق</td><td><span class="badge badge-warning">قيد المعالجة</span></td></tr>
      </tbody>
    </table>
  `;
}

function renderAdminDash() {
  document.getElementById('dashSidebar').innerHTML = `
    <div class="dash-nav-item active">📊 لوحة التحكم</div>
    <div class="dash-nav-item">👥 المستخدمون</div>
    <div class="dash-nav-item">📋 الحجوزات</div>
    <div class="dash-nav-item">🏨 الفنادق</div>
    <div class="dash-nav-item">✈️ الرحلات</div>
    <div class="dash-nav-item">💰 الإيرادات</div>
    <div class="dash-nav-item">🤝 الشركاء</div>
    <div class="dash-nav-item">⚙️ الإعدادات</div>
  `;
  document.getElementById('dashMain').innerHTML = `
    <h2 style="margin-bottom:24px;font-size:1.5rem;font-weight:900">لوحة تحكم المدير ⚙️</h2>
    <div class="stat-cards">
      <div class="sc"><div class="sc-val" style="color:var(--primary)">50,234</div><div class="sc-lbl">إجمالي المستخدمين</div><div class="sc-trend">↑ +1,250 هذا الشهر</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--secondary)">8,540</div><div class="sc-lbl">حجوزات نشطة</div><div class="sc-trend">↑ +340</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--success)">2.4M ج.م</div><div class="sc-lbl">إيرادات الشهر</div><div class="sc-trend">↑ +18%</div></div>
      <div class="sc"><div class="sc-val" style="color:var(--accent)">98%</div><div class="sc-lbl">رضا العملاء</div></div>
    </div>
    <h3 style="margin-bottom:16px;font-weight:800">آخر الحجوزات</h3>
    <table class="data-table">
      <thead><tr><th>المستخدم</th><th>الخدمة</th><th>المبلغ</th><th>التاريخ</th><th>الحالة</th></tr></thead>
      <tbody>
        <tr><td>أحمد محمد</td><td>طيران القاهرة→دبي</td><td>4,500 ج.م</td><td>اليوم</td><td><span class="badge badge-success">مؤكد</span></td></tr>
        <tr><td>سارة أحمد</td><td>فندق ماريوت</td><td>2,800 ج.م</td><td>أمس</td><td><span class="badge badge-warning">قيد المعالجة</span></td></tr>
        <tr><td>محمد علي</td><td>باقة عمرة رمضان</td><td>9,200 ج.م</td><td>منذ يومين</td><td><span class="badge badge-success">مؤكد</span></td></tr>
        <tr><td>نور حسين</td><td>رحلة الغردقة</td><td>5,800 ج.م</td><td>منذ 3 أيام</td><td><span class="badge badge-danger">ملغي</span></td></tr>
      </tbody>
    </table>
  `;
}


// ═══ CONTACT ═══
function sendContact() {
  const n=document.getElementById('cName').value.trim();
  const e=document.getElementById('cEmail').value.trim();
  const m=document.getElementById('cMsg').value.trim();
  if(!n||!e||!m){showToast('⚠️ يرجى ملء جميع الحقول',true);return;}
  showToast('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
  document.getElementById('cName').value='';
  document.getElementById('cEmail').value='';
  document.getElementById('cMsg').value='';
}

// ═══ CHAT ═══
function toggleChat() { document.getElementById('chatWindow').classList.toggle('open'); }
const CHAT_REPLIES = {
  'طيران':'يمكنك البحث عن أفضل أسعار الطيران مباشرة في التطبيق مع مقارنة فورية 🛫',
  'فندق':'لدينا آلاف الفنادق من 1 إلى 5 نجوم بأسعار تنافسية مع مراجعات حقيقية 🏨',
  'عمرة':'باقات العمرة متوفرة طوال العام! اضغط على قسم الحج والعمرة 🕌',
  'سعر':'استخدم البحث الذكي للعثور على أفضل الأسعار حسب ميزانيتك 💰',
  'دفع':'نقبل جميع العملات العالمية وبطاقات الائتمان والدفع الإلكتروني 💳',
  'default':'شكراً لتواصلك مع Voiago! سيرد عليك فريقنا خلال 24 ساعة 📞'
};
function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if(!msg) return;
  const msgs = document.getElementById('chatMsgs');
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble">${msg}</div></div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(()=>{
    let reply = CHAT_REPLIES.default;
    Object.keys(CHAT_REPLIES).forEach(k=>{if(msg.includes(k))reply=CHAT_REPLIES[k];});
    msgs.innerHTML += `<div class="chat-msg bot"><div class="chat-bubble">${reply}</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  },700);
}

// ═══ TOAST ═══
function showToast(msg,error=false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${error?'error':'success'} show`;
  setTimeout(()=>t.classList.remove('show'),3500);
}

// ═══ MOBILE MENU ═══
function toggleMobileMenu() {
  const nav = document.getElementById('navLinks');
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.right = '0';
  nav.style.left = '0';
  nav.style.background = 'var(--dark2)';
  nav.style.padding = '20px';
  nav.style.borderBottom = '1px solid var(--border)';
  nav.style.zIndex = '999';
}

// ═══ REVEAL ON SCROLL ═══
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.1});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ═══ NAVBAR SCROLL ═══
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    nav.style.background = '';
  } else {
    nav.classList.remove('scrolled');
    nav.style.background = '';
  }
});

// ═══ INIT ═══
window.addEventListener('load', () => {
  renderServices();
  renderFeatures();
  renderWhy();
  renderDest();
  renderPackages();
  renderReviews();
  renderFAQ();
  initReveal();
  
  // Auth Check
  const storedUser = localStorage.getItem('voiago_user');
  if(storedUser) {
    loggedUser = JSON.parse(storedUser);
    updateNavForAuth();
    if(sessionStorage.getItem('voiago_open_dashboard') === 'true') {
      sessionStorage.removeItem('voiago_open_dashboard');
      openDashboard();
    }
  }
});