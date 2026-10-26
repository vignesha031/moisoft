import { company } from '@/data/content';
import { needsWeddingSide, weddingSideLabels, type WeddingSide } from '@/lib/validations';

export type Enquiry = {
    name: string;
    phone: string;
    functionType: string;
    date: string;
    time: string;
    weddingSide?: WeddingSide;
    location: string;
    invitationCount: number;
};

export function formatEventTime(value: string) {
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
    if (!match) return value;
    const hours = Number(match[1]);
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hours % 12 || 12}:${match[2]} ${period}`;
}

function formatEventDate(value: string) {
    const date = new Date(`${value}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}

export function whatsappUrl(data?: Enquiry) {
    const text = data
        ? [
            'MOI SOFT — NEW BOOKING ENQUIRY',
            '',
            `Name: ${data.name}`,
            `Mobile: ${data.phone}`,
            `Function: ${data.functionType}`,
            `Date: ${formatEventDate(data.date)}`,
            `Muhurtam / Event Time: ${formatEventTime(data.time)}`,
            ...(needsWeddingSide(data.functionType) && data.weddingSide
                ? [`Wedding Side: ${weddingSideLabels[data.weddingSide]}`]
                : []),
            `Location: ${data.location}`,
            `Invitation Count: ${data.invitationCount.toLocaleString('en-IN')}`,
            '',
            'Please share availability and pricing details. This is an enquiry, not a confirmed booking.',
        ].join('\n')
        : 'வணக்கம் மொய் Soft, உங்கள் மொய் பதிவு சேவை பற்றி தெரிந்துகொள்ள விரும்புகிறேன்.';
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type FranchiseEnquiry = {
    name: string;
    phone: string;
    area: string;
    message?: string;
};

export function franchiseWhatsappUrl(data?: FranchiseEnquiry) {
    const message = data?.message?.trim();
    const text = data
        ? [
            'வணக்கம் மொய் Soft,',
            '',
            'Franchise வாய்ப்பு பற்றி மேலும் அறிய விரும்புகிறேன்.',
            '',
            `பெயர்: ${data.name}`,
            `மொபைல் எண்: ${data.phone}`,
            `விரும்பும் பகுதி: ${data.area}`,
            ...(message ? [`கூடுதல் விவரம்: ${message}`] : []),
        ].join('\n')
        : 'வணக்கம் மொய் Soft, உங்கள் Franchise வாய்ப்பு மற்றும் இணையும் முறை பற்றி மேலும் தெரிந்துகொள்ள விரும்புகிறேன்.';
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}
