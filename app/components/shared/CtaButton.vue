<script setup lang="ts">
defineProps<{
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  block?: boolean
  symptom?: string
  source?: string
}>()

// Build booking URL with query params
const buildBookingUrl = (symptom?: string, source?: string) => {
  const params = new URLSearchParams()
  if (symptom) params.set('symptom', symptom)
  if (source) params.set('source', source)
  const query = params.toString()
  return query ? `/book?${query}` : '/book'
}
</script>

<template>
  <UButton
    :to="to || buildBookingUrl(symptom, source)"
    :variant="variant === 'secondary' ? 'outline' : variant === 'ghost' ? 'ghost' : 'solid'"
    :color="variant === 'ghost' ? 'neutral' : 'primary'"
    :size="size || 'md'"
    :block="block"
  >
    <slot>Book Rapid Diagnosis</slot>
  </UButton>
</template>
