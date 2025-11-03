import React from 'react';

const WorldMap = () => {
  return (
    <div className="w-full h-32 md:h-40 relative bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-slate-900/20 dark:to-slate-800/20 rounded-lg p-3">
      <svg viewBox="0 0 1000 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Detailed World Map */}
        <g fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.3" opacity="0.7" className="dark:fill-slate-700 dark:stroke-slate-600 dark:opacity-60">
          {/* North America */}
          <path d="M80,120 Q100,100 140,105 L180,110 L200,115 Q220,120 230,140 L235,160 Q240,180 230,200 L210,220 L180,230 L150,235 L120,230 Q100,220 85,200 L75,170 Q70,145 80,120 Z" />
          <path d="M100,110 Q110,95 130,100 L145,105 L155,115 L160,130 L155,145 Q150,155 140,155 L125,150 Q115,140 110,125 L100,110 Z" />

          {/* Central America */}
          <path d="M185,240 L195,245 L205,255 L210,265 L205,275 L195,280 L185,275 L180,265 L185,255 Z" />

          {/* South America */}
          <path d="M220,260 L240,255 Q260,260 270,280 L280,310 L285,340 Q285,365 275,380 L260,395 L245,405 Q230,410 220,405 L210,395 L205,380 Q200,360 200,340 L205,310 Q210,285 220,260 Z" />

          {/* Europe */}
          <path d="M480,115 L500,110 Q520,112 535,120 L545,130 L550,145 Q548,160 540,170 L525,175 L510,175 Q495,170 485,160 L478,145 Q477,128 480,115 Z" />
          <path d="M460,130 L475,125 L485,130 L490,140 L485,150 L475,155 L465,150 L460,140 Z" />

          {/* Africa */}
          <path d="M505,180 L525,175 Q545,178 560,190 L575,210 L585,240 L590,270 Q592,295 585,315 L570,340 L550,355 Q530,365 515,365 L500,360 L490,345 Q485,325 482,305 L480,280 Q478,255 482,230 L490,205 Q495,190 505,180 Z" />

          {/* Asia */}
          <path d="M580,95 L620,85 L665,88 L710,95 L750,110 L780,130 L795,155 Q800,180 792,200 L775,220 L750,235 L720,245 L685,248 L650,245 Q625,238 605,225 L590,210 L580,190 Q575,170 575,150 L578,130 Q580,110 580,95 Z" />
          <path d="M665,250 L685,248 L705,255 L715,270 L710,285 L695,295 L680,295 L670,285 L665,270 Z" />

          {/* Australia */}
          <path d="M730,310 L760,305 Q785,310 800,325 L805,345 Q805,365 795,380 L775,390 Q755,395 740,390 L720,380 Q710,365 710,345 L715,330 Q720,315 730,310 Z" />

          {/* Antarctica (subtle) */}
          <path d="M100,450 L300,445 L500,448 L700,450 L850,455 L850,490 L50,490 L50,455 Z" opacity="0.2" />
        </g>

        {/* Location Markers with glow effect */}
        <defs>
          <radialGradient id="markerGlow">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
          </radialGradient>
        </defs>

        {/* New York */}
        <circle cx="180" cy="140" r="8" fill="url(#markerGlow)" opacity="0.6">
          <animate attributeName="r" from="8" to="12" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="140" r="3.5" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />

        {/* San Francisco */}
        <circle cx="125" cy="155" r="8" fill="url(#markerGlow)" opacity="0.6">
          <animate attributeName="r" from="8" to="12" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="155" r="3.5" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />

        {/* Sydney */}
        <circle cx="765" cy="360" r="8" fill="url(#markerGlow)" opacity="0.6">
          <animate attributeName="r" from="8" to="12" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="765" cy="360" r="3.5" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />

        {/* Singapore */}
        <circle cx="685" cy="265" r="8" fill="url(#markerGlow)" opacity="0.6">
          <animate attributeName="r" from="8" to="12" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
        </circle>
        <circle cx="685" cy="265" r="3.5" fill="#1e40af" stroke="#60a5fa" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default WorldMap;
