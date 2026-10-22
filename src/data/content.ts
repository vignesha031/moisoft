export const company = {
  name: 'மொய் Soft', phone: '+919944138970', displayPhone: '+91 99441 38970', whatsapp: '919944138970',
  email: 'moisoft06@gmail.com', address: 'Aravind complex - Frist floor, Mavu Mil bus stop, Theni Main Road, Nagamalai, Madurai – 625019, Tamil Nadu.',
  maps: 'https://maps.app.goo.gl/g4RwxKmwcvzY7cmZA', instagram: 'https://www.instagram.com/moi_soft_/',
  play: 'https://play.google.com/store/apps/details?id=com.moisoft1.moisoft1',
  site: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moisoft.in',
};



export const navigation = [
  ['hero', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['how-it-works', 'How it works'],
  ['app', 'Mobile app'],
  ['leadership', 'Our Leadership'],
  ['franchises', 'Franchises'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
] as const;



export const leadership = [
  {
    name: 'P. Devi',
    degree: 'B.E',
    image: '/images/leadership/devi.jpeg'
  },
  {
    name: 'M. Mahalakshmi',
    degree: 'B.A',
    image: '/images/leadership/mahalakshmi.png'
  },
  {
    name: 'G. Selvakumar',
    degree: 'M.Com, M.Phil',
    image: '/images/leadership/selvakumar.png'
  }
];
export type MediaItem = { id: string; title: string; category: string; image?: string; alt: string; postUrl?: string; location?: string };
export const gallery: MediaItem[] = [
  { id: 'wedding-counter', image: '/images/gallery/wedding-counter-ai.webp', title: 'Wedding மொய்  counter', category: 'Weddings', alt: 'AI-generated illustration of a Tamil wedding மொய்  counter' },
  { id: 'family-moments', image: '/images/gallery/family-moments-ai.webp', title: 'Family celebrations', category: 'Traditional Functions', alt: 'AI-generated illustration of a Tamil family celebration' },
  { id: 'ear-piercing', image: '/images/gallery/ear-piercing-ai.webp', title: 'A special milestone', category: 'Ear-Piercing', alt: 'AI-generated illustration of a family after an ear-piercing celebration' },
  { id: 'housewarming', image: '/images/gallery/housewarming-ai.webp', title: 'New beginnings', category: 'Housewarming', alt: 'AI-generated illustration of a Tamil housewarming' },
  { id: 'team-at-work', image: '/images/gallery/team-at-work-ai.webp', title: 'The team at work', category: 'Weddings', alt: 'AI-generated illustration of staff recording மொய்  entries' },
  { id: 'function-setup', image: '/images/gallery/function-setup-ai.webp', title: 'Ready for your function', category: 'Traditional Functions', alt: 'AI-generated illustration of a prepared digital மொய்  counter' },
];
export const instagram: MediaItem[] = ['At the counter', 'Digital மொய்  entry', 'Our team', 'Family functions', 'Behind the scenes', 'மொய் Soft moments'].map((title, i) => ({ id: `instagram-${i + 1}`, title, category: 'Instagram', image: `/images/instagram/post-${i + 1}.jpg`, postUrl: i === 2 ? 'https://www.instagram.com/p/DP51o58AZJS/' : undefined, alt: `மொய் Soft Instagram photograph: ${title}` }));
export const media = { hero: '', story: '/images/story/story.jpg', video: '/images/video/poster.mp4', videoPoster: '', captions: '', app: ['', '', ''] };
export const reviews: { name: string; location: string; functionType: string; text: string }[] = [];
export const services = [
  ['Computerized மொய்  entry', 'கம்ப்யூட்டர் மொய் பதிவு', 'உங்கள் இல்ல விசேஷங்களில், மொய் விவரங்களை கணினி மூலம் பதிவு செய்ய உதவுகிறோம்.'],
  ['Old notebook management', 'பழைய நோட்டுக்கு புதிய ஒழுங்கு', 'கையால் எழுதப்பட்ட மற்றும் பழைய மொய் நோட்டு விவரங்களைக் கம்ப்யூட்டர் பதிவு செய்து, டிஜிட்டல் முறையில் பயன்படுத்தும் வசதியை வழங்குகிறோம்.'],
  ['Village & route sorting', 'நேரம் மிச்சம், பத்திரிக்கை எதுவும் விடுபடாது', 'செய்த மொய் விவரங்களை ஏற்றி, ஊர்வாரியாகப் பிரித்து ஒவ்வொரு உறவினருக்கும் பத்திரிக்கை சென்றடைவதை உறுதி செய்ய உதவும்.'],
  ['மொய்  reports & records', 'கணக்குகள் ஒரே இடத்தில்', ' செய்த மொய் மற்றும் வந்த மொய் விவரங்களை ஒப்பிட்டு, புதிய பதிவுகள் மற்றும் பெண்டிங் விவரங்கள் அனைத்தையும் ஒரே இடத்தில் எளிதாக நிர்வகிக்கலாம்.'],
  ['Secure OTP Verification', 'OTP பாதுகாப்பு சரிபார்ப்பு', 'மொய் ரசீது வழங்கப்பட்ட பிறகு, மொய் விவரங்களை நீக்க முடியாது. OTP மூலம் சரிபார்த்த பிறகே திருத்தங்களை மேற்கொள்ளலாம்.'],
];
export const faqs = [
  ['மொய் Soft என்ன சேவை வழங்குகிறது?', 'திருமணம் மற்றும் குடும்ப விசேஷங்களுக்கு கம்ப்யூட்டர் மொய் பதிவு, பழைய நோட்டு மேலாண்மை, ஊர் வாரியான பட்டியல் மற்றும் பத்திரிக்கை அச்சிடுதல் சேவைகள் வழங்கப்படுகின்றன.'],
  ['விசேஷ இடத்திற்கு வந்து மொய் பதிவு செய்வீர்களா?', 'உங்கள் தேதி, இடம் மற்றும் தேவைகளை WhatsApp-ல் பகிருங்கள். நேரில் சேவை வழங்குவதற்கான ஏற்பாடு மற்றும் availability-ஐ மொய் Soft குழு உறுதி செய்யும்.'],
  ['பழைய மொய் நோட்டுகளை ஒழுங்குபடுத்த முடியுமா?', 'ஆம். கையில் எழுதிய மொய் பதிவுகளை ஊர் வாரியாக ஒழுங்குபடுத்தும் சேவை உள்ளது. நோட்டுகளின் விவரங்களை எங்களிடம் பகிர்ந்து ஆலோசிக்கலாம்.'],
  ['Android app எங்கு கிடைக்கும்?', 'இந்தப் பக்கத்தில் உள்ள Google Play இணைப்பில் மொய் Soft Android app-ஐ பார்க்கலாம். பயன்பாடு மற்றும் உங்கள் பதிவுகளுக்கான அணுகல் குறித்து குழுவிடம் கேளுங்கள்.'],
  ['சேவைக் கட்டணம் எவ்வளவு?', 'விசேஷ வகை, தேதி, இடம் மற்றும் தேவைக்கு ஏற்ப கட்டண விவரங்களை மொய் Soft குழு தெரிவிக்கும். Enquiry அனுப்புவது booking உறுதி செய்ததாகாது.'],
  ['எந்த ஊர்களில் சேவை கிடைக்கும்?', 'மதுரை, தேனி, திண்டுக்கல், விருதுநகர், சிவகங்கை, ராமநாதபுரம் பகுதிகளுக்கான தேவைகளை கேட்கலாம். ஒவ்வொரு இடத்திற்கும் சேவை availability-ஐ குழு உறுதி செய்ய வேண்டும்.'],
];

export const phones = { office: [['+919626410555', '+91 96264 10555'], ['+919626420555', '+91 96264 20555']], team: [['P. Devi', '+919944138970', '+91 99441 38970'], ['M. Mahalakshmi', '+919384729550', '+91 93847 29550'], ['G. Selvakumar', '+919894024970', '+91 98940 24970']] } as const;
export const serviceTags = [['High-speed typists', 'Thermal slip print', 'Whatsapp notifications'], ['Careful digitisation', 'Digital notebook'], ['Route intelligence', 'Invitation list'], ['Same-day tally', 'Reconciliation'], ['OTP Protected', 'Secure Modifications']] as const;
export const events = [
  [
    'திருமண விழா',
    'Wedding Ceremony',
    'திருமண விழாவில் வருகை தரும் உறவினர்கள் மற்றும் நண்பர்களின் மொய் வரவுகளை விரைவாகவும் துல்லியமாகவும் பதிவு செய்து, முழுமையான கணக்கு விவரங்களை வழங்குதல்.'
  ],
  [
    'காதணி விழா',
    'Ear Piercing Ceremony',
    'குழந்தைகளின் காதணி விழாவில் தாய்மாமன், உறவினர்கள் மற்றும் நண்பர்கள் வழங்கும் மொய் மற்றும் அன்பளிப்புகளை முறையாகப் பதிவு செய்தல்.'
  ],
  ['இல்ல விழா | வசந்த விழா', 'Home Function | Vasantha Vizha', 'இல்ல விழா மற்றும் வசந்த விழாக்களில் உறவினர்கள் மற்றும் விருந்தினர்கள் வழங்கும் மொய் வரவுகளை துல்லியமாகப் பதிவு செய்து, தெளிவான கணக்கு அறிக்கைகளை வழங்குதல்.'],
  [
    'புதுமனை புகுவிழா',
    'Housewarming Ceremony',
    'புதிய இல்லத்தின் மகிழ்ச்சியான தொடக்கத்தில் உறவினர்கள் மற்றும் நண்பர்கள் வழங்கும் மொய் மற்றும் அன்பளிப்புகளை எளிமையாகவும் துல்லியமாகவும் பதிவு செய்தல்.'
  ],
  [
    'பூப்புனித நீராட்டு விழா',
    'Puberty Ceremony',
    'பாரம்பரிய பூப்புனித நீராட்டு விழாவில் தாய்மாமன், பங்காளிகள் மற்றும் உறவினர்கள் வழங்கும் மொய் வரவுகளை தனித்தனியாக வகைப்படுத்தி, முறையான கணக்கு விவரங்களை வழங்குதல்.'
  ],
  [
    'முதல் திருவிருந்து ஏற்பு விழா',
    'First Holy Communion',
    'முதல் திருவிருந்து ஏற்பு விழாவின் சிறப்பான தருணத்தில் உறவினர்கள் மற்றும் நண்பர்கள் வழங்கும் அன்பளிப்புகளை முறையாகப் பதிவு செய்து, எளிதான கணக்கு நிர்வாகத்தை வழங்குதல்.'
  ]
] as const;
export const whyUs = [
  ['வேகமான மொய் பதிவு', 'Fast entry', 'நீண்ட வரிசைகள் இல்லாமல், நிமிடத்திற்கு பல பதிவுகள் செய்யும் அனுபவம் வாய்ந்த டைப்பிஸ்ட்டுகள்.', 'Zap'],
  ['துல்லியமான கணக்கு', 'Accurate records', 'கணினி கணக்கீடு மூலம் ரொக்கக் கணக்கு தெளிவாக, பிழையின்றி.', 'Calculator'],
  ['ஒழுங்கான விவரங்கள்', 'Organised details', 'ஊர் வாரியாக, அகரவரிசைப்படி, தொகை வாரியாக தொகுக்கப்பட்ட ஆவணங்கள்.', 'ListTree'],
  ['அனுபவம்', 'Experienced team', '2019 முதல் மதுரை மற்றும் சுற்றுவட்டார மாவட்டங்களில் ஆயிரக்கணக்கான விசேஷங்கள்.', 'Award'],
  ['Digital வசதி', 'Digital access', 'அச்சிட்ட புத்தகம் மட்டுமின்றி, Android app மூலம் எப்போது வேண்டுமானாலும் கணக்குகளைப் பார்க்கலாம்.', 'Smartphone'],
  ['நேரடி ஆதரவு', 'On-site support', 'விசேஷ இடத்திலேயே ஒருங்கிணைப்பாளர்கள் மற்றும் கணினி பணியாளர்கள்.', 'Users'],
] as const;
export const appFeatures = [['அனைத்து மொய் விவரங்கள்', 'View all மொய்  details', 'ListChecks'], ['உறவினர் பெயர் தேடல்', 'Instant relative search', 'Search'], ['Cloud backup', 'Records kept safe', 'CloudUpload'], ['தமிழ் இடைமுகம்', 'Tamil-friendly interface', 'Languages']] as const;
export const areas = ['Madurai', 'Theni', 'Dindigul', 'Virudhunagar', 'Sivagangai', 'Ramanathapuram'] as const;

/**
 * Franchise partners shown in the "Franchise network" section.
 *
 * To publish a card's phone numbers, fill both pairs as [tel, display]:
 *   contact1: ['+919876543210', '+91 98765 43210']
 *   contact2: ['+918765432109', '+91 87654 32109']
 * `tel` must have no spaces (used in the href); `display` is what visitors see.
 * A card with no contact1/contact2 renders as a placeholder and shows no links.
 */


export type Franchise = {
  id: string;
  name: string;
  area: string;
  manager: string;
  degree?: string;
  contact1?: [tel: string, display: string];
  contact2?: [tel: string, display: string];
};

export const franchises: Franchise[] = [
  {
    id: 'franchise-10',
    name: 'ஸ்ரீ அம்மன் மொய் Soft',
    area: 'விருவீடு',
    manager: 'B  DHANALAKSHMI',
    degree: 'B.A',
    contact1: ['+918807486654', '+91 88074 86654'],
    contact2: ['+919585321025', '+91 95853 21025'],
  },
  {
    id: 'franchise-3',
    name: 'ஆதிசிவன் மொய் Soft',
    area: 'உசிலம்பட்டி',
    manager: 'P SIVASANKARI',
    degree: 'B.Com',
    contact1: ['+919159842273', '+91 91598 42273'],
    contact2: ['+919585324266', '+91 95853 24266'],
  },
  {
    id: 'franchise-1',
    name: 'MR.MK மொய் Soft',
    area: 'கட்டக்கருப்பன்பட்டி',
    manager: 'M MANOJ',
    degree: 'B.A',
    contact1: ['+919751967137', '+91 97519 67137'],
    contact2: ['+916385470047', '+91 63854 70047'],
  },
  {
    id: 'franchise-2',
    name: 'Smart செல்வா மொய் Soft',
    area: 'கருப்பாயூரணி',
    manager: 'SELVA',
    degree: 'B.Sc',
    contact1: ['+917094909462', '+91 70949 09462'],
    contact2: ['+916385470047', '+91 63854 70047'],
  },
  {
    id: 'franchise-8',
    name: 'நண்பன் மொய் Soft',
    area: 'செக்கானூரணி',
    manager: 'S YUVARAJ , K PRASANTH , A VASANTH',
    contact1: ['+919597992002', '+91 95979 92002'],
    contact2: ['+919751062471', '+91 97510 62471'],
  },
  {
    id: 'franchise-9',
    name: 'ஜனா மொய் Soft',
    area: 'மம்பட்டிபட்டி',
    manager: 'JANA KUMARESAN',
    degree: 'B.A',
    contact1: ['+919787832191', '+91 97878 32191'],
    contact2: ['+919445978910', '+91 94459 78910'],
  },
  {
    id: 'franchise-7',
    name: 'சோழன் மொய் Soft',
    area: 'அணைப்பட்டி',
    manager: 'M SARAVANAN',
    degree: 'B.Com',
    contact1: ['+917200851024', '+91 72008 51024'],
    contact2: ['+917200861024', '+91 72008 61024'],
  },
  {
    id: 'franchise-6',
    name: 'காரியாபட்டி மொய் Soft',
    area: 'காரியாபட்டி',
    manager: 'RANJITH SINGH , SUNDRAMOORTHI',
    contact1: ['+918610576031', '+91 86105 76031'],
    contact2: ['+918838060904', '+91 88380 60904'],
  },
  {
    id: 'franchise-5',
    name: 'லேசர் மொய் Soft',
    area: 'கருமாத்தூர்',
    manager: 'LASER  PANDI',
    degree: 'MCA',
    contact1: ['+919843939705', '+91 98439 39705'],
    contact2: ['+917708779821', '+91 77087 79821'],
  },
  {
    id: 'franchise-4',
    name: 'ஏலம் மணக்கும் போடி மொய் Soft',
    area: 'போடி',
    manager: 'G RANJAN',
    degree: 'DME',
    contact1: ['+918807646566', '+91 88076 46566'],
  },
];
