<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="relative inline-flex items-center w-20 h-10 rounded-full transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
    :class="isDark ? 'bg-neutral-700' : 'bg-neutral-200'"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span
      class="absolute w-8 h-8 rounded-full shadow-md transition-all duration-500 flex items-center justify-center text-base"
      :class="isDark
        ? 'translate-x-11 bg-neutral-900'
        : 'translate-x-1 bg-white'"
    >
      <span v-if="isDark">&#x1F319;</span>
      <span v-else>&#x2600;&#xFE0F;</span>
    </span>
    <span
      class="absolute left-2.5 text-xs font-medium transition-opacity duration-300"
      :class="isDark ? 'opacity-0' : 'opacity-60'"
    >Light</span>
    <span
      class="absolute right-2.5 text-xs font-medium transition-opacity duration-300 text-neutral-300"
      :class="isDark ? 'opacity-60' : 'opacity-0'"
    >Dark</span>
  </button>
</template>
