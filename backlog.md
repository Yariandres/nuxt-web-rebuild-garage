# Web Rebuild Garage — User Stories & Backlog

> Product backlog for the Web Rebuild Garage website  
> Tech: Nuxt 4 + Nuxt UI 4 + Nuxt Content 3 + Nuxt Image

---

## Backlog Overview

| Epic | Stories | Priority |
|------|---------|----------|
| 🏗️ Foundation | 5 | P0 - Critical |
| 🏠 Homepage | 13 | P0 - Critical |
| 📺 Episodes | 6 | P1 - High |
| 🛠️ Services | 3 | P1 - High |
| 👥 Crew | 2 | P2 - Medium |
| 📅 Booking | 3 | P0 - Critical |
| 🎨 Polish | 4 | P3 - Low |

---

## Epic: 🏗️ Foundation

### FOUND-001: Project Structure Setup
**As a** developer  
**I want** the folder structure set up correctly  
**So that** I can build components in an organized way

**Acceptance Criteria:**
- [ ] `app/components/home/` directory exists
- [ ] `app/components/episodes/` directory exists
- [ ] `app/components/shared/` directory exists
- [ ] `app/layouts/` directory exists
- [ ] `app/pages/` directory exists
- [ ] `content/episodes/` directory exists
- [ ] `public/episodes/` directory exists for assets
- [ ] `public/crew/` directory exists for team photos

**Priority:** P0  
**Estimate:** 0.5h

---

### FOUND-002: Nuxt UI Theme Configuration
**As a** user  
**I want** the site to have a garage/industrial aesthetic  
**So that** it feels unique and matches the brand

**Acceptance Criteria:**
- [ ] Primary color configured (industrial orange/yellow)
- [ ] Neutral colors configured (dark grays)
- [ ] Success/error states use appropriate colors
- [ ] Typography configured (monospace for "work order" elements)
- [ ] Dark mode is the default theme
- [ ] Theme is applied globally via `app.config.ts`

**Priority:** P0  
**Estimate:** 2h

---

### FOUND-003: Default Layout
**As a** user  
**I want** consistent navigation across all pages  
**So that** I can easily move around the site

**Acceptance Criteria:**
- [ ] `layouts/default.vue` created
- [ ] Header component with logo, nav, CTAs
- [ ] Footer component with links and copyright
- [ ] Responsive mobile menu
- [ ] Sticky header on scroll
- [ ] Layout wraps all pages

**Priority:** P0  
**Estimate:** 3h

---

### FOUND-004: Episodes Content Collection
**As a** content creator  
**I want** episodes stored as markdown files  
**So that** I can easily add new case studies

**Acceptance Criteria:**
- [ ] `content.config.ts` updated with episodes collection schema
- [ ] Schema includes: title, number, slug, symptom, rootCause, result
- [ ] Schema includes: stack, tags, severity, crew
- [ ] Schema includes: youtubeId, thumbnail, publishedAt
- [ ] Schema includes: metrics (before/after)
- [ ] Sample episode file created for testing

**Priority:** P0  
**Estimate:** 2h

---

### FOUND-005: Shared Components
**As a** developer  
**I want** reusable components for common UI patterns  
**So that** I maintain consistency across the site

**Acceptance Criteria:**
- [ ] `WorkOrder.vue` component (garage-style status panel)
- [ ] `MetricChip.vue` component (before/after badges)
- [ ] `CtaButton.vue` component (styled booking button)
- [ ] Components use Nuxt UI primitives
- [ ] Components accept props for customization

**Priority:** P0  
**Estimate:** 3h

---

## Epic: 🏠 Homepage

### HOME-001: Top Bar Component
**As a** visitor  
**I want** to see an attention-grabbing banner  
**So that** I'm immediately aware of the service offering

**Acceptance Criteria:**
- [ ] Sticky bar at top of page
- [ ] Warning icon + urgency message
- [ ] "Book Rapid Diagnosis" link
- [ ] Can be dismissed (optional)
- [ ] Uses warning/orange color scheme

**Priority:** P2  
**Estimate:** 1h

