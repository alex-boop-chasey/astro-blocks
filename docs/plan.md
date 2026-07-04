# Project Brief: AI-Powered Astro Component SaaS & Website Builder

## 1. Project Overview
This project is an advanced, commercial-grade website building platform and component library ecosystem. It allows users to visually stack premium Astro components (Heroes, Features, Bentos, Pricing, Contacts) to assemble complete, production-ready websites. 

The application architecture transitions from a static showroom into a highly automated, secure SaaS platform that handles copy generation, cohesive image styling, and direct deployment workflows.

## 2. Key Features & Workflow
- **Component Stacking Canvas:** A visual interface where users select components from a categorized library and arrange them into pages.
- **Style & Theme Controls:** A set of configuration toggles and sliders that dynamically update utility classes (Tailwind) across the active layout.
- **Embedded LLM Copywriter:** An integrated AI engine that automatically writes and optimizes headlines, body copy, and CTA text tailored to the user's business niche.
- **Automated AI Image-Grading Pipeline:** A backend microservice that processes uploaded user images to match a single collection aesthetic—automatically standardizing brightness, contrast, black/white points, saturation, and tint to match the site's color theme.
- **One-Click Export & Deployment:** Generates a clean, optimized `.zip` archive of the complete Astro project or connects securely via GitHub OAuth to instantly deploy the site to Cloudflare Pages.

## 3. System Architecture & Security (Anti-Scraping Blueprint)
To prevent users from scraping the client-side DOM and stealing proprietary `.astro` source code, the platform uses a strictly decoupled **Blueprint Architecture**:

- **The Client Layer (Static Showcase / State Visualizer):** - Built with Astro (deployed to Cloudflare Pages).
  - The UI tracks layout state using a lightweight **JSON Blueprint** (containing component IDs, text content, and theme variables).
  - Components on screen are visual wrappers. Actual source logic is never exposed to the client browser.
- **The Server Layer (Private Engine):**
  - Uses Astro Server-Side Rendering (SSR) via **Astro Actions** and secure API endpoints (`src/pages/api/*`).
  - Proprietary raw `.astro` template blocks live exclusively in a private server directory.
  - When a user clicks "Export" or "Deploy", the JSON Blueprint is transmitted to the server. The backend stitches the private templates together, injects the state variables, runs the image processing, and packages the final output.

## 4. Current Implementation Status
- **Phase 1 (Current):** Static landing page with dedicated category routing. Category pages (Heroes, Features, Bentos, Pricing, Contact Pages) are live and populated with stacked static components demonstrating the design language.
- **Phase 2 (Next):** Implement the local state management engine (JSON Blueprint tracker) and configure Astro Hybrid/SSR mode on Cloudflare Pages.
- **Phase 3 (Upcoming):** Build the server-side file assembly and ZIP packaging endpoint.
- **Phase 4 (Future):** Integrate backend AI services (LLM copywriting prompts, image manipulation engine, GitHub/Cloudflare deployment OAuth integration).

## 5. Technology Stack
- **Framework:** Astro (Moving from Static to Hybrid/SSR)
- **Styling:** Tailwind CSS (with utility abstraction for dynamic theme manipulation)
- **Hosting & Backend Environment:** Cloudflare Pages (utilizing Cloudflare Workers/Functions for SSR compute)
- **State Management:** Client-side JavaScript/JSON schema representing the page tree
- **Target Integrations:** OpenAI/Anthropic APIs (Text processing), Sharp/Canvas image libraries, GitHub API, Cloudflare Pages API