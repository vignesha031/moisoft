import {existsSync} from 'node:fs';
import path from 'node:path';
import {ArrowUpRight,ArrowRight,MapPin,Mail,MessageCircle,Phone,Instagram,Check,Film,Play,Zap,Calculator,ListTree,Award,Smartphone,Users,ListChecks,Search,CloudUpload,Languages,Monitor,BookOpen,FileText,Printer,CalendarHeart} from 'lucide-react';
import {company,services,serviceTags,leadership,instagram,media,reviews,events,whyUs,appFeatures,areas,phones} from '@/data/content';
import {whatsappUrl} from '@/lib/whatsapp';
import {Navbar,Brand,FloatingContact} from '@/components/navigation';
import {Reveal,Media,Counter,ScrollProgress} from '@/components/shared';
import {Button} from '@/components/ui';
import {Comparison} from '@/components/comparison';
import {CounterDemo} from '@/components/hero';
import {Steps} from '@/components/steps';
import {AppPhone} from '@/components/app-phone';
import {Gallery} from '@/components/gallery';
import {BookingForm} from '@/components/booking';
import {FAQ} from '@/components/faq';
import {Analytics} from '@/components/analytics';

const whyIcons={Zap,Calculator,ListTree,Award,Smartphone,Users} as const;
const appIcons={ListChecks,Search,CloudUpload,Languages} as const;
const serviceIcons=[Monitor,BookOpen,MapPin,FileText,Printer];

function Heading({eyebrow,title,description,center=false}:{eyebrow:string;title:string;description?:string;center?:boolean}){return <div className={`section-heading ${center?'center':''}`}><span className="eyebrow">{eyebrow}</span><h2 lang="ta">{title}</h2>{description&&<p>{description}</p>}</div>;}
function Enquire({text='WhatsApp enquiry'}:{text?:string}){return <Button asChild><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>{text}</a></Button>;}

