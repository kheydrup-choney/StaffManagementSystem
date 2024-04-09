<template>
  <div>
    <h4 class="text-muted d-flex justify-content-center p-4">Daily Staff Analysis</h4>

    <div class="chart-container" ref="chartContainer">
      <canvas ref="myChart"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale);

const chartData = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
  datasets: [
    {
      label: 'Active',
      backgroundColor: '#78E289',
      data: [400, 350, 300, 380, 420, 450, 400, 380, 360, 340, 400, 420, 400, 380, 360]
    },
    {
      label: 'Leave',
      backgroundColor: '#F97D80',
      data: [100, 150, 200, 120, 80, 100, 150, 200, 120, 80, 100, 150, 200, 120, 80]
    },
    {
      label: 'Training',
      backgroundColor: '#6FBEF8',
      data: [50, 80, 70, 60, 90, 50, 80, 70, 60, 90, 50, 80, 70, 60, 90]
    },
    {
      label: 'Events',
      backgroundColor: '#F0EB7C',
      data: [30, 40, 20, 50, 10, 30, 40, 20, 50, 10, 30, 40, 20, 50, 10]
    }
  ]
};

const chartOptions = {
  responsive: true,
  indexAxis: 'x',
  scales: {
    x: {
      stacked: false,
      ticks: {
        beginAtZero: false,
        callback: (value: number) => {
          return value.toString();
        }
      },
      title: {
        display: true,
        text: 'March'
      }
    },
    y: {
      stacked: false,
      max: 1000,
      ticks: {
        beginAtZero: false,
        maxTicksLimit: 10,
        callback: (value: number) => {
          return value.toString();
        }
      },
      title: {
        display: true,
        text: 'Number of staff'
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
    },
  },
};

const chartContainer = ref<HTMLElement | null>(null);
const myChart = ref<Chart | null>(null);

onMounted(() => {
  if (chartContainer.value) {
    const ctx = chartContainer.value.querySelector('canvas');
    if (ctx) {
      myChart.value = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
      });
    }
  }
});

</script>

<style scoped>
.chart-container {
  overflow-x: auto;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;  /* Prevents line breaks */
}
</style>
