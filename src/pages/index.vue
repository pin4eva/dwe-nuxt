<template>
  <div id="home">
    <div class="banner bg-primary">
      <div class="container">
        <Header />

        <div class="banner-inner grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="banner-inner_text">
            <div class="max-w-[500px]">
              <h1 class="text-3xl md:text-5xl">
                Your Path to Financial Freedom
              </h1>

              <p class="my-5 text-2xl">Be in control of your money, track your spending effortlessly, and get to your
                financial
                goals. Start
                saving smarter today.</p>

              <button class="btn btn-success">Chat with us</button>
            </div>
          </div>
          <div class="banner-inner_image">Image 3</div>
        </div>
      </div>
    </div>
  </div>

  <h1>Hello Home page</h1>
</template>

<style>
.banner {
  color: white;
  height: 70vh;
  display: grid;
  grid-template-rows: 10vh auto;

  .banner-inner {
    align-items: center;
    background-color: red;

    h1 {
      font-weight: 700;
      line-height: 72px;
    }
  }


}
</style>

<script setup>
import Header from "../components/Header.vue";
</script>
