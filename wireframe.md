# Homepage Wireframe + Implementation Guide

> Built with **Nuxt 4** + **Nuxt UI 4** + **Nuxt Content 3**  
> Frictionless flow: content → trust → symptom → book call

---

## Page Structure Overview

| # | Section | Component | Priority |
|---|---------|-----------|----------|
| 0 | Top Bar | `TopBar.vue` | Optional |
| 1 | Header | `UHeader` (Nuxt UI) | Required |
| 2 | Hero | `HeroSection.vue` | Required |
| 3 | Symptom Router | `SymptomRouter.vue` | Required |
| 4 | What You Get | `WhatYouGet.vue` | Required |
| 5 | The Method | `TheMethod.vue` | Required |
| 6 | Episodes Grid | `EpisodesGrid.vue` | Required |
| 7 | Metrics Showcase | `MetricsShowcase.vue` | Optional |
| 8 | Meet the Crew | `CrewSection.vue` | Required |
| 9 | Services Ladder | `ServicesLadder.vue` | Required |
| 10 | After You Book | `AfterYouBook.vue` | Optional |
| 11 | FAQ | `FaqSection.vue` | Required |
| 12 | Final CTA | `FinalCta.vue` | Required |

---

## 0) Top Bar (optional, sticky)

### Copy
**⚠️ Site acting weird?** Slow checkout, random errors, broken tracking. **Book a Rapid Diagnosis →**

### Implementation
```vue
<!-- app/components/home/TopBar.vue -->
<template>
  <div class="bg-warning-500 text-warning-950 py-2">
    <UContainer>
      <div class="flex items-center justify-center gap-2 text-sm">
        <UIcon name="i-lucide-alert-triangle" />
        <span><strong>Site acting weird?</strong> Slow checkout, random errors, broken tracking.</span>
        <UButton
          to="/book"
          variant="link"
          color="neutral"
          class="font-semibold"
        >
          Book a Rapid Diagnosis →
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
```

### Nuxt UI
- Custom banner using `UContainer` + utility classes
- Or use `UBanner` if available

---

## 1) Header (sticky)

### Copy
- **Logo:** Web Rebuild Garage
- **Nav:** Episodes · Services · The Crew · FAQ
- **Primary CTA:** Book Rapid Diagnosis
- **Secondary:** Watch latest episode

### Implementation
```vue
<!-- app/app.vue or layouts/default.vue -->
<template>
  <UHeader>
    <template #logo>
      <NuxtLink to="/" class="font-bold text-xl">
        Web Rebuild Garage
      </NuxtLink>
    </template>

    <template #center>
      <UNavigationMenu :items="navItems" />
    </template>

    <template #right>
      <UButton to="/episodes/latest" variant="ghost">
        Watch latest episode
      </UButton>
      <UButton to="/book" color="primary">
        Book Rapid Diagnosis
      </UButton>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Episodes', to: '/episodes' },
  { label: 'Services', to: '/services' },
  { label: 'The Crew', to: '/crew' },
  { label: 'FAQ', to: '/#faq' }
]
</script>
```

### Nuxt UI
- `UHeader` — responsive header with slots
- `UNavigationMenu` — nav items
- `UButton` — CTA buttons

---

## 2) Hero (above the fold)

### Copy

**Headline (options):**
1. We fix broken websites like rebuild channels fix wrecked supercars.
2. Your website is the Ferrari. We're the rebuild shop.
3. Teardown → Fix → Test drive. That's how we rescue websites.

**Subheadline:**
I'm a senior web developer (10+ years) who finds the *real* cause fast — whether it's WordPress/WooCommerce or a JavaScript web app. When the problem goes deeper (servers, scaling, observability), I bring in **Yanus**, our DevOps specialist. Together, we move fast — and the fix sticks.

**CTAs:**
- Primary: **Book a Rapid Diagnosis**
- Secondary: **See Episodes (before/after)**

**Micro-trust line:**
No "generic audit PDF." You leave the call with a clear fix plan and next steps.

**Hero visual:** A "work order" style panel
- Incoming: "Checkout slow → cart abandonment"
- Status: "Teardown in progress"
- Result: "Load time ↓, conversion ↑"

