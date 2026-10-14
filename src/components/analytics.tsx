'use client';
import {useState,useEffect} from 'react';
import Script from 'next/script';
type AnalyticsWindow=Window & {dataLayer?:unknown[];gtag?:(...args:unknown[])=>void};
export function Analytics(){const id=process.env.NEXT_PUBLIC_GA_ID;const [consent,setConsent]=useState(false);
 useEffect(()=>{if(!id||!consent)return;const listener=(event:MouseEvent)=>{const a=(event.target as Element).closest('a');if(!a)return;const href=a.getAttribute('href')||'';const name=href.includes('wa.me')?'whatsapp_click':href.startsWith('tel:')?'call_click':href==='#booking'?'booking_enquiry_click':href.includes('play.google')?'google_play_click':href.includes('instagram.com')?'instagram_click':href.includes('share.google')?'directions_click':null;if(name)(window as AnalyticsWindow).gtag?.('event',name);};document.addEventListener('click',listener);return()=>document.removeEventListener('click',listener);},[id,consent]);
 if(!id||!/^G-[A-Z0-9]+$/.test(id))return null;
 return <><div className="analytics-consent"><span>Optional usage measurement with Google Analytics.</span><button onClick={()=>setConsent(v=>!v)}>{consent?'Turn off analytics':'Allow analytics this visit'}</button></div>{consent&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`}/><Script id="ga-init">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${id}',{send_page_view:false});`}</Script></>}</>;
}
