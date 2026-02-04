# Inovation Hub Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS for Inovation Hub, a digital solutions company specializing in web development, business automation, and enterprise applications.

## Overview

This codebase implements a complete landing page with multiple sections showcasing Inovation Hub's services, team, and contact information. The application is built using a component-based architecture with a flexible theming system that allows for easy customization and consistent styling across all components.

## Tech Stack

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Utility for conditional class merging

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About section component
│   ├── Contact.tsx     # Contact form component
│   ├── ContentBlock.tsx # Generic content block
│   ├── CTA.tsx         # Call-to-action component
│   ├── Faq.tsx         # FAQ accordion component
│   ├── Feature.tsx     # Features grid component
│   ├── footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section component
│   ├── HowWeWork.tsx   # Process steps component
│   ├── MeetOurTeams.tsx # Team showcase component
│   ├── Navbar.tsx      # Navigation component
│   ├── PreviousWork.tsx # Portfolio component
│   ├── Pricing.tsx     # Pricing plans component
│   ├── Testimonial.tsx # Testimonials component
│   └── TrustBar.tsx    # Trust indicators component
├── lib/
│   └── utils.ts        # Utility functions (cn for class merging)
├── constants.tsx       # Static data and content
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## Theming System

### Overview

The theming system is built on Tailwind CSS with a component variant pattern that allows for flexible styling while maintaining consistency. Each component supports multiple variants that can be easily switched to change appearance and behavior.

### Core Principles

1. **Utility-First**: Uses Tailwind's utility classes for styling
2. **Component Variants**: Each component has predefined variants for different use cases
3. **Conditional Classes**: Uses `cn()` utility to merge classes conditionally
4. **Consistent Design Tokens**: Shared color palette, spacing, and typography
5. **Responsive Design**: Mobile-first approach with responsive breakpoints

### Theming Integration

The `cn()` utility function combines `clsx` for conditional classes and `tailwind-merge` for intelligent class merging:

```typescript
import { cn } from "@/lib/utils";

// Example usage
className={cn(
  "base-classes",
  variant === "primary" && "primary-styles",
  className // Allow custom overrides
)}
```

### Color Palette

- **Primary**: Emerald/Cyan gradient (`from-emerald-400 to-cyan-500`)
- **Secondary**: Slate grays (`slate-50`, `slate-200`, `slate-600`, `slate-900`)
- **Accent**: Various colors for highlights and CTAs

### Typography

- **Headlines**: `text-3xl sm:text-5xl font-bold`
- **Body**: `text-base sm:text-lg`
- **Small**: `text-sm`

## Components

### Hero Component

**Purpose**: Main banner section with headline, subheadline, and call-to-action buttons.

**Variants**:

- `split`: Side-by-side layout with media
- `centered`: Centered text layout
- `full-screen`: Full viewport height
- `minimal`: Basic layout
- `marketing-bank`: Banking-style layout
- `video`: With background video

**Props**:

```typescript
interface HeroProps {
	variant?: HeroVariant;
	headline: React.ReactNode;
	subheadline?: React.ReactNode;
	cta?: HeroCTA[];
	media?: React.ReactNode;
	backgroundDecoration?: React.ReactNode;
	videoSrc?: string;
	className?: string;
}
```

**Example Implementation**:

```tsx
<Hero
	headline="Build Your Web Solution With Inovation Hub"
	subheadline="We design and develop business-focused digital solutions..."
	variant="full-screen"
	cta={[{ href: "#", label: "Start Your Project", variant: "primary" }]}
/>
```

**Theming Example**:
The Hero component uses variant-based styling. To customize colors, modify the Tailwind classes in the component:

```typescript
// In Hero.tsx
className={cn(
  "text-3xl font-bold leading-tight text-slate-900 sm:text-5xl",
  // Change to custom color: "text-blue-900"
)}
```

### Navbar Component

**Purpose**: Site navigation with logo, links, and CTA button.

