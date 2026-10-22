'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Printer, Search, Zap } from 'lucide-react';
import { company } from '@/data/content';

type Sample = { id: number; name: string; place: string; amount: number };


const pool: [string, string, number][] = [
    ['தினேஷ் ராஜா – கீர்த்தனா', 'வேலூர்', 4001],
    ['ரா. செல்வம் – லட்சுமி', 'தேனி', 5001],
    ['சி. ஜோசப் விஜய் – சங்கீதா', 'சென்னை', 10001],
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

const EVENT = {
    family: 'சின்னன் SI Rtd – மகேஸ்வரி',
    name: 'திருமண வரவேற்பு',
    venue: 'எலைட் மாஸ்டர் மஹால், மதுரை',
    contact: '+91 9003480578',
};
const TYPIST = 'Aswin R';
const OCCUPATIONS = ['விவசாயம்', 'வணிகம்', 'முதலமைச்சர்', 'சொந்தத் தொழில்', 'அரசு பணி'];
const PHONES = ['+91 98652 41077', '+91 94431 58206', '+91 97865 33914', '+91 90031 77452'];
const DENOMS = [500, 200, 100, 50, 20, 10, 5, 2, 1];

function makeDenominations(amount: number, seed: number) {
    let remaining = amount;
    const rows: { value: number; qty: number }[] = [];
    for (let i = 0; i < DENOMS.length; i++) {
        const value = DENOMS[i];
        let qty = Math.floor(remaining / value);
        if (qty > 0 && value >= 100) {
            const breakMax = value === 500 ? Math.min(qty, 4) : Math.min(qty, 2);
            const wobble = ((seed * 7 + i * 13) % 5) / 5;
            qty -= Math.floor(wobble * (breakMax + 1));
        }
        if (qty > 0) { rows.push({ value, qty }); remaining -= value * qty; }
    }
    return rows;
}

export function CounterDemo() {
    const reduce = useReducedMotion();
    const [next, setNext] = useState(4);
    const [typed, setTyped] = useState(0);
    const [entries, setEntries] = useState<Sample[]>([3, 2].map(make));
    const [total, setTotal] = useState(START_TOTAL + pool.slice(0, 4).reduce((a, b) => a + b[2], 0));
    const [stamp, setStamp] = useState<Date | null>(null);
    const [mounted, setMounted] = useState(false);
    const upcoming = make(next);
    const chars = Array.from(upcoming.name);
    useEffect(() => { const t = setTimeout(() => { setMounted(true); setStamp(new Date()); }, 0); return () => clearTimeout(t); }, []);
    useEffect(() => {
        if (reduce) return;
        if (typed < chars.length) { const t = setTimeout(() => setTyped(typed + 1), typed === 0 ? 700 : 110); return () => clearTimeout(t); }
        const t = setTimeout(() => { setEntries(e => [upcoming, ...e].slice(0, 2)); setTotal(v => v + upcoming.amount); setStamp(new Date()); setNext(n => n + 1); setTyped(0); }, 700);
        return () => clearTimeout(t);
    }, [typed, chars.length, reduce, upcoming]);
    const latest = entries[0];
    const count = START_COUNT + entries[0].id + 1;
    const receiptNo = String(count).padStart(4, '0');
    const dateText = stamp ? stamp.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '—';
    const timeText = stamp ? stamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase() : '—';
    const denom = makeDenominations(latest.amount, latest.id + 4);
    const occupation = OCCUPATIONS[latest.id % OCCUPATIONS.length];
    const contributorPhone = PHONES[(latest.id + 1) % PHONES.length];
    return <div className="demo" role="img" aria-label="Illustrative demo of the மொய் Soft counter: names are typed in, the running total grows and a detailed thermal receipt is printed for each guest.">
        <div className="demo-glow" aria-hidden="true" />

        <div className="float-chip chip-b" aria-hidden="true"><Zap size={18} />Slip in seconds</div>
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
            <div className="typing-row"><Search size={16} /><span lang="ta">{!mounted ? '' : reduce ? 'பெயர் · ஊர் · தொகை' : Array.from(upcoming.name).slice(0, typed).join('')}</span>{mounted && !reduce && <span className="caret" />}</div>
        </div>
        <div className="printer" aria-hidden="true">
            <div className="printer-body"><span><Printer size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />Thermal print Receipt</span><i /></div>
            <span className="slot" />
            <div className="slip-wrap"><div className="slip" key={latest.id} style={reduce ? { animation: 'none' } : undefined}>
                <div className="slip-brand">
                    <Image src="/logo-transparent.png" alt="மொய் Soft" width={1807} height={351} className="slip-logo" />
                    <div className="slip-contact-line"><span>www.moisoft.in</span><b>{company.displayPhone}</b></div>
                </div>
                <div className="slip-rule" />
                <div className="slip-event">
                    <p className="slip-event-family" lang="ta">{EVENT.family}</p>
                    <p className="slip-event-name" lang="ta">{EVENT.name}</p>
                    <p className="slip-event-venue" lang="ta">{EVENT.venue}</p>
                    <p className="slip-event-contact">{EVENT.contact}</p>
                </div>
                <div className="slip-rule" />
                <div className="slip-meta">
                    <div className="slip-meta-date"><b>{dateText}</b></div>
                    <div className="slip-meta-time"><b>{timeText}</b><span className="slip-typist">Typist: {TYPIST}</span></div>
                </div>
                <div className="slip-rule" />
                <div className="slip-contributor">
                    <p className="slip-c-receipt">வ.எண் : {receiptNo}</p>
                    <p className="slip-c-place" lang="ta">{latest.place}</p>
                    <p className="slip-c-name" lang="ta">{latest.name}</p>
                    <p className="slip-c-occupation" lang="ta">{occupation}</p>
                    <p className="slip-c-phone">{contributorPhone}</p>
                    <p className="slip-c-amount-label" lang="ta">தொகை</p>
                    <p className="slip-c-amount">ரூ {fmt(latest.amount)}</p>
                </div>
                <div className="slip-rule" />
                <div className="slip-total"><span lang="ta">மொத்த தொகை</span><strong>₹ {fmt(latest.amount)}</strong></div>
                <div className="slip-rule" />
                <div className="slip-denom">
                    <p className="slip-denom-title" lang="ta">நோட்டு விபரம்</p>
                    <div className="slip-denom-head"><span>Denomination</span><span>×</span><span>Quantity</span><span>Amount</span></div>
                    {denom.map(({ value, qty }) => <div className="slip-denom-row" key={value}><span>₹{value}</span><span>×</span><span>{qty}</span><span>₹{fmt(value * qty)}</span></div>)}
                    <div className="slip-received"><span>Received</span><b>₹ {fmt(latest.amount)}</b></div>
                </div>
                <div className="slip-thanks" lang="ta">நன்றி</div>
            </div></div>
        </div>
    </div>;
}
