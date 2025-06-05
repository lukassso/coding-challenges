
### 💬 Waymo - Testimonial & Newsletter Sections

---

### 🧾 Testimonial Section

This is a **user story block**, commonly used for social proof.

#### ✅ Key Elements:
- **Quote**: Large, stylized text with quotation mark icon — clear emotional hook.
- **Attribution**: Name + city (e.g., “Sophia, Phoenix”) — gives authenticity.
- **User Avatars**: Horizontal list of profile pictures (likely a carousel on mobile).
- **CTA Link**: "Check out why Sophia prefers riding with Waymo" — navigates to a detailed user story.

#### 💡 Component Structure:
```jsx
<TestimonialSection>
  <Quote />
  <UserAvatars />
  <CTAButton />
</TestimonialSection>
```

---

### 📨 Newsletter Signup Section (Footer Banner)

Persistent **newsletter CTA container**, sometimes called a **callout footer**.

#### ✅ Key Elements:
- **Icon**: Envelope symbol for clarity
- **Text**: Encouragement to sign up for updates
- **Button**: Primary CTA – “Sign up”

Design uses high contrast and visual clarity.

#### 💡 Component Structure:
```jsx
<NewsletterBanner>
  <EmailIcon />
  <TextContent />
  <SignupButton />
</NewsletterBanner>
```

---

### 📱 Responsiveness Consideration
- Avatars collapse into a carousel or stack on small screens
- Newsletter section should use a stacked layout on mobile
