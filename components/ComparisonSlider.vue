<script setup>
import { ref } from 'vue'

defineProps({
  beforeLabel: { type: String, default: 'Before' },
  afterLabel: { type: String, default: 'After' },
})

const position = ref(50)
const isDragging = ref(false)
const container = ref(null)

function updatePosition(clientX) {
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95)
  position.value = pct
}

function onPointerDown(e) {
  isDragging.value = true
  updatePosition(e.clientX)
  document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(e) {
  if (!isDragging.value) return
  e.preventDefault()
  updatePosition(e.clientX)
}

function onPointerUp() {
  isDragging.value = false
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
}
</script>

<template>
  <div
    ref="container"
    class="relative w-full h-72 rounded-xl overflow-hidden select-none border border-neutral-200 dark:border-neutral-700"
    @pointerdown="onPointerDown"
  >
    <!-- After layer (full background) -->
    <div class="absolute inset-0 flex items-center justify-center bg-neutral-950 text-neutral-100">
      <div class="text-center">
        <div class="text-3xl font-bold mb-2">Redesigned</div>
        <div class="opacity-60 text-sm">{{ afterLabel }}</div>
        <div class="mt-4 flex gap-3 justify-center">
          <div class="w-16 h-10 rounded-lg bg-violet-600"></div>
          <div class="w-16 h-10 rounded-lg bg-indigo-500"></div>
          <div class="w-16 h-10 rounded-lg bg-purple-400"></div>
        </div>
      </div>
    </div>

    <!-- Before layer (clipped) -->
    <div
      class="absolute inset-0 flex items-center justify-center bg-neutral-50 text-neutral-900"
      :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
    >
      <div class="text-center">
        <div class="text-3xl font-bold mb-2">Original</div>
        <div class="opacity-60 text-sm">{{ beforeLabel }}</div>
        <div class="mt-4 flex gap-3 justify-center">
          <div class="w-16 h-10 rounded-lg bg-neutral-400"></div>
          <div class="w-16 h-10 rounded-lg bg-neutral-500"></div>
          <div class="w-16 h-10 rounded-lg bg-neutral-600"></div>
        </div>
      </div>
    </div>

    <!-- Divider handle -->
    <div
      class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
      :style="{ left: `${position}%`, transform: 'translateX(-50%)' }"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-ew-resize">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L3 10L7 16" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13 4L17 10L13 16" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>