### Implementation
```vue
<!-- app/components/home/HeroSection.vue -->
<template>
  <section class="py-24 lg:py-32">
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Copy -->
        <div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Teardown → Fix → Test drive.<br>
            <span class="text-primary-500">That's how we rescue websites.</span>
          </h1>
          
          <p class="text-lg text-neutral-400 mb-8">
            I'm a senior web developer (10+ years) who finds the <em>real</em> cause fast — 
            whether it's WordPress/WooCommerce or a JavaScript web app. When the problem 
            goes deeper, I bring in <strong>Yanus</strong>, our DevOps specialist. 
            Together, we move fast — and the fix sticks.
          </p>

          <div class="flex flex-wrap gap-4 mb-6">
            <UButton to="/book" size="lg" color="primary">
              Book a Rapid Diagnosis
            </UButton>
            <UButton to="/episodes" size="lg" variant="outline">
              See Episodes (before/after)
            </UButton>
          </div>

          <p class="text-sm text-neutral-500">
            No "generic audit PDF." You leave the call with a clear fix plan and next steps.
          </p>
        </div>

        <!-- Right: Work Order Visual -->
        <WorkOrder
          :items="[
            { label: 'Incoming', value: 'Checkout slow → cart abandonment' },
            { label: 'Status', value: 'Teardown in progress', status: 'in-progress' },
            { label: 'Result', value: 'Load time ↓, conversion ↑', status: 'success' }
          ]"
        />
      </div>
    </UContainer>
  </section>
</template>
```

### Nuxt UI
- `UContainer` — max-width wrapper
- `UButton` — primary/secondary CTAs
- Custom `WorkOrder` component for the visual

---

## 3) Symptom Router (frictionless bridge)

### Copy

**Title:** What's going on with your site?
**Subtitle:** Pick the symptom. I'll tell you what it usually means and what we check first.

**Cards:**
| Symptom | Detail | Tag |
|---------|--------|-----|
| Slow checkout / cart abandonment | WooCommerce, scripts, cache, DB, payments | `checkout` |
| Site is slow (Core Web Vitals failing) | waterfalls, third-party scripts, assets, caching | `performance` |
| Random errors / broken features | plugin conflicts, JS regressions, API issues | `errors` |
| Admin dashboard is painfully slow | queries, cron, bloat, server limits | `admin` |
| Deployments / downtime / scaling | Yanus territory: infra + monitoring + stability | `devops` |
| Not sure | We'll diagnose live on the call | `unknown` |

**CTA:** Book Rapid Diagnosis → (30–45 minutes)

### Implementation
```vue
<!-- app/components/home/SymptomRouter.vue -->
<template>
  <section id="symptoms" class="py-20 bg-neutral-900">
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">What's going on with your site?</h2>
        <p class="text-neutral-400">
          Pick the symptom. I'll tell you what it usually means and what we check first.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <UCard
          v-for="symptom in symptoms"
          :key="symptom.tag"
          :to="`/book?symptom=${symptom.tag}`"
          class="hover:border-primary-500 transition-colors cursor-pointer"
        >
          <template #header>
            <h3 class="font-semibold">{{ symptom.title }}</h3>
          </template>
          <p class="text-sm text-neutral-500">{{ symptom.detail }}</p>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/book" size="lg" color="primary">
          Book Rapid Diagnosis → <span class="text-sm opacity-75">(30–45 minutes)</span>
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const symptoms = [
  { title: 'Slow checkout / cart abandonment', detail: 'WooCommerce, scripts, cache, DB, payments', tag: 'checkout' },
  { title: 'Site is slow (Core Web Vitals failing)', detail: 'waterfalls, third-party scripts, assets, caching', tag: 'performance' },
  { title: 'Random errors / broken features', detail: 'plugin conflicts, JS regressions, API issues', tag: 'errors' },
  { title: 'Admin dashboard is painfully slow', detail: 'queries, cron, bloat, server limits', tag: 'admin' },
  { title: 'Deployments / downtime / scaling', detail: 'Yanus territory: infra + monitoring + stability', tag: 'devops' },
  { title: 'Not sure', detail: "We'll diagnose live on the call", tag: 'unknown' }
]
</script>
```

### Nuxt UI
- `UCard` — clickable symptom cards
- `UContainer` — section wrapper
- `UButton` — main CTA

---

## 4) "What You Get" (make the call feel concrete)

### Copy

**Title:** Rapid Diagnosis isn't a sales call. It's a teardown.

**Deliverables:**
- A clear explanation of what's likely happening (in plain language)
- The **exact checks** we'll run to confirm it
- A **Fix Plan** with priorities (fastest wins first)
- Timeline + rough estimate range for a Rescue Sprint (if needed)
- If it's not us — I'll still point you to the right fix path

