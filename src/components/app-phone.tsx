'use client';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Search, Smartphone, CloudUpload } from 'lucide-react';
const rows = [['க. முத்து', 'மதுரை', '₹2,001'], ['முருகேசன்', 'மதுரை', '₹2,501'], ['ராஜா & குடும்பம்', 'தேனி', '₹5,001'], ['செல்வராஜ்', 'திண்டுக்கல்', '₹1,001']];
const query = 'முத்து';
export function AppPhone() {
    const reduce = useReducedMotion(); const [n, setN] = useState(0);
    useEffect(() => { if (reduce) return; const total = Array.from(query).length; const t = setInterval(() => setN(v => v >= total + 6 ? 0 : v + 1), 520); return () => clearInterval(t); }, [reduce]);
    const q = reduce ? '' : Array.from(query).slice(0, n).join('');
    const shown = q ? rows.filter(r => r[0].includes(q)) : rows;
    return <div className="phone-stage">
        <div className="app-chip a" aria-hidden="true"><Search size={16} />2-வினாடி தேடல்</div>
        <div className="app-chip b" aria-hidden="true"><CloudUpload size={16} />Cloud backup</div>
        <div className="phone" role="img" aria-label="Illustrative mock-up of the மொய் Soft Android app with a total, a search box and a list of sample மொய்  records.">
            <div className="phone-screen"><span className="phone-camera" />
                <div className="phone-head"><small>Madurai Wedding</small><strong>மொய் <span className="zari">Soft</span></strong></div>
                <div className="phone-total"><small>மொத்த வரவு</small><b>₹ 8,45,500</b></div>
                <div className="phone-search"><Search size={15} /><span lang="ta">{q || 'பெயர் அல்லது ஊர் தேடுங்கள்'}</span></div>
                <ul className="phone-list">{shown.slice(0, 4).map((r, i) => <li key={r[0]} className={q && i === 0 ? 'hit' : ''}><span><b lang="ta">{r[0]}</b><small lang="ta">{r[1]}</small></span><strong>{r[2]}</strong></li>)}</ul>
            </div>
        </div>
        <span className="phone-illustrative"><Smartphone size={12} style={{ verticalAlign: '-2px' }} /> Illustrative screen · sample data</span>
    </div>;
}
