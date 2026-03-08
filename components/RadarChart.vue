<script setup>
import { ref, watch, computed } from 'vue'
import { useDark } from '@vueuse/core'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const isDark = useDark()

const data = computed(() => ({
  labels: ['Research', 'Visual Design', 'Interaction', 'Strategy', 'Prototyping', 'Systems Thinking'],
  datasets: [
    {
      label: 'Current Team',
      data: [85, 78, 90, 72, 88, 80],
      fill: true,
      backgroundColor: 'rgba(124, 58, 237, 0.15)',
      borderColor: 'rgba(124, 58, 237, 0.8)',
      pointBackgroundColor: 'rgba(124, 58, 237, 1)',
      pointBorderColor: isDark.value ? '#171717' : '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 2,
    },
    {
      label: 'Ideal Profile',
      data: [90, 85, 85, 90, 80, 92],
      fill: true,
      backgroundColor: 'rgba(99, 102, 241, 0.08)',
      borderColor: 'rgba(99, 102, 241, 0.4)',
      pointBackgroundColor: 'rgba(99, 102, 241, 0.6)',
      pointBorderColor: isDark.value ? '#171717' : '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 7,
      borderWidth: 1.5,
      borderDash: [6, 3],
    },
  ],
}))

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: isDark.value ? '#a3a3a3' : '#525252',
        font: { family: 'Inter, system-ui, sans-serif', size: 12 },
        padding: 20,
        usePointStyle: true,
        pointStyleWidth: 10,
      },
    },
    tooltip: {
      backgroundColor: isDark.value ? '#262626' : '#fff',
      titleColor: isDark.value ? '#e5e5e5' : '#171717',
      bodyColor: isDark.value ? '#a3a3a3' : '#525252',
      borderColor: isDark.value ? '#404040' : '#e5e5e5',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 8,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: { stepSize: 20, display: false },
      grid: { color: isDark.value ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' },
      angleLines: { color: isDark.value ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' },
      pointLabels: {
        color: isDark.value ? '#a3a3a3' : '#525252',
        font: { family: 'Inter, system-ui, sans-serif', size: 13, weight: '500' },
        padding: 16,
      },
    },
  },
}))

const chartKey = ref(0)
watch(isDark, () => { chartKey.value++ })
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <Radar :key="chartKey" :data="data" :options="options" />
  </div>
</template>
