export default defineAppConfig({
  // Nuxt UI 4 Theme Configuration
  // Garage/Industrial Aesthetic
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc'
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },
    card: {
      slots: {
        root: 'bg-zinc-900 border-zinc-800'
      }
    }
  }
})