**Variants**:

- `default`: Standard navbar
- `transparent`: Transparent background
- `sticky`: Fixed positioning
- `minimal`: Simplified design
- `centered-logo`: Logo-centered layout

**Props**:

```typescript
interface NavbarProps {
	logo?: React.ReactNode;
	links: NavLink[];
	cta?: { label: string; href: string; variant?: "primary" | "secondary" };
	variant?: NavbarVariant;
	className?: string;
}
```

**Example Implementation**:

```tsx
<Navbar
	links={links}
	cta={{ href: "#", label: "Get Started", variant: "primary" }}
	logo={<h1 className="text-3xl font-bold text-slate-700">Inovation Hub</h1>}
	variant="sticky"
/>
```

### Features Component

**Purpose**: Showcase services or features in a grid layout.

**Variants**:

- `grid`: Grid layout
- `list`: List layout
- `cards`: Card-based layout

**Example Implementation**:

```tsx
<Features
	features={features}
	variant="grid"
	headline="SERVICES"
	subheadline="Our Services"
/>
```

### HowWeWork Component

**Purpose**: Display process steps or workflow.

**Variants**:

- `cards`: Card layout
- `centered`: Centered with media
- `timeline`: Timeline layout

**Example Implementation**:

```tsx
<HowWeWorkSection
	steps={howWeWork}
	headline="HOW WE WORK"
	subheadline="How We Work"
	variant="cards"
/>
```

### FAQ Component

**Purpose**: Frequently asked questions in accordion format.

**Variants**:

- `accordion`: Collapsible questions
- `list`: Simple list format

**Example Implementation**:

```tsx
<FAQ
	items={faqs}
	headline="FAQS"
	subheadline="Frequently Asked Questions"
	variant="accordion"
/>
```

### MeetOurTeam Component

**Purpose**: Showcase team members.

**Variants**:

- `cards`: Team member cards
- `grid`: Grid layout

**Example Implementation**:

```tsx
<MeetOurTeamSection
	headline="MEET OUR TEAM"
	subheadline="Meet Our Team"
	members={teamMember}
	variant="cards"
/>
```

### Contact Component

**Purpose**: Contact form and communication options.

**Variants**:

- `form`: Full contact form with fields
- `whatsapp-float`: Floating WhatsApp button
- `cards`: Contact information cards
- `banner`: Contact banner
- `minimal`: Minimal contact section

**Props**:

```typescript
interface ContactSectionProps {
	variant?: ContactVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	fields?: ContactField[];
	onSubmit?: (data: Record<string, any>) => void;
	cta?: ContactCTA[];
	whatsappNumber?: string;
	className?: string;
}
```

**Example Implementation**:

```tsx
<ContactSection
	variant="form"
	headline="Get In Touch"
	subheadline="Ready to start your project? Contact us today."
	fields={[
		{
			name: "name",
			label: "Full Name",
			type: "text",
			required: true,
			placeholder: "Enter your full name"
		},
		{
			name: "email",
			label: "Email Address",
			type: "email",
			required: true,
			placeholder: "Enter your email"
		},
		{
			name: "message",
			label: "Message",
			type: "textarea",
			required: true,
			placeholder: "Tell us about your project"
		}
	]}
	onSubmit={(data) => {
		console.log("Form submitted:", data);
		// Handle form submission
	}}
/>
```

**WhatsApp Float Example**:

```tsx
<ContactSection variant="whatsapp-float" whatsappNumber="1234567890" />
```

### CTA Component

**Purpose**: Call-to-action section.

**Variants**:

- `centered`: Centered layout
- `split`: Split layout

**Example Implementation**:

```tsx
<CTA
	ctaPrimary={{ href: "#", label: "Start Your Project" }}
	headline="Ready to Build a Solution for Your Business?"
	subheadline="Let's turn your business challenges into scalable digital solutions"
/>
```

### Footer Component

