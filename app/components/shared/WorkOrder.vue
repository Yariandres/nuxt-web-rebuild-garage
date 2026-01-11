<script setup lang="ts">
interface WorkOrderItem {
  label: string
  value: string
  status?: 'pending' | 'in-progress' | 'success' | 'error'
}

defineProps<{
  items: WorkOrderItem[]
  title?: string
}>()

const statusColors: Record<string, string> = {
  'pending': 'text-zinc-400',
  'in-progress': 'text-amber-500',
  'success': 'text-emerald-500',
  'error': 'text-red-500'
}

const statusIcons: Record<string, string> = {
  'pending': 'i-lucide-circle-dashed',
  'in-progress': 'i-lucide-loader-2',
  'success': 'i-lucide-check-circle-2',
  'error': 'i-lucide-x-circle'
}
</script>

<template>
  <div class="work-order bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
    <!-- Header -->
    <div class="bg-zinc-800 border-b border-zinc-700 px-4 py-3 flex items-center gap-2">
      <UIcon name="i-lucide-clipboard-list" class="text-amber-500" />
      <span class="font-mono text-sm font-semibold uppercase tracking-wider">
        {{ title || 'Work Order' }}
      </span>
      <span class="ml-auto text-xs text-zinc-500 font-mono">
        #{{ Math.floor(Math.random() * 9000) + 1000 }}
      </span>
    </div>

    <!-- Items -->
    <div class="divide-y divide-zinc-800">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="px-4 py-3 flex items-start gap-3"
      >
        <!-- Status icon -->
        <UIcon
          v-if="item.status"
          :name="statusIcons[item.status]"
          :class="[statusColors[item.status], 'shrink-0 mt-0.5', item.status === 'in-progress' ? 'animate-spin' : '']"
        />
        <div v-else class="w-4" />

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <div class="work-order-label mb-1">{{ item.label }}</div>
          <div class="work-order-value font-mono">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