**Small line:** If we run a Rescue Sprint, we can credit the diagnosis fee toward the sprint.

### Implementation
```vue
<!-- app/components/home/WhatYouGet.vue -->
<template>
  <section class="py-20">
    <UContainer>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Rapid Diagnosis isn't a sales call. It's a teardown.
        </h2>

        <ul class="space-y-4 mb-8">
          <li v-for="item in deliverables" :key="item" class="flex gap-3">
            <UIcon name="i-lucide-check-circle" class="text-primary-500 mt-1 shrink-0" />
            <span v-html="item" />
          </li>
        </ul>

        <p class="text-sm text-neutral-500 text-center">
          If we run a Rescue Sprint, we can credit the diagnosis fee toward the sprint.
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const deliverables = [
  'A clear explanation of what\'s likely happening (in plain language)',
  'The <strong>exact checks</strong> we\'ll run to confirm it',
  'A <strong>Fix Plan</strong> with priorities (fastest wins first)',
  'Timeline + rough estimate range for a Rescue Sprint (if needed)',
  'If it\'s not us — I\'ll still point you to the right fix path'
]
</script>
```

### Nuxt UI
- `UIcon` — check icons
- `UContainer` — wrapper

---

## 5) The Method (signature framework)

### Copy

**Title:** Our method: Teardown → Fix → Test Drive

**3 columns:**

| 1) Teardown (Diagnose) | 2) Fix (Smallest change) | 3) Test Drive (Prove it) |
|------------------------|--------------------------|--------------------------|
| We reproduce the issue, measure the baseline, and locate the bottleneck — code, plugins, database, scripts, or infrastructure. | We ship the fastest high-impact fix first. Then we harden the system so it doesn't break again next week. | Before/after metrics, real-world tests, monitoring, and a rollback plan. No guessing. No "should be fine." |

**Mini CTA:** Want us to do a teardown on your site? Book Rapid Diagnosis →

### Implementation
```vue
<!-- app/components/home/TheMethod.vue -->
<template>
  <section class="py-20 bg-neutral-900">
    <UContainer>
      <h2 class="text-3xl font-bold mb-12 text-center">
        Our method: Teardown → Fix → Test Drive
      </h2>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <UCard v-for="(step, index) in steps" :key="step.title">
          <template #header>
            <div class="flex items-center gap-3">
              <span class="text-2xl font-bold text-primary-500">{{ index + 1 }}</span>
              <h3 class="font-semibold">{{ step.title }}</h3>
            </div>
          </template>
          <p class="text-neutral-400">{{ step.description }}</p>
        </UCard>
      </div>

      <div class="text-center">
        <UButton to="/book" variant="outline">
          Want us to do a teardown on your site? Book Rapid Diagnosis →
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Teardown (Diagnose)',
    description: 'We reproduce the issue, measure the baseline, and locate the bottleneck — code, plugins, database, scripts, or infrastructure.'
  },
  {
    title: 'Fix (Smallest change)',
    description: "We ship the fastest high-impact fix first. Then we harden the system so it doesn't break again next week."
  },
  {
    title: 'Test Drive (Prove it)',
    description: 'Before/after metrics, real-world tests, monitoring, and a rollback plan. No guessing. No "should be fine."'
  }
]
</script>
```

### Nuxt UI
- `UCard` — method step cards
- Grid layout with Tailwind

---

## 6) Episodes Grid (proof via content)

### Copy

**Title:** Episodes: real rescues, real fixes
**Subtitle:** Some client details are anonymized — the process is always real.

**Episode cards (examples):**
- Episode #12 — "The checkout that killed revenue"
- Episode #09 — "Plugin conflict roulette"
- Episode #07 — "Core Web Vitals rescue"

**Button:** Browse all Episodes →

### Implementation
```vue
<!-- app/components/home/EpisodesGrid.vue -->
<template>
  <section class="py-20">
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Episodes: real rescues, real fixes</h2>
        <p class="text-neutral-400">
          Some client details are anonymized — the process is always real.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <EpisodeCard
          v-for="episode in episodes"
          :key="episode.slug"
          :episode="episode"
        />
      </div>

      <div class="text-center">
        <UButton to="/episodes" variant="outline" size="lg">
          Browse all Episodes →
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Fetch latest 3-6 episodes from Nuxt Content
const { data: episodes } = await useAsyncData('home-episodes', () =>
  queryCollection('episodes')
    .order('number', 'DESC')
    .limit(6)
    .all()
)
</script>
```

