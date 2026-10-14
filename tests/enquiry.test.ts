import {test} from 'node:test';
import assert from 'node:assert/strict';
import {enquirySchema,todayInIndia} from '../src/lib/validations';
import {whatsappUrl} from '../src/lib/whatsapp';
const valid={name:'தமிழ் குடும்பம்',phone:'9944138970',functionType:'Wedding' as const,date:'2099-12-31',location:'மதுரை & Theni / திருமண மண்டபம்'};
test('accepts Tamil names, valid Indian mobile and future date',()=>{assert.equal(enquirySchema.safeParse(valid).success,true)});
test('rejects empty form, past date, impossible date and invalid phone',()=>{assert.equal(enquirySchema.safeParse({}).success,false);for(const update of [{date:'2020-01-01'},{date:'2099-02-31'},{phone:'1234567890'},{phone:'99441389700'},{name:' '},{location:''}])assert.equal(enquirySchema.safeParse({...valid,...update}).success,false)});
test('uses Indian calendar day at midnight boundary',()=>{assert.equal(todayInIndia(new Date('2026-10-13T18:45:00Z')),'2026-10-14')});
test('WhatsApp message preserves Unicode and special characters',()=>{const url=new URL(whatsappUrl(valid));assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/919944138970');const message=url.searchParams.get('text')!;for(const value of Object.values(valid))assert.ok(message.includes(value));assert.equal([...url.searchParams].length,1)});
