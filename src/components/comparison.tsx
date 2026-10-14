'use client';
import {useRef,useState} from 'react';
import {ArrowLeftRight,BookOpen,Monitor,Check,X,Search,ShieldCheck,Printer,Cloud,FileText} from 'lucide-react';
import {motion} from 'motion/react';
const old=[['அவசரமாக எழுதுவது','கூட்ட நெரிசலில் பெயர்கள் பிழையாகும் வாய்ப்பு அதிகம்.'],['பெயர் தேடுவதில் சிரமம்','நூற்றுக்கணக்கான பக்கங்களை ஒவ்வொன்றாக புரட்ட வேண்டும்.'],['கூட்டல் பிழைகள்','நள்ளிரவில் கணக்கு கூட்டும்போது தொகை வித்தியாசம் வரலாம்.'],['நோட்டு சேதம்','தண்ணீர், மழையில் அழியும் ஆபத்து.']];
const fresh=[['தெர்மல் ரசீது உடனே','விருந்தினருக்கு உடனுக்குடன் ரசீது வழங்கப்படும்.'],['நொடியில் பெயர்தேடல்','மொபைல் app-ல் உறவினர் பெயரை விரைவாக தேடலாம்.'],['Route வாரியாக புத்தகம்','விசேஷம் முடிந்த அன்றே அச்சிட்ட புத்தகம்.'],['Android app & Cloud backup','உங்கள் மொபைலில் பாதுகாப்பாக இருக்கும்.']];
export function Comparison(){
 const [value,setValue]=useState(50);const stage=useRef<HTMLDivElement>(null);
 function drag(e:React.PointerEvent<HTMLDivElement>){if(!e.currentTarget.hasPointerCapture(e.pointerId))return;const r=stage.current!.getBoundingClientRect();setValue(Math.min(100,Math.max(0,((e.clientX-r.left)/r.width)*100)));}
 const records=[['க. முத்து','மதுரை','2,001'],['ராஜா & குடும்பம்','தேனி','5,001'],['செல்வராஜ்','திண்டுக்கல்','1,001'],['மீனா','சிவகங்கை','501'],['கார்த்திக்','மதுரை','1,001']];
 return <div className="compare-wrap">
  <div className="comparison-experience">
   <div className="comparison-heading"><div><span className="eyebrow">ONE CELEBRATION. TWO WAYS.</span><h3>From handwritten pages to clear records.</h3></div><div className="comparison-modes" aria-label="Comparison view">{[['Notebook',100],['Compare',50],['Digital',0]].map(([label,position])=><button type="button" key={label} aria-pressed={Math.round(value)===position} onClick={()=>setValue(Number(position))}>{label}</button>)}</div></div>
   <div className="compare-stage" ref={stage} onPointerMove={drag} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);drag(e);}} onPointerUp={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);}}>
    <div className="record-scene digital-scene" aria-hidden="true">
     <div className="scene-label digital-label"><Monitor size={16}/> THE DIGITAL WAY <span>Organised. Instantly.</span></div>
     <div className="digital-ledger">
      <div className="ledger-toolbar"><span className="ledger-brand"><span>M</span> MoiSoft <small>/ Function records</small></span><span className="sync-status"><Cloud size={14}/> Saved</span></div>
      <div className="digital-summary"><div><small>TOTAL MOI RECEIVED</small><strong>₹9,505<span>From 5 entries</span></strong></div><div className="record-status"><ShieldCheck size={18}/><span>Every entry.<br/>Accounted for.</span></div></div>
      <div className="ledger-search"><Search size={15}/><span>Search name or village</span><span className="record-count">5 records</span></div>
      <div className="record-table"><div className="record-table-head"><span>No.</span><span>Guest name</span><span>Village</span><span>Amount</span></div>{records.map(([name,village,amount],i)=><div className="record-table-row" key={name}><span className="record-index">0{i+1}</span><b lang="ta">{name}</b><span lang="ta">{village}</span><strong>₹{amount}</strong></div>)}</div>
      <div className="ledger-bottom"><span><ShieldCheck size={14}/> Totals calculated automatically</span><span><Printer size={14}/> Print-ready records</span></div>
     </div>
    </div>
    <div className="record-scene notebook-scene pane-paper-clip" style={{clipPath:`inset(0 ${100-value}% 0 0)`}} aria-hidden="true">
     <div className="scene-label notebook-label"><BookOpen size={16}/> THE TRADITIONAL WAY <span>One page at a time.</span></div>
     <div className="paper-ledger"><div className="notebook-binding"/>
      <div className="paper-heading"><span><small>வரவு விவரம்</small><b lang="ta">மொய் வரவு நோட்டு</b></span><span className="paper-page">பக்கம் · 01</span></div>
      <div className="paper-subtitle" lang="ta">இல்லத் திருமண விழா <span>தேதி: 24 / 05 / 2026</span></div>
      <div className="record-table paper-table"><div className="record-table-head" lang="ta"><span>எண்</span><span>பெயர்</span><span>ஊர்</span><span>தொகை</span></div>{records.map(([name,village,amount],i)=><div className="record-table-row" key={name}><span>{i+1}.</span><b lang="ta">{name}</b><span lang="ta">{village}</span><strong>{amount} /–</strong></div>)}</div>
      <div className="paper-total"><span lang="ta">மொத்தம்</span><span>₹ __________</span></div><span className="paper-note" lang="ta">கணக்கு சரிபார்க்கவும்…</span>
     </div>
    </div>
    <div className="divider" style={{left:`${value}%`}} aria-hidden="true"><span><ArrowLeftRight size={22}/></span><b className="divider-hint">DRAG</b></div>
   </div>
   <div className="comparison-controls"><label className="slider-label" htmlFor="comparison-slider"><span><BookOpen size={16}/> Notebook</span><strong>Slide to see the difference</strong><span>Digital <Monitor size={16}/></span></label>
   <input id="comparison-slider" className="comparison-slider" type="range" min="0" max="100" value={Math.round(value)} onChange={e=>setValue(Number(e.target.value))} aria-label="Traditional notebook visibility" aria-valuetext={`${Math.round(value)}% notebook, ${100-Math.round(value)}% digital records`}/>
   <p className="muted"><FileText size={13}/> Same five entries, two different experiences. Illustrative records.</p></div>
  </div>
  <div className="vs">
   <motion.div className="vs-col vs-old" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7}}>
    <h3 lang="ta">பழைய முறை · கையெழுத்து நோட்டு</h3>
    <ul>{old.map(([a,b])=><li key={a}><X size={20}/><span><b lang="ta">{a}</b><span lang="ta">{b}</span></span></li>)}</ul>
    <p className="vs-verdict" lang="ta">நேர விரயம், மன உளைச்சல், கணக்கு குழப்பம்.</p>
   </motion.div>
   <motion.div className="vs-col vs-new" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7,delay:.12}}>
    <h3 lang="ta">MoiSoft · கணினி மொய் மேலாண்மை</h3>
    <ul>{fresh.map(([a,b])=><li key={a}><Check size={20}/><span><b lang="ta">{a}</b><span lang="ta">{b}</span></span></li>)}</ul>
    <p className="vs-verdict" lang="ta">தெளிவான கணக்கு, அமைதியான மனம், கௌரவமான பதிவு.</p>
   </motion.div>
  </div>
 </div>;
}
