'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    franchiseEnquirySchema,
    normalizeIndianMobile,
    type FranchiseEnquiryValues,
} from '@/lib/validations';
import { franchiseWhatsappUrl } from '@/lib/whatsapp';
import { Button } from './ui';
import { WhatsAppCtaContent } from './whatsapp-cta';

export function FranchiseEnquiryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FranchiseEnquiryValues>({ resolver: zodResolver(franchiseEnquirySchema) });

    function submit(values: FranchiseEnquiryValues) {
        window.location.assign(
            franchiseWhatsappUrl({
                name: values.name,
                phone: normalizeIndianMobile(values.phone),
                location: values.location,
                message: values.message,
            })
        );
    }

    return (
        <form onSubmit={handleSubmit(submit)} noValidate className="franchise-form">
            <div className="form-grid">
                <div className="field">
                    <label htmlFor="franchise-name">
                        Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="franchise-name"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'franchise-name-error' : undefined}
                        {...register('name')}
                    />
                    {errors.name && (
                        <p role="alert" className="error" id="franchise-name-error">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="franchise-phone">
                        Mobile Number <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="franchise-phone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="98765 43000"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'franchise-phone-error' : undefined}
                        {...register('phone')}
                    />
                    {errors.phone && (
                        <p role="alert" className="error" id="franchise-phone-error">
                            {errors.phone.message}
                        </p>
                    )}
                </div>
                <div className="field full">
                    <label htmlFor="franchise-location">
                        Preferred Franchise Location / Area&nbsp;<span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="franchise-location"
                        type="text"
                        placeholder="City, town or area"
                        aria-invalid={!!errors.location}
                        aria-describedby={errors.location ? 'franchise-location-error' : undefined}
                        {...register('location')}
                    />
                    {errors.location && (
                        <p role="alert" className="error" id="franchise-location-error">
                            {errors.location.message}
                        </p>
                    )}
                </div>
                <div className="field full">
                    <label htmlFor="franchise-message">Message</label>
                    <textarea
                        id="franchise-message"
                        rows={4}
                        placeholder="Tell us about your interest in a MoiSoft franchise"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'franchise-message-error' : undefined}
                        {...register('message')}
                    />
                    {errors.message && (
                        <p role="alert" className="error" id="franchise-message-error">
                            {errors.message.message}
                        </p>
                    )}
                </div>
            </div>
            <Button type="submit" variant="green" className="whatsapp-cta">
                <WhatsAppCtaContent>Enquire via WhatsApp</WhatsAppCtaContent>
            </Button>
            <p className="form-note">Your details open in WhatsApp for you to send. Nothing is stored on this website.</p>
        </form>
    );
}
