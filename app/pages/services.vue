<script setup lang="ts">
useSeoMeta({
  title: 'Services — Web Rebuild Garage',
  description: 'From Rapid Diagnosis to Rescue Sprints to ongoing retainers. Choose how you want to work with us.'
})
</script>

<template>
  <div class="py-20">
    <UContainer>
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">
          How you can work with us
        </h1>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          Start with a Rapid Diagnosis. If you need more, we scale up from there.
          No long contracts required to begin.
        </p>
      </div>

      <!-- Service 1: Rapid Diagnosis -->
      <section id="diagnosis" class="mb-20 scroll-mt-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="primary" class="mb-4">Start Here</UBadge>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Rapid Diagnosis</h2>
            <p class="text-xl text-amber-500 mb-6">30–45 minutes. You leave with a Fix Plan.</p>

            <p class="text-zinc-400 mb-6">
              This isn't a sales call. It's a live teardown where we diagnose your site's actual problems
              and give you a clear path forward — whether you work with us or not.
            </p>

            <h3 class="font-semibold mb-3">What's included:</h3>
            <ul class="space-y-2 mb-8">
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Clear explanation of what's happening (plain language)</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">The exact checks we'll run to confirm it</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Fix Plan with priorities (fastest wins first)</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Timeline + rough estimate for a Rescue Sprint</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Honest recommendation (even if it's "don't hire us")</span>
              </li>
            </ul>

            <UButton to="/book" color="primary" size="lg">
              Book Rapid Diagnosis
            </UButton>
          </div>

          <div>
            <WorkOrder
              title="Diagnosis Output"
              :items="[
                { label: 'Problem', value: 'Identified & documented', status: 'success' },
                { label: 'Root Cause', value: 'Pinpointed with evidence', status: 'success' },
                { label: 'Fix Plan', value: 'Prioritized action items', status: 'success' },
                { label: 'Estimate', value: 'Timeline + budget range', status: 'success' }
              ]"
            />
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-zinc-800 my-16" />

      <!-- Service 2: Rescue Sprint -->
      <section id="rescue-sprint" class="mb-20 scroll-mt-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <WorkOrder
              title="Sprint Deliverables"
              :items="[
                { label: 'Before/After', value: 'Measured metrics & proof', status: 'success' },
                { label: 'Changelog', value: 'Every change documented', status: 'success' },
                { label: 'Rollback Plan', value: 'Safety net included', status: 'success' },
                { label: 'Walkthrough', value: 'Optional live review', status: 'pending' }
              ]"
            />
          </div>

          <div class="order-1 lg:order-2">
            <UBadge color="neutral" variant="subtle" class="mb-4">After Diagnosis</UBadge>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Rescue Sprint</h2>
            <p class="text-xl text-amber-500 mb-6">3–10 days focused on one mission: fix the leak.</p>

            <p class="text-zinc-400 mb-6">
              Once we know what's wrong, we fix it. Fast. A Rescue Sprint is a focused engagement
              where we tackle the highest-priority issue from your Fix Plan.
            </p>

            <h3 class="font-semibold mb-3">What's included:</h3>
            <ul class="space-y-2 mb-8">
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Before/after metrics (proof it worked)</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Detailed changelog of every change</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Rollback plan (safety net)</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Optional walkthrough call</span>
              </li>
            </ul>

            <p class="text-sm text-zinc-500 mb-6">
              Pricing depends on scope. You'll get a clear range after the Rapid Diagnosis.
            </p>

            <UButton to="/book" variant="outline">
              Start with a Diagnosis
            </UButton>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="border-t border-zinc-800 my-16" />

      <!-- Service 3: Pit Crew Retainer -->
      <section id="retainer" class="mb-20 scroll-mt-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="neutral" variant="subtle" class="mb-4">Ongoing</UBadge>
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">Pit Crew Retainer</h2>
            <p class="text-xl text-amber-500 mb-6">Ongoing monitoring + improvements so fires don't happen.</p>

            <p class="text-zinc-400 mb-6">
              For sites where downtime or performance regression means real money lost.
              We monitor, maintain, and improve — so you can focus on running your business.
            </p>

            <h3 class="font-semibold mb-3">What's included:</h3>
            <ul class="space-y-2 mb-8">
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Proactive monitoring & alerts</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Monthly performance reviews</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Priority response for emergencies</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Reserved hours for improvements</span>
              </li>
              <li class="flex gap-3">
                <UIcon name="i-lucide-check" class="text-emerald-500 size-5 shrink-0 mt-0.5" />
                <span class="text-zinc-300">Direct Slack/communication channel</span>
              </li>
            </ul>

            <p class="text-sm text-zinc-500 mb-6">
              Retainers are available after a successful Rescue Sprint.
            </p>

            <UButton to="/book" variant="outline">
              Start with a Diagnosis
            </UButton>
          </div>

          <div>
            <UCard class="bg-zinc-900">
              <div class="text-center py-8">
                <UIcon name="i-lucide-shield-check" class="size-16 text-amber-500 mx-auto mb-4" />
                <h3 class="text-xl font-bold mb-2">Peace of Mind</h3>
                <p class="text-zinc-400">
                  We watch your site so you don't have to.
                  When something breaks, we're already on it.
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="text-center py-16 bg-zinc-900 rounded-xl">
        <h2 class="text-2xl lg:text-3xl font-bold mb-4">Not sure where to start?</h2>
        <p class="text-zinc-400 mb-8 max-w-xl mx-auto">
          Everyone starts with a Rapid Diagnosis. In 30-45 minutes,
          you'll know exactly what's wrong and what to do about it.
        </p>
        <UButton to="/book" color="primary" size="xl">
          Book a Rapid Diagnosis
        </UButton>
      </section>
    </UContainer>
  </div>
</template>
