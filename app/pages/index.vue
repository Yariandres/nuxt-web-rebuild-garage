<script setup lang="ts">
useSeoMeta({
  title: 'Web Rebuild Garage — We Fix Broken Websites',
  description:
    'We fix broken websites like rebuild channels fix wrecked supercars. Teardown → Fix → Test Drive. Book a Rapid Diagnosis today.',
})

interface Symptom {
  title: string
  detail: string
  tag: string
  icon: string
}

interface MethodStep {
  title: string
  description: string
}

interface CrewMember {
  name: string
  role: string
  bio: string
  icon: string
}

interface Service {
  step: string
  name: string
  description: string
  cta: string
  to: string
  primary: boolean
}

interface FaqItem {
  label: string
  content: string
}

const symptoms = ref<Symptom[]>([
  {
    title: 'Slow checkout / cart abandonment',
    detail: 'WooCommerce, scripts, cache, DB, payments',
    tag: 'checkout',
    icon: 'i-lucide-shopping-cart',
  },
  {
    title: 'Site is slow (Core Web Vitals failing)',
    detail: 'waterfalls, third-party scripts, assets, caching',
    tag: 'performance',
    icon: 'i-lucide-gauge',
  },
  {
    title: 'Random errors / broken features',
    detail: 'plugin conflicts, JS regressions, API issues',
    tag: 'errors',
    icon: 'i-lucide-bug',
  },
  {
    title: 'Admin dashboard is painfully slow',
    detail: 'queries, cron, bloat, server limits',
    tag: 'admin',
    icon: 'i-lucide-layout-dashboard',
  },
  {
    title: 'Deployments / downtime / scaling',
    detail: 'Yanus territory: infra + monitoring + stability',
    tag: 'devops',
    icon: 'i-lucide-server',
  },
  {
    title: 'Not sure',
    detail: "We'll diagnose live on the call",
    tag: 'unknown',
    icon: 'i-lucide-help-circle',
  },
])

const deliverables = ref<string[]>([
  "A clear explanation of what's likely happening (in plain language)",
  'The <strong class="text-zinc-100">exact checks</strong> we\'ll run to confirm it',
  'A <strong class="text-zinc-100">Fix Plan</strong> with priorities (fastest wins first)',
  'Timeline + rough estimate range for a Rescue Sprint (if needed)',
  "If it's not us — I'll still point you to the right fix path",
])

const methodSteps = ref<MethodStep[]>([
  {
    title: 'Teardown (Diagnose)',
    description:
      'We reproduce the issue, measure the baseline, and locate the bottleneck — code, plugins, database, scripts, or infrastructure.',
  },
  {
    title: 'Fix (Smallest change)',
    description:
      "We ship the fastest high-impact fix first. Then we harden the system so it doesn't break again next week.",
  },
  {
    title: 'Test Drive (Prove it)',
    description:
      'Before/after metrics, real-world tests, monitoring, and a rollback plan. No guessing. No "should be fine."',
  },
])

const crew = ref<CrewMember[]>([
  {
    name: 'Lead Developer',
    role: 'Lead Diagnosis / Senior Web Dev',
    bio: '10+ years building and fixing web systems. Fast root-cause finder. I lead the teardown, plan the sprint, and communicate clearly.',
    icon: 'i-lucide-user',
  },
  {
    name: 'Yanus',
    role: 'DevOps / Infrastructure Specialist',
    bio: "Terminal wizard. Performance under load, server bottlenecks, monitoring, deployments, stability. When the issue isn't just code — Yanus makes it solid.",
    icon: 'i-lucide-terminal',
  },
])

const services = ref<Service[]>([
  {
    step: '1',
    name: 'Rapid Diagnosis',
    description: '30–45 minutes. You leave with a Fix Plan.',
    cta: 'Book Rapid Diagnosis',
    to: '/book',
    primary: true,
  },
  {
    step: '2',
    name: 'Rescue Sprint',
    description:
      '3–10 days focused on one mission: fix the leak. Deliverables: before/after, changelog, rollback plan, optional walkthrough.',
    cta: 'See Rescue Sprint',
    to: '/services#rescue-sprint',
    primary: false,
  },
  {
    step: '3',
    name: 'Pit Crew Retainer',
    description: "Ongoing monitoring + improvements so fires don't happen.",
    cta: 'See Retainer',
    to: '/services#retainer',
    primary: false,
  },
])

