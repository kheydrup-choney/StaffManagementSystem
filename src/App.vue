<template>
   <div class="d-flex flex-column flex-md-row justify-content-center border" style="height: 100vh;">
    <div class="col-12 col-md-3 text-center" style="background-color: #6089da;">
      <div class="m-4">
        <img src="https://shorter.me/905p0" alt="Bhutan National Medical Service logo"
          style="width: 7rem; border-radius: 50%;">
        <h6 class="text-white pt-5">National Medical Service</h6>
        <h6 class="text-white">SMS:Staff Monitoring System</h6>
      </div>

      <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      <div class="d-flex justify-content-center row">

        <!-- this is the side info tab active-->
        <div class="bg-white status-div mt-4"
          style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
          <div class="progress-div"
            style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s;background-color: #78E289">
          </div>
          <div class="d-flex px-5 pt-3" style="position: relative;">
            <img :src="Active" alt="Active" style="z-index: 1; width: 5rem;">
            <div class="d-flex row px-5">
              <h5>240</h5>
              <h6 style="z-index: 1;">Active</h6>
            </div>
          </div>
          <div class="progress-div-expanded"
            style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s; background-color: #78E289;">
          </div>
        </div>

        <!-- this is the side info tab for leave-->
        <div class="bg-white status-div mt-4"
          style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
          <div class="progress-div"
            style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s; background-color: #F97D80;">
          </div>
          <div class="d-flex px-5 pt-3" style="position: relative;">
            <img :src="Leave" alt="Active" style="z-index: 1;  width: 5rem;">
            <div class="d-flex row px-5">
              <h5>56</h5>
              <h6 style="z-index: 1;">Leave</h6>
            </div>
          </div>
          <div class="progress-div-expanded"
            style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s; background-color: #F97D80;">
          </div>
        </div>

        <!-- this is the side info tab training-->
        <div class="bg-white status-div mt-4"
          style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
          <div class="progress-div"
            style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s; background-color: #6FBEF8;">
          </div>
          <div class="d-flex px-5 pt-3" style="position: relative;">
            <img :src="Training" alt="Active" style="z-index: 1; width: 5rem;">
            <div class="d-flex row px-5">
              <h5>30</h5>
              <h6 style="z-index: 1;">Training</h6>
            </div>
          </div>
          <div class="progress-div-expanded"
            style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s; background-color: #6FBEF8;">
          </div>
        </div>

        <!-- this is the side info tab for event-->
        <div class="bg-white status-div mt-4"
          style="height: 5rem; width:20rem; border-radius: 1rem; position: relative;">
          <div class="progress-div"
            style="height: 5rem; width: 1rem; border-radius: 1rem; position: absolute; top: 0; left: 0; transition: width 0.3s; background-color:#F0EB7C;">
          </div>
          <div class="d-flex px-5 pt-3" style="position: relative;">
            <img :src="Event" alt="Active" style="z-index: 1; width: 5rem;">
            <div class="d-flex row px-5">
              <h5>60</h5>
              <h6 style="z-index: 1;">Event</h6>
            </div>
          </div>
          <div class="progress-div-expanded"
            style="height: 5rem; width: 0; border-radius: 1rem; position: absolute; top: 0; left: 1rem; transition: width 0.3s; background-color:#F0EB7C;">
          </div>
        </div>

      </div>
      <!-- this is for the log out and the small logo of pelden cholay nempar gyel -->
      <div class="d-flex align-items-center" style="padding-top: 6rem; padding-left: 4rem;">
        <img src="https://tinyurl.com/mu7ybe83" alt="" style="height: 3rem; width: auto; border-radius: 50%;">
        <div class="d-flex align-items-center" style="padding-left: 9rem;">
          <img :src="Logout" alt="logout" class="" style="height:3rem;">
          <p class="text-white">Logout</p>
        </div>
      </div>


    </div>

    <div class="col-12 col-md-9">
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
import Logout from '@/assets/logout.png';


</script>

<style>
.status-div:hover>.progress-div {
  width: 100% !important;
}
/* Responsive styles */
@media (max-width: 768px) {
 .status-div {
    width: 100%;
 }
}
</style>
