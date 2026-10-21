import { company } from '@/data/content';
export type Enquiry = { name: string; phone: string; functionType: string; date: string; location: string };
export function whatsappUrl(data?: Enquiry) {
    const text = data ? `வணக்கம் மொய் Soft,\n\nஎங்கள் வீட்டு விசேஷத்திற்கு மொய் பதிவு சேவை தேவை.\n\nபெயர்: ${data.name}\nமொபைல்: ${data.phone}\nவிசேஷ வகை: ${data.functionType}\nதேதி: ${data.date}\nஇடம்: ${data.location}\n\nService availability மற்றும் கட்டண விவரங்களை தெரிவிக்கவும்.` : 'வணக்கம் மொய் Soft, உங்கள் மொய் பதிவு சேவை பற்றி தெரிந்துகொள்ள விரும்புகிறேன்.';
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type FranchiseEnquiry = { name: string; phone: string; location: string; message?: string };

export function franchiseWhatsappUrl(data: FranchiseEnquiry) {
    const text = [
        'MOI SOFT – NEW FRANCHISE ENQUIRY',
        '',
        `Name: ${data.name}`,
        `Mobile: ${data.phone}`,
        `Preferred Location: ${data.location}`,
        `Message: ${data.message?.trim() || '—'}`,
        '',
        'I am interested in learning more about becoming a MoiSoft franchise partner. Please contact me with further details.',
    ].join('\n');
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}