const faqItems = ref<FaqItem[]>([
  {
    label: 'Do you only do WordPress?',
    content:
      'No — WordPress/WooCommerce and modern JS web apps. Diagnosis first, then we decide the path.',
  },
  {
    label: 'Do you do server work?',
    content:
      "If it's code-level, yes. If it's infra/DevOps, that's Yanus — and that's why our fixes don't fall apart under load.",
  },
  {
    label: 'Can you fix my site without access?',
    content:
      'We can diagnose the "what" with limited access, but real fixes usually require proper staging or admin access.',
  },
  {
    label: 'What does it cost?',
    content:
      "Diagnosis is fixed. Sprints depend on scope. You'll get a range after the teardown, before any work starts.",
  },
  {
    label: 'Can you be discreet?',
    content:
      'Yes. Episodes are optional and can be anonymized — or not published at all.',
  },
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 lg:py-32">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Copy -->
          <div>
            <h1
              class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
            >
              Teardown → Fix → Test drive.
              <span class="text-amber-500 block"
                >That's how we rescue websites.</span
              >
            </h1>

            <p class="text-lg text-zinc-400 mb-8 max-w-xl">
              I'm a senior web developer (10+ years) who finds the
              <em>real</em> cause fast — whether it's WordPress/WooCommerce or a
              JavaScript web app. When the problem goes deeper, I bring in
              <strong class="text-zinc-200">Yanus</strong>, our DevOps
              specialist. Together, we move fast — and the fix sticks.
            </p>

            <div class="flex flex-wrap gap-4 mb-6">
              <UButton to="/book" size="xl" color="primary">
                Book a Rapid Diagnosis
              </UButton>
              <UButton to="/episodes" size="xl" variant="outline">
                See Episodes (before/after)
              </UButton>
            </div>

            <p class="text-sm text-zinc-500">
              No "generic audit PDF." You leave the call with a clear fix plan
              and next steps.
            </p>
          </div>

          <!-- Right: Work Order Visual -->
          <div class="hidden lg:block">
            <WorkOrder
              title="Repair Status"
              :items="[
                {
                  label: 'Incoming',
                  value: 'Checkout slow → cart abandonment',
                  status: 'pending',
                },
                {
                  label: 'Status',
                  value: 'Teardown in progress',
                  status: 'in-progress',
                },
                {
                  label: 'Result',
                  value: 'Load time ↓, conversion ↑',
                  status: 'success',
                },
              ]"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Symptom Router Section -->
    <section id="symptoms" class="py-20 bg-zinc-900">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            What's going on with your site?
          </h2>
          <p class="text-zinc-400 max-w-2xl mx-auto">
            Pick the symptom. I'll tell you what it usually means and what we
            check first.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <NuxtLink
            v-for="symptom in symptoms"
            :key="symptom.tag"
            :to="`/book?symptom=${symptom.tag}`"
            class="block"
          >
            <UCard
              class="h-full hover:border-amber-500/50 transition-colors cursor-pointer group"
            >
              <div class="flex items-start gap-3">
                <UIcon
                  :name="symptom.icon"
                  class="text-amber-500 size-6 shrink-0 mt-1"
                />
                <div>
                  <h3
                    class="font-semibold mb-1 group-hover:text-amber-500 transition-colors"
                  >
                    {{ symptom.title }}
                  </h3>
                  <p class="text-sm text-zinc-500">{{ symptom.detail }}</p>
                </div>
              </div>
            </UCard>
          </NuxtLink>
        </div>

        <div class="text-center">
          <UButton to="/book" size="lg" color="primary">
            Book Rapid Diagnosis →
            <span class="text-amber-200/70 ml-1">(30–45 minutes)</span>
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- What You Get Section -->
    <section class="py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold mb-10 text-center">
            Rapid Diagnosis isn't a sales call. It's a teardown.
          </h2>

          <ul class="space-y-4 mb-8">
            <li
              v-for="(item, index) in deliverables"
              :key="index"
              class="flex gap-4 items-start"
            >
              <UIcon
                name="i-lucide-check-circle-2"
                class="text-emerald-500 size-6 shrink-0 mt-0.5"
              />
              <span class="text-zinc-300" v-html="item" />
            </li>
          </ul>

          <p class="text-sm text-zinc-500 text-center">
            If we run a Rescue Sprint, we can credit the diagnosis fee toward
            the sprint.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- The Method Section -->
    <section class="py-20 bg-zinc-900">
      <UContainer>
        <h2 class="text-3xl lg:text-4xl font-bold mb-12 text-center">
          Our method:
          <span class="text-amber-500">Teardown → Fix → Test Drive</span>
        </h2>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <UCard v-for="(step, index) in methodSteps" :key="step.title">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl font-bold text-amber-500 font-mono">{{
                index + 1
              }}</span>
              <h3 class="font-semibold text-lg">{{ step.title }}</h3>
            </div>
            <p class="text-zinc-400">{{ step.description }}</p>
          </UCard>
        </div>

        <div class="text-center">
          <UButton to="/book" variant="outline">
            Want us to do a teardown on your site? Book Rapid Diagnosis →
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Crew Section -->
    <section class="py-20">
      <UContainer>
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-center">
          You're not hiring a freelancer.
        </h2>
        <p class="text-xl text-amber-500 mb-12 text-center">
          You're getting a pit crew.
        </p>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          <UCard v-for="member in crew" :key="member.name">
            <div class="flex gap-4">
              <div
                class="size-16 rounded-full bg-zinc-800 flex items-center justify-center shrink-0"
              >
                <UIcon :name="member.icon" class="size-8 text-amber-500" />
              </div>
              <div>
                <h3 class="font-bold text-lg">{{ member.name }}</h3>
                <p class="text-sm text-amber-500 mb-3">{{ member.role }}</p>
                <p class="text-zinc-400 text-sm">{{ member.bio }}</p>
              </div>
            </div>
          </UCard>
        </div>

        <p class="text-center text-zinc-400 mb-8 max-w-2xl mx-auto">
          I don't pretend to be a one-person universe. We fix problems faster
          because we're a team.
        </p>

        <div class="text-center">
          <UButton to="/book" color="primary" size="lg">
            Book a Rapid Diagnosis →
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-zinc-900">
      <UContainer>
        <h2 class="text-3xl lg:text-4xl font-bold mb-12 text-center">
          How you can work with us
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <UCard
            v-for="service in services"
            :key="service.name"
            class="flex flex-col"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <UBadge color="primary" variant="subtle">{{
                  service.step
                }}</UBadge>
                <h3 class="font-bold">{{ service.name }}</h3>
              </div>
            </template>

            <p class="text-zinc-400 flex-1">{{ service.description }}</p>

            <template #footer>
              <UButton
                :to="service.to"
                :variant="service.primary ? 'solid' : 'outline'"
                :color="service.primary ? 'primary' : 'neutral'"
                block
              >
                {{ service.cta }}
              </UButton>
            </template>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20">
      <UContainer>
        <h2 class="text-3xl lg:text-4xl font-bold mb-12 text-center">FAQ</h2>

        <div class="max-w-3xl mx-auto">
          <UAccordion :items="faqItems" />
        </div>
      </UContainer>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-zinc-900">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready for a teardown?
          </h2>
          <p class="text-lg text-zinc-400 mb-10">
            If your site is bleeding performance or revenue, don't guess. Let's
            diagnose it properly.
          </p>

          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <UButton to="/book" size="xl" color="primary">
              Book Rapid Diagnosis
            </UButton>
            <UButton to="/episodes" size="xl" variant="outline">
              Browse Episodes
            </UButton>
          </div>

          <p class="text-sm text-zinc-500">
            Typically, you'll know the real cause within the first call.
          </p>
        </div>
      </UContainer>
    </section>
  </div>
</template>
