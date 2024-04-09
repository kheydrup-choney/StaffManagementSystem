<template>
  <div class="container">
    <div class="p-5">
      <h3 class="text-muted">MANAGERIAL DASHBOARD</h3>
    </div>
    <div class="d-flex justify-content-start ps-5">
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle mx-3" type="button" id="dailyDropdown" data-bs-toggle="dropdown"
          aria-expanded="false">
          {{ selectedDailyOption }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dailyDropdown">
          <li><a class="dropdown-item" href="#" @click="selectDailyOption('Daily')">Daily</a></li>
          <li><a class="dropdown-item" href="#" @click="selectDailyOption('Monthly')">Monthly</a></li>
          <li><a class="dropdown-item" href="#" @click="selectDailyOption('Yearly')">Yearly</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle mx-3" type="button" id="regionDropdown" data-bs-toggle="dropdown"
          aria-expanded="false">
          {{ selectedRegionOption }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="regionDropdown">
          <li><a class="dropdown-item" href="#" @click="selectRegionOption('Region 1')">Region 1</a></li>
          <li><a class="dropdown-item" href="#" @click="selectRegionOption('Region 2')">Region 2</a></li>
          <li><a class="dropdown-item" href="#" @click="selectRegionOption('Region 3')">Region 3</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle mx-3" type="button" id="hospitalDropdown"
          data-bs-toggle="dropdown" aria-expanded="false">
          {{ selectedHospitalOption }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="hospitalDropdown">
          <li><a class="dropdown-item" href="#" @click="selectHospitalOption('Hospital 1')">Hospital 1</a></li>
          <li><a class="dropdown-item" href="#" @click="selectHospitalOption('Hospital 2')">Hospital 2</a></li>
          <li><a class="dropdown-item" href="#" @click="selectHospitalOption('Hospital 3')">Hospital 3</a></li>
          <li><a class="dropdown-item" href="#" @click="selectHospitalOption('Hospital 4')">Hospital 4</a></li>
          <li><a class="dropdown-item" href="#" @click="selectHospitalOption('Hospital 5')">Hospital 5</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const selectedDailyOption = ref('Daily');
    const selectedRegionOption = ref('Region 1');
    const selectedHospitalOption = ref('Hospital 1');

    function selectDailyOption(option: string) {
      selectedDailyOption.value = option;
    }

    function selectRegionOption(option: string) {
      selectedRegionOption.value = option;
    }

    function selectHospitalOption(option: string) {
      selectedHospitalOption.value = option;
    }

    return {
      selectedDailyOption,
      selectedRegionOption,
      selectedHospitalOption,
      selectDailyOption,
      selectRegionOption,
      selectHospitalOption,
    };
  },
};
</script>