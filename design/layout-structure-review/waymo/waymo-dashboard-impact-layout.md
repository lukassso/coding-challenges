
### 📊 Waymo - "Why We're Here" & Dashboard Impact Section

---

### 🧱 1. Intro Metrics Row

A **three-column layout** with global and US accident impact statistics.

Each column contains:
- Large number (e.g., 1.35 million)
- Supporting text label
- Top border for separation

Built using:
```jsx
<StatsRow>
  <StatBox title="1.35M" label="Annual global road fatalities" />
  <StatBox title="42K" label="Annual US road deaths" />
  <StatBox title="$340B" label="Annual US economic loss" />
</StatsRow>
```

---

### 📈 2. Impact Dashboard Cards

Headline: _“In San Francisco and Phoenix the Waymo Driver had:”_

Each **DashboardCard** includes:
- Icon
- Percentage change (highlighted)
- Label (e.g., “Fewer airbag deployment crashes”)
- Subtext (e.g., “↓ 65 FEWER”)
- Bar chart graphic (for visual comparison)

Example structure:
```jsx
<DashboardStats>
  <DashboardCard icon="seatbelt" percent="83%" label="Fewer airbag crashes" delta="65" />
  <DashboardCard icon="hospital" percent="81%" label="Fewer injuries" delta="154" />
  <DashboardCard icon="shield" percent="64%" label="Fewer police reports" delta="170" />
</DashboardStats>
```

---

### 🔗 3. CTA - Explore More

- Text: “Explore more in our safety dashboard”
- Visual indicator (arrow icon)
- Sub-label: “compared to a human driver…”

Component:
```jsx
<CTAButton text="Explore more in our safety dashboard" link="/safety-dashboard" />
```

---

### 🎨 UX Highlights

- Strong data hierarchy: impact → breakdown → CTA
- Clear iconography and consistent layout
- Compact spacing enhances scannability
