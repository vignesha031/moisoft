export const company = {
  name: 'MoiSoft', phone: '+919944138970', displayPhone: '+91 99441 38970', whatsapp: '919944138970',
  email: 'moisoft06@gmail.com', address: '4/449 A, Theni Main Road, Nagamalai, Madurai – 625019, Tamil Nadu.',
  maps: 'https://share.google/xvHv8orzKZMD3uji4', instagram: 'https://www.instagram.com/moi_soft_/',
  play: 'https://play.google.com/store/apps/details?id=com.moisoft1.moisoft1',
  site: process.env.NEXT_PUBLIC_SITE_URL || 'https://moisoft.in',
};
export const navigation = [['hero','Home'],['about','About'],['services','Services'],['how-it-works','How it works'],['app','Mobile app'],['faq','FAQ'],['contact','Contact']] as const;
export const leadership = [
  {name:'P. Devi', image:'/images/leadership/devi.jpeg'},
  {name:'M. Mahalakshmi', image:'/images/leadership/mahalakshmi.jpeg'},
  {name:'G. Selvakumar', image:'/images/leadership/selvakumar.jpeg'},
];
export type MediaItem = { id: string; title: string; category: string; image?: string; alt: string; postUrl?: string; location?: string };
export const gallery: MediaItem[] = [
  {id:'wedding-counter',image:'/images/gallery/wedding-counter-ai.webp',title:'Wedding Moi counter',category:'Weddings',alt:'AI-generated illustration of a Tamil wedding Moi counter'},
  {id:'family-moments',image:'/images/gallery/family-moments-ai.webp',title:'Family celebrations',category:'Traditional Functions',alt:'AI-generated illustration of a Tamil family celebration'},
  {id:'ear-piercing',image:'/images/gallery/ear-piercing-ai.webp',title:'A special milestone',category:'Ear-Piercing',alt:'AI-generated illustration of a family after an ear-piercing celebration'},
  {id:'housewarming',image:'/images/gallery/housewarming-ai.webp',title:'New beginnings',category:'Housewarming',alt:'AI-generated illustration of a Tamil housewarming'},
  {id:'team-at-work',image:'/images/gallery/team-at-work-ai.webp',title:'The team at work',category:'Weddings',alt:'AI-generated illustration of staff recording Moi entries'},
  {id:'function-setup',image:'/images/gallery/function-setup-ai.webp',title:'Ready for your function',category:'Traditional Functions',alt:'AI-generated illustration of a prepared digital Moi counter'},
];
export const instagram: MediaItem[] = ['At the counter','Digital Moi entry','Our team','Family functions','Behind the scenes','MoiSoft moments'].map((title,i)=>({id:`instagram-${i+1}`,title,category:'Instagram',image:`/images/instagram/post-${i+1}.jpg`,postUrl:i===2?'https://www.instagram.com/p/DP51o58AZJS/':undefined,alt:`MoiSoft Instagram photograph: ${title}`}));
export const media = {hero:'', story:'/images/story/story.jpg', video:'/images/video/poster.mp4', videoPoster:'/images/video/poster.jpg', captions:'', app:['','','']};
export const reviews: {name:string;location:string;functionType:string;text:string}[] = [];
export const services = [
 ['Computerized Moi entry','கம்ப்யூட்டர் மொய் பதிவு','உங்கள் இல்ல விசேஷங்களில், மொய் விவரங்களை கணினி மூலம் பதிவு செய்ய உதவுகிறோம்.'],
 ['Old notebook management','பழைய நோட்டுக்கு புதிய ஒழுங்கு','கையில் எழுதிய மொய் விவரங்களை ஊர் வாரியாக ஒழுங்குபடுத்தலாம்.'],
 ['Village & route sorting','ஊர் வாரியாக. வழி வாரியாக.','பத்திரிக்கை கொடுக்க வசதியாக, ஊர் விவரங்களை Route வாரியாக பிரிக்கலாம்.'],
 ['Moi reports & records','கணக்குகள் ஒரே இடத்தில்','செய்த மொய், வாங்கிய மொய் விவரங்களை தெளிவாகப் பார்க்க உதவும் பதிவுகள்.'],
 ['Invitation printing','விசேஷத்தின் முதல் அழைப்பு','உங்கள் தேவைக்கேற்ற பத்திரிக்கை அச்சிடுதல் பற்றி எங்களிடம் கேளுங்கள்.'],
];
export const faqs = [
 ['MoiSoft என்ன சேவை வழங்குகிறது?','திருமணம் மற்றும் குடும்ப விசேஷங்களுக்கு கம்ப்யூட்டர் மொய் பதிவு, பழைய நோட்டு மேலாண்மை, ஊர் வாரியான பட்டியல் மற்றும் பத்திரிக்கை அச்சிடுதல் சேவைகள் வழங்கப்படுகின்றன.'],
 ['விசேஷ இடத்திற்கு வந்து மொய் பதிவு செய்வீர்களா?','உங்கள் தேதி, இடம் மற்றும் தேவைகளை WhatsApp-ல் பகிருங்கள். நேரில் சேவை வழங்குவதற்கான ஏற்பாடு மற்றும் availability-ஐ MoiSoft குழு உறுதி செய்யும்.'],
 ['பழைய மொய் நோட்டுகளை ஒழுங்குபடுத்த முடியுமா?','ஆம். கையில் எழுதிய மொய் பதிவுகளை ஊர் வாரியாக ஒழுங்குபடுத்தும் சேவை உள்ளது. நோட்டுகளின் விவரங்களை எங்களிடம் பகிர்ந்து ஆலோசிக்கலாம்.'],
 ['Android app எங்கு கிடைக்கும்?','இந்தப் பக்கத்தில் உள்ள Google Play இணைப்பில் MoiSoft Android app-ஐ பார்க்கலாம். பயன்பாடு மற்றும் உங்கள் பதிவுகளுக்கான அணுகல் குறித்து குழுவிடம் கேளுங்கள்.'],
 ['சேவைக் கட்டணம் எவ்வளவு?','விசேஷ வகை, தேதி, இடம் மற்றும் தேவைக்கு ஏற்ப கட்டண விவரங்களை MoiSoft குழு தெரிவிக்கும். Enquiry அனுப்புவது booking உறுதி செய்ததாகாது.'],
 ['எந்த ஊர்களில் சேவை கிடைக்கும்?','மதுரை, தேனி, திண்டுக்கல், விருதுநகர், சிவகங்கை, ராமநாதபுரம் பகுதிகளுக்கான தேவைகளை கேட்கலாம். ஒவ்வொரு இடத்திற்கும் சேவை availability-ஐ குழு உறுதி செய்ய வேண்டும்.'],
];

