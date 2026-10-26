'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ShieldCheck } from 'lucide-react';

import {
    franchiseEnquirySchema,
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
    } = useForm<FranchiseEnquiryValues>({
        resolver: zodResolver(franchiseEnquirySchema),
        defaultValues: { name: '', phone: '', area: '', message: '' },
    });

    function submit(values: FranchiseEnquiryValues) {
        window.location.assign(franchiseWhatsappUrl(values));
    }

    return (
        <div className="fo-form-card">
            <div className="fo-form-head">
                <h3 id="franchise-form-title">Become a Franchise Partner</h3>
                <p lang="ta">
                    உங்கள் விவரங்களைப் பகிருங்கள். எங்கள் குழு உங்களைத் தொடர்பு கொள்ளும்.
                </p>
            </div>

            <form
                className="fo-form"
                onSubmit={handleSubmit(submit)}
                noValidate
                aria-labelledby="franchise-form-title"
            >
                <div className="fo-field">
                    <label htmlFor="fo-name">
                        Full Name / பெயர் <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="fo-name"
                        type="text"
                        autoComplete="name"
                        placeholder="உங்கள் முழுப் பெயர்"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'fo-name-error' : undefined}
                        {...register('name')}
                    />
                    {errors.name && (
                        <p role="alert" className="fo-error" id="fo-name-error">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="fo-field">
                    <label htmlFor="fo-phone">
                        Mobile Number / மொபைல் எண் <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="fo-phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder="10 இலக்க மொபைல் எண்"
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'fo-phone-error' : undefined}
                        {...register('phone')}
                    />
                    {errors.phone && (
                        <p role="alert" className="fo-error" id="fo-phone-error">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <div className="fo-field">
                    <label htmlFor="fo-area">
                        Preferred Franchise Area / பகுதி <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="fo-area"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="உதா. மதுரை, தேனி"
                        required
                        aria-invalid={!!errors.area}
                        aria-describedby={errors.area ? 'fo-area-error' : undefined}
                        {...register('area')}
                    />
                    {errors.area && (
                        <p role="alert" className="fo-error" id="fo-area-error">
                            {errors.area.message}
                        </p>
                    )}
                </div>

                <div className="fo-field">
                    <label htmlFor="fo-message">
                        Message / கூடுதல் விவரம்{' '}
                        <span className="fo-optional">(Optional)</span>
                    </label>
                    <textarea
                        id="fo-message"
                        rows={3}
                        placeholder="உங்கள் கூடுதல் விவரங்கள்"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'fo-message-error' : undefined}
                        {...register('message')}
                    />
                    {errors.message && (
                        <p role="alert" className="fo-error" id="fo-message-error">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button type="submit" variant="green" className="whatsapp-cta fo-submit">
                    <WhatsAppCtaContent>Enquire via WhatsApp</WhatsAppCtaContent>
                </Button>
            </form>

            <p className="fo-privacy">
                <ShieldCheck size={14} aria-hidden="true" />
                <span lang="ta">
                    உங்கள் விவரங்கள் இந்த இணையதளத்தில் சேமிக்கப்படுவதில்லை. WhatsApp
                    திறந்ததும் செய்தியை நீங்களே அனுப்ப வேண்டும்.
                </span>
            </p>
        </div>
    );
}
