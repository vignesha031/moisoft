'use client';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageCircle,Phone } from 'lucide-react';
import {
  enquirySchema,
  functionTypes,
  needsWeddingSide,
  todayInIndia,
  weddingSideLabels,
  weddingSides,
  type EnquiryValues,
} from '@/lib/validations';
import { whatsappUrl } from '@/lib/whatsapp';
import { company } from '@/data/content';
import {Button} from './ui';
import { WhatsAppCTA, WhatsAppCtaContent } from './whatsapp-cta';

type BookingFieldName = 'name'|'phone'|'date'|'time'|'location'|'invitationCount';

type FieldOptions = {
  type?: string;
  placeholder?: string;
  helper?: string;
  autoComplete?: string;
  inputMode?: 'numeric'|'tel'|'text';
  min?: string;
  step?: string;
  valueAsNumber?: boolean;
};

export function BookingForm(){
 const { register,handleSubmit,control,resetField,clearErrors,formState:{errors} }=useForm<EnquiryValues>({
   resolver:zodResolver(enquirySchema),
   defaultValues:{name:'',phone:'',date:'',time:'',location:''},
 });
 const functionType=useWatch({control,name:'functionType'});
 const showWeddingSide=needsWeddingSide(functionType);

 useEffect(()=>{
   if(!showWeddingSide){
     resetField('weddingSide');
     clearErrors('weddingSide');
   }
 },[showWeddingSide,resetField,clearErrors]);

 function submit(values:EnquiryValues){window.location.assign(whatsappUrl(values));}

 const field=(name:BookingFieldName,label:string,options:FieldOptions={})=>{
   const error=errors[name];
   const hintId=options.helper?`${name}-hint`:undefined;
   const errorId=error?`${name}-error`:undefined;
   const describedBy=[hintId,errorId].filter(Boolean).join(' ')||undefined;
   return <div className="field">
     <label htmlFor={name}>{label} <span aria-hidden="true">*</span></label>
     <input
       id={name}
       type={options.type??'text'}
       placeholder={options.placeholder}
       autoComplete={options.autoComplete??'off'}
       inputMode={options.inputMode}
       min={options.min}
       step={options.step}
       aria-invalid={!!error}
       aria-describedby={describedBy}
       {...register(name,options.valueAsNumber?{valueAsNumber:true}:undefined)}
     />
     {options.helper&&<p className="field-hint" id={hintId}>{options.helper}</p>}
     {error&&<p role="alert" className="error" id={errorId}>{error.message}</p>}
   </div>;
 };

 return <form onSubmit={handleSubmit(submit)} noValidate className="booking-form">
   <div className="form-heading"><MessageCircle/><span><strong>Tell us about your function</strong><small>உங்கள் விசேஷ விவரங்களை பகிருங்கள்</small></span></div>
   <div className="form-grid">
     {field('name','Your name / பெயர்',{placeholder:'Your full name',autoComplete:'name'})}
     {field('phone','Mobile number / மொபைல் எண்',{type:'tel',placeholder:'10-digit mobile number',autoComplete:'tel',inputMode:'numeric'})}
     <div className="field">
       <label htmlFor="functionType">Function type / விசேஷம் <span aria-hidden="true">*</span></label>
       <select id="functionType" defaultValue="" aria-invalid={!!errors.functionType} aria-describedby={errors.functionType?'functionType-error':undefined} {...register('functionType')}>
         <option value="" disabled>Select your function</option>
         {functionTypes.map(v=><option key={v} value={v}>{v}</option>)}
       </select>
       {errors.functionType&&<p role="alert" className="error" id="functionType-error">{errors.functionType.message}</p>}
     </div>
     {field('date','Function date / தேதி',{type:'date',min:todayInIndia()})}
     {field('time','Muhurtam / Event time / முகூர்த்த நேரம்',{type:'time'})}
     {showWeddingSide&&<fieldset className="field wedding-side" aria-invalid={!!errors.weddingSide} aria-describedby={errors.weddingSide?'weddingSide-error':undefined}>
       <legend>Wedding side / திருமண வீட்டார் <span aria-hidden="true">*</span></legend>
       <div className="radio-group">
         {weddingSides.map(side=><label key={side} className="radio-option">
           <input type="radio" value={side} {...register('weddingSide')}/>
           <span>{weddingSideLabels[side]}</span>
         </label>)}
       </div>
       {errors.weddingSide&&<p role="alert" className="error" id="weddingSide-error">{errors.weddingSide.message}</p>}
     </fieldset>}
     {field('location','Function location / இடம்',{placeholder:'Venue, town or village'})}
     {field('invitationCount','Invitation count / அழைப்பிதழ்களின் எண்ணிக்கை',{type:'number',placeholder:'e.g. 1000',inputMode:'numeric',min:'1',step:'1',valueAsNumber:true,helper:'Approximate number of invitations planned or distributed.'})}
   </div>
   <Button type="submit" variant="green" className="whatsapp-cta"><WhatsAppCtaContent>Continue on WhatsApp</WhatsAppCtaContent></Button>
   <p className="form-note">Your details open in WhatsApp for you to send. Nothing is stored on this website. An enquiry does not confirm a booking.</p>
   <div className="form-direct"><span>Prefer to talk directly?</span><WhatsAppCTA href={whatsappUrl()}>Skip form &amp; chat</WhatsAppCTA><a href={`tel:${company.phone}`}><Phone size={14}/> Call now</a></div>
 </form>;
}
