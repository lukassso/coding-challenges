
### 1. **Top Navigation Bar**

- **Call to Action**: "Be one of the first..." — sticky banner with clear CTA
- **App store badges**: Buttons to download the app (App Store / Google Play) — high-priority for conversion
- **Branding**: “WAYMO ONE” — top-right aligned logo/text

---

### 🧷 2. **Hero Section**

- **Main Heading**: "Meet Waymo One™" — large font, visually attractive
- **Subheading**: "The world’s first autonomous ride-hailing service"
- **Primary CTA Button**: “Be one of the first” with arrow icon
- **Hero Image**: Electric autonomous vehicle illustration — very prominent
- **Visual Background**: Dot pattern behind the car — adds depth, guides focus

---

### ♻️ 3. **Feature Highlights Section**

Split into 3 visual **icon + text** columns:

- **Available 24/7** – time-based service promise
- **Experience second to none** – reassurance, safety, emotional appeal
- **Sustainable way to move** – eco-friendly message

Each box uses:

- Simple icon (matching the feature)
- Title (larger font)
- Short paragraph (supporting info)

---

### 🧩 From a Frontend Dev Perspective

- **Component Breakdown**:
  - `TopBanner`
  - `HeaderNav`
  - `HeroSection` (with `Title`, `CTAButton`, `VehicleImage`)
  - `FeaturesSection` (array of `FeatureCard` components)

- **Responsive Considerations**:
  - Likely a 2-column layout on desktop (text + image)
  - Stack vertically on mobile (text first, image below)
  - Icons and text blocks should collapse into a single column on smaller breakpoints

- **UI Design Patterns**:
  - High contrast for text
  - Clean, whitespace-rich layout
  - Visual hierarchy well defined (H1 > sub > button)
