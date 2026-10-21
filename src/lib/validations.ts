import { z } from 'zod';
export function todayInIndia(now = new Date()) { return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export const enquirySchema = z.object({
 name:z.string().trim().min(2,'பெயர் குறைந்தது 2 எழுத்துகள் இருக்க வேண்டும்.').max(80),
 phone:z.string().trim().regex(/^[6-9]\d{9}$/, 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.'),
 functionType:z.enum(['Wedding','Ear-Piercing','Housewarming','Traditional Function','Other'],{error:'விசேஷ வகையை தேர்வு செய்யவும்.'}),
 date:z.string().refine(v => /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v).toISOString().slice(0,10)===v && v>=todayInIndia(),'இன்று அல்லது வரவிருக்கும் தேதியை தேர்வு செய்யவும்.'),
 location:z.string().trim().min(2,'விசேஷம் நடைபெறும் இடத்தை உள்ளிடவும்.').max(200),
});
export type EnquiryValues = z.infer<typeof enquirySchema>;

export function normalizeIndianMobile(value: string) {
  const digits = value.replace(/[^\d]/g, '');
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1);
  return digits;
}
export function isIndianMobile(value: string) {
  return /^[6-9]\d{9}$/.test(normalizeIndianMobile(value));
}
export const franchiseEnquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.').max(80, 'Name must be 80 characters or less.'),
  phone: z.string().trim().refine(isIndianMobile, 'Enter a valid 10-digit Indian mobile number.'),
  location: z.string().trim().min(2, 'Please enter your preferred franchise location.').max(120, 'Location must be 120 characters or less.'),
  message: z.string().trim().max(500, 'Message must be 500 characters or less.').optional(),
});
export type FranchiseEnquiryValues = z.infer<typeof franchiseEnquirySchema>;
