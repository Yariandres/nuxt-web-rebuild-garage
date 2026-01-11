---
title: "Plugin conflict roulette"
number: 9
description: "Every time they updated plugins, something broke. We traced the conflicts and built a stable update path."
symptom: "Random breakage after every plugin update"
rootCause: "3 plugins hooking the same WooCommerce filter with conflicting logic"
result: "Stable checkout + clean update path"
stack: "wordpress"
tags: ["plugins", "conflicts", "woocommerce", "stability"]
severity: "stability-risk"
crew: ["you"]
thumbnail: "/episodes/ep09-plugins.jpg"
publishedAt: "2023-11-22"
metrics:
  before:
    updateSuccess: "40%"
    rollbacksPerMonth: "6"
    downtimeHours: "4h/month"
  after:
    updateSuccess: "100%"
    rollbacksPerMonth: "0"
    downtimeHours: "0"
---

## The Incoming Problem

"Every time we update plugins, something breaks. Usually the checkout."

The client had stopped updating entirely — which meant security patches weren't being applied. A ticking time bomb.

## The Teardown

### Step 1: Map the Plugin Ecosystem

We documented all 47 active plugins and their purposes:
- 12 were essential
- 18 were "nice to have"
- 17 were completely redundant or abandoned

### Step 2: Hook Analysis

Using Query Monitor and custom logging, we traced every hook on the checkout page:
- `woocommerce_checkout_fields` was being filtered by **7 different plugins**
- 3 of them were trying to reorder the same fields
- When the order of execution changed (after updates), boom

### Step 3: Conflict Matrix

We built a matrix of which plugins conflicted with which:

| Plugin A | Plugin B | Conflict Type |
|----------|----------|---------------|
| Checkout Fields Pro | Field Manager | Both modify billing fields |
| Payment Gateway X | Gateway Y | Both add identical checkout scripts |
| Performance Plugin | Cache Plugin | Both try to minify the same CSS |

## The Fix

### The Purge (Day 1)
- Removed 17 redundant plugins
- Consolidated 5 plugins into 2 alternatives that did the job better

### The Stabilization (Day 2)
- Standardized on a single plugin for field management
- Added priority settings to prevent hook conflicts
- Created a staging environment that mirrors production exactly

### The Update Protocol (Day 3)
- Documented a safe update order
- Set up automated testing for checkout after updates
- Created rollback scripts that work in under 60 seconds

## The Test Drive

We ran 10 consecutive plugin update cycles with zero breakage.

| Metric | Before | After |
|--------|--------|-------|
| Update Success Rate | 40% | 100% |
| Rollbacks/Month | 6 | 0 |
| Monthly Downtime | 4 hours | 0 |

## Lessons Learned

1. **More plugins ≠ more features** — often it means more conflicts
2. **Hook priority matters** — especially on critical pages
3. **A staging environment** is not optional for production sites

---

**Stuck in plugin conflict hell?** [Book a Rapid Diagnosis →](/book?symptom=errors&source=episode-9)
