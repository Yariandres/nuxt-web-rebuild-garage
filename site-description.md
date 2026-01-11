# Web Rebuild Garage — Site Description

> A web development service site with a **car rebuild garage** aesthetic.  
> Built with **Nuxt 4**, **Nuxt UI 4**, **Nuxt Content 3**, and **Nuxt Image**.

---

## Concept

**Websites = wrecked supercars** that need diagnosing and fixing.  
**You + Yanus = a pit crew** (not a generic freelancer/agency).  
**Episodes = content-driven trust** — like Matt Armstrong's supercar rebuild channel, but for broken websites.

---

## Tech Stack

| Layer | Tech | Purpose |
|-------|------|---------|
| Framework | Nuxt 4.2.2 | SSR/SSG, file-based routing |
| UI | Nuxt UI 4.3.0 | Component library + theming |
| Content | Nuxt Content 3.10.0 | Markdown-driven episodes + pages |
| Images | Nuxt Image 2.0.0 | Optimized images, lazy loading |
| Styling | Tailwind CSS (via Nuxt UI) | Utility-first + design tokens |

---

## Design Direction

### Voice & Vibe
- **Garage aesthetic**, not corporate agency
- UI styled like "work orders" and "repair status" panels
- Terminology: *teardown, rebuild, test drive, pit crew, rescue sprint, work order*
- Before/after metrics as proof (like showing a wrecked car → finished build)

### Nuxt UI Theming
Use Nuxt UI's theming system to create the garage vibe:
- **Primary color**: Industrial orange or warning yellow
- **Neutral**: Dark grays (like engine bay)
- **Accents**: Green for success states, red for errors
- **Typography**: Monospace for "work order" elements, clean sans-serif for body

---

## Service Ladder

| # | Service | Description | Entry Point |
|---|---------|-------------|-------------|
| 1 | **Rapid Diagnosis** | 30-45 min teardown call | Primary CTA everywhere |
| 2 | **Rescue Sprint** | 3-10 day focused fix | After diagnosis |
| 3 | **Pit Crew Retainer** | Ongoing monitoring | After successful sprint |

---

## Target Symptoms (Symptom Router)

| Symptom | Tech Context | Owner |
|---------|--------------|-------|
| Slow checkout / cart abandonment | WooCommerce, scripts, cache, DB | You |
| Core Web Vitals failing | Waterfalls, third-party scripts, assets | You |
| Random errors / broken features | Plugin conflicts, JS regressions, API issues | You |
| Admin dashboard slow | Queries, cron, bloat, server limits | You |
| Deployments / downtime / scaling | Infra + monitoring + stability | Yanus |

---

## The Crew

### You — Lead Diagnosis / Senior Web Dev
- 10+ years building and fixing web systems
- Fast root-cause finder
- Leads teardown, plans sprint, communicates clearly
- **Stack**: WordPress/WooCommerce, JavaScript web apps

### Yanus — DevOps / Infrastructure Specialist
- Terminal wizard
- Performance under load, server bottlenecks
- Monitoring, deployments, stability
- **Stack**: Linux, Docker, CI/CD, observability

---

## Content Strategy: Episodes

Episodes are the **core content engine**. Each episode documents a real client fix like a YouTube rebuild series.

### Episode Content Structure
```
content/
  episodes/
    slow-woocommerce-checkout.md
    plugin-conflict-roulette.md
    core-web-vitals-rescue.md
```

### Episode Frontmatter Schema
```yaml
---
title: "The checkout that killed revenue"
number: 12
slug: "slow-woocommerce-checkout"
symptom: "12s checkout load → drop-offs"
rootCause: "Unoptimized DB queries + render-blocking scripts"
result: "2.1s checkout, fewer abandons"
stack: "woocommerce"
tags: ["checkout", "performance", "woocommerce"]
severity: "revenue-leak"
crew: ["you", "yanus"]
youtubeId: "abc123xyz"
thumbnail: "/episodes/ep12-thumb.jpg"
publishedAt: 2024-01-15
metrics:
  before:
    checkoutLoad: "12s"
    lcp: "8.2s"
    errorRate: "3.2%"
  after:
    checkoutLoad: "2.1s"
    lcp: "2.4s"
    errorRate: "0.1%"
---
```

---

## Folder Structure (Recommended)

```
app/
  components/
    home/
      TopBar.vue
      HeroSection.vue
      SymptomRouter.vue
      WhatYouGet.vue
      TheMethod.vue
      EpisodesGrid.vue
      MetricsShowcase.vue
      CrewSection.vue
      ServicesLadder.vue
      AfterYouBook.vue
      FaqSection.vue
      FinalCta.vue
    episodes/
      EpisodeCard.vue
      EpisodeHero.vue
      SymptomChecklist.vue
      MetricsGrid.vue
      ChangelogList.vue
      WorkOrderCard.vue
    shared/
      WorkOrder.vue
      MetricChip.vue
      CtaButton.vue
  layouts/
    default.vue
  pages/
    index.vue
    episodes/
      index.vue
      [slug].vue
    services.vue
    crew.vue

content/
  episodes/
    *.md

public/
  episodes/
    (thumbnails, assets)
```

---

## Nuxt UI Components Mapping

| Section | Nuxt UI Components |
|---------|-------------------|
| Top Bar | `UBanner` or custom `UContainer` |
| Header | `UHeader`, `UNavigationMenu`, `UButton` |
| Hero | `UContainer`, `UButton`, `UBadge` |
| Symptom Router | `UCard`, `UButton` (as cards) |
| What You Get | `UCard`, `UList` |
| The Method | `UCard` (3-column grid) |
| Episodes Grid | `UCard`, `UBadge`, `ULink` |
| Metrics | `UBadge`, `UMeter` or custom chips |
| Crew | `UCard`, `UAvatar` |
| Services | `UCard`, `UButton` |
| After You Book | `UTimeline` or numbered list |
| FAQ | `UAccordion` |
| Final CTA | `UContainer`, `UButton` |

---

## Key Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage (all sections) |
| `/episodes` | Episode listing with filters |
| `/episodes/[slug]` | Individual episode page |
| `/services` | Detailed service pages |
| `/crew` | About the team |
| `/book` | Redirect to Cal.com or booking widget |

---

## Conversion Points

Every page should route to **Book Rapid Diagnosis** with prefilled context:

```
/book?symptom=slow-checkout&stack=woocommerce&source=episode-12
```

---

## Next Steps

1. [ ] Set up Nuxt UI theming (garage colors)
2. [ ] Create homepage layout with all 13 sections
3. [ ] Set up Nuxt Content collection for episodes
4. [ ] Build reusable components (WorkOrder, MetricChip, etc.)
5. [ ] Create episode page template
6. [ ] Connect booking system (Cal.com embed or link)
