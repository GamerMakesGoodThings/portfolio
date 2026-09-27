"use client";

import React from "react";

interface MapVectorBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function MapVectorBackground({
  className = "",
  opacity = 0.08,
}: MapVectorBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      <svg
        className="h-full w-full object-cover"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle gradient for map lines */}
          <linearGradient id="map-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
          </linearGradient>

          {/* Coordinate grid pattern */}
          <pattern
            id="map-coord-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeOpacity="0.25"
              strokeDasharray="2 4"
            />
          </pattern>
        </defs>

        {/* Coordinate grid overlay */}
        <rect width="100%" height="100%" fill="url(#map-coord-grid)" />

        {/* Global / Continental contour lines matching Gallery Play Image 2 */}
        <g stroke="url(#map-line-grad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Europe / Scandinavia coastline paths */}
          <path d="M 680 80 Q 700 90 730 85 T 760 110 T 780 150 T 800 200 T 790 260 T 750 310 T 710 330 T 670 310 T 640 280 T 630 220 T 650 160 Z" />
          <path d="M 600 130 Q 610 180 590 230 T 560 270 T 540 250 T 560 180 T 590 140 Z" />

          {/* UK & Ireland */}
          <path d="M 440 260 Q 460 280 470 330 T 480 390 T 450 430 T 420 400 T 410 340 T 430 280 Z" />
          <path d="M 370 320 Q 390 340 395 380 T 380 420 T 355 410 T 350 360 T 365 330 Z" />

          {/* Western Europe & Iberian Peninsula (Spain/Portugal) */}
          <path d="M 360 560 Q 420 540 450 560 T 480 630 T 460 700 T 380 720 T 340 680 T 330 610 Z" />
          
          {/* Central & Eastern Europe main contours */}
          <path d="M 520 420 C 580 400, 640 410, 710 380 S 820 410, 890 390 S 990 420, 1080 390 S 1200 430, 1310 400" />
          <path d="M 480 470 C 540 450, 610 480, 680 460 S 780 500, 870 470 S 980 520, 1090 490 S 1210 530, 1320 500" />
          <path d="M 440 520 C 510 500, 580 540, 660 510 S 760 560, 850 530 S 960 580, 1070 550 S 1190 590, 1300 560" />

          {/* Mediterranean Coast & Italy Boot */}
          <path d="M 550 570 Q 590 580 620 620 T 660 690 T 680 750 T 660 760 T 630 710 T 600 650 T 570 610 Z" />
          <path d="M 640 760 Q 670 770 690 750 T 660 730 Z" /> {/* Sicily */}
          <path d="M 540 620 Q 560 630 555 670 T 540 690 T 530 650 Z" /> {/* Corsica/Sardinia */}

          {/* Balkans & Greece */}
          <path d="M 720 560 Q 770 590 810 640 T 820 720 T 780 760 T 740 710 T 710 630 Z" />

          {/* Topographic elevation curves */}
          <path d="M 200 180 C 400 240, 600 160, 800 210 S 1100 170, 1400 220" strokeDasharray="3 6" />
          <path d="M 150 360 C 350 420, 550 340, 750 390 S 1050 350, 1350 400" strokeDasharray="3 6" />
          <path d="M 180 540 C 380 600, 580 520, 780 570 S 1080 530, 1380 580" strokeDasharray="3 6" />
          <path d="M 220 720 C 420 780, 620 700, 820 750 S 1120 710, 1420 760" strokeDasharray="3 6" />
        </g>

        {/* Strategic glowing nodes / server hub markers */}
        <g>
          {/* London / Node 1 */}
          <circle cx="460" cy="380" r="3" fill="#00acd7" opacity="0.8" />
          <circle cx="460" cy="380" r="9" stroke="#00acd7" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Frankfurt / Node 2 */}
          <circle cx="640" cy="440" r="3.5" fill="#213ded" opacity="0.9" />
          <circle cx="640" cy="440" r="12" stroke="#213ded" strokeWidth="0.8" strokeOpacity="0.5" />

          {/* Amsterdam / Node 3 */}
          <circle cx="560" cy="390" r="3" fill="#00b181" opacity="0.8" />
          <circle cx="560" cy="390" r="8" stroke="#00b181" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Paris / Node 4 */}
          <circle cx="500" cy="470" r="3" fill="#ff3700" opacity="0.8" />
          <circle cx="500" cy="470" r="10" stroke="#ff3700" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Interconnecting flight / data arcs */}
          <path
            d="M 460 380 Q 510 360 560 390 T 640 440"
            stroke="#00acd7"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
          <path
            d="M 500 470 Q 570 430 640 440"
            stroke="#213ded"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
        </g>
      </svg>
    </div>
  );
}