---

### HOME-002: Hero Section
**As a** visitor  
**I want** to immediately understand what this service does  
**So that** I know if it's relevant to my problem

**Acceptance Criteria:**
- [ ] Bold headline with garage metaphor
- [ ] Subheadline explaining the team and approach
- [ ] Primary CTA: "Book a Rapid Diagnosis"
- [ ] Secondary CTA: "See Episodes"
- [ ] Micro-trust line below CTAs
- [ ] Work Order visual on right side (desktop)
- [ ] Responsive layout (stacked on mobile)

**Priority:** P0  
**Estimate:** 3h

---

### HOME-003: Symptom Router Section
**As a** visitor with a website problem  
**I want** to identify my specific symptom  
**So that** I feel understood and can book with context

**Acceptance Criteria:**
- [ ] Section title and subtitle
- [ ] 6 clickable symptom cards
- [ ] Each card shows symptom + detail text
- [ ] Cards link to `/book?symptom={tag}`
- [ ] Primary CTA below cards
- [ ] Responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- [ ] Hover state on cards

**Priority:** P0  
**Estimate:** 2h

---

### HOME-004: What You Get Section
**As a** visitor  
**I want** to know what happens in a Rapid Diagnosis call  
**So that** I feel confident booking

**Acceptance Criteria:**
- [ ] Clear title: "Rapid Diagnosis isn't a sales call. It's a teardown."
- [ ] 5 bullet points with check icons
- [ ] Key terms bolded
- [ ] Small credit note at bottom
- [ ] Centered, max-width container

**Priority:** P0  
**Estimate:** 1h

---

### HOME-005: The Method Section
**As a** visitor  
**I want** to understand the approach/methodology  
**So that** I trust the process

**Acceptance Criteria:**
- [ ] Title: "Our method: Teardown → Fix → Test Drive"
- [ ] 3-column layout with step numbers
- [ ] Each step has title and description
- [ ] Mini CTA at bottom
- [ ] Alternating background color

**Priority:** P0  
**Estimate:** 1.5h

---

### HOME-006: Episodes Grid Section
**As a** visitor  
**I want** to see real case studies  
**So that** I trust this service has real experience

**Acceptance Criteria:**
- [ ] Section title and subtitle
- [ ] Grid of 3-6 episode cards
- [ ] Cards fetched from Nuxt Content
- [ ] Each card shows: number, title, symptom, result
- [ ] Thumbnail image on cards
- [ ] "Browse all Episodes" button
- [ ] Loading state while fetching

**Priority:** P0  
**Estimate:** 3h

---

### HOME-007: Episode Card Component
**As a** developer  
**I want** a reusable episode card component  
**So that** I can display episodes consistently

**Acceptance Criteria:**
- [ ] Displays episode number as badge
- [ ] Shows thumbnail via NuxtImg
- [ ] Shows title, symptom, result
- [ ] Links to episode detail page
- [ ] Watch/Read CTAs in footer
- [ ] Hover effect

**Priority:** P0  
**Estimate:** 2h

---

### HOME-008: Metrics Showcase Section
**As a** visitor  
**I want** to see concrete results/numbers  
**So that** I believe in the outcomes

**Acceptance Criteria:**
- [ ] Title: "We don't sell vibes. We ship measurable wins."
- [ ] 5 metric chips showing before/after
- [ ] Centered layout with wrapping
- [ ] Disclaimer text below
- [ ] Alternating background color

**Priority:** P2  
**Estimate:** 1h

---

### HOME-009: Crew Section
**As a** visitor  
**I want** to know who I'll be working with  
**So that** I feel I'm hiring real people, not an agency

**Acceptance Criteria:**
- [ ] Title: "You're not hiring a freelancer. You're getting a pit crew."
- [ ] 2 crew member cards
- [ ] Avatar, name, role, bio for each
- [ ] Team philosophy statement
- [ ] CTA to book
- [ ] Responsive layout (stacked on mobile)

**Priority:** P1  
**Estimate:** 2h

---

### HOME-010: Services Ladder Section
**As a** visitor  
**I want** to understand the service options  
**So that** I know the engagement path

