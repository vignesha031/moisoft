import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function WhatsAppCtaContent({ children }: { children: ReactNode }) {
    return (
        <>
            <MessageCircle className="wa-logo" size={18} aria-hidden="true" />
            <span className="wa-label">{children}</span>
            <ArrowRight className="wa-arrow" size={18} aria-hidden="true" />
        </>
    );
}

type WhatsAppCTAProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    children: ReactNode;
};

export function WhatsAppCTA({
    children,
    className = '',
    target = '_blank',
    rel = 'noopener noreferrer',
    ...rest
}: WhatsAppCTAProps) {
    return (
        <a className={`whatsapp-cta ${className}`.trim()} target={target} rel={rel} {...rest}>
            <WhatsAppCtaContent>{children}</WhatsAppCtaContent>
        </a>
    );
}
