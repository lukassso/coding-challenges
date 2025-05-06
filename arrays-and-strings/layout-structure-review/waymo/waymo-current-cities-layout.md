
### 🗺️ Waymo - Current Cities Section

---

#### 1. **Global Navigation Bar**

- **Brand logo** (top-left)
- **Main nav links**: Rides, Technology, About, Safety, Community, Careers
- **Search icon** (top-right)
- Implemented as a **Header** component with horizontal nav

---

#### 2. **Top Banner (Call to Action)**

- Dark banner promoting the app download
- Includes App Store & Google Play buttons
- Clear CTA and high-contrast design
- Reusable **PromoBanner** component

---

#### 3. **Main Content: Current Cities Section**

- **Section Title**: “Current cities”
- **Sidebar Label**: “Our Service” (likely rotated text)
- **City Cards**:
  - Circular thumbnail image
  - Heading (City name)
  - Description
  - Link with arrow (“Learn more” style CTA)
  - Optional badge (e.g. “RIDE ON UBER”)

Structured as:

```jsx
<App>
  └─ <HeaderNav />
  └─ <PromoBanner />
  └─ <Main>
       └─ <Section title="Current cities">
            └─ <CityCardList>
                 ├─ <CityCard />
                 ├─ ...
```

---

### 📱 Responsive Considerations

- Cards stack vertically on mobile
- Sidebar “Our service” label reflows or hides based on viewport

