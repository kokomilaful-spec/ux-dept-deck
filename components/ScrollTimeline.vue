<script setup>
import { ref, onMounted } from 'vue'

const steps = [
  { phase: 'Discovery', desc: 'Stakeholder interviews & problem framing', icon: '&#x1F50D;' },
  { phase: 'Research', desc: 'User interviews, surveys & data analysis', icon: '&#x1F4CA;' },
  { phase: 'Ideate', desc: 'Workshops, sketching & concept exploration', icon: '&#x1F4A1;' },
  { phase: 'Prototype', desc: 'Interactive prototypes & design specs', icon: '&#x2B50;' },
  { phase: 'Test', desc: 'Usability testing & iteration cycles', icon: '&#x1F9EA;' },
  { phase: 'Ship', desc: 'Dev handoff, QA & launch monitoring', icon: '&#x1F680;' },
]

const visible = ref(new Set())
const animated = ref(false)

onMounted(() => {
  setTimeout(() => { animated.value = true }, 300)
  steps.forEach((_, i) => {
    setTimeout(() => {
      visible.value = new Set([...visible.value, i])
    }, 600 + i * 350)
  })
})
</script>

<template>
  <div class="relative w-full max-w-sm mx-auto py-2">
    <!-- Vertical connecting line -->
    <div class="absolute left-6 top-8 bottom-8 w-px">
      <div
        class="w-full bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full"
        :style="{
          height: animated ? '100%' : '0%',
          transition: 'height 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      ></div>
    </div>

    <!-- Timeline nodes -->
    <div class="space-y-5">
      <div
        v-for="(step, i) in steps"
        :key="step.phase"
        class="relative flex items-start gap-4 pl-2"
        :style="{
          opacity: visible.has(i) ? 1 : 0,
          transform: visible.has(i) ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }"
      >
        <div
          class="relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-sm shrink-0 transition-all duration-500"
          :class="visible.has(i)
            ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
            : 'bg-neutral-200 dark:bg-neutral-700'"
          :style="visible.has(i) && i === steps.length - 1
            ? 'animation: pulse-dot 2s ease-in-out infinite'
            : ''"
        >
          <span v-html="step.icon"></span>
        </div>
        <div class="pt-1.5">
          <div class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{{ step.phase }}</div>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{{ step.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
