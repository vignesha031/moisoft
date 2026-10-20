'use client';
import {useRef} from 'react';
import {motion,useScroll,useSpring,useReducedMotion} from 'motion/react';
import {Phone,CalendarCheck,Keyboard,BookOpen, ShieldCheck} from 'lucide-react';
const steps = [
  [Phone, 'தொடர்பு கொள்ளுங்கள்', 'Contact MoiSoft', 'விழா தேதி, மண்டபம் மற்றும் விருந்தினர்கள் விவரங்களை தெரிவிக்கவும்.', 'Phone / WhatsApp'],

  [CalendarCheck, 'விவரங்களை உறுதி செய்யுங்கள்', 'Confirm the Schedule', 'தேவையான கணினிகள், நேரம் மற்றும் பணியாளர்களை உறுதி செய்வோம்.', 'Booking Confirmed'],

  [Keyboard, 'கணினி மொய் பதிவு', 'Live Computer Entry', 'விருந்தினர் பெயர், ஊர் மற்றும் மொய் தொகையை உடனுக்குடன் பதிவு செய்வோம்.', 'Real-time Entry'],

  [ShieldCheck, 'OTP பாதுகாப்பு சரிபார்ப்பு', 'Secure OTP Verification', 'மொய் பதிவுகளை மாற்ற OTP சரிபார்ப்பு கட்டாயம். உங்கள் கணக்குகளுக்கு கூடுதல் பாதுகாப்பு.', 'OTP Protected'],

  [BookOpen, 'கணக்கை பாருங்கள்', 'Book & App Access', 'முழுமையான மொய் கணக்குகளை அச்சிட்ட புத்தகம் மற்றும் Android செயலியில் பெறலாம்.', 'Printed Book + App']
] as const;
export function Steps(){
 const ref=useRef<HTMLDivElement>(null);const reduce=useReducedMotion();
 const {scrollYProgress}=useScroll({target:ref,offset:['start 75%','end 60%']});
 const p=useSpring(scrollYProgress,{stiffness:90,damping:24});
 return <div className="steps" ref={ref}>
  <div className="steps-rail" aria-hidden="true"><motion.i style={{scaleX:reduce?1:p,scaleY:reduce?1:p} as never}/></div>
  {steps.map(([Icon,ta,en,copy,pill],i)=><div className="step" key={en}>
   <span className="step-num" aria-hidden="true">{i+1}</span>
   <h3 lang="ta">{ta}</h3><small>{en}</small><p lang="ta">{copy}</p><span className="step-pill"><Icon size={14} style={{marginRight:6,verticalAlign:'-2px'}}/>{pill}</span>
  </div>)}
 </div>;
}