### Episode Card Component
```vue
<!-- app/components/episodes/EpisodeCard.vue -->
<template>
  <UCard :to="`/episodes/${episode.slug}`" class="group">
    <template #header>
      <NuxtImg
        :src="episode.thumbnail"
        :alt="episode.title"
        class="w-full aspect-video object-cover rounded"
      />
    </template>
    
    <div class="space-y-2">
      <UBadge color="neutral" variant="subtle">Episode #{{ episode.number }}</UBadge>
      <h3 class="font-semibold group-hover:text-primary-500 transition-colors">
        {{ episode.title }}
      </h3>
      <p class="text-sm text-neutral-500"><strong>Symptom:</strong> {{ episode.symptom }}</p>
      <p class="text-sm text-neutral-500"><strong>Result:</strong> {{ episode.result }}</p>
    </div>

    <template #footer>
      <div class="flex gap-2">
        <UButton size="sm" variant="ghost">Watch →</UButton>
        <UButton size="sm" variant="ghost">Read teardown →</UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  episode: {
    slug: string
    number: number
    title: string
    symptom: string
    result: string
    thumbnail: string
  }
}>()
</script>
```

### Nuxt Content Query
Episodes are stored in `content/episodes/*.md` and queried with Nuxt Content's `queryCollection()`.

---

## 7) Before/After Metrics (fast trust)

### Copy

**Title:** We don't sell vibes. We ship measurable wins.

**Metric chips:**
- Checkout load time: **12s → 2.1s**
- Cart abandonment: **↓**
- LCP / INP: **improved**
- Error rate: **down**
- Uptime: **up**

**Note:** Results vary. We'll show you exactly what changed and why it worked.

### Implementation
```vue
<!-- app/components/home/MetricsShowcase.vue -->
<template>
  <section class="py-20 bg-neutral-900">
    <UContainer>
      <h2 class="text-3xl font-bold mb-8 text-center">
        We don't sell vibes. We ship measurable wins.
      </h2>

      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <MetricChip
          v-for="metric in metrics"
          :key="metric.label"
          :label="metric.label"
          :value="metric.value"
        />
      </div>

      <p class="text-sm text-neutral-500 text-center">
        Results vary. We'll show you exactly what changed and why it worked.
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  { label: 'Checkout load time', value: '12s → 2.1s' },
  { label: 'Cart abandonment', value: '↓' },
  { label: 'LCP / INP', value: 'improved' },
  { label: 'Error rate', value: 'down' },
  { label: 'Uptime', value: 'up' }
]
</script>
```

### Metric Chip Component
```vue
<!-- app/components/shared/MetricChip.vue -->
<template>
  <div class="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-center">
    <p class="text-sm text-neutral-400">{{ label }}</p>
    <p class="text-lg font-bold text-primary-500">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>
```

---

## 8) Meet the Crew

### Copy

**Title:** You're not hiring a freelancer. You're getting a pit crew.

**You — Lead Diagnosis / Senior Web Dev**
10+ years building and fixing web systems. Fast root-cause finder. I lead the teardown, plan the sprint, and communicate clearly.

**Yanus — DevOps / Infrastructure Specialist**
Terminal wizard. Performance under load, server bottlenecks, monitoring, deployments, stability. When the issue isn't just code — Yanus makes it solid.

**Line:** I don't pretend to be a one-person universe. We fix problems faster because we're a team.

### Implementation
```vue
<!-- app/components/home/CrewSection.vue -->
<template>
  <section class="py-20">
    <UContainer>
      <h2 class="text-3xl font-bold mb-12 text-center">
        You're not hiring a freelancer. You're getting a pit crew.
      </h2>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
        <UCard v-for="member in crew" :key="member.name">
          <div class="flex gap-4">
            <UAvatar :src="member.avatar" :alt="member.name" size="xl" />
            <div>
              <h3 class="font-bold">{{ member.name }}</h3>
              <p class="text-sm text-primary-500 mb-2">{{ member.role }}</p>
              <p class="text-neutral-400">{{ member.bio }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <p class="text-center text-neutral-400 mb-8">
        I don't pretend to be a one-person universe. We fix problems faster because we're a team.
      </p>

      <div class="text-center">
        <UButton to="/book" color="primary">
          Book a Rapid Diagnosis →
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const crew = [
  {
    name: 'You', // Replace with actual name
    role: 'Lead Diagnosis / Senior Web Dev',
    bio: '10+ years building and fixing web systems. Fast root-cause finder. I lead the teardown, plan the sprint, and communicate clearly.',
    avatar: '/crew/you.jpg'
  },
  {
    name: 'Yanus',
    role: 'DevOps / Infrastructure Specialist',
    bio: "Terminal wizard. Performance under load, server bottlenecks, monitoring, deployments, stability. When the issue isn't just code — Yanus makes it solid.",
    avatar: '/crew/yanus.jpg'
  }
]
</script>
```

