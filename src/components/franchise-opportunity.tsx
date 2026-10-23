import {
    BriefcaseBusiness,
    HeartHandshake,
    Phone,
    ShieldCheck,
} from 'lucide-react';

import { company } from '@/data/content';
import { franchiseWhatsappUrl } from '@/lib/whatsapp';
import { WhatsAppCTA } from './whatsapp-cta';
import { FranchiseNetworkTop, FranchiseNetworkBottom } from './franchise-network';

const stats = [
    { value: '2019', label: 'மொய் Soft தொடங்கப்பட்ட ஆண்டு' },
    { value: '10,000+', label: 'வாடிக்கையாளர்களின் நம்பிக்கை' },
    { value: '200+', label: 'பகுதி நேர பணியாளர்கள்' },
] as const;

const benefits = [
    {
        title: 'பாரம்பரியமும் தொழில்நுட்பமும்',
        description:
            'திருமணம் மற்றும் குடும்ப விழாக்களில் தொடரும் மொய் பாரம்பரியத்திற்கு நவீன கணினி சேவை.',
        Icon: HeartHandshake,
    },
    {
        title: 'துல்லியமான மொய் கணக்கு',
        description:
            'மொய் பதிவு தாமதம் மற்றும் கணக்குப் பிழைகளைக் குறைத்து, தெளிவான கணக்கு விவரங்களை வழங்கும் தொழில்நுட்பம்.',
        Icon: ShieldCheck,
    },
    {
        title: 'உங்கள் பகுதியில் தொழில் வாய்ப்பு',
        description:
            'மொய் Soft பிராண்ட் மற்றும் மென்பொருளுடன் இணைந்து, உங்கள் ஊரிலேயே மொய் பதிவு சேவையை வழங்கும் வாய்ப்பு.',
        Icon: BriefcaseBusiness,
    },
] as const;

export function FranchiseOpportunity() {
    return (
        <section
            id="franchise-enquiry"
            className="section franchise-enquiry"
            aria-labelledby="franchise-opportunity-title"
        >
            <div className="fe-network fe-network-tr" aria-hidden="true">
                <FranchiseNetworkTop />
            </div>
            <div className="fe-network fe-network-bl" aria-hidden="true">
                <FranchiseNetworkBottom />
            </div>

            <div className="container fo-shell">
                <div className="fo-intro">
                    <span className="fo-eyebrow">MOI SOFT · FRANCHISE OPPORTUNITY</span>
                    <h2 id="franchise-opportunity-title" className="fo-title" lang="ta">
                        உங்கள் ஊரிலேயே ஒரு புதிய தொழில் வாய்ப்பு!
                    </h2>
                    <p className="fo-lead" lang="ta">
                        தமிழர்களின் பாரம்பரிய மொய் சேவையை நவீன தொழில்நுட்பத்துடன் இணைத்து,
                        உங்கள் பகுதியிலேயே சொந்தமாகத் தொழில் தொடங்குங்கள்.
                    </p>
                    <p className="fo-tagline" lang="ta">
                        பாரம்பரியத்தைப் பாதுகாப்போம்... தொழில்நுட்பத்தால் முன்னேறுவோம்!
                    </p>
                </div>

                <div className="fo-aside">
                    <dl className="fo-stats">
                        {stats.map(stat => (
                            <div className="fo-stat" key={stat.value}>
                                <dt lang="ta">{stat.label}</dt>
                                <dd>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <ul className="fo-benefits">
                        {benefits.map(({ title, description, Icon }) => (
                            <li className="fo-benefit" key={title}>
                                <span className="fo-benefit-icon" aria-hidden="true">
                                    <Icon size={19} strokeWidth={1.7} />
                                </span>
                                <div>
                                    <h3 lang="ta">{title}</h3>
                                    <p lang="ta">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="fo-cta">
                    <h3 lang="ta">
                        நீங்களும் மொய் Soft Franchise தொடங்க விரும்புகிறீர்களா?
                    </h3>
                    <p lang="ta">
                        உங்கள் பகுதியில் புதிய தொழில் வாய்ப்பை உருவாக்க, Franchise விவரங்கள்
                        மற்றும் இணையும் முறையை அறிய எங்களைத் தொடர்பு கொள்ளுங்கள்.
                    </p>
                    <div className="fo-actions">
                        <WhatsAppCTA
                            className="fo-action fo-action-wa"
                            href={franchiseWhatsappUrl()}
                        >
                            WhatsApp மூலம் தொடர்பு கொள்ளுங்கள்
                        </WhatsAppCTA>
                        <a className="fo-action fo-action-call" href={`tel:${company.phone}`}>
                            <Phone size={17} aria-hidden="true" />
                            <span>நேரடியாக அழைக்கவும்</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
