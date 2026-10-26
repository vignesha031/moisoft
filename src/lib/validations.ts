import { z } from 'zod';
export function todayInIndia(now = new Date()) { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now); }

export const functionTypes = ['Wedding', 'Reception', 'Ear-Piercing', 'Housewarming', 'Traditional Function', 'Other'] as const;
export type FunctionType = (typeof functionTypes)[number];

export const weddingSides = ['groom', 'bride', 'both'] as const;

export type WeddingSide = (typeof weddingSides)[number];

export const weddingSideLabels: Record<WeddingSide, string> = {
  groom: 'மாப்பிள்ளை வீட்டார்',
  bride: 'பெண் வீட்டார்',
  both: 'இரு வீட்டாரும்',
};
export function needsWeddingSide(functionType: string) {
  return functionType === 'Wedding' || functionType === 'Reception';
}

const weddingSideMessage = 'திருமண வீட்டார் விவரத்தை தேர்வு செய்யவும்.';

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'பெயர் குறைந்தது 2 எழுத்துகள் இருக்க வேண்டும்.').max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.'),
  functionType: z.enum(functionTypes, { error: 'விசேஷ வகையை தேர்வு செய்யவும்.' }),
  date: z.string().refine(v => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v).toISOString().slice(0, 10) === v && v >= todayInIndia(), 'இன்று அல்லது வரவிருக்கும் தேதியை தேர்வு செய்யவும்.'),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'சரியான முகூர்த்த / நிகழ்ச்சி நேரத்தை தேர்வு செய்யவும்.'),
  weddingSide: z.enum(weddingSides, { error: weddingSideMessage }).optional(),
  location: z.string().trim().min(2, 'விசேஷம் நடைபெறும் இடத்தை உள்ளிடவும்.').max(200),
  invitationCount: z.number({ error: 'அழைப்பிதழ்களின் எண்ணிக்கையை உள்ளிடவும்.' }).int('முழு எண்ணை மட்டும் உள்ளிடவும்.').positive('பூஜ்ஜியத்தை விட அதிகமான எண்ணை உள்ளிடவும்.'),
}).superRefine((data, ctx) => {
  if (needsWeddingSide(data.functionType) && !data.weddingSide) {
    ctx.addIssue({ code: 'custom', path: ['weddingSide'], message: weddingSideMessage });
  }
});
export type EnquiryValues = z.infer<typeof enquirySchema>;

export const franchiseEnquirySchema = z.object({
  name: z.string().trim().min(2, 'பெயரை உள்ளிடவும் (குறைந்தது 2 எழுத்துகள்).').max(80, 'பெயர் 80 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்.'),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.'),
  area: z.string().trim().min(2, 'விரும்பும் பகுதியை உள்ளிடவும்.').max(120, 'பகுதி பெயர் 120 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்.'),
  message: z.string().trim().max(500, 'கூடுதல் விவரம் 500 எழுத்துகளுக்கு மிகாமல் இருக்க வேண்டும்.').optional(),
});
export type FranchiseEnquiryValues = z.infer<typeof franchiseEnquirySchema>;


