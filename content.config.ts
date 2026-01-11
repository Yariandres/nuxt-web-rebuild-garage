import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Default content collection for pages
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),

    // Episodes collection for case studies
    episodes: defineCollection({
      type: 'page',
      source: 'episodes/**/*.md',
      schema: z.object({
        // Basic info
        title: z.string(),
        number: z.number(),
        description: z.string().optional(),

        // Problem/Solution
        symptom: z.string(),
        rootCause: z.string().optional(),
        result: z.string(),

        // Categorization
        stack: z.enum(['woocommerce', 'wordpress', 'javascript', 'nuxt', 'react', 'vue', 'other']).default('other'),
        tags: z.array(z.string()).default([]),
        severity: z.enum(['revenue-leak', 'ux-pain', 'stability-risk', 'security']).optional(),

        // Team
        crew: z.array(z.string()).default(['you']),

        // Media
        youtubeId: z.string().optional(),
        thumbnail: z.string().default('/episodes/default-thumb.jpg'),

        // Dates
        publishedAt: z.string(),

        // Metrics (before/after)
        metrics: z.object({
          before: z.record(z.string()).optional(),
          after: z.record(z.string()).optional()
        }).optional(),

        // SEO
        ogImage: z.string().optional()
      })
    })
  }
})