**Acceptance Criteria:**
- [ ] Title: "How you can work with us"
- [ ] 3 service cards with step numbers
- [ ] Each card: name, description, CTA button
- [ ] Rapid Diagnosis has primary button style
- [ ] Others have outline button style
- [ ] Links to appropriate pages/sections

**Priority:** P0  
**Estimate:** 2h

---

### HOME-011: After You Book Section
**As a** visitor  
**I want** to know what happens after booking  
**So that** I'm not anxious about the process

**Acceptance Criteria:**
- [ ] Title: "After you book, here's the flow"
- [ ] 4-step numbered list
- [ ] Step numbers in colored circles
- [ ] Reassurance text at bottom
- [ ] Centered, max-width layout

**Priority:** P2  
**Estimate:** 1h

---

### HOME-012: FAQ Section
**As a** visitor with objections  
**I want** my questions answered  
**So that** I can make a decision

**Acceptance Criteria:**
- [ ] Title: "FAQ"
- [ ] 5 accordion items (collapsible)
- [ ] Questions cover common objections
- [ ] Uses Nuxt UI `UAccordion`
- [ ] Smooth expand/collapse animation
- [ ] Anchor link `#faq` works

**Priority:** P0  
**Estimate:** 1.5h

---

### HOME-013: Final CTA Section
**As a** visitor who's scrolled the whole page  
**I want** a clear final call to action  
**So that** I can easily book

**Acceptance Criteria:**
- [ ] Bold title: "Ready for a teardown?"
- [ ] Supporting copy
- [ ] Large primary CTA button
- [ ] Secondary "Browse Episodes" link
- [ ] Trust line below
- [ ] Centered, generous padding

**Priority:** P0  
**Estimate:** 1h

---

## Epic: 📺 Episodes

### EP-001: Episodes Listing Page
**As a** visitor  
**I want** to browse all case study episodes  
**So that** I can find relevant examples

**Acceptance Criteria:**
- [ ] Page at `/episodes`
- [ ] Page title and intro
- [ ] Grid of all episode cards
- [ ] Sorted by episode number (newest first)
- [ ] Filter by stack/tag (optional)
- [ ] Responsive grid layout
- [ ] SEO meta tags

**Priority:** P1  
**Estimate:** 3h

---

### EP-002: Episode Detail Page
**As a** visitor  
**I want** to read the full case study  
**So that** I understand the problem-solving approach

**Acceptance Criteria:**
- [ ] Dynamic route `/episodes/[slug]`
- [ ] Hero with title, symptom, result
- [ ] YouTube embed (if available)
- [ ] Markdown content rendered
- [ ] Before/after metrics display
- [ ] Tags/stack badges
- [ ] CTA to book with episode context
- [ ] Previous/Next episode navigation
- [ ] SEO meta tags

**Priority:** P1  
**Estimate:** 4h

---

### EP-003: Episode Hero Component
**As a** developer  
**I want** a reusable hero for episode pages  
**So that** each episode has consistent layout

**Acceptance Criteria:**
- [ ] Episode number badge
- [ ] Title (large)
- [ ] Symptom and result summary
- [ ] Thumbnail or video embed
- [ ] Stack/tags display
- [ ] Crew members involved

**Priority:** P1  
**Estimate:** 2h

---

### EP-004: Metrics Grid Component
**As a** developer  
**I want** a component to show before/after metrics  
**So that** episode results are visually clear

**Acceptance Criteria:**
- [ ] 2-column layout (Before | After)
- [ ] Dynamic number of metric rows
- [ ] Visual indication of improvement (arrows, colors)
- [ ] Works with episode frontmatter data

**Priority:** P1  
**Estimate:** 2h

---

### EP-005: Sample Episode Content
**As a** developer  
**I want** sample episode markdown files  
**So that** I can test the content system

**Acceptance Criteria:**
- [ ] At least 3 sample episodes created
- [ ] All frontmatter fields populated
- [ ] Sample markdown body content
- [ ] Sample thumbnail images in `public/episodes/`

