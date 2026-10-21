'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight, BookOpen, Monitor, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
const old = [['அவசரமாக எழுதுவது', 'கூட்ட நெரிசலில் பெயர்கள் பிழையாகும் வாய்ப்பு அதிகம்.'], ['பெயர் தேடுவதில் சிரமம்', 'நூற்றுக்கணக்கான பக்கங்களை ஒவ்வொன்றாக புரட்ட வேண்டும்.'], ['கூட்டல் பிழைகள்', 'நள்ளிரவில் கணக்கு கூட்டும்போது தொகை வித்தியாசம் வரலாம்.'], ['நோட்டு சேதம்', 'தண்ணீர், மழையில் அழியும் ஆபத்து.']];
const fresh = [['மொய் ரசீது உடனே', 'விருந்தினருக்கு உடனுக்குடன் ரசீது வழங்கப்படும்.'], ['நொடியில் பெயர்தேடல்', 'மொபைல் app-ல் உறவினர் பெயரை விரைவாக தேடலாம்.'], ['Route வாரியாக புத்தகம்', 'விசேஷம் முடிந்த அன்றே அச்சிட்ட புத்தகம்.'], ['Android app & Cloud backup', 'உங்கள் மொபைலில் பாதுகாப்பாக இருக்கும்.']];
export function Comparison() {
   const [value, setValue] = useState(50); const stage = useRef<HTMLDivElement>(null);
   function drag(e: React.PointerEvent<HTMLDivElement>) { if (!e.currentTarget.hasPointerCapture(e.pointerId)) return; const r = stage.current!.getBoundingClientRect(); setValue(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100))); }
   return <div className="compare-wrap">
      <div className="vs">
         <motion.div className="vs-col vs-old" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
            <h3 lang="ta">பழைய முறை · கையெழுத்து நோட்டு</h3>
            <ul>{old.map(([a, b]) => <li key={a}><X size={20} /><span><b lang="ta">{a}</b><span lang="ta">{b}</span></span></li>)}</ul>
            <p className="vs-verdict" lang="ta">நேர விரயம், மன உளைச்சல், கணக்கு குழப்பம்.</p>
         </motion.div>
         <motion.div className="vs-col vs-new" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: .12 }}>
            <h3 lang="ta">மொய் Soft · கணினி மொய் மேலாண்மை</h3>
            <ul>{fresh.map(([a, b]) => <li key={a}><Check size={20} /><span><b lang="ta">{a}</b><span lang="ta">{b}</span></span></li>)}</ul>
            <p className="vs-verdict" lang="ta">தெளிவான கணக்கு, அமைதியான மனம், கௌரவமான பதிவு.</p>
         </motion.div>
      </div>
      <div className="comparison-experience">
         <div className="comparison-heading"><div><span className="eyebrow">ONE CELEBRATION. TWO WAYS.</span><h3>From handwritten pages to clear records.</h3></div><div className="comparison-modes" aria-label="Comparison view">{[['Notebook', 100], ['Compare', 50], ['Digital', 0]].map(([label, position]) => <button type="button" key={label} aria-pressed={Math.round(value) === position} onClick={() => setValue(Number(position))}>{label}</button>)}</div></div>
         <div className="compare-stage" ref={stage} onPointerMove={drag} onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); drag(e); }} onPointerUp={e => { if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId); }}>
            <div className="record-scene digital-scene" aria-hidden="true">
               <div className="scene-label digital-label"><Monitor size={16} /> THE DIGITAL WAY <span>Organised. Instantly.</span></div>
               <div className="digital-photo-wrap"><Image src="/images/the-digital-way.png" alt="" fill sizes="(max-width: 700px) 50vw, 25vw" className="digital-photo" /></div>
            </div>
            <div className="record-scene notebook-scene pane-paper-clip" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }} aria-hidden="true">
               <div className="scene-label notebook-label"><BookOpen size={16} /> THE TRADITIONAL WAY <span>One page at a time.</span></div>
               <div className="notebook-photo-wrap"><Image src="/images/handwritten-ledger.png" alt="" fill sizes="(max-width: 700px) 50vw, 25vw" className="notebook-photo" /></div>
            </div>
            <div className="divider" style={{ left: `${value}%` }} aria-hidden="true"><span><ArrowLeftRight size={22} /></span><b className="divider-hint">DRAG</b></div>
         </div>
         <div className="comparison-controls"><label className="slider-label" htmlFor="comparison-slider"><span><BookOpen size={16} /> Notebook</span><strong>Slide to see the difference</strong><span>Digital <Monitor size={16} /></span></label>
            <input id="comparison-slider" className="comparison-slider" type="range" min="0" max="100" value={Math.round(value)} onChange={e => setValue(Number(e.target.value))} aria-label="Traditional notebook visibility" aria-valuetext={`${Math.round(value)}% notebook, ${100 - Math.round(value)}% digital records`} />
         </div>
      </div>

   </div>;
}
