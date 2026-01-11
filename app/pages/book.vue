<script setup lang="ts">
const route = useRoute()

const symptom = computed(() => route.query.symptom as string || '')
const source = computed(() => route.query.source as string || '')

useSeoMeta({
  title: 'Book a Rapid Diagnosis — Web Rebuild Garage',
  description: 'Book a 30-45 minute Rapid Diagnosis call. You leave with a clear Fix Plan and next steps.'
})

const symptomLabels: Record<string, string> = {
  checkout: 'Slow checkout / cart abandonment',
  performance: 'Site is slow (Core Web Vitals failing)',
  errors: 'Random errors / broken features',
  admin: 'Admin dashboard is painfully slow',
  devops: 'Deployments / downtime / scaling',
  unknown: 'Not sure yet'
}
</script>

<template>
  <div class="py-20">
    <UContainer>
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">
            Book a Rapid Diagnosis
          </h1>
          <p class="text-zinc-400">
            30-45 minutes. You leave with a Fix Plan.
          </p>
        </div>

        <!-- Pre-selected symptom -->
        <div v-if="symptom" class="mb-8">
          <UCard>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-target" class="text-amber-500 size-5" />
              <div>
                <p class="text-sm text-zinc-500">Selected symptom</p>
                <p class="font-semibold">{{ symptomLabels[symptom] || symptom }}</p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Booking placeholder -->
        <UCard class="mb-8">
          <div class="text-center py-12">
            <UIcon name="i-lucide-calendar" class="size-16 text-zinc-600 mx-auto mb-4" />
            <h2 class="text-xl font-semibold mb-2">Booking Calendar</h2>
            <p class="text-zinc-500 mb-6">
              Cal.com embed or booking widget will go here.
            </p>
            <p class="text-sm text-zinc-600">
              For now, you can reach out directly at:
            </p>
            <p class="font-mono text-amber-500 mt-2">
              hello@webrebuildgarage.com
            </p>
          </div>
        </UCard>

        <!-- What to expect -->
        <div class="space-y-6">
          <h3 class="font-semibold text-lg">What happens next?</h3>

          <ol class="space-y-4">
            <li class="flex gap-4">
              <span class="shrink-0 w-8 h-8 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <p class="font-medium">You answer 6 quick questions</p>
                <p class="text-sm text-zinc-500">Symptoms, access level, urgency</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="shrink-0 w-8 h-8 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <p class="font-medium">We meet for 30-45 minutes</p>
                <p class="text-sm text-zinc-500">Live diagnosis, screen share, real answers</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="shrink-0 w-8 h-8 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <p class="font-medium">You leave with a Fix Plan</p>
                <p class="text-sm text-zinc-500">Clear priorities, timeline, and next steps</p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Trust line -->
        <p class="text-center text-sm text-zinc-500 mt-12">
          No pressure, no long contract to start. Just a clear diagnosis.
        </p>

        <!-- Debug info (remove in production) -->
        <div v-if="source" class="mt-8 text-xs text-zinc-600 text-center">
          Source: {{ source }}
        </div>
      </div>
    </UContainer>
  </div>
</template>