**Purpose**: Site footer with links and company info.

**Variants**:

- `simple`: Basic footer
- `detailed`: More comprehensive footer

**Example Implementation**:

```tsx
<FooterSection
	companyName="TWT SCHOOL SOFTWARE"
	links={links}
	variant="simple"
/>
```

## Theming Process Example

### 1. Define Design Tokens

First, establish your color palette and design tokens in Tailwind config or CSS variables:

```css
/* In index.css or tailwind.config.js */
:root {
	--primary-start: #34d399; /* emerald-400 */
	--primary-end: #06b6d4; /* cyan-500 */
	--text-primary: #0f172a; /* slate-900 */
	--text-secondary: #475569; /* slate-600 */
	--bg-light: #f8fafc; /* slate-50 */
}
```

### 2. Create Component Variants

Use the variant pattern to define different styles:

```typescript
const BUTTON_VARIANTS = {
	primary:
		"bg-linear-to-r from-emerald-400 to-cyan-500 text-white hover:opacity-90",
	secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300"
};
```

### 3. Implement Conditional Styling

Use the `cn()` utility for conditional classes:

```tsx
className={cn(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
  BUTTON_VARIANTS[variant],
  className
)}
```

### 4. Customize for Brand

To change the primary color scheme:

1. Update the variant styles in component files
2. Modify the color classes (e.g., change `from-emerald-400 to-cyan-500` to your brand colors)
3. Update any hardcoded colors to use design tokens

### 5. Test Responsiveness

Ensure all variants work across different screen sizes by testing the responsive classes.

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Customization Guide

### Adding New Components

1. Create component file in `src/components/`
2. Define TypeScript interfaces for props
3. Implement variants using the variant pattern
4. Use `cn()` for class merging
5. Add Framer Motion animations if needed
6. Export from component file

### Modifying Existing Components

1. Update variant definitions
2. Modify class strings in variant maps
3. Test across all variants
4. Update prop interfaces if needed

### Theming Customization

1. Update Tailwind classes in component variants
2. Modify color palette in CSS variables
3. Test visual consistency across components
4. Update documentation

## Contributing

When contributing to this codebase:

1. Follow the existing component patterns
2. Use TypeScript for type safety
3. Implement responsive design
4. Add appropriate animations
5. Update this README with new components
6. Test across different variants

## License

This project is private and proprietary to Inovation Hub.
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
globalIgnores(["dist"]),
{
files: ["**/*.{ts,tsx}"],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs["recommended-typescript"],
// Enable lint rules for React DOM
reactDom.configs.recommended
],
languageOptions: {
parserOptions: {
project: ["./tsconfig.node.json", "./tsconfig.app.json"],
tsconfigRootDir: import.meta.dirname
}
// other options...
}
}
]);

```

# Inovation Hub Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS for Inovation Hub, a digital solutions company specializing in web development, business automation, and enterprise applications.

## Overview

This codebase implements a complete landing page with multiple sections showcasing Inovation Hub's services, team, and contact information. The application is built using a component-based architecture with a flexible theming system that allows for easy customization and consistent styling across all components.

## Tech Stack

- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Utility for conditional class merging

## Project Structure

```

src/
├── components/ # Reusable UI components
│ ├── About.tsx # About section component
│ ├── Contact.tsx # Contact form component
│ ├── ContentBlock.tsx # Generic content block
│ ├── CTA.tsx # Call-to-action component
│ ├── Faq.tsx # FAQ accordion component
│ ├── Feature.tsx # Features grid component
│ ├── footer.tsx # Footer component
│ ├── Hero.tsx # Hero section component
│ ├── HowWeWork.tsx # Process steps component
│ ├── MeetOurTeams.tsx # Team showcase component
│ ├── Navbar.tsx # Navigation component
│ ├── PreviousWork.tsx # Portfolio component
│ ├── Pricing.tsx # Pricing plans component
│ ├── Testimonial.tsx # Testimonials component
│ └── TrustBar.tsx # Trust indicators component
├── lib/
│ └── utils.ts # Utility functions (cn for class merging)
├── constants.tsx # Static data and content
├── App.tsx # Main application component
└── main.tsx # Application entry point

