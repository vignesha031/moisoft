'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, animate, useScroll, useSpring } from 'motion/react';
import { Camera, UserRound } from 'lucide-react';
export function Reveal({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const reduce=useReducedMotion(); return <motion.div className={className} initial={false} whileInView={reduce?{}:{y:[22,0],opacity:[0.4,1]}} viewport={{once:true,amount:0.12}} transition={{duration:0.65,delay,ease:[0.22,1,0.36,1]}}>{children}</motion.div>;
}
export function Counter({value,suffix='+'}:{value:number;suffix?:string}) {
 const ref=useRef<HTMLSpanElement>(null); const visible=useInView(ref,{once:true}); const reduce=useReducedMotion();
 useEffect(()=>{if(!visible||reduce||!ref.current)return;const control=animate(0,value,{duration:1.2,onUpdate:v=>{if(ref.current)ref.current.textContent=Math.round(v).toLocaleString('en-IN');}});return()=>control.stop();},[visible,reduce,value]);
 return <><span ref={ref}>{value.toLocaleString('en-IN')}</span>{suffix}</>;
}
export function Media({src='',alt,label='Photo coming soon',portrait=false,priority=false,className=''}:{src?:string;alt:string;label?:string;portrait?:boolean;priority?:boolean;className?:string}){
 const [failed,setFailed]=useState(false);
 return <div className={`media ${portrait?'portrait':''} ${className}`}>{src&&!failed?<Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority} onError={()=>setFailed(true)}/>:<div className="media-placeholder"><span className="placeholder-ornament" aria-hidden="true"/>{portrait?<UserRound size={44} strokeWidth={1}/>:<Camera size={30} strokeWidth={1.3}/>}<span>{label}</span><small>{portrait?'Portrait coming soon':'Photo coming soon'}</small></div>}</div>;
}

export function ScrollProgress(){const {scrollYProgress}=useScroll();const x=useSpring(scrollYProgress,{stiffness:120,damping:30});return <motion.div className="scroll-progress" style={{scaleX:x}} aria-hidden="true"/>;}
