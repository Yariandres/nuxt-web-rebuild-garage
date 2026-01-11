<script setup lang="ts">
useSeoMeta({
  title: 'Episodes — Web Rebuild Garage',
  description: 'Real website rescues, real fixes. Watch our teardown episodes and see before/after results.'
})

// Query episodes from Nuxt Content
const { data: episodes } = await useAsyncData('episodes', () =>
  queryCollection('episodes')
    .order('number', 'DESC')
    .all()
)
</script>

<template>
  <div class="py-20">
    <UContainer>
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">
          Episodes: real rescues, real fixes
        </h1>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          Some client details are anonymized — the process is always real.
          Watch the teardown, see the metrics, learn the lessons.
        </p>
      </div>

      <!-- Episodes Grid -->
      <div v-if="episodes && episodes.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <NuxtLink
          v-for="episode in episodes"
          :key="episode.path"
          :to="episode.path"
          class="group"
        >
          <UCard class="h-full hover:border-amber-500/50 transition-colors">
            <!-- Thumbnail placeholder -->
            <template #header>
              <div class="aspect-video bg-zinc-800 rounded flex items-center justify-center">
                <div class="text-center">
                  <UIcon name="i-lucide-play-circle" class="size-12 text-zinc-600 group-hover:text-amber-500 transition-colors" />
                  <p class="text-xs text-zinc-600 mt-2 font-mono">Episode #{{ episode.number }}</p>
                </div>
              </div>
            </template>

            <div class="space-y-3">
              <!-- Badge -->
              <div class="flex items-center gap-2">
                <UBadge color="neutral" variant="subtle">
                  Episode #{{ episode.number }}
                </UBadge>
                <UBadge v-if="episode.stack" color="primary" variant="subtle">
                  {{ episode.stack }}
                </UBadge>
              </div>

              <!-- Title -->
              <h2 class="font-semibold text-lg group-hover:text-amber-500 transition-colors">
                {{ episode.title }}
              </h2>

              <!-- Symptom & Result -->
              <div class="space-y-1 text-sm">
                <p class="text-zinc-500">
                  <strong class="text-zinc-400">Symptom:</strong> {{ episode.symptom }}
                </p>
                <p class="text-zinc-500">
                  <strong class="text-emerald-500">Result:</strong> {{ episode.result }}
                </p>
              </div>
            </div>

            <template #footer>
              <div class="flex gap-2">
                <UButton size="sm" variant="ghost" tabindex="-1">
                  <UIcon name="i-lucide-book-open" class="size-4" />
                  Read teardown
                </UButton>
              </div>
            </template>
          </UCard>
        </NuxtLink>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20">
        <UIcon name="i-lucide-film" class="size-16 text-zinc-600 mx-auto mb-4" />
        <h2 class="text-xl font-semibold mb-2">Episodes coming soon</h2>
        <p class="text-zinc-500 mb-6">
          We're documenting our first case studies. Check back soon!
        </p>
        <UButton to="/" variant="outline">
          Back to home
        </UButton>
      </div>

      <!-- CTA -->
      <div v-if="episodes && episodes.length > 0" class="text-center">
        <p class="text-zinc-500 mb-4">
          Got a site that needs a teardown?
        </p>
        <UButton to="/book" color="primary" size="lg">
          Book a Rapid Diagnosis
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
