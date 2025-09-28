<template>
  <section class="product-section">
    <div v-for="product in products" :key="product.id" class="product-card">
      <div class="card-fav" title="Add to wishlist">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </div>
      
      <div class="card-img-wrapper">
         <img :src="product.image" :alt="product.name" class="card-img" />
      </div>

      <div class="card-category">{{ product.category || 'New Arrival' }}</div>
      <h3 class="card-title">{{ product.name }}</h3>

      <div class="card-price-wrapper">
        <span class="card-price">${{ product.price }}</span>
        <span v-if="product.oldPrice" class="card-price-old">${{ product.oldPrice }}</span>
      </div>

      <div class="card-details-hover">
        <div class="card-colors">
          <span
            v-for="color in product.colors"
            :key="color"
            class="color-swatch"
            :style="{ backgroundColor: color }"
          ></span>
        </div>
        <button class="card-btn" @click="goToDetail(product.id)">Buy Now</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  category?: string
  colors: string[]
}

const router = useRouter()


const products = ref<Product[]>([])


fetch('/src/assets/products.json')
  .then((res) => res.json())
  .then((data: Product[]) => {
    products.value = data
  })

function goToDetail(id: string) {
  router.push(`/product/${id}`)
}
</script>

<style scoped>
.product-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 3rem;
  background-color: #f8f9fa;
}

.product-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-fav {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #adb5bd;
  cursor: pointer;
  transition: color 0.3s ease;
}

.card-fav:hover {
  color: #ef4444;
}

.card-img-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.product-card:hover .card-img {
  transform: scale(1.08);
}

.card-category {
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  min-height: 52px;
}

.card-price-wrapper {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.card-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: #343a40;
}

.card-price-old {
  font-size: 1rem;
  color: #adb5bd;
  text-decoration: line-through;
}

.card-details-hover {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: 0.05s;
}

.product-card:hover .card-details-hover {
  opacity: 1;
  transform: translateY(0);
}

.card-colors {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.color-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.card-btn {
  background: linear-gradient(45deg, #343a40, #111);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 0;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>