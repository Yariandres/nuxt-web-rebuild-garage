<script setup lang="ts">
defineProps<{
  label: string
  value: string
  trend?: 'up' | 'down' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
}>()

const trendColors = {
  up: 'text-emerald-500',
  down: 'text-red-500',
  neutral: 'text-zinc-400'
}

const trendIcons = {
  up: 'i-lucide-trending-up',
  down: 'i-lucide-trending-down',
  neutral: 'i-lucide-minus'
}

const sizeClasses = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-4'
}
</script>

<template>
  <div :class="['metric-chip text-center', sizeClasses[size || 'md']]">
    <p class="text-xs text-zinc-500 uppercase tracking-wider mb-1">
      {{ label }}
    </p>
    <div class="flex items-center justify-center gap-2">
      <UIcon
        v-if="trend"
        :name="trendIcons[trend]"
        :class="['size-4', trendColors[trend]]"
      />
      <p :class="['font-bold font-mono', size === 'lg' ? 'text-xl' : 'text-lg', trend ? trendColors[trend] : 'text-amber-500']">
        {{ value }}
      </p>
    </div>
  </div>
</template>
