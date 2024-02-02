<template>
  <header>
    <nav>
      <div class="logo"><span>DWE</span></div>
      <ul>
        <li v-for="nav in navList">
          <nuxt-link :to="nav.url">{{ nav.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navList = ref([
  { name: "Home", url: "/" },
  { name: "Services", url: "#services" },
  { name: "About", url: "about" },
  { name: "Contact", url: "#contact" },
])
</script>
