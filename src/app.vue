<template>
  <div>
    <NuxtLayout>
      <!-- <Header /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import "./style/style.css";

useSeoMeta({
  title: 'Diamond Wealth Enterprise',
  ogTitle: 'Official website of Diamond Wealth Enterprise',
  description: 'Official website of Diamond Wealth Enterprise',
  ogDescription: 'Official website of Diamond Wealth Enterprise',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