**Priority:** P1  
**Estimate:** 2h

---

### EP-006: Episode RSS/JSON Feed
**As a** visitor  
**I want** to subscribe to new episodes  
**So that** I stay updated

**Acceptance Criteria:**
- [ ] RSS feed at `/episodes/feed.xml`
- [ ] JSON feed at `/episodes/feed.json` (optional)
- [ ] Feed includes title, description, link, date
- [ ] Auto-updates when episodes added

**Priority:** P3  
**Estimate:** 2h

---

## Epic: 🛠️ Services

### SVC-001: Services Page
**As a** visitor  
**I want** detailed information about each service  
**So that** I understand what I'm buying

**Acceptance Criteria:**
- [ ] Page at `/services`
- [ ] Section for each service tier
- [ ] Anchor links: `#diagnosis`, `#rescue-sprint`, `#retainer`
- [ ] Detailed descriptions and deliverables
- [ ] Pricing indication (fixed/varies)
- [ ] CTA for each service
- [ ] SEO meta tags

**Priority:** P1  
**Estimate:** 3h

---

### SVC-002: Rapid Diagnosis Detail
**As a** visitor  
**I want** full details about the diagnosis call  
**So that** I know exactly what to expect

**Acceptance Criteria:**
- [ ] Duration: 30-45 minutes
- [ ] What's included (checklist)
- [ ] What you'll leave with
- [ ] Price (or "starting at")
- [ ] Book Now CTA

**Priority:** P1  
**Estimate:** 1h

---

### SVC-003: Rescue Sprint Detail
**As a** visitor  
**I want** full details about the sprint engagement  
**So that** I understand the deliverables

**Acceptance Criteria:**
- [ ] Duration: 3-10 days
- [ ] What's included (deliverables list)
- [ ] Before/after, changelog, rollback plan
- [ ] Price range or "scope-dependent"
- [ ] CTA to book diagnosis first

**Priority:** P1  
**Estimate:** 1h

---

## Epic: 👥 Crew

### CREW-001: Crew Page
**As a** visitor  
**I want** to learn more about the team  
**So that** I trust who I'll be working with

**Acceptance Criteria:**
- [ ] Page at `/crew`
- [ ] Extended bio for each team member
- [ ] Photo for each
- [ ] Specialties/tech stack
- [ ] Links to social/GitHub (optional)
- [ ] Team philosophy section
- [ ] CTA to book

**Priority:** P2  
**Estimate:** 2h

---

### CREW-002: Crew Photos
**As a** visitor  
**I want** to see real photos of the team  
**So that** it feels personal

**Acceptance Criteria:**
- [ ] Professional headshots in `public/crew/`
- [ ] Optimized via Nuxt Image
- [ ] Alt text for accessibility
- [ ] Consistent styling (size, crop, filters)

**Priority:** P2  
**Estimate:** 1h (dev) + photo time

---

## Epic: 📅 Booking

### BOOK-001: Booking Integration
**As a** visitor  
**I want** to easily book a Rapid Diagnosis  
**So that** I can get help quickly

**Acceptance Criteria:**
- [ ] Booking page at `/book`
- [ ] Integration with Cal.com (or similar)
- [ ] Embed or redirect to booking
- [ ] Query params passed (symptom, source)
- [ ] Confirmation message/redirect

**Priority:** P0  
**Estimate:** 3h

---

### BOOK-002: Pre-fill Symptom Context
**As a** visitor coming from symptom router  
**I want** my symptom pre-selected in booking  
**So that** I don't repeat myself

**Acceptance Criteria:**
- [ ] `/book?symptom=checkout` works
- [ ] Symptom tag passed to booking form
- [ ] Episode source tracked if from episode page
- [ ] UTM params preserved (optional)

**Priority:** P1  
**Estimate:** 1h

---

### BOOK-003: Booking Confirmation
**As a** visitor who booked  
**I want** confirmation of my booking  
**So that** I know it worked

**Acceptance Criteria:**
- [ ] Confirmation page or message
- [ ] "What to prepare" instructions
- [ ] Calendar add link
- [ ] Contact info for questions