### Nuxt UI
- `UCard` — crew member cards
- `UAvatar` — profile images

---

## 9) Services Ladder

### Copy

**Title:** How you can work with us

| Service | Description | CTA |
|---------|-------------|-----|
| **Rapid Diagnosis** | 30–45 minutes. You leave with a Fix Plan. | Book Rapid Diagnosis |
| **Rescue Sprint** | 3–10 days focused on one mission: fix the leak. Deliverables: before/after, changelog, rollback plan, optional walkthrough. | See Rescue Sprint |
| **Pit Crew Retainer** | Ongoing monitoring + improvements so fires don't happen. | See Retainer |

### Implementation
```vue
<!-- app/components/home/ServicesLadder.vue -->
<template>
  <section class="py-20 bg-neutral-900">
    <UContainer>
      <h2 class="text-3xl font-bold mb-12 text-center">
        How you can work with us
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <UCard v-for="service in services" :key="service.name">
          <template #header>
            <div class="flex items-center gap-2">
              <UBadge>{{ service.step }}</UBadge>
              <h3 class="font-bold">{{ service.name }}</h3>
            </div>
          </template>
          
          <p class="text-neutral-400 mb-4">{{ service.description }}</p>
          
          <template #footer>
            <UButton :to="service.cta.to" :variant="service.primary ? 'solid' : 'outline'" block>
              {{ service.cta.label }}
            </UButton>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    step: '1',
    name: 'Rapid Diagnosis',
    description: '30–45 minutes. You leave with a Fix Plan.',
    cta: { label: 'Book Rapid Diagnosis', to: '/book' },
    primary: true
  },
  {
    step: '2',
    name: 'Rescue Sprint',
    description: '3–10 days focused on one mission: fix the leak. Deliverables: before/after, changelog, rollback plan, optional walkthrough.',
    cta: { label: 'See Rescue Sprint', to: '/services#rescue-sprint' },
    primary: false
  },
  {
    step: '3',
    name: 'Pit Crew Retainer',
    description: "Ongoing monitoring + improvements so fires don't happen.",
    cta: { label: 'See Retainer', to: '/services#retainer' },
    primary: false
  }
]
</script>
```

---

## 10) "After You Book" (friction remover)

### Copy

**Title:** After you book, here's the flow

1. You answer 6 quick questions (symptoms + access level)
2. We meet. We diagnose live and outline the Fix Plan
3. If it needs a sprint, we start with a clear scope + timeline
4. You get proof: metrics, changelog, and a "test drive" report

**Reassurance:** No pressure, no long contract to start.

### Implementation
```vue
<!-- app/components/home/AfterYouBook.vue -->
<template>
  <section class="py-20">
    <UContainer>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">
          After you book, here's the flow
        </h2>

        <ol class="space-y-6 mb-8">
          <li v-for="(step, index) in steps" :key="index" class="flex gap-4">
            <span class="shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
              {{ index + 1 }}
            </span>
            <p class="text-neutral-300 pt-1">{{ step }}</p>
          </li>
        </ol>

        <p class="text-sm text-neutral-500 text-center">
          No pressure, no long contract to start.
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  'You answer 6 quick questions (symptoms + access level)',
  'We meet. We diagnose live and outline the Fix Plan',
  'If it needs a sprint, we start with a clear scope + timeline',
  'You get proof: metrics, changelog, and a "test drive" report'
]
</script>
```

---

## 11) FAQ (objection killers)

### Copy

