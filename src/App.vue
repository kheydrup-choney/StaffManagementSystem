<template>
  <div class="d-flex justify-content-center border" style="height: 100vh;">
    <div class="col-3 text-center" style="background-color: #6089da;">
      <div class="m-5">
        <img src="https://shorter.me/905p0" alt="Bhutan National Medical Service logo" style="width: 7rem;">
        <h6 class="text-white pt-5">National Medical Service</h6>
        <h6 class="text-white">SMS:Staff Monitoring System</h6>
      </div>
      <nav class="d-flex row">
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <div class="d-flex justify-content-center row">

          <!-- this is the side info tab -->
          
          <div class="bg-white status-div mt-5" style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
            <div class="bg-success progress-div"
              style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s;">
            </div>
            <div class="d-flex px-5S pt-3" style="position: relative;">
              <img :src="Active" alt="Active" style="z-index: 1;">
              <div class="d-flex row px-5">
                <h5>240</h5>
                <h6 style="z-index: 1;">Active</h6>
              </div>
            </div>
              <div class="bg-success progress-div-expanded" 
              style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s;">
            </div>
          </div>

          <!-- this is the side info tab for active-->
          <div class="bg-white status-div mt-5" style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
            <div class="bg-danger progress-div"
              style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s;">
            </div>
            <div class="d-flex px-5S pt-3" style="position: relative;">
              <img :src="Leave" alt="Active" style="z-index: 1;">
              <div class="d-flex row px-5">
                <h5>56</h5>
                <h6 style="z-index: 1;">Leave</h6>
              </div>
            </div>
              <div class="bg-danger progress-div-expanded" 
              style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s;">
            </div>
          </div>

          <!-- this is the side info tab leave-->
          <div class="bg-white status-div mt-5" style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
            <div class="bg-primary progress-div"
              style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s;">
            </div>
            <div class="d-flex px-5S pt-3" style="position: relative;">
              <img :src="Training" alt="Active" style="z-index: 1;">
              <div class="d-flex row px-5">
                <h5>30</h5>
                <h6 style="z-index: 1;">Training</h6>
              </div>
            </div>
              <div class="bg-primary progress-div-expanded" 
              style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s;">
            </div>
          </div>

          <!-- this is the side info tab -->
          <div class="bg-white status-div mt-5" style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
            <div class="bg-warning progress-div"
              style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s;">
            </div>
            <div class="d-flex px-5S pt-3" style="position: relative;">
              <img :src="Event" alt="Active" style="z-index: 1;">
              <div class="d-flex row px-5">
                <h5>60</h5>
                <h6 style="z-index: 1;">Event</h6>
              </div>
            </div>
              <div class="bg-warning progress-div-expanded" 
              style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s;">
            </div>
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
import Active from '@/assets/active.png';
import Leave from '@/assets/leave.png';
import Training from '@/assets/training.png';
import Event from '@/assets/events.png';


</script>

<style>
.status-div:hover>.progress-div {
  width: 20rem !important;
}
</style>
