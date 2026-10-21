'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Printer, Search, ShieldCheck, Zap } from 'lucide-react';
import { company } from '@/data/content';

type Sample = { id: number; name: string; place: string; amount: number };


const pool: [string, string, number][] = [
    ['க. முருகன் – மீனாட்சி', 'மதுரை', 2001],
    ['ரா. செல்வம் – லட்சுமி', 'தேனி', 5001],
    ['ச. ராஜேஷ் – பிரியா', 'திண்டுக்கல்', 1001],
    ['மு. கார்த்திக் – கவிதா', 'சிவகங்கை', 501],
    ['சத்யா – சுபா', 'திருப்பத்தூர்', 5001],
    ['மகேஷ் – அபி', 'இராமநாதபுரம்', 2001],
    ['ப. சரவணன் – சுமதி', 'விருதுநகர்', 1501],
    ['கே. முத்து – வள்ளி', 'நாகமலை', 3001],
    ['எஸ். பாண்டியன் – செல்வி', 'உசிலம்பட்டி', 2501],
    ['ஆர். கண்ணன் – மாலதி', 'சோழவந்தான்', 1001],
];


const make = (i: number): Sample => { const [name, place, amount] = pool[i % pool.length]; return { id: i, name, place, amount }; };
const fmt = (n: number) => n.toLocaleString('en-IN');
const START_TOTAL = 845500, START_COUNT = 420;

export function CounterDemo() {
    const reduce = useReducedMotion();
    const [next, setNext] = useState(4);
    const [typed, setTyped] = useState(0);
    const [entries, setEntries] = useState<Sample[]>([3, 2, 1, 0].map(make));
    const [total, setTotal] = useState(START_TOTAL + pool.slice(0, 4).reduce((a, b) => a + b[2], 0));
    const upcoming = make(next);
    const chars = Array.from(upcoming.name);
    useEffect(() => {
        if (reduce) return;
        if (typed < chars.length) { const t = setTimeout(() => setTyped(typed + 1), typed === 0 ? 700 : 110); return () => clearTimeout(t); }
        const t = setTimeout(() => { setEntries(e => [upcoming, ...e].slice(0, 4)); setTotal(v => v + upcoming.amount); setNext(n => n + 1); setTyped(0); }, 700);
        return () => clearTimeout(t);
    }, [typed, chars.length, reduce, upcoming]);
    const latest = entries[0];
    const count = START_COUNT + entries[0].id + 1;
    return <div className="demo" role="img" aria-label="Illustrative demo of the மொய் Soft counter: names are typed in, the running total grows and a thermal slip is printed for each guest.">
        <div className="demo-glow" aria-hidden="true" />
        <div className="float-chip chip-a" aria-hidden="true"><ShieldCheck size={18} />Checked totals</div>
        <div className="float-chip chip-b" aria-hidden="true"><Zap size={12} />Slip in seconds</div>
        <div className="screen" aria-hidden="true">
            <div className="screen-bar"><i /><i /><i /><span>மொய் Soft · Live counter</span><em><span className="pulse" />Live</em></div>
            <div className="screen-total"><div><small>மொத்த மொய் வரவு</small><strong>₹ {fmt(total)}</strong></div><span className="screen-count">{count} slips</span></div>
            <ul className="entries">
                <AnimatePresence initial={false} mode="popLayout">
                    {entries.map((e, i) => <motion.li key={e.id} layout={!reduce} initial={reduce ? false : { opacity: 0, y: -26, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduce ? undefined : { opacity: 0, scale: .95 }} transition={{ duration: .5, ease: [.22, 1, .36, 1] }} className={`entry ${i === 0 ? 'fresh' : ''}`}>
                        <span className="entry-avatar">{Array.from(e.name)[0]}</span><span><b lang="ta">{e.name}</b><small lang="ta">{e.place}</small></span><strong>₹{fmt(e.amount)}</strong>
                    </motion.li>)}
                </AnimatePresence>
            </ul>
            <div className="typing-row"><Search size={16} /><span lang="ta">{reduce ? 'பெயர் · ஊர் · தொகை' : Array.from(upcoming.name).slice(0, typed).join('')}</span>{!reduce && <span className="caret" />}</div>
        </div>
        <div className="printer" aria-hidden="true">
            <div className="printer-body"><span><Printer size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />Thermal print Receipt</span><i /></div>
            <span className="slot" />
            <div className="slip-wrap"><div className="slip" key={latest.id} style={reduce ? { animation: 'none' } : undefined}>
                <Image src="/logo-transparent.png" alt="" width={1807} height={351} className="slip-logo" />
                <div className="slip-contact"><span>{company.site.replace(/^https?:\/\//, '')}</span><span>{company.displayPhone}, +91 93847 29550</span></div><hr />
                <div><span lang="ta">{latest.name}</span><span>₹{fmt(latest.amount)}</span></div><div><span lang="ta">{latest.place}</span><span>#{String(count).padStart(4, '0')}</span></div><hr /><div style={{ justifyContent: 'center' }}><span lang="ta">நன்றி</span></div>
            </div></div>
        </div>
        <p className="demo-note"></p>
    </div>;
}
