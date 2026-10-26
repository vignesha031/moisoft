import { FranchiseNetworkTop, FranchiseNetworkBottom } from './franchise-network';
import { FranchiseEnquiryForm } from './franchise-enquiry-form';

const stats = [
    { value: '2019', label: 'மொய் Soft தொடங்கப்பட்ட ஆண்டு' },
    { value: '10,000+', label: 'வாடிக்கையாளர்களின் நம்பிக்கை' },
    { value: '200+', label: 'பகுதி நேர பணியாளர்கள்' },
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

                    <dl className="fo-stats">
                        {stats.map(stat => (
                            <div className="fo-stat" key={stat.value}>
                                <dt lang="ta">{stat.label}</dt>
                                <dd>{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <FranchiseEnquiryForm />
            </div>
        </section>
    );
}
