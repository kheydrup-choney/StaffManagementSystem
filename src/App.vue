<template>
  <div class="d-flex justify-content-center border" style="height: 100vh;">
    <div class="col-3 text-center" style="background-color: #6089da;">
      <div class="m-5">
        <img src="https://shorter.me/905p0" alt="Bhutan National Medical Service logo" style="width: 7rem;">
        <h6 class="text-white pt-5">National Medical Service</h6>
        <h6 class="text-white">SMS:Staff Monitoring System</h6>
      </div>
      <nav class="d-flex row">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div class="d-flex justify-content-center">
          <div class="bg-white" style="height: 5rem; width:20rem; border-radius: 1rem;">
            <img src="" alt="active icon">
          </div>
        </div>
      </nav>
    </div>

    <div class="col-9">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>
