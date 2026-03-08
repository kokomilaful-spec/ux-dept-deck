<script setup>
import { ref } from 'vue'

const activeTab = ref('split')

const designTokens = [
  { name: '--color-primary', value: '#7c3aed', preview: 'bg-violet-600' },
  { name: '--radius-lg', value: '12px', preview: '' },
  { name: '--spacing-4', value: '16px', preview: '' },
  { name: '--font-semibold', value: '600', preview: '' },
]
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">
    <!-- Tab bar -->
    <div class="flex gap-1 p-1 rounded-t-xl bg-neutral-100 dark:bg-neutral-800">
      <button
        v-for="tab in ['split', 'code', 'design']"
        :key="tab"
        @click="activeTab = tab"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 capitalize"
        :class="activeTab === tab
          ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-sm'
          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'"
      >
        {{ tab === 'split' ? 'Code + Design' : tab }}
      </button>
    </div>

    <!-- Content -->
    <div
      class="border border-neutral-200 dark:border-neutral-700 border-t-0 rounded-b-xl overflow-hidden"
      :class="activeTab === 'split' ? 'grid grid-cols-2' : ''"
    >
      <!-- Code panel -->
      <div
        v-if="activeTab === 'split' || activeTab === 'code'"
        class="p-5 font-mono text-sm leading-relaxed bg-neutral-950 text-neutral-300 overflow-x-auto"
        :class="activeTab === 'split' ? 'border-r border-neutral-800' : ''"
      >
        <div class="flex items-center gap-2 mb-4 text-neutral-500 text-xs">
          <span class="w-3 h-3 rounded-full bg-red-500/60"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/60"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/60"></span>
          <span class="ml-2">Button.tsx</span>
        </div>
        <pre class="whitespace-pre"><span class="text-violet-400">&lt;Button</span>
  <span class="text-sky-300">variant</span>=<span class="text-emerald-400">"primary"</span>
  <span class="text-sky-300">size</span>=<span class="text-emerald-400">"lg"</span>
  <span class="text-sky-300">icon</span>={<span class="text-amber-300">&lt;ArrowRight /&gt;</span>}
  <span class="text-sky-300">onClick</span>={<span class="text-amber-300">handleSubmit</span>}
<span class="text-violet-400">&gt;</span>
  Get Started
<span class="text-violet-400">&lt;/Button&gt;</span></pre>
      </div>

      <!-- Design panel -->
      <div
        v-if="activeTab === 'split' || activeTab === 'design'"
        class="p-5 bg-neutral-50 dark:bg-neutral-900"
      >
        <div class="text-xs text-neutral-500 font-medium uppercase tracking-wide mb-4">Live Preview</div>
        <div class="mb-6 flex justify-center">
          <button class="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all duration-200 flex items-center gap-2">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="text-xs text-neutral-500 font-medium uppercase tracking-wide mb-3">Tokens</div>
        <div class="space-y-2">
          <div v-for="token in designTokens" :key="token.name" class="flex items-center justify-between text-sm">
            <code class="text-xs text-violet-600 dark:text-violet-400">{{ token.name }}</code>
            <div class="flex items-center gap-2">
              <div v-if="token.preview" class="w-4 h-4 rounded" :class="token.preview"></div>
              <span class="text-neutral-400 text-xs">{{ token.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
