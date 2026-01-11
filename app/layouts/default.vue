<script setup lang="ts">
const navItems = [
  [
    { label: 'Episodes', to: '/episodes' },
    { label: 'Services', to: '/services' },
    { label: 'The Crew', to: '/crew' },
    { label: 'FAQ', to: '/#faq' }
  ]
]
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Top Bar -->
    <div class="bg-amber-500 text-amber-950 py-2">
      <UContainer>
        <div class="flex items-center justify-center gap-2 text-sm flex-wrap">
          <UIcon name="i-lucide-alert-triangle" class="shrink-0" />
          <span><strong>Site acting weird?</strong> Slow checkout, random errors, broken tracking.</span>
          <NuxtLink to="/book" class="font-semibold underline hover:no-underline">
            Book a Rapid Diagnosis →
          </NuxtLink>
        </div>
      </UContainer>
    </div>

    <!-- Header -->
    <UHeader title="Web Rebuild Garage">
      <template #title>
        <UIcon name="i-lucide-wrench" class="text-amber-500 size-6" />
        <span>Web Rebuild Garage</span>
      </template>

      <template #center>
        <UNavigationMenu :items="navItems" class="hidden lg:flex" />
      </template>

      <template #right>
        <UButton
          to="/episodes"
          variant="ghost"
          class="hidden sm:inline-flex"
        >
          Watch latest episode
        </UButton>
        <UButton to="/book" color="primary">
          Book Rapid Diagnosis
        </UButton>
      </template>

      <!-- Mobile menu -->
      <template #body>
        <UNavigationMenu :items="navItems" orientation="vertical" />
      </template>
    </UHeader>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-zinc-800 py-12 mt-auto">
      <UContainer>
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-lucide-wrench" class="text-amber-500 size-5" />
              <span class="font-bold">Web Rebuild Garage</span>
            </div>
            <p class="text-zinc-400 text-sm max-w-md">
              We fix broken websites like rebuild channels fix wrecked supercars. 
              Teardown → Fix → Test Drive.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm text-zinc-400">
              <li><NuxtLink to="/episodes" class="hover:text-amber-500 transition-colors">Episodes</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-amber-500 transition-colors">Services</NuxtLink></li>
              <li><NuxtLink to="/crew" class="hover:text-amber-500 transition-colors">The Crew</NuxtLink></li>
              <li><NuxtLink to="/#faq" class="hover:text-amber-500 transition-colors">FAQ</NuxtLink></li>
            </ul>
          </div>

          <!-- CTA -->
          <div>
            <h4 class="font-semibold mb-4">Ready to fix your site?</h4>
            <UButton to="/book" color="primary" class="mb-4">
              Book Rapid Diagnosis
            </UButton>
            <p class="text-xs text-zinc-500">
              30-45 min. You leave with a Fix Plan.
            </p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>© {{ new Date().getFullYear() }} Web Rebuild Garage. All rights reserved.</p>
        </div>
      </UContainer>
    </footer>
  </div>
</template>