````

## Theming System

### Overview

The theming system is built on Tailwind CSS with a component variant pattern that allows for flexible styling while maintaining consistency. Each component supports multiple variants that can be easily switched to change appearance and behavior.

### Core Principles

1. **Utility-First**: Uses Tailwind's utility classes for styling
2. **Component Variants**: Each component has predefined variants for different use cases
3. **Conditional Classes**: Uses `cn()` utility to merge classes conditionally
4. **Consistent Design Tokens**: Shared color palette, spacing, and typography
5. **Responsive Design**: Mobile-first approach with responsive breakpoints

### Theming Integration

The `cn()` utility function combines `clsx` for conditional classes and `tailwind-merge` for intelligent class merging:

```typescript
import { cn } from "@/lib/utils";

// Example usage
className={cn(
  "base-classes",
  variant === "primary" && "primary-styles",
  className // Allow custom overrides
)}
````

### Color Palette

- **Primary**: Emerald/Cyan gradient (`from-emerald-400 to-cyan-500`)
- **Secondary**: Slate grays (`slate-50`, `slate-200`, `slate-600`, `slate-900`)
- **Accent**: Various colors for highlights and CTAs

### Typography

- **Headlines**: `text-3xl sm:text-5xl font-bold`
- **Body**: `text-base sm:text-lg`
- **Small**: `text-sm`

## Components

### Hero Component

**Purpose**: Main banner section with headline, subheadline, and call-to-action buttons.

**Variants**:

- `split`: Side-by-side layout with media
- `centered`: Centered text layout
- `full-screen`: Full viewport height
- `minimal`: Basic layout
- `marketing-bank`: Banking-style layout
- `video`: With background video

**Props**:

```typescript
interface HeroProps {
	variant?: HeroVariant;
	headline: React.ReactNode;
	subheadline?: React.ReactNode;
	cta?: HeroCTA[];
	media?: React.ReactNode;
	backgroundDecoration?: React.ReactNode;
	videoSrc?: string;
	className?: string;
}
```

**Example Implementation**:

```tsx
<Hero
	headline="Build Your Web Solution With Inovation Hub"
	subheadline="We design and develop business-focused digital solutions..."
	variant="full-screen"
	cta={[{ href: "#", label: "Start Your Project", variant: "primary" }]}
/>
```

**Theming Example**:
The Hero component uses variant-based styling. To customize colors, modify the Tailwind classes in the component:

```typescript
// In Hero.tsx
className={cn(
  "text-3xl font-bold leading-tight text-slate-900 sm:text-5xl",
  // Change to custom color: "text-blue-900"
)}
```

### Navbar Component

**Purpose**: Site navigation with logo, links, and CTA button.

**Variants**:

- `default`: Standard navbar
- `transparent`: Transparent background
- `sticky`: Fixed positioning
- `minimal`: Simplified design
- `centered-logo`: Logo-centered layout

**Props**:

```typescript
interface NavbarProps {
	logo?: React.ReactNode;
	links: NavLink[];
	cta?: { label: string; href: string; variant?: "primary" | "secondary" };
	variant?: NavbarVariant;
	className?: string;
}
```

**Example Implementation**:

```tsx
<Navbar
	links={links}
	cta={{ href: "#", label: "Get Started", variant: "primary" }}
	logo={<h1 className="text-3xl font-bold text-slate-700">Inovation Hub</h1>}
	variant="sticky"
/>
```

### Features Component

**Purpose**: Showcase services or features in a grid layout.

**Variants**:

- `grid`: Grid layout
- `list`: List layout
- `cards`: Card-based layout

**Example Implementation**:

```tsx
<Features
	features={features}
	variant="grid"
	headline="SERVICES"
	subheadline="Our Services"
