<script setup lang="ts">
useSeoMeta({
  title: 'The Crew — Web Rebuild Garage',
  description: 'Meet the pit crew behind Web Rebuild Garage. Senior developers and DevOps specialists who fix broken websites.'
})

const crew = [
  {
    name: 'Lead Developer',
    role: 'Lead Diagnosis / Senior Web Dev',
    icon: 'i-lucide-user',
    bio: `10+ years building and fixing web systems. Started with PHP and WordPress, 
          now equally at home in modern JavaScript frameworks. Fast root-cause finder 
          who's seen every kind of site disaster.`,
    specialties: ['WordPress/WooCommerce', 'JavaScript/TypeScript', 'Performance Optimization', 'Database Tuning'],
    approach: `I lead every teardown, plan the sprint, and communicate clearly. 
               No jargon, no hiding behind technical excuses. 
               If something's broken, I'll tell you why and how we fix it.`
  },
  {
    name: 'Yanus',
    role: 'DevOps / Infrastructure Specialist',
    icon: 'i-lucide-terminal',
    bio: `Terminal wizard. The person you want when the problem isn't in the code — 
          it's in the infrastructure. Servers, scaling, monitoring, deployments. 
          Makes things solid.`,
    specialties: ['Linux/Server Administration', 'Docker & Containerization', 'CI/CD Pipelines', 'Monitoring & Observability'],
    approach: `When the issue isn't just code — when it's the server melting under load, 
               the deployment pipeline failing silently, or the monitoring that doesn't exist — 
               that's when I step in. I make infrastructure boring again (in a good way).`
  }
]
</script>

<template>
  <div class="py-20">
    <UContainer>
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-3xl lg:text-4xl font-bold mb-4">
          You're not hiring a freelancer
        </h1>
        <p class="text-2xl text-amber-500 mb-6">You're getting a pit crew.</p>
        <p class="text-zinc-400 max-w-2xl mx-auto">
          We don't pretend to be a one-person universe. Complex problems need complementary skills.
          That's why we work as a team.
        </p>
      </div>

      <!-- Crew Members -->
      <div class="space-y-16 mb-20">
        <div v-for="member in crew" :key="member.name" class="grid lg:grid-cols-3 gap-8 items-start">
          <!-- Photo/Avatar -->
          <div class="flex justify-center lg:justify-start">
            <div class="size-48 rounded-2xl bg-zinc-800 flex items-center justify-center">
              <UIcon :name="member.icon" class="size-24 text-amber-500" />
            </div>
          </div>

          <!-- Info -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold mb-1">{{ member.name }}</h2>
            <p class="text-amber-500 mb-4">{{ member.role }}</p>

            <p class="text-zinc-300 mb-6 text-lg leading-relaxed">
              {{ member.bio }}
            </p>

            <h3 class="font-semibold mb-3">Specialties</h3>
            <div class="flex flex-wrap gap-2 mb-6">
              <UBadge
                v-for="specialty in member.specialties"
                :key="specialty"
                color="neutral"
                variant="subtle"
              >
                {{ specialty }}
              </UBadge>
            </div>

            <h3 class="font-semibold mb-3">Approach</h3>
            <p class="text-zinc-400 leading-relaxed">
              {{ member.approach }}
            </p>
          </div>
        </div>
      </div>

      <!-- Philosophy Section -->
      <section class="bg-zinc-900 rounded-xl p-8 lg:p-12 mb-16">
        <h2 class="text-2xl font-bold mb-6 text-center">How we work together</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="size-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-message-circle" class="size-8 text-amber-500" />
            </div>
            <h3 class="font-semibold mb-2">Clear Communication</h3>
            <p class="text-zinc-400 text-sm">
              No jargon, no hiding behind technical excuses.
              You'll always know what's happening and why.
            </p>
          </div>

          <div class="text-center">
            <div class="size-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-users" class="size-8 text-amber-500" />
            </div>
            <h3 class="font-semibold mb-2">Right Person for the Job</h3>
            <p class="text-zinc-400 text-sm">
              Code problem? That's the lead dev.
              Server problem? That's Yanus.
              We match the skill to the task.
            </p>
          </div>

          <div class="text-center">
            <div class="size-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-lucide-zap" class="size-8 text-amber-500" />
            </div>
            <h3 class="font-semibold mb-2">Fast & Focused</h3>
            <p class="text-zinc-400 text-sm">
              We move quickly because we've seen these problems before.
              No wasted time. No scope creep.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to meet us?</h2>
        <p class="text-zinc-400 mb-8 max-w-xl mx-auto">
          Book a Rapid Diagnosis and experience the pit crew approach firsthand.
          30-45 minutes. Real diagnosis. Real plan.
        </p>
        <UButton to="/book" color="primary" size="xl">
          Book a Rapid Diagnosis
        </UButton>
      </section>
    </UContainer>
  </div>
</template>
