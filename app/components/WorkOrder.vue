<script setup lang="ts">
interface WorkOrderItem {
  label: string
  value: string
  status?: 'pending' | 'in-progress' | 'success' | 'error'
}

const props = defineProps<{
  items: WorkOrderItem[]
  title?: string
  orderNumber?: string
}>()

// Generate a stable order number based on title or use provided one
const displayOrderNumber = computed(() => {
  if (props.orderNumber) return props.orderNumber
  // Generate a pseudo-random but stable number based on title
  const seed = props.title?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 1234
  return String(seed % 9000 + 1000)
})

const statusConfig: Record<string, { color: string; icon: string; bg: string }> = {
  'pending': {
    color: 'text-zinc-400',
    icon: 'i-lucide-circle-dashed',
    bg: 'bg-zinc-400/10'
  },
  'in-progress': {
    color: 'text-amber-500',
    icon: 'i-lucide-loader-2',
    bg: 'bg-amber-500/10'
  },
  'success': {
    color: 'text-emerald-500',
    icon: 'i-lucide-check-circle-2',
    bg: 'bg-emerald-500/10'
  },
  'error': {
    color: 'text-red-500',
    icon: 'i-lucide-x-circle',
    bg: 'bg-red-500/10'
  }
}
</script>

<template>
  <div class="work-order-card">
    <!-- Header with "torn paper" effect -->
    <div class="work-order-header">
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-clipboard-list" class="text-amber-500 size-5" />
        <span class="font-mono text-sm font-bold uppercase tracking-widest text-zinc-100">
          {{ title || 'Work Order' }}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-zinc-500 font-mono">#{{ displayOrderNumber }}</span>
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    </div>

    <!-- Items list -->
    <div class="work-order-body">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="work-order-item"
        :class="item.status ? statusConfig[item.status].bg : ''"
      >
        <!-- Status indicator -->
        <div class="flex items-center gap-3 flex-1">
          <div
            v-if="item.status"
            class="shrink-0 size-8 rounded-full flex items-center justify-center"
            :class="statusConfig[item.status].bg"
          >
            <UIcon
              :name="statusConfig[item.status].icon"
              :class="[
                statusConfig[item.status].color,
                'size-5',
                item.status === 'in-progress' ? 'animate-spin' : ''
              ]"
            />
          </div>
          <div v-else class="shrink-0 size-8" />

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="text-[10px] uppercase tracking-widest text-zinc-500 mb-0.5">
              {{ item.label }}
            </div>
            <div class="font-mono text-sm text-zinc-200">
              {{ item.value }}
            </div>
          </div>
        </div>

        <!-- Decorative dots -->
        <div class="hidden sm:flex gap-1">
          <div class="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div class="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <div class="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>

    <!-- Footer with timestamp -->
    <div class="work-order-footer">
      <div class="flex items-center gap-2 text-xs text-zinc-500">
        <UIcon name="i-lucide-clock" class="size-3" />
        <span class="font-mono">Last updated: Just now</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="text-xs text-zinc-600">WRG</span>
        <UIcon name="i-lucide-wrench" class="text-amber-500/50 size-4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-order-card {
  background: linear-gradient(180deg, rgb(39 39 42) 0%, rgb(24 24 27) 100%);
  border: 1px solid rgb(63 63 70);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 
    0 4px 6px -1px rgb(0 0 0 / 0.3),
    0 2px 4px -2px rgb(0 0 0 / 0.3),
    inset 0 1px 0 rgb(255 255 255 / 0.05);
}

.work-order-header {
  background: linear-gradient(180deg, rgb(63 63 70) 0%, rgb(39 39 42) 100%);
  border-bottom: 1px solid rgb(63 63 70);
  padding: 0.875rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.work-order-body {
  padding: 0.5rem;
}

.work-order-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.25rem;
  transition: background-color 0.2s;
}

.work-order-item:last-child {
  margin-bottom: 0;
}

.work-order-item:hover {
  background-color: rgb(255 255 255 / 0.02);
}

.work-order-footer {
  background: rgb(24 24 27);
  border-top: 1px solid rgb(39 39 42);
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Subtle paper texture effect */
.work-order-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
}
</style>