export const phones = {office:[['+919626410555','+91 96264 10555'],['+919626420555','+91 96264 20555']],team:[['P. Devi','+919944138970','+91 99441 38970'],['M. Mahalakshmi','+919384729550','+91 93847 29550'],['G. Selvakumar','+919894024970','+91 98940 24970']]} as const;
export const serviceTags = [['High-speed typists','Thermal slip print'],['Careful digitisation','Digital notebook'],['Route intelligence','Invitation list'],['Same-day tally','Reconciliation'],['Tamil typography','Gold foil finish']] as const;
export const events = [
 ['திருமணம்','Weddings','பெரிய மண்டபங்களில் ஆயிரக்கணக்கான உறவினர்களின் மொய் வரவை பதிவு செய்தல்.'],
 ['காதணி விழா','Ear-piercing','தாய்மாமன் மொய், பட்டு வேட்டி விவரங்கள் உட்பட வரிசையான பதிவு.'],
 ['புதுமனை புகுவிழா','Housewarming','புதிய இல்ல விழாக்களில் உற்றார் உறவினர்களின் அன்பளிப்பு வரவுகளை முறைப்படுத்துதல்.'],
 ['மஞ்சள் நீராட்டு விழா','Ceremonies','பாரம்பரிய விசேஷங்களில் தாய்மாமன் மற்றும் பங்காளி மொய்களை தனித்தனியாக வகைப்படுத்துதல்.'],
 ['வளைகாப்பு','Baby shower','பெண் வீட்டார், மாப்பிள்ளை வீட்டார் மொய் வரவுகளை பிரித்து ஒப்படைக்கும் வசதி.'],
 ['குடும்ப சுப நிகழ்ச்சிகள்','Family functions','சஷ்டியப்தபூர்த்தி, சதாபிஷேகம் உள்ளிட்ட அனைத்து குடும்ப விழாக்களுக்கும் கணினி மொய் சேவை.'],
] as const;
export const whyUs = [
 ['வேகமான மொய் பதிவு','Fast entry','நீண்ட வரிசைகள் இல்லாமல், நிமிடத்திற்கு பல பதிவுகள் செய்யும் அனுபவம் வாய்ந்த டைப்பிஸ்ட்டுகள்.','Zap'],
 ['துல்லியமான கணக்கு','Accurate records','கணினி கணக்கீடு மூலம் ரொக்கக் கணக்கு தெளிவாக, பிழையின்றி.','Calculator'],
 ['ஒழுங்கான விவரங்கள்','Organised details','ஊர் வாரியாக, அகரவரிசைப்படி, தொகை வாரியாக தொகுக்கப்பட்ட ஆவணங்கள்.','ListTree'],
 ['அனுபவம்','Experienced team','2014 முதல் மதுரை மற்றும் சுற்றுவட்டார மாவட்டங்களில் ஆயிரக்கணக்கான விசேஷங்கள்.','Award'],
 ['Digital வசதி','Digital access','அச்சிட்ட புத்தகம் மட்டுமின்றி, Android app மூலம் எப்போது வேண்டுமானாலும் கணக்குகளைப் பார்க்கலாம்.','Smartphone'],
 ['நேரடி ஆதரவு','On-site support','விசேஷ இடத்திலேயே ஒருங்கிணைப்பாளர்கள் மற்றும் கணினி பணியாளர்கள்.','Users'],
] as const;
export const appFeatures = [['அனைத்து மொய் விவரங்கள்','View all Moi details','ListChecks'],['உறவினர் பெயர் தேடல்','Instant relative search','Search'],['Cloud backup','Records kept safe','CloudUpload'],['தமிழ் இடைமுகம்','Tamil-friendly interface','Languages']] as const;
export const areas = ['Madurai','Theni','Dindigul','Virudhunagar','Sivagangai','Ramanathapuram'] as const;