**Priority:** P1  
**Estimate:** 1h

---

## Epic: 🎨 Polish

### POL-001: Loading States
**As a** user  
**I want** to see loading indicators  
**So that** I know content is coming

**Acceptance Criteria:**
- [ ] Skeleton loaders for episode cards
- [ ] Loading spinner for page transitions
- [ ] Suspense boundaries where needed

**Priority:** P3  
**Estimate:** 2h

---

### POL-002: Page Transitions
**As a** user  
**I want** smooth page transitions  
**So that** the site feels polished

**Acceptance Criteria:**
- [ ] Fade or slide transitions between pages
- [ ] Uses Nuxt's `<NuxtPage>` transition
- [ ] Consistent across routes

**Priority:** P3  
**Estimate:** 1h

---

### POL-003: SEO & Meta Tags
**As a** site owner  
**I want** proper SEO setup  
**So that** the site ranks well

**Acceptance Criteria:**
- [ ] Global meta tags in `nuxt.config.ts`
- [ ] Page-specific meta via `useSeoMeta()`
- [ ] Open Graph tags for social sharing
- [ ] Episode pages have dynamic OG images (optional)
- [ ] Sitemap generated

**Priority:** P2  
**Estimate:** 2h

---

### POL-004: 404 Page
**As a** user who hits a broken link  
**I want** a helpful 404 page  
**So that** I can find my way

**Acceptance Criteria:**
- [ ] Custom 404 page at `error.vue`
- [ ] Garage-themed design
- [ ] Links to homepage and episodes
- [ ] CTA to book if they're stuck

**Priority:** P3  
**Estimate:** 1h

---

## Sprint Planning Suggestions

### Sprint 1: Foundation (Week 1) ✅ COMPLETED
- FOUND-001: Project Structure ✅
- FOUND-002: Theme Configuration ✅
- FOUND-003: Default Layout ✅
- FOUND-004: Episodes Collection ✅
- FOUND-005: Shared Components ✅

**Bonus completed in Sprint 1:**
- HOME-002: Hero Section ✅
- HOME-003: Symptom Router ✅
- HOME-004: What You Get ✅
- HOME-005: The Method ✅
- HOME-009: Crew Section ✅
- HOME-010: Services Ladder ✅
- HOME-012: FAQ Section ✅
- HOME-013: Final CTA ✅
- EP-001: Episodes Listing ✅
- EP-002: Episode Detail Page ✅
- EP-005: Sample Episodes (3) ✅
- SVC-001: Services Page ✅
- CREW-001: Crew Page ✅
- BOOK-001: Booking Page (placeholder) ✅

### Sprint 2: Homepage Core (Week 2)
- HOME-002: Hero Section
- HOME-003: Symptom Router
- HOME-004: What You Get
- HOME-005: The Method
- HOME-010: Services Ladder
- HOME-012: FAQ
- HOME-013: Final CTA

### Sprint 3: Episodes & Booking (Week 3)
- HOME-006: Episodes Grid
- HOME-007: Episode Card
- EP-001: Episodes Listing
- EP-002: Episode Detail
- EP-005: Sample Content
- BOOK-001: Booking Integration

### Sprint 4: Polish & Secondary Pages (Week 4)
- HOME-001: Top Bar
- HOME-008: Metrics Showcase
- HOME-009: Crew Section
- HOME-011: After You Book
- SVC-001: Services Page
- CREW-001: Crew Page
- POL-003: SEO

---

## Story Point Reference

| Points | Meaning | Time Estimate |
|--------|---------|---------------|
| 1 | Trivial | < 1 hour |
| 2 | Small | 1-2 hours |
| 3 | Medium | 2-4 hours |
| 5 | Large | 4-8 hours |
| 8 | Very Large | 1-2 days |

---

## Definition of Done

A story is **Done** when:
- [ ] Code is written and working
- [ ] Component is responsive (mobile, tablet, desktop)
- [ ] Accessibility basics met (alt text, labels, keyboard nav)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Tested in browser
- [ ] Committed to git
