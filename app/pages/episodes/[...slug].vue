<script setup lang="ts">
const route = useRoute()

// Get the episode content
const { data: episode } = await useAsyncData(`episode-${route.path}`, () =>
  queryCollection('episodes')
    .path(route.path)
    .first()
)

// Handle 404
if (!episode.value) {
  throw createError({
    statusCode: 404,
    message: 'Episode not found'
  })
}

// SEO
useSeoMeta({
  title: `${episode.value.title} — Episode #${episode.value.number} — Web Rebuild Garage`,
  description: episode.value.description || episode.value.symptom
})

// Format metrics for display
const hasMetrics = computed(() => {
  return episode.value?.metrics?.before && episode.value?.metrics?.after
})

const metricRows = computed(() => {
  if (!hasMetrics.value) return []

  const before = episode.value!.metrics!.before!
  const after = episode.value!.metrics!.after!

  return Object.keys(before).map(key => ({
    label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    before: before[key],
    after: after[key]
  }))
})
</script>

<template>
  <div v-if="episode" class="py-12">
    <UContainer>
      <!-- Back link -->
      <NuxtLink
        to="/episodes"
        class="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-colors mb-8"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" />
        All Episodes
      </NuxtLink>

      <!-- Episode Header -->
      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <UBadge color="primary" size="lg">Episode #{{ episode.number }}</UBadge>
          <UBadge v-if="episode.stack" color="neutral" variant="subtle">
            {{ episode.stack }}
          </UBadge>
          <UBadge v-if="episode.severity" :color="episode.severity === 'revenue-leak' ? 'red' : 'yellow'" variant="subtle">
            {{ episode.severity }}
          </UBadge>
        </div>

        <h1 class="text-3xl lg:text-4xl font-bold mb-4">
          {{ episode.title }}
        </h1>

        <p v-if="episode.description" class="text-lg text-zinc-400 mb-6 max-w-3xl">
          {{ episode.description }}
        </p>

        <!-- Quick stats -->
        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <UCard>
            <p class="text-xs text-zinc-500 uppercase tracking-wider mb-1">Symptom</p>
            <p class="font-medium text-red-400">{{ episode.symptom }}</p>
          </UCard>
          <UCard v-if="episode.rootCause">
            <p class="text-xs text-zinc-500 uppercase tracking-wider mb-1">Root Cause</p>
            <p class="font-medium text-amber-400">{{ episode.rootCause }}</p>
          </UCard>
          <UCard>
            <p class="text-xs text-zinc-500 uppercase tracking-wider mb-1">Result</p>
            <p class="font-medium text-emerald-400">{{ episode.result }}</p>
          </UCard>
        </div>

        <!-- Metrics table -->
        <div v-if="hasMetrics" class="mb-8">
          <h2 class="text-lg font-semibold mb-4">Before / After Metrics</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-zinc-800">
                  <th class="py-3 px-4 text-zinc-500 font-medium">Metric</th>
                  <th class="py-3 px-4 text-red-400 font-medium">Before</th>
                  <th class="py-3 px-4 text-emerald-400 font-medium">After</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in metricRows" :key="row.label" class="border-b border-zinc-800/50">
                  <td class="py-3 px-4 text-zinc-300">{{ row.label }}</td>
                  <td class="py-3 px-4 font-mono text-red-400">{{ row.before }}</td>
                  <td class="py-3 px-4 font-mono text-emerald-400">{{ row.after }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="episode.tags && episode.tags.length" class="flex flex-wrap gap-2">
          <UBadge v-for="tag in episode.tags" :key="tag" color="neutral" variant="outline">
            {{ tag }}
          </UBadge>
        </div>
      </header>

      <!-- Episode Content -->
      <article class="prose prose-invert prose-amber max-w-none mb-16">
        <ContentRenderer :value="episode" />
      </article>

      <!-- CTA -->
      <div class="border-t border-zinc-800 pt-12">
        <UCard class="bg-zinc-900">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-1 text-center sm:text-left">
              <h3 class="text-xl font-bold mb-2">Experiencing similar symptoms?</h3>
              <p class="text-zinc-400">
                Let's diagnose your site and build a Fix Plan.
              </p>
            </div>
            <UButton
              to="/book"
              color="primary"
              size="lg"
            >
              Book a Rapid Diagnosis
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- Navigation -->
      <nav class="flex justify-between items-center mt-12 pt-8 border-t border-zinc-800">
        <NuxtLink
          to="/episodes"
          class="flex items-center gap-2 text-zinc-500 hover:text-amber-500 transition-colors"
        >
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          All Episodes
        </NuxtLink>
      </nav>
    </UContainer>
  </div>
</template>

<style>
/* Prose customization for episode content */
.prose h2 {
  color: rgb(245 158 11); /* amber-500 */
  border-bottom: 1px solid rgb(39 39 42); /* zinc-800 */
  padding-bottom: 0.5rem;
}

.prose h3 {
  color: rgb(228 228 231); /* zinc-200 */
}

.prose strong {
  color: rgb(244 244 245); /* zinc-100 */
}

.prose code {
  background-color: rgb(39 39 42); /* zinc-800 */
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  color: rgb(251 191 36); /* amber-400 */
}

.prose pre {
  background-color: rgb(24 24 27); /* zinc-900 */
  border: 1px solid rgb(39 39 42); /* zinc-800 */
}

.prose table {
  border-collapse: collapse;
}

.prose th {
  background-color: rgb(39 39 42); /* zinc-800 */
  color: rgb(212 212 216); /* zinc-300 */
}

.prose td, .prose th {
  border: 1px solid rgb(63 63 70); /* zinc-700 */
  padding: 0.5rem 1rem;
}

.prose a {
  color: rgb(245 158 11); /* amber-500 */
}

.prose a:hover {
  color: rgb(251 191 36); /* amber-400 */
}
</style>
