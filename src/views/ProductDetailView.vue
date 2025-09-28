<template>
  <AppNavbar />
  <div v-if="product" class="product-detail-container">
    <div class="product-detail">
      <div class="product-detail__images">
        <div class="main-image-wrapper">
          <img :src="activeImage" :alt="product.name" class="main-image" />
        </div>
        <div class="thumbnails">
          <img
            v-for="(thumb, idx) in product.thumbnail"
            :key="idx"
            :src="thumb"
            :alt="`${product.name} thumbnail ${idx + 1}`"
            class="thumb"
            :class="{ active: thumb === activeImage }"
            @click="setActiveImage(thumb)"
          />
        </div>
      </div>

      <div class="product-detail__info">
        <span class="category-badge">{{ product.category || 'NEW' }}</span>
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>

        <div class="price-wrapper">
          <span class="price">${{ product.price }}</span>
          <span v-if="product.oldPrice" class="old-price">${{ product.oldPrice }}</span>
        </div>

        <div class="options-group">
          <label class="options-label">Select Color:</label>
          <div class="colors">
            <button
              v-for="color in product.colors"
              :key="color"
              class="color-swatch"
              :style="{ backgroundColor: color }"
              :class="{ selected: selectedColor === color }"
              @click="selectedColor = color"
              :title="color"
            ></button>
          </div>
        </div>
        
        <div class="options-group">
          <label class="options-label">Select Storage:</label>
          <div class="storage">
            <button
              v-for="s in product.storage"
              :key="s"
              class="storage-item"
              :class="{ selected: selectedStorage === s }"
              @click="selectedStorage = s"
            >
              {{ s }}
            </button>
          </div>
        </div>
        
        <div class="actions">
          <div class="quantity-selector">
            <button @click="quantity > 1 && quantity--">-</button>
            <input type="number" v-model="quantity" min="1" />
            <button @click="quantity++">+</button>
          </div>
          <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
        <button class="btn btn-secondary">♡ Add to Wishlist</button>

        <div class="specs">
          <div v-for="(val, key) in product.specs" :key="key" class="spec-item">
            <strong>{{ key }}</strong>
            <span>{{ val }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <p>Product not found.</p>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '../components/AppNavbar.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'

interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  thumbnail: string[]
  colors: string[]
  storage: string[]
  specs: Record<string, string>
  description: string
  category?: string
}

const route = useRoute()
const product = ref<Product | null>(null)
const quantity = ref(1)
const cart = useCartStore()
const activeImage = ref('')
const selectedColor = ref<string | null>(null)
const selectedStorage = ref<string | null>(null)

onMounted(async () => {
  const res = await fetch('/src/assets/products.json')
  const data: Product[] = await res.json()
  const foundProduct = data.find((p) => p.id === route.params.id) || null
  
  if (foundProduct) {
    product.value = foundProduct
    // Initialize interactive state
    activeImage.value = foundProduct.image // Set main image
    if (foundProduct.colors.length > 0) {
      selectedColor.value = foundProduct.colors[0]
    }
    if (foundProduct.storage.length > 0) {
      selectedStorage.value = foundProduct.storage[0]
    }
  }
})

function setActiveImage(imageUrl: string) {
  activeImage.value = imageUrl
}

function addToCart() {
  if (!product.value) return
  cart.addToCart(
    {
      id: product.value.id,
      name: product.value.name,
      price: product.value.price,
      image: product.value.image,
    },
    quantity.value,
  )
  alert(`${quantity.value} x ${product.value.name} added to cart!`)
}
</script>

<style scoped>
/* --- General Layout --- */
.product-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}
.product-detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: white;
}
@media (min-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

/* --- Image Gallery --- */
.main-image-wrapper {
  background-color: #f8f9fa;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1rem;
}
.main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  border-radius: 16px;
}
.thumbnails {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
}
.thumb {
  width: 100%;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}
.thumb:hover {
  opacity: 1;
  border-color: #adb5bd;
}
.thumb.active {
  opacity: 1;
  border-color: #007bff;
  transform: scale(1.05);
}

/* --- Product Info --- */
.category-badge {
  display: inline-block;
  background-color: #e7f5ff;
  color: #007bff;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.product-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  margin: 0 0 0.5rem 0;
}
.product-description {
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.price-wrapper {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 2rem;
}
.price {
  font-size: 2.25rem;
  font-weight: 700;
  color: #212529;
}
.old-price {
  text-decoration: line-through;
  color: #adb5bd;
  font-size: 1.25rem;
}

/* --- Options --- */
.options-group {
  margin-bottom: 1.5rem;
}
.options-label {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.75rem;
}
.colors {
  display: flex;
  gap: 0.75rem;
}
.color-swatch {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #e9ecef;
  cursor: pointer;
  transition: all 0.2s ease;
}
.color-swatch:hover {
  transform: scale(1.1);
}
.color-swatch.selected {
  border-color: #007bff;
  box-shadow: 0 0 0 2px #007bff;
}
.storage {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.storage-item {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.storage-item:hover {
  border-color: #adb5bd;
}
.storage-item.selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}


.actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.quantity-selector {
  display: flex;
  align-items: center;
  border: 2px solid #e9ecef;
  border-radius: 8px;
}
.quantity-selector button {
  background: none;
  border: none;
  padding: 0.75rem;
  font-size: 1.25rem;
  cursor: pointer;
  color: #495057;
}
.quantity-selector input {
  width: 50px;
  border: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
}
input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
  margin: 0;
}
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-primary {
  flex-grow: 1;
  background-color: #007bff;
  color: white;
}
.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}
.btn-secondary {
  width: 100%;
  background-color: transparent;
  color: #495057;
  border: 2px solid #e9ecef;
}
.btn-secondary:hover {
  background-color: #f8f9fa;
  border-color: #adb5bd;
}


.specs {
  margin-top: 2rem;
  border-top: 1px solid #e9ecef;
  padding-top: 2rem;
}
.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
}
.spec-item strong {
  color: #495057;
}
.spec-item span {
  color: #212529;
  font-weight: 500;
}
.not-found {
  text-align: center;
  padding: 5rem 1rem;
}
</style>