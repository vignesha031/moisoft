'use client';

import { useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import type { Franchise } from '@/data/content';

const HOVER_QUERY = '(hover: hover) and (pointer: fine)';

function subscribe(onChange: () => void) {
  const query = window.matchMedia(HOVER_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function getSnapshot() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function FranchiseCard({ franchise }: { franchise: Franchise }) {
  const reduceMotion = useReducedMotion();
  const canHover = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const lift = canHover && !reduceMotion ? { y: -3 } : undefined;

  return (
    <motion.article
      className="franchise-card"
      whileHover={lift}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="franchise-name">{franchise.name}</h3>

      <p className="franchise-area">
        <MapPin size={12} />
        {franchise.area}
      </p>

      <div className="franchise-manager">
        <span className="franchise-manager-label">Franchisee</span>
        <div className="franchise-manager-details">
          <strong>{franchise.manager}</strong>
          {franchise.degree && (
            <small className="franchise-degree">{franchise.degree}</small>
          )}
        </div>
      </div>

      <div className="franchise-phones">
        {franchise.contact1 || franchise.contact2 ? (
          <>
            {franchise.contact1 && (
              <a href={`tel:${franchise.contact1[0]}`}>
                <Phone size={12} />
                {franchise.contact1[1]}
              </a>
            )}
            {franchise.contact2 && (
              <a href={`tel:${franchise.contact2[0]}`}>
                <Phone size={12} />
                {franchise.contact2[1]}
              </a>
            )}
          </>
        ) : (
          <span className="franchise-pending">Contact details coming soon</span>
        )}
      </div>
    </motion.article>
  );
}
