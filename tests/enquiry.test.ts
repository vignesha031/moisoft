import {test} from 'node:test';
import assert from 'node:assert/strict';
import {enquirySchema,todayInIndia} from '../src/lib/validations';
import {whatsappUrl} from '../src/lib/whatsapp';
const valid={name:'தமிழ் குடும்பம்',phone:'9944138970',functionType:'Wedding' as const,date:'2099-12-31',time:'09:30',weddingSide:'groom' as const,location:'மதுரை & Theni / திருமண மண்டபம்',invitationCount:1000};
test('accepts Tamil names, valid Indian mobile and future date',()=>{assert.equal(enquirySchema.safeParse(valid).success,true)});
test('rejects empty form, past date, impossible date and invalid phone',()=>{assert.equal(enquirySchema.safeParse({}).success,false);for(const update of [{date:'2020-01-01'},{date:'2099-02-31'},{phone:'1234567890'},{phone:'99441389700'},{name:' '},{location:''},{time:'24:00'},{time:'9:30'},{invitationCount:0},{invitationCount:-5},{invitationCount:1.5}])assert.equal(enquirySchema.safeParse({...valid,...update}).success,false)});
test('requires wedding side only for Wedding and Reception',()=>{
  assert.equal(enquirySchema.safeParse({...valid,weddingSide:undefined}).success,false);
  assert.equal(enquirySchema.safeParse({...valid,functionType:'Reception',weddingSide:undefined}).success,false);
  assert.equal(enquirySchema.safeParse({...valid,functionType:'Reception',weddingSide:'both'}).success,true);
  assert.equal(enquirySchema.safeParse({...valid,functionType:'Housewarming',weddingSide:undefined}).success,true);
});
test('uses Indian calendar day at midnight boundary',()=>{assert.equal(todayInIndia(new Date('2026-10-13T18:45:00Z')),'2026-10-14')});
test('WhatsApp message includes all enquiry fields',()=>{const url=new URL(whatsappUrl(valid));assert.equal(url.origin,'https://wa.me');assert.equal(url.pathname,'/919944138970');const message=url.searchParams.get('text')!;for(const expected of ['Name: தமிழ் குடும்பம்','Mobile: 9944138970','Function: Wedding','Date: 31 December 2099','Muhurtam / Event Time: 9:30 AM','Wedding Side: மாப்பிள்ளை வீட்டார்','Location: மதுரை & Theni / திருமண மண்டபம்','Invitation Count: 1,000'])assert.ok(message.includes(expected),expected);assert.equal([...url.searchParams].length,1)});
test('WhatsApp message omits wedding side for other functions',()=>{const message=new URL(whatsappUrl({...valid,functionType:'Housewarming',weddingSide:undefined})).searchParams.get('text')!;assert.ok(!message.includes('Wedding Side:'));assert.ok(message.includes('Muhurtam / Event Time: 9:30 AM'))});