/>
```

### HowWeWork Component

**Purpose**: Display process steps or workflow.

**Variants**:

- `cards`: Card layout
- `centered`: Centered with media
- `timeline`: Timeline layout

**Example Implementation**:

```tsx
<HowWeWorkSection
	steps={howWeWork}
	headline="HOW WE WORK"
	subheadline="How We Work"
	variant="cards"
/>
```

### FAQ Component

**Purpose**: Frequently asked questions in accordion format.

**Variants**:

- `accordion`: Collapsible questions
- `list`: Simple list format

**Example Implementation**:

```tsx
<FAQ
	items={faqs}
	headline="FAQS"
	subheadline="Frequently Asked Questions"
	variant="accordion"
/>
```

### MeetOurTeam Component

**Purpose**: Showcase team members.

**Variants**:

- `cards`: Team member cards
- `grid`: Grid layout

**Example Implementation**:

```tsx
<MeetOurTeamSection
	headline="MEET OUR TEAM"
	subheadline="Meet Our Team"
	members={teamMember}
	variant="cards"
/>
```

### CTA Component

**Purpose**: Call-to-action section.

**Variants**:

- `centered`: Centered layout
- `split`: Split layout

**Example Implementation**:

```tsx
<CTA
	ctaPrimary={{ href: "#", label: "Start Your Project" }}
	headline="Ready to Build a Solution for Your Business?"
	subheadline="Let's turn your business challenges into scalable digital solutions"
/>
```

### Footer Component

**Purpose**: Site footer with links and company info.

**Variants**:

- `simple`: Basic footer
- `detailed`: More comprehensive footer

**Example Implementation**:

```tsx
<FooterSection companyName="inVisonhub" links={links} variant="simple" />
```

## Theming Process Example

### 1. Define Design Tokens

First, establish your color palette and design tokens in Tailwind config or CSS variables:

```css
/* In index.css or tailwind.config.js */
:root {
	--primary-start: #34d399; /* emerald-400 */
	--primary-end: #06b6d4; /* cyan-500 */
	--text-primary: #0f172a; /* slate-900 */
	--text-secondary: #475569; /* slate-600 */
	--bg-light: #f8fafc; /* slate-50 */
}
```

### 2. Create Component Variants

Use the variant pattern to define different styles:

```typescript
const BUTTON_VARIANTS = {
	primary:
		"bg-linear-to-r from-emerald-400 to-cyan-500 text-white hover:opacity-90",
	secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300"
};
```

### 3. Implement Conditional Styling

Use the `cn()` utility for conditional classes:

```tsx
className={cn(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
  BUTTON_VARIANTS[variant],
  className
)}
```

### 4. Customize for Brand

To change the primary color scheme:

1. Update the variant styles in component files
2. Modify the color classes (e.g., change `from-emerald-400 to-cyan-500` to your brand colors)
3. Update any hardcoded colors to use design tokens

### 5. Test Responsiveness

Ensure all variants work across different screen sizes by testing the responsive classes.

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Customization Guide

### Adding New Components

1. Create component file in `src/components/`
2. Define TypeScript interfaces for props
3. Implement variants using the variant pattern
4. Use `cn()` for class merging
5. Add Framer Motion animations if needed
6. Export from component file

### Modifying Existing Components

1. Update variant definitions
2. Modify class strings in variant maps
3. Test across all variants
4. Update prop interfaces if needed

### Theming Customization

1. Update Tailwind classes in component variants
2. Modify color palette in CSS variables
3. Test visual consistency across components
4. Update documentation

## Contributing

When contributing to this codebase:

1. Follow the existing component patterns
2. Use TypeScript for type safety
3. Implement responsive design
4. Add appropriate animations
5. Update this README with new components
6. Test across different variants

## License

This project is private and proprietary to Inovation Hub.
