'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { company, navigation } from '@/data/content';
import { whatsappUrl } from '@/lib/whatsapp';
import { Button } from './ui';
import { WhatsAppCTA } from './whatsapp-cta';
import { CallPicker } from './booking';
const visibleNavigation = navigation.filter(([id]) => id !== 'how-it-works');
export function Brand() { return <a href="#hero" className="brand" aria-label="மொய் Soft home"><span className="brand-logo"><Image src="/logo-transparent.png" alt="மொய் Soft – King of Trust" width={1807} height={351} priority /></span></a>; }
export function Navbar() {
    const [open, setOpen] = useState(false); const [active, setActive] = useState('hero'); const [scrolled, setScrolled] = useState(false);
    useEffect(() => { const on = () => setScrolled(window.scrollY > 40); on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on); }, []);
    useEffect(() => { const observer = new IntersectionObserver(entries => { for (const e of entries) if (e.isIntersecting) setActive(e.target.id); }, { rootMargin: '-15% 0px -65% 0px' }); visibleNavigation.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);
    return <header className={`header ${scrolled ? 'scrolled' : ''}`}><div className="container nav-wrap"><Brand /><nav aria-label="Main navigation" className="desktop-nav">{visibleNavigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav><Button asChild className="desktop-enquiry"><a href="#booking">Book Now <ArrowUpRight size={17} /></a></Button><div className="mobile-nav-actions"><a className="icon-button" href={`tel:${company.phone}`} aria-label="Call மொய் Soft"><Phone size={20} /></a><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger className="icon-button" aria-label="Open navigation"><Menu /></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="mobile-menu"><Dialog.Title asChild><h2>Explore மொய் Soft</h2></Dialog.Title><Dialog.Description className="sr-only">Navigate to a section of the website.</Dialog.Description><Dialog.Close className="icon-button close" aria-label="Close navigation"><X /></Dialog.Close><nav aria-label="Mobile navigation">{visibleNavigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}</nav><Button asChild><a href="#booking" onClick={() => setOpen(false)}>Enquire about your function</a></Button></Dialog.Content></Dialog.Portal></Dialog.Root></div></div></header>;
}
export function FloatingContact() { const [dismissed, setDismissed] = useState(false); return <><div className="floating-contact">{!dismissed && <div className="contact-note">Planning a function?<a href="#booking">Let’s talk about it <ArrowUpRight size={14} /></a><button aria-label="Dismiss enquiry message" onClick={() => setDismissed(true)}><X size={14} /></button></div>}<a className="float-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp"><MessageCircle /></a></div><div className="mobile-bottom"><CallPicker /><WhatsAppCTA href={whatsappUrl()}>WhatsApp enquiry</WhatsAppCTA></div></>; }
