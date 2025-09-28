<template>
  <AppNavbar />
  <div class="cart-view">
    <h1>Your Cart</h1>
    <div v-if="cart.items.length > 0">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id">
            <td><img :src="item.image" alt="" class="cart-img" /></td>
            <td>{{ item.name }}</td>
            <td>${{ item.price }}</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                min="1"
                @change="updateQuantity(item.id, item.quantity)"
                style="width: 60px; padding: 6px; border-radius: 6px; border: 1px solid #eee"
              />
            </td>
            <td>${{ item.price * item.quantity }}</td>
            <td><button @click="remove(item.id)">Remove</button></td>
          </tr>
        </tbody>
      </table>
      <div class="cart-total">
        <strong>Total: ${{ total }}</strong>
      </div>
      <button class="cart-clear" @click="clearCart">Clear Cart</button>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

const total = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0))

function updateQuantity(id: string, quantity: number) {
  cart.updateQuantity(id, quantity)
}
function remove(id: string) {
  cart.removeFromCart(id)
}
function clearCart() {
  cart.clearCart()
}
</script>

<style scoped>
.cart-view {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}
.cart-table th,
.cart-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.cart-img {
  width: 48px;
  border-radius: 8px;
}
.cart-total {
  font-size: 1.2rem;
  margin-bottom: 16px;
}
.cart-clear {
  background: #e53935;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  cursor: pointer;
  font-weight: 500;
}
.cart-clear:hover {
  background: #c62828;
}
</style>
