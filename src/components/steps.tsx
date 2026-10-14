'use client';
import {useRef} from 'react';
import {motion,useScroll,useSpring,useReducedMotion} from 'motion/react';
import {Phone,CalendarCheck,Keyboard,BookOpen} from 'lucide-react';
const steps=[
 [Phone,'தொடர்பு கொள்ளுங்கள்','Contact MoiSoft','விசேஷ தேதி, மண்டபம் மற்றும் விருந்தினர்களின் எண்ணிக்கையை தெரிவிக்க எங்களை அழையுங்கள் அல்லது WhatsApp செய்யுங்கள்.','Phone / WhatsApp'],
 [CalendarCheck,'விவரங்களை உறுதி செய்யுங்கள்','Confirm the schedule','தேவையான லேப்டாப் கவுண்டர்கள், நேரம் மற்றும் டைப்பிஸ்ட்டுகளை எங்கள் குழு உறுதி செய்யும்.','Counter staff reserved'],
 [Keyboard,'கணினி மொய் பதிவு','Live computer entry','மண்டபத்தில் விருந்தினர் பெயர், ஊர், தொகையை உடனுக்குடன் பதிவு செய்து ரசீது அச்சிடுதல்.','Real-time tally'],
 [BookOpen,'கணக்கை பாருங்கள்','Book and app access','அச்சிட்ட புத்தகம், ரொக்கக் கணக்கு மற்றும் Android app அணுகல் உங்கள் கையில்.','Printed book + app'],
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
