'use client';
import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
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
import { phones } from '@/data/content';
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

const callNumbers=[phones.team[0],phones.team[1]] as const;

export function CallPicker(){
 const [open,setOpen]=useState(false);
 const menuId=useId();
 const triggerRef=useRef<HTMLButtonElement>(null);
 const menuRef=useRef<HTMLDivElement>(null);

 useEffect(()=>{
   if(!open) return;
   const onPointerDown=(event:PointerEvent)=>{
     const target=event.target as Node;
     if(menuRef.current?.contains(target)||triggerRef.current?.contains(target)) return;
     setOpen(false);
   };
   const onKeyDown=(event:KeyboardEvent)=>{
     if(event.key!=='Escape') return;
     setOpen(false);
     triggerRef.current?.focus();
   };
   document.addEventListener('pointerdown',onPointerDown);
   document.addEventListener('keydown',onKeyDown);
   return ()=>{
     document.removeEventListener('pointerdown',onPointerDown);
     document.removeEventListener('keydown',onKeyDown);
   };
 },[open]);

 useEffect(()=>{
   if(!open) return;
   menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
 },[open]);

 function onMenuKeyDown(event:ReactKeyboardEvent<HTMLDivElement>){
   if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
   const items=[...event.currentTarget.querySelectorAll<HTMLAnchorElement>('a')];
   if(!items.length) return;
   event.preventDefault();
   const current=items.indexOf(document.activeElement as HTMLAnchorElement);
   let next=0;
   if(event.key==='ArrowDown') next=(current+1)%items.length;
   else if(event.key==='ArrowUp') next=(current-1+items.length)%items.length;
   else if(event.key==='End') next=items.length-1;
   items[next].focus();
 }

 return <div className="call-picker">
   <button ref={triggerRef} type="button" className="call-now" aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} onClick={()=>setOpen(value=>!value)}>
     <Phone size={14}/> Call now
   </button>
   {open&&<div ref={menuRef} id={menuId} className="call-picker-menu" role="menu" aria-label="Choose a number to call" onKeyDown={onMenuKeyDown}>
     <p>Choose a number to call</p>
     {callNumbers.map(([,tel,display])=><a key={tel} href={`tel:${tel}`} role="menuitem" onClick={()=>setOpen(false)}>
       <Phone size={15}/>
       <span>{display}</span>
     </a>)}
   </div>}
 </div>;
}

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
   <div className="form-direct"><span>Prefer to talk directly?</span><WhatsAppCTA href={whatsappUrl()}>Skip form &amp; chat</WhatsAppCTA><CallPicker/></div>
 </form>;
}