export default function Home(){
 const schema={'@context':'https://schema.org','@type':'LocalBusiness',name:company.name,url:company.site,telephone:company.phone,email:company.email,address:{'@type':'PostalAddress',streetAddress:'4/449 A, Theni Main Road, Nagamalai',addressLocality:'Madurai',addressRegion:'Tamil Nadu',postalCode:'625019',addressCountry:'IN'},sameAs:[company.instagram,company.play],hasMap:company.maps};
 const ribbon=[...events,...events].map(e=>e[0]);
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
 <a className="skip-link" href="#main">Skip to content</a><ScrollProgress/><Navbar/>
 <main id="main">
 <section id="hero" className="hero">
  <div className="container hero-grid">
   <div>
    <span className="hero-badge"><span className="pulse"/>மதுரையின் நம்பகமான கணினி மொய் சேவை · 2019 முதல்</span>
    <h1 lang="ta"><span className="line"><span style={{animationDelay:'.05s'}}>உங்கள் வீட்டு</span></span><span className="line"><span style={{animationDelay:'.17s'}}>விசேஷத்திற்கு இனி</span></span><span className="line"><span className="gold" style={{animationDelay:'.29s'}}>Smart-ஆன மொய் கணக்கு!</span></span></h1>
    <p className="hero-english">Traditional Moi. Modern Digital Experience.</p>
    <p className="hero-description" lang="ta">8000+ விழாக்கள் | நம்பகமான சேவை | துல்லியமான கணக்குகள் | இல்ல விசேஷங்களின் மொய் பதிவுகளை எளிமையாகவும் பாதுகாப்பாகவும் கணினி மூலம் மேற்கொண்டு, ஒவ்வொரு பதிவையும் முறையாக நிர்வகிக்க உதவும் உங்கள் நம்பிக்கைக்குரிய தொழில்நுட்பத் துணை – மொய் Soft..</p>
    <div className="actions"><Enquire text="WhatsApp enquiry"/><Button variant="outline" asChild><a href={`tel:${company.phone}`}><Phone size={18}/>Call {company.displayPhone}</a></Button></div>
    <div className="hero-stats"><div><strong><Counter value={8000}/></strong><span>Functions handled</span></div><div><strong><Counter value={10} suffix="K+"/></strong><span>App downloads</span></div><div><strong>2019</strong><span>Serving Madurai since</span></div></div>
   </div>
   <CounterDemo/>
  </div>
  <div className="strip" aria-hidden="true"/>
 </section>
 <div className="ribbon" aria-hidden="true"><div className="ribbon-track">{ribbon.map((t,i)=><span lang="ta" key={i}>{t}</span>)}</div></div>

 <section id="comparison" className="section"><div className="container">
  <Reveal><Heading eyebrow="தொழில்நுட்ப மாற்றம்" title="மொய் நோட்டு காலம் மாறிடுச்சு!" description=""/></Reveal>
  <Comparison/>
 </div></section>

 <section id="services" className="section" style={{paddingTop:0}}><div className="container">
  <div className="split-heading"><Reveal><Heading eyebrow="எங்கள் சேவைகள்" title="உங்கள் விசேஷத்திற்கான Complete Moi Management" description="மொய் பதிவு முதல் கணக்கு விவரங்கள் வரை, எல்லாமே எளிமையாக."/></Reveal><a className="text-link" href="#booking">Discuss your needs <ArrowRight size={18}/></a></div>
  <div className="services-bento">{services.map(([title,tamil,description],i)=>{const Icon=serviceIcons[i];const feature=i===0;const print=i===4;return <Reveal key={title} className={`svc ${feature?'svc-feature':''} ${print?'svc-print':''}`} delay={i*0.05}>
   <span className="svc-icon"><Icon size={26} strokeWidth={1.7}/></span><small>{title}</small><h3 lang="ta">{tamil}</h3><p lang="ta">{description}</p>
   <div className="tags">{serviceTags[i].map(t=><span key={t}>{t}</span>)}</div>
   {print&&<div className="cta-row"><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Get a printing quote <ArrowUpRight size={16}/></a></div>}
  </Reveal>;})}</div>
 </div></section>

 <section id="how-it-works" className="section tight" style={{background:'#fff'}}><div className="container">
  <Reveal><Heading eyebrow="எளிய 4 படிகள்" title="உங்கள் Function-க்கு MoiSoft எப்படி உதவுகிறது?" description="முதல் அழைப்பில் இருந்து, விசேஷம் முடிந்த அன்றே கணக்கு ஒப்படைப்பு வரை."/></Reveal>
  <Steps/>
 </div></section>

 <section id="why-us" className="section dark"><div className="container">
  <Reveal><Heading eyebrow="ஏன் MoiSoft?" title="8000+ Functions. ஆயிரக்கணக்கான மகிழ்ச்சியான தருணங்கள்." description="உங்கள் குடும்ப விசேஷத்தில் மொய் கணக்குகளை நம்பிக்கையுடன் நிர்வகிக்க உதவுகிறோம்."/></Reveal>
  <div className="bigstats"><div><strong><Counter value={8000}/></strong><span>Functions handled (business-supplied)</span></div><div><strong><Counter value={10} suffix="K+"/></strong><span>Android downloads on Google Play</span></div><div><strong>2019</strong><span>Serving Madurai since</span></div><div><strong>6</strong><span>Districts we serve</span></div></div>
  <div className="why-grid">{whyUs.map(([ta,en,copy,icon])=>{const Icon=whyIcons[icon as keyof typeof whyIcons];return <Reveal key={en} className="why"><Icon className="why-icon" size={30} strokeWidth={1.5}/><h3 lang="ta">{ta}</h3><small>{en}</small><p lang="ta">{copy}</p></Reveal>;})}</div>
 </div></section>

 <section id="events" className="section"><div className="container">
  <Reveal><Heading eyebrow="எல்லா விசேஷங்களுக்கும்" title="எந்த விசேஷமாக இருந்தாலும், MoiSoft உங்களுடன்!" description="தென் தமிழ்நாட்டின் முக்கிய குடும்ப விழாக்கள் அனைத்துக்கும் சேவை."/></Reveal>
  <div className="events">{events.map(([ta,en,copy],i)=><Reveal key={en} delay={(i%3)*0.06}><a className="event" href="#booking"><div><h3 lang="ta">{ta}</h3><small>{en}</small></div><CalendarHeart size={26}/><p lang="ta">{copy}</p></a></Reveal>)}</div>
 </div></section>

 <section id="gallery" className="section" style={{paddingTop:0}}><div className="container">
  <Reveal><Heading eyebrow="விசேஷ தருணங்கள்" title="பல குடும்பங்களின் முக்கிய விசேஷங்களில் MoiSoft!" description="8000+ functions. One trusted service."/></Reveal>
  <Gallery/>
 </div></section>

 <section id="app" className="section dark app-section"><div className="container app-grid">
  <Reveal><Heading eyebrow="MoiSoft Android App" title="உங்கள் மொய் கணக்கு. இனி உங்கள் Mobile-ல்!" description="Function முடிந்த பிறகும், உங்கள் மொய் விவரங்களை எப்போது வேண்டுமானாலும் ஸ்மார்ட்போனில் பாருங்கள்."/>
   <ul className="feature-list">{appFeatures.map(([ta,en,icon])=>{const Icon=appIcons[icon as keyof typeof appIcons];return <li key={en}><span><Icon size={20}/></span><div><b lang="ta">{ta}</b><small>{en}</small></div></li>;})}</ul>
   <a className="play-button" href={company.play} target="_blank" rel="noopener noreferrer"><Play size={26} fill="currentColor"/><span><small>GET IT ON</small><strong>Google Play</strong></span><ArrowUpRight size={20}/></a>
   <p className="app-download-note">10K+ downloads · Google Play listing</p>
  </Reveal>
  <AppPhone/>
 </div></section>

 <section id="video" className="section"><div className="container video-grid">
  <Reveal><Heading eyebrow="நேரடி செயல்விளக்கம்" title="MoiSoft எப்படி வேலை செய்கிறது?" description="Meet the service behind the screen."/><p lang="ta">கணினி மொய் பதிவு எப்படி நடைபெறுகிறது என்பதை அறிய எங்களை தொடர்பு கொள்ளுங்கள்.</p><p style={{marginTop:22}}><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Ask for a demonstration <ArrowUpRight size={18}/></a></p></Reveal>
  <div className="video-frame">{media.video?<video autoPlay muted loop playsInline controls preload="auto" poster={media.videoPoster||undefined} aria-label="MoiSoft service demonstration"><source src={media.video} type="video/mp4"/>{media.captions&&<track kind="captions" src={media.captions} srcLang="ta" label="Tamil" default/>}</video>:<div className="video-ph"><Media src={media.videoPoster} alt="MoiSoft demonstration video poster" label="Demo video"/><span className="video-shade"/><span className="playdot"><Film size={30}/></span><strong>Demo video coming soon</strong><span>Ask us on WhatsApp for a live demonstration.</span></div>}</div>
 </div></section>

 <section id="about" className="section story" style={{background:'#fff'}}><div className="container story-grid">
  <Reveal className="story-art"><Media src={media.story} alt="MoiSoft team helping with a family function" label="The people behind the service"/><div className="story-badge" lang="ta">மரபோடு இணைந்த தொழில்நுட்பம்.<small>Tradition Meets Technology</small></div></Reveal>
  <Reveal><Heading eyebrow="எங்கள் கதை" title="மொய் பாரம்பரியத்திற்கு ஒரு Digital மாற்றம்!" description="Rooted in Tradition. Powered by Technology."/>
   <p lang="ta">தமிழ்நாட்டின் பாரம்பரிய மொய் வழக்கத்தை, நவீன தொழில்நுட்பத்தின் உதவியுடன் எளிமையாக்கும் நோக்கத்துடன் MoiSoft செயல்படுகிறது.</p>
   <p lang="ta">மதுரையை மையமாகக் கொண்டு, குடும்ப விழாக்களில் மொய் பதிவு, கணக்கு ஒழுங்குபடுத்துதல் மற்றும் Digital வசதிகளை 2019 முதல் வழங்கி வருகிறோம்.</p>
   <p style={{marginTop:24}}><a className="text-link" href="#leadership">Meet the people behind MoiSoft <ArrowRight size={18}/></a></p></Reveal>
 </div></section>

 <section id="leadership" className="section"><div className="container">
  <Reveal><Heading eyebrow="எங்கள் தலைமை" title="MoiSoft-ஐ வழிநடத்தும் தலைவர்கள்." description="Three leaders. One shared commitment."/></Reveal>
  <div className="leadership-grid">{leadership.map((person,i)=>{const [,tel,display]=phones.team[i];return <Reveal key={person.name} className="leader" delay={i*0.1}><Media src={existsSync(path.join(process.cwd(),'public',person.image))?person.image:''} alt={`${person.name}, CEO of MoiSoft`} label={person.name} portrait/><div className="leader-info"><div className="leader-line"/><h3>{person.name}</h3><span>CEO · MoiSoft</span><a href={`tel:${tel}`}><Phone size={16}/>{display}</a></div></Reveal>;})}</div>
 </div></section>

 <section id="instagram" className="section" style={{paddingTop:0}}><div className="container">
  <div className="split-heading"><Reveal><Heading eyebrow="எங்களைப் பின்தொடருங்கள்" title="எங்கள் MoiSoft Function Moments!" description="From the counter to the celebration. Find us on Instagram."/></Reveal><Button variant="light" asChild><a href={company.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={19}/>Follow @moi_soft_</a></Button></div>
  <div className="gallery-grid">{instagram.slice(0,3).map(item=><a className="gallery-card" key={item.id} href={item.postUrl||company.instagram} target="_blank" rel="noopener noreferrer"><Media src={item.image} alt={item.alt} label={item.title}/><span className="gallery-caption"><span><small>Instagram</small><strong>{item.title}</strong></span><Instagram size={18}/></span></a>)}</div>
  <p style={{marginTop:26}}><a className="text-link" href={company.instagram} target="_blank" rel="noopener noreferrer">View more function moments <ArrowUpRight size={18}/></a></p>
 </div></section>

 {reviews.length>0&&<section className="section" id="reviews"><div className="container"><Heading eyebrow="வாடிக்கையாளர் அனுபவங்கள்" title="குடும்பங்களின் கருத்துகள்"/><div className="review-grid">{reviews.map(r=><blockquote key={r.name+r.text}><p>{r.text}</p><footer>{r.name} · {r.functionType} · {r.location}</footer></blockquote>)}</div></div></section>}

 <section className="section tight areas"><div className="container areas-inner">
  <div><span className="eyebrow">சேவைப் பகுதிகள்</span><h2>Madurai & South Tamil Nadu</h2><p lang="ta" style={{marginTop:12}}>உங்கள் ஊரிலும் MoiSoft சேவை — availability-ஐ கேட்டறியுங்கள்.</p><p style={{marginTop:22}}><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Check availability on WhatsApp <ArrowUpRight size={18}/></a></p></div>
  <div><div className="area-list">{areas.map(a=><span key={a}><MapPin size={15}/>{a}</span>)}</div><p className="muted" style={{marginTop:16}}>Service at every location is subject to confirmation by MoiSoft.</p></div>
 </div></section>

 <section id="faq" className="section"><div className="container faq-grid">
  <Reveal><Heading eyebrow="அடிக்கடி கேட்கப்படும் கேள்விகள்" title="உங்கள் சந்தேகங்களுக்கு பதில்கள்!" description="MoiSoft சேவைகள், கட்டணங்கள் மற்றும் முன்பதிவு பற்றி."/><a className="text-link" href={`tel:${company.phone}`}>We’re a call away <Phone size={16}/></a></Reveal>
  <FAQ/>
 </div></section>

 <section id="booking" className="section dark"><div className="container booking-grid">
  <Reveal><Heading eyebrow="எளிய முன்பதிவு" title="உங்கள் விசேஷத்திற்கு MoiSoft-ஐ Book செய்யுங்கள்!" description="Function தேதி மற்றும் இடத்தை சொல்லுங்கள். எங்கள் குழு உங்களை தொடர்பு கொள்ளும்."/>
   <div className="booking-points"><p><Check size={20}/>A direct conversation with the MoiSoft team</p><p><Check size={20}/>We confirm availability and pricing</p><p><Check size={20}/>No payment needed to enquire</p></div>
   <a href={`tel:${company.phone}`} className="booking-phone"><Phone size={26}/><span><small>Or give us a call</small>{company.displayPhone}</span></a></Reveal>
  <BookingForm/>
 </div></section>

 <section id="contact" className="section"><div className="container contact-grid">
  <div className="contact-info"><Heading eyebrow="தலைமை அலுவலகம்" title="எங்களை நேரில் சந்திக்கலாம்!"/>
   <address><strong>MoiSoft · Madurai</strong><p>{company.address}</p></address>
   <a className="contact-link" href={`tel:${company.phone}`}><Phone size={20}/>{company.displayPhone}</a>
   <a className="contact-link" href={`mailto:${company.email}`}><Mail size={20}/>{company.email}</a>
   <details className="office-details"><summary>Office lines & coordinators</summary>{phones.office.map(([t,d])=><p key={t}>Office: <a href={`tel:${t}`}>{d}</a></p>)}{phones.team.map(([n,t,d])=><p key={t}>{n}: <a href={`tel:${t}`}>{d}</a></p>)}</details></div>
  <div className="map-card"><iframe title="MoiSoft location on Google Maps" src={`https://www.google.com/maps?q=${encodeURIComponent('MoiSoft, '+company.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><div className="map-bar"><span><MapPin size={18}/>Nagamalai, Madurai · 625019</span><Button asChild><a href={company.maps} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18}/></a></Button></div></div>
 </div></section>

 <section className="final-cta"><div className="container"><h2 lang="ta">மொய் கணக்கை இனி Smart-ஆக Manage செய்யலாம்!</h2><p lang="ta">உங்கள் விசேஷத்தை சந்தோஷமாக கொண்டாடுங்கள். மொய் கணக்கு சேவைக்கு MoiSoft.</p><div className="actions"><Enquire text="WhatsApp enquiry"/><Button variant="outline" asChild><a href={`tel:${company.phone}`}><Phone size={18}/>Call MoiSoft</a></Button></div></div></section>
 </main>
 <footer className="footer"><div className="strip" aria-hidden="true"/><div className="container"><div className="footer-top">
  <div><Brand/><p>Modern Moi management for traditional celebrations. Madurai’s trusted computerized Moi partner.</p></div>
  <nav aria-label="Footer navigation"><strong>Explore</strong><a href="#about">About</a><a href="#services">Services</a><a href="#app">Mobile app</a><a href="#leadership">Leadership</a><a href="#faq">FAQs</a></nav>
  <div className="col"><strong>Services</strong><span>Computerized Moi entry</span><span>Old notebook management</span><span>Village & route sorting</span><span>Invitation printing</span></div>
  <div className="col"><strong>Stay connected</strong><a href={company.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={15}/></a><a href={company.play} target="_blank" rel="noopener noreferrer">Google Play <ArrowUpRight size={15}/></a><a href={company.maps} target="_blank" rel="noopener noreferrer">Google Maps <ArrowUpRight size={15}/></a><a href={`mailto:${company.email}`}>{company.email}</a></div>
 </div><div className="footer-bottom"><span>© {new Date().getFullYear()} MoiSoft. All rights reserved.</span><span>Made for Tamil traditions. Based in Madurai.</span></div></div></footer>
 <FloatingContact/><Analytics/>
 </>;
}
