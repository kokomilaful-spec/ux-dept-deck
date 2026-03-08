import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-white text-neutral-900 dark:(bg-neutral-950 text-neutral-100)',
    'bg-surface': 'bg-neutral-50 dark:bg-neutral-900',
    'bg-surface-alt': 'bg-neutral-100 dark:bg-neutral-800',
    'text-muted': 'text-neutral-500 dark:text-neutral-400',
    'text-accent': 'text-violet-600 dark:text-violet-400',
    'border-subtle': 'border-neutral-200 dark:border-neutral-700',
    'accent-gradient': 'bg-gradient-to-r from-violet-600 to-indigo-600',
  },
})
