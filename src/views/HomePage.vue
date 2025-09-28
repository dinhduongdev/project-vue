<template>
  <div>
    <Navbar />
    <HeroBanner />
    <ProductSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue';
import Navbar from '../components/AppNavbar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import ProductSection from '../components/ProductSection.vue'
</script>
