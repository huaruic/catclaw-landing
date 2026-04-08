import React from 'react';

// The signature CatClaw Paw Logo (Consistent with the original paw concept but more refined)
export const PawLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 8.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 3.5 12 3.5s2.5 1.12 2.5 2.5S13.38 8.5 12 8.5zm-5.5 4c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm11 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 21.5c-3.5 0-5.5-2.5-5.5-4.5 0-1.5 1.5-3 3-3 1 0 1.5.5 2.5.5s1.5-.5 2.5-.5c1.5 0 3 1.5 3 3 0 2-2 4.5-5.5 4.5z"/>
  </svg>
);

// A cat peeking its head and ears over an edge
export const PeekingCat = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 80" fill="currentColor" className={className} {...props}>
    <path d="M20 80 L20 20 C20 10 35 10 45 25 L65 50 C 85 35 115 35 135 50 L155 25 C 165 10 180 10 180 20 L180 80 Z" />
  </svg>
);

// A playful cat paw reaching out
export const ReachingPaw = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} {...props}>
    {/* Arm coming from bottom left */}
    <path d="M -20 120 C 0 80 20 40 40 40 C 60 40 65 55 60 70 C 55 85 20 120 -20 120 Z" />
    {/* Cute little toe beans on the paw */}
    <circle cx="58" cy="38" r="6" fill="#FFF7ED" opacity="0.8"/>
    <circle cx="42" cy="30" r="5" fill="#FFF7ED" opacity="0.8"/>
    <circle cx="30" cy="38" r="4" fill="#FFF7ED" opacity="0.8"/>
  </svg>
);

// A curly cat tail hanging
export const CatTail = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" className={className} {...props}>
    <path d="M 50 0 C 50 80 90 120 70 170 C 60 195 20 185 20 150 C 20 115 60 125 70 170" />
  </svg>
);

// A box with cat ears on top (Zero Setup icon)
export const BoxCat = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    {/* Cat ears */}
    <path d="M5 10 L3 4 L8 8 Z" />
    <path d="M19 10 L21 4 L16 8 Z" />
    {/* Box body */}
    <rect x="4" y="9" width="16" height="12" rx="2" />
    {/* Box flap line */}
    <line x1="4" y1="13" x2="20" y2="13" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

// A shield with a paw print inside (Privacy icon)
export const ShieldPaw = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    {/* Shield */}
    <path d="M12 2 L3 7 V12 C3 17.5 7 21.5 12 23 C17 21.5 21 17.5 21 12 V7 L12 2Z" />
    {/* Paw print (white) */}
    <g fill="white">
      <circle cx="12" cy="15" r="2" />
      <circle cx="9" cy="11.5" r="1.3" />
      <circle cx="12" cy="9" r="1.3" />
      <circle cx="15" cy="11.5" r="1.3" />
    </g>
  </svg>
);

// A yarn ball (Skill Ecosystem icon)
export const YarnBall = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" className={className} {...props}>
    <circle cx="12" cy="12" r="9" fill="currentColor" />
    <path d="M5 8 Q12 14 19 8" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 13 Q12 7 20 13" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M8 4 Q10 12 8 20" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    {/* Loose thread */}
    <path d="M19 16 Q22 18 20 21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// A sleeping curled-up cat (Privacy section illustration)
export const SleepingCat = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 160" fill="currentColor" className={className} {...props}>
    {/* Curled body */}
    <ellipse cx="100" cy="100" rx="70" ry="45" />
    {/* Head */}
    <circle cx="55" cy="75" r="28" />
    {/* Ears */}
    <path d="M35 55 L28 30 L50 50 Z" />
    <path d="M65 48 L72 25 L80 50 Z" />
    {/* Tail curling around */}
    <path d="M165 85 C 175 70 170 55 155 55 C 140 55 135 70 145 75" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
    {/* Closed eyes (Zzz) */}
    <path d="M42 72 Q48 68 54 72" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M58 72 Q64 68 70 72" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Zzz */}
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4">
      <text x="85" y="45" fontSize="16" fill="currentColor" fontWeight="bold">z</text>
      <text x="95" y="32" fontSize="12" fill="currentColor" fontWeight="bold">z</text>
      <text x="102" y="22" fontSize="9" fill="currentColor" fontWeight="bold">z</text>
    </g>
  </svg>
);
