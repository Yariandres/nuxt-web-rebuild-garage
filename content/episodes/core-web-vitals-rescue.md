---
title: "Core Web Vitals rescue"
number: 7
description: "Google was penalizing their rankings due to failing Core Web Vitals. We got them passing in under a week."
symptom: "All Core Web Vitals failing, SEO rankings dropping"
rootCause: "Unoptimized images, layout shifts from ads, and heavy third-party scripts"
result: "All CWV passing, rankings recovered"
stack: "javascript"
tags: ["performance", "seo", "core-web-vitals", "images"]
severity: "revenue-leak"
crew: ["you"]
thumbnail: "/episodes/ep07-cwv.jpg"
publishedAt: "2023-09-14"
metrics:
  before:
    lcp: "6.8s"
    inp: "890ms"
    cls: "0.42"
    mobileScore: "31"
  after:
    lcp: "1.9s"
    inp: "120ms"
    cls: "0.02"
    mobileScore: "94"
---

## The Incoming Problem

"Our organic traffic dropped 40% after the last Google update."

When we ran PageSpeed Insights, the diagnosis was clear: they were failing every Core Web Vital metric. Google's page experience signals were tanking their rankings.

## The Teardown

### Step 1: Baseline Measurements

Using both lab and field data from CrUX:

| Metric | Value | Status |
|--------|-------|--------|
| LCP | 6.8s | ❌ Poor |
| INP | 890ms | ❌ Poor |
| CLS | 0.42 | ❌ Poor |

### Step 2: LCP Investigation

The Largest Contentful Paint was a hero image that:
- Was 4.2MB (uncompressed PNG)
- Had no width/height attributes
- Loaded synchronously before anything else

### Step 3: CLS Culprits

The Cumulative Layout Shift came from:
- Ad units loading without reserved space
- Web fonts causing FOUT (Flash of Unstyled Text)
- Images without dimensions

### Step 4: INP Analysis

Interaction to Next Paint was slow because:
- Heavy JavaScript bundle (2.1MB)
- No code splitting
- Main thread blocked for 400ms+ on initial interactions

## The Fix

### Image Optimization (Day 1)
- Converted all images to WebP/AVIF with fallbacks
- Implemented responsive images with `srcset`
- Added explicit width/height to all images
- Lazy loaded below-the-fold images

### Layout Stability (Day 2)
- Reserved space for ad units with min-height
- Preloaded critical fonts with `font-display: swap`
- Added aspect-ratio containers for dynamic content

### JavaScript Performance (Days 3-4)
- Code-split the bundle into route-based chunks
- Deferred non-critical third-party scripts
- Moved heavy computations to Web Workers

### Verification (Day 5)
- Monitored field data for 48 hours
- Ran Lighthouse CI on every page
- Validated with Google Search Console

## The Test Drive

After 28 days (Google's rolling average window):

| Metric | Before | After | Status |
|--------|--------|-------|--------|
| LCP | 6.8s | 1.9s | ✅ Good |
| INP | 890ms | 120ms | ✅ Good |
| CLS | 0.42 | 0.02 | ✅ Good |
| Mobile Score | 31 | 94 | ✅ |

Organic traffic recovered to previous levels within 6 weeks.

## Lessons Learned

1. **Images are usually the biggest LCP problem** — optimize them first
2. **Reserve space for everything** that loads dynamically
3. **Third-party scripts are INP killers** — defer them aggressively

---

**Failing Core Web Vitals?** [Book a Rapid Diagnosis →](/book?symptom=performance&source=episode-7)
