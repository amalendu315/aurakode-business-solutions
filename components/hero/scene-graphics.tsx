import {
  Activity,
  ArrowUpRight,
  Bell,
  Check,
  Command,
  Layers3,
  Search,
} from "lucide-react";
import Image from "next/image";
import type { SceneId } from "./motion-scenes";

const glass =
  "border border-white/10 bg-[#111820]/90 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur-xl";

function Origin() {
  return (
    <div className="reel-origin-art reel-art">
      <div className="reel-bulb-ambient" />
      <div className="reel-bulb-halo" />
      <svg className="reel-bulb" viewBox="0 0 240 300" aria-hidden="true">
        <path
          className="reel-bulb-outline"
          d="M120 20C68 20 31 57 31 107c0 39 18 61 42 83 12 11 16 24 17 37h60c1-13 5-26 17-37 24-22 42-44 42-83 0-50-37-87-89-87Z"
        />
        <path
          className="reel-bulb-stem"
          d="M90 225h60M94 240h52M99 255h42M105 268h30"
        />
        <path
          className="reel-bulb-filament"
          d="M88 134l18-24 14 24 14-24 18 24m-32 0v91"
        />
        <circle className="reel-bulb-core" cx="120" cy="125" r="15" />
      </svg>
      <div className="reel-bulb-flare" />
      <div className="reel-bulb-burst">
        {Array.from({ length: 18 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="reel-hud reel-hud-left">ORIGIN / 001</div>
      <div className="reel-hud reel-hud-right">THE MOMENT IT BEGINS</div>
    </div>
  );
}

function Identity() {
  return (
    <div className="reel-identity-art reel-art">
      <div className="reel-identity-burst">
        {Array.from({ length: 72 }, (_, i) => (
          <i key={i} className="reel-identity-particle" />
        ))}
      </div>
      <div
        className="reel-identity-mark"
        role="img"
        aria-label="AuraKode logo"
      />
      <div className="reel-hud reel-hud-left">IDEA → IDENTITY</div>
      <div className="reel-hud reel-hud-right">A MARK TAKES SHAPE</div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="reel-dashboard">
      <div className="reel-dashboard-side">
        <div className="reel-dash-logo">ak</div>
        <span className="selected">
          <Command size={11} />
        </span>
        <span>
          <Layers3 size={11} />
        </span>
        <span>
          <Activity size={11} />
        </span>
      </div>
      <div className="reel-dashboard-main">
        <div className="reel-dashboard-top">
          <span>
            Overview <small>Business pulse</small>
          </span>
          <span className="reel-avatar">AK</span>
        </div>
        <div className="reel-dash-kpis">
          <div>
            <small>ACTIVE LEADS</small>
            <strong>128</strong>
            <em>+18.6%</em>
          </div>
          <div>
            <small>CONVERSIONS</small>
            <strong>42</strong>
            <em>+12.4%</em>
          </div>
        </div>
        <div className="reel-dash-chart">
          <svg
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="dash-fill" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#22d3ee" stopOpacity=".35" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 83 C45 70 55 82 95 55 S165 72 210 45 S270 58 312 25 S365 29 400 6 L400 100 L0 100Z"
              fill="url(#dash-fill)"
            />
            <path
              d="M0 83 C45 70 55 82 95 55 S165 72 210 45 S270 58 312 25 S365 29 400 6"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const systemModules = [
  "WEBSITE",
  "MARKETING",
  "CRM",
  "MANAGEMENT",
  "ANALYTICS",
] as const;
function Systems() {
  return (
    <div className="reel-systems-art reel-art">
      <div className="reel-system-grid" />
      <div className="reel-ecosystem">
        <svg
          viewBox="0 0 780 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M390 150 L158 60 M390 150 L390 30 M390 150 L622 60 M390 150 L220 248 M390 150 L560 248" />
        </svg>
        <div className="reel-ecosystem-core">
          AK<span>ONE CONNECTED SYSTEM</span>
        </div>
        {systemModules.map((name, i) => (
          <div className={`reel-ecosystem-module module-${i}`} key={name}>
            <i />
            {name}
          </div>
        ))}
      </div>
      <svg
        className="reel-system-rails"
        viewBox="0 0 900 430"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M450 180 C335 185 260 245 190 310 M450 180 C600 175 685 235 750 305" />
        <path
          className="reel-system-pulse"
          d="M450 180 C335 185 260 245 190 310 M450 180 C600 175 685 235 750 305"
        />
      </svg>
      <div className={`reel-desktop-device ${glass}`}>
        <div className="reel-device-chrome">
          <span />
          <span />
          <span />
          <small>app.aurakode.systems / overview</small>
        </div>
        <MiniDashboard />
        <div className="reel-device-status">
          <span className="reel-status-pending">Pending</span>
          <span className="reel-status-live">
            <Check size={10} /> Live • Synced
          </span>
        </div>
      </div>
      <div className={`reel-tablet-device ${glass}`}>
        <div className="reel-device-chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="reel-tablet-content">
          <div className="reel-tablet-title">
            Analytics <span>THIS MONTH</span>
          </div>
          <div className="reel-tablet-number">
            ₹8.4L <small>↗ 24.8%</small>
          </div>
          <div className="reel-tablet-bars">
            {[40, 62, 51, 75, 64, 88, 97].map((n, i) => (
              <i key={i} style={{ height: `${n}%` }} />
            ))}
          </div>
          <div className="reel-tablet-row">
            <span>Leads</span>
            <b>128</b>
          </div>
        </div>
        <div className="reel-device-status">
          <span className="reel-status-pending">Pending</span>
          <span className="reel-status-live">
            <Check size={10} /> Live • Synced
          </span>
        </div>
      </div>
      <div className={`reel-phone-device ${glass}`}>
        <div className="reel-phone-notch" />
        <div className="reel-phone-content">
          <div className="reel-phone-head">
            Good morning <span>◉</span>
          </div>
          <strong>At a glance.</strong>
          <div className="reel-phone-stat">
            <small>ACTIVE LEADS</small>
            <b>128</b>
            <em>↗ 18.6%</em>
          </div>
          <div className="reel-phone-list">
            <span>
              New inquiry <b>+1</b>
            </span>
            <span>
              Campaign live <b>✓</b>
            </span>
          </div>
        </div>
        <div className="reel-device-status">
          <span className="reel-status-pending">Pending</span>
          <span className="reel-status-live">
            <Check size={9} /> Live • Synced
          </span>
        </div>
      </div>
      <div className="reel-sync-toast">
        <Bell size={13} /> New lead received <span>JUST NOW</span>
      </div>
      <span className="reel-concept-label">ILLUSTRATIVE PRODUCT UI</span>
    </div>
  );
}

function Visibility() {
  return (
    <div className="reel-visibility-art reel-art">
      <div className={`reel-search-panel ${glass}`}>
        <div className="reel-search-input">
          <Search size={17} />
          <span>Best brand &amp; web systems</span>
          <i />
        </div>
        <div className="reel-search-result">
          <div>
            <span className="reel-ranking">#1 RANKED RESULT</span>
            <span className="reel-domain">aurakode.com / solutions</span>
          </div>
          <strong>AuraKode Business Solutions</strong>
          <p>Identity, systems and growth—connected.</p>
          <div className="reel-search-meta">
            <span>Brand strategy</span>
            <span>Business systems</span>
            <span>Growth</span>
          </div>
        </div>
      </div>
      <div className={`reel-social-card reel-social-one ${glass}`}>
        <div className="reel-social-head">
          <div className="reel-social-avatar">ak</div>
          <span>
            aurakode.studio <small>Sponsored</small>
          </span>
          <b>•••</b>
        </div>
        <div className="reel-social-art">
          <span>
            DESIGN.
            <br />
            BUILD.
            <br />
            <em>GROW.</em>
          </span>
        </div>
        <div className="reel-social-metric">
          <span>185K Reach</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
      <div className={`reel-social-card reel-social-two ${glass}`}>
        <div className="reel-social-head">
          <div className="reel-social-avatar violet">ak</div>
          <span>
            AuraKode <small>Campaign preview</small>
          </span>
        </div>
        <div className="reel-social-art violet-art">
          <span>
            BUILT TO
            <br />
            <em>CONNECT.</em>
          </span>
        </div>
        <div className="reel-social-metric">
          <span>4.9% CTR</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
      <div className="reel-audience-network" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="reel-concept-label">ILLUSTRATIVE CAMPAIGN UI</span>
    </div>
  );
}

function Growth() {
  return (
    <div className="reel-growth-art reel-art">
      <div className={`reel-growth-panel ${glass}`}>
        <div className="reel-growth-head">
          <div>
            <small>PERFORMANCE DASHBOARD / CONCEPT</small>
            <strong>Momentum, visualized.</strong>
          </div>
          <span>LAST 90 DAYS</span>
        </div>
        <div className="reel-growth-chart">
          <svg
            viewBox="0 0 700 260"
            preserveAspectRatio="none"
            role="img"
            aria-label="Illustrative upward growth curve"
          >
            <defs>
              <linearGradient id="reel-growth-fill" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#22d3ee" stopOpacity=".34" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="reel-chart-grid"
              d="M0 50H700 M0 110H700 M0 170H700 M0 230H700"
            />
            <path
              className="reel-chart-area"
              d="M8 230 C90 215 125 225 195 188 S310 182 380 140 S470 146 540 80 S625 67 690 18 L690 260 H8Z"
              fill="url(#reel-growth-fill)"
            />
            <path
              className="reel-chart-line"
              d="M8 230 C90 215 125 225 195 188 S310 182 380 140 S470 146 540 80 S625 67 690 18"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="5"
              strokeLinecap="round"
              pathLength="1000"
            />
            <circle
              className="reel-chart-dot"
              cx="690"
              cy="18"
              r="8"
              fill="#22d3ee"
            />
          </svg>
        </div>
        <div className="reel-growth-axis">
          <span>START</span>
          <span>NOW</span>
        </div>
      </div>
      <div className="reel-growth-pill pill-one">
        <small>LEADS</small>
        <strong>
          +
          <span className="reel-count" data-to="340">
            0
          </span>
          %
        </strong>
      </div>
      <div className="reel-growth-pill pill-two">
        <small>ROAS</small>
        <strong>
          <span className="reel-count" data-to="4.2">
            0
          </span>
          x
        </strong>
      </div>
      <div className="reel-growth-pill pill-three">
        <small>REVENUE</small>
        <strong>
          ↑ <ArrowUpRight size={16} />
        </strong>
      </div>
      <span className="reel-concept-label">ILLUSTRATIVE METRICS</span>
    </div>
  );
}

const destinations = [
  { name: "DARJEELING", x: 145, y: 95, className: "darjeeling" },
  { name: "GANGTOK", x: 755, y: 95, className: "gangtok" },
  { name: "KOLKATA", x: 170, y: 335, className: "kolkata" },
  { name: "PAN-INDIA", x: 735, y: 335, className: "pan-india" },
] as const;
function Siliguri() {
  return (
    <div className="reel-siliguri-art reel-art">
      <div className="reel-hub-grid" />
      <div className="reel-hub-radar">
        <i />
        <i />
        <i />
        <span className="reel-hub-sweep" />
      </div>
      <svg
        className="reel-hub-network"
        viewBox="0 0 900 430"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Network arcs from Siliguri to Darjeeling, Gangtok, Kolkata and across India"
      >
        <path
          className="reel-network-arc"
          d="M450 215 C330 215 295 105 145 95"
        />
        <path
          className="reel-network-arc"
          d="M450 215 C565 190 615 95 755 95"
        />
        <path
          className="reel-network-arc"
          d="M450 215 C305 220 285 335 170 335"
        />
        <path
          className="reel-network-arc"
          d="M450 215 C570 225 625 335 735 335"
        />
        <path
          className="reel-network-pulse"
          d="M450 215 C330 215 295 105 145 95"
        />
        <path
          className="reel-network-pulse"
          d="M450 215 C565 190 615 95 755 95"
        />
        <path
          className="reel-network-pulse"
          d="M450 215 C305 220 285 335 170 335"
        />
        <path
          className="reel-network-pulse"
          d="M450 215 C570 225 625 335 735 335"
        />
        {destinations.map(({ name, x, y }) => (
          <g key={name}>
            <circle cx={x} cy={y} r="11" fill="#22d3ee" opacity=".13" />
            <circle cx={x} cy={y} r="3" fill="#8df1ff" />
          </g>
        ))}
      </svg>
      <div className="reel-hub-core">
        <i />
        <span>SILIGURI • HQ</span>
      </div>
      {destinations.map(({ name, className }) => (
        <span key={name} className={`reel-hub-node reel-hub-node-${className}`}>
          {name}
        </span>
      ))}
      <div className={`reel-coordinate-hud ${glass}`}>
        <div className="reel-coordinate-head">
          <span>
            <i /> LIVE COORDINATE
          </span>
          <span>LOCAL ROOTS • GLOBAL SCALE</span>
        </div>
        <strong>26.7271° N, 88.3953° E</strong>
        <small>SILIGURI, WEST BENGAL</small>
      </div>
    </div>
  );
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`reel-wordmark ${compact ? "reel-wordmark-compact" : ""}`}>
      <Image
        src="/aurakode-logo.png"
        alt="AuraKode Business Solutions"
        fill
        sizes={compact ? "270px" : "430px"}
        className="reel-logo-image"
      />
      <i className="reel-wordmark-sheen" />
    </div>
  );
}
function Brand() {
  return (
    <div className="reel-brand-art reel-art">
      <BrandLockup />
      <div className="reel-lockup-meta">
        DESIGNED TO CONNECT &nbsp; / &nbsp; BUILT TO GROW
      </div>
    </div>
  );
}
function Manifesto() {
  return (
    <div className="reel-manifesto-art reel-art">
      <div className="reel-manifesto-grid" />
      <BrandLockup compact />
    </div>
  );
}

export function SceneGraphic({ id }: { id: SceneId }) {
  switch (id) {
    case "origin":
      return <Origin />;
    case "identity":
      return <Identity />;
    case "systems":
      return <Systems />;
    case "visibility":
      return <Visibility />;
    case "growth":
      return <Growth />;
    case "siliguri":
      return <Siliguri />;
    case "brand":
      return <Brand />;
    case "manifesto":
      return <Manifesto />;
  }
}