| Question | Answer |
|----------|--------|
| Do you only do WordPress? | No — WordPress/WooCommerce and modern JS web apps. Diagnosis first, then we decide the path. |
| Do you do server work? | If it's code-level, yes. If it's infra/DevOps, that's Yanus — and that's why our fixes don't fall apart under load. |
| Can you fix my site without access? | We can diagnose the "what" with limited access, but real fixes usually require proper staging or admin access. |
| What does it cost? | Diagnosis is fixed. Sprints depend on scope. You'll get a range after the teardown, before any work starts. |
| Can you be discreet? | Yes. Episodes are optional and can be anonymized — or not published at all. |

### Implementation
```vue
<!-- app/components/home/FaqSection.vue -->
<template>
  <section id="faq" class="py-20 bg-neutral-900">
    <UContainer>
      <h2 class="text-3xl font-bold mb-12 text-center">FAQ</h2>

      <div class="max-w-3xl mx-auto">
        <UAccordion :items="faqItems" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    label: 'Do you only do WordPress?',
    content: 'No — WordPress/WooCommerce and modern JS web apps. Diagnosis first, then we decide the path.'
  },
  {
    label: 'Do you do server work?',
    content: "If it's code-level, yes. If it's infra/DevOps, that's Yanus — and that's why our fixes don't fall apart under load."
  },
  {
    label: 'Can you fix my site without access?',
    content: 'We can diagnose the "what" with limited access, but real fixes usually require proper staging or admin access.'
  },
  {
    label: 'What does it cost?',
    content: "Diagnosis is fixed. Sprints depend on scope. You'll get a range after the teardown, before any work starts."
  },
  {
    label: 'Can you be discreet?',
    content: 'Yes. Episodes are optional and can be anonymized — or not published at all.'
  }
]
</script>
```

### Nuxt UI
- `UAccordion` — collapsible FAQ items

---

## 12) Final CTA (big, simple)

### Copy

**Title:** Ready for a teardown?
**Body:** If your site is bleeding performance or revenue, don't guess. Let's diagnose it properly.

**Primary CTA:** Book Rapid Diagnosis
**Secondary:** Browse Episodes

**Trust line:** Typically, you'll know the real cause within the first call.

### Implementation
```vue
<!-- app/components/home/FinalCta.vue -->
<template>
  <section class="py-24">
    <UContainer>
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold mb-6">Ready for a teardown?</h2>
        <p class="text-lg text-neutral-400 mb-8">
          If your site is bleeding performance or revenue, don't guess. Let's diagnose it properly.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <UButton to="/book" size="xl" color="primary">
            Book Rapid Diagnosis
          </UButton>
          <UButton to="/episodes" size="xl" variant="outline">
            Browse Episodes
          </UButton>
        </div>

        <p class="text-sm text-neutral-500">
          Typically, you'll know the real cause within the first call.
        </p>
      </div>
    </UContainer>
  </section>
</template>
```

---

## Voice & Vibe Checklist

- [ ] Use words: **teardown, rebuild, test drive, pit crew, rescue sprint, work order**
- [ ] UI hints: "Incoming vehicle" / "Repair status" / "Parts replaced"
- [ ] Make sections feel like **garage reports**, not agency brochures
- [ ] Use monospace fonts for "work order" elements
- [ ] Industrial color palette (orange, dark grays, warning yellows)

---

## Homepage Assembly

```vue
<!-- app/pages/index.vue -->
<template>
  <div>
    <TopBar />
    <HeroSection />
    <SymptomRouter />
    <WhatYouGet />
    <TheMethod />
    <EpisodesGrid />
    <MetricsShowcase />
    <CrewSection />
    <ServicesLadder />
    <AfterYouBook />
    <FaqSection />
    <FinalCta />
  </div>
</template>
```

---

## Nuxt Content: Episodes Collection

Update `content.config.ts` to define the episodes collection schema:

```typescript
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    episodes: defineCollection({
      type: 'page',
      source: 'episodes/**/*.md',
      schema: z.object({
        title: z.string(),
        number: z.number(),
        slug: z.string(),
        symptom: z.string(),
        rootCause: z.string(),
        result: z.string(),
        stack: z.enum(['woocommerce', 'wordpress', 'javascript', 'nuxt', 'react', 'vue']),
        tags: z.array(z.string()),
        severity: z.enum(['revenue-leak', 'ux-pain', 'stability-risk']),
        crew: z.array(z.string()),
        youtubeId: z.string().optional(),
        thumbnail: z.string(),
        publishedAt: z.string(),
        metrics: z.object({
          before: z.record(z.string()),
          after: z.record(z.string())
        }).optional()
      })
    })
  }
})
```
