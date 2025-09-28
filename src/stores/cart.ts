import { defineStore } from 'pinia'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart-items') || '[]') as CartItem[],
  }),
  actions: {
    saveToStorage() {
      localStorage.setItem('cart-items', JSON.stringify(this.items))
    },
    addToCart(product: Omit<CartItem, 'quantity'>, quantity = 1) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ ...product, quantity })
      }
      this.saveToStorage()
    },
    removeFromCart(id: string) {
      this.items = this.items.filter((item) => item.id !== id)
      this.saveToStorage()
    },
    updateQuantity(id: string, quantity: number) {
      const item = this.items.find((item) => item.id === id)
      if (item && quantity > 0) {
        item.quantity = quantity
        this.saveToStorage()
      }
    },
    clearCart() {
      this.items = []
      this.saveToStorage()
    },
  },
})
