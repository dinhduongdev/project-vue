<template>
  <nav class="navbar">
    <div class="navbar__logo" @click="goTo('/')">Cyber</div>

    <div class="navbar__search-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="search-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input class="navbar__search" type="text" placeholder="Search..." />
    </div>

    <ul class="navbar__menu">
      <li @click="goTo('/')">Home</li>
      <li @click="goTo('/about')">About</li>
      <li @click="goTo('/contact')">Contact Us</li>
      <li @click="goTo('/blog')">Blog</li>
    </ul>

    <div class="navbar__icons">
      <span class="icon-wrapper" title="Cart" @click="goTo('/cart')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </span>
      <span class="icon-wrapper" title="User Profile" @click="goTo('/profile')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </span>
    </div>

    <div class="navbar__hamburger" @click="toggleMobileMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </div>
  </nav>

  <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
    <ul class="mobile-menu__links">
      <li @click="navigateTo('/')">Home</li>
      <li @click="navigateTo('/about')">About</li>
      <li @click="navigateTo('/contact')">Contact Us</li>
      <li @click="navigateTo('/blog')">Blog</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

function goTo(path: string) {
  router.push(path)
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function navigateTo(path: string) {
  goTo(path)
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
@import '../assets/variables.css';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: var(--background-color);
  box-shadow: 0 4px 12px var(--shadow-color);
  position: relative;
  z-index: 1000;
}

.navbar__logo {
  font-weight: 700;
  color: #111;
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.navbar__logo:hover {
  transform: scale(1.05);
}

.navbar__search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: #aaa;
}

.navbar__search {
  padding: 10px 16px 10px 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  width: 250px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}
.navbar__search:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
}

.navbar__menu {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: 500;
}
.navbar__menu li {
  cursor: pointer;
  position: relative;
  color: var(--text-color-light);
  transition: color 0.3s ease;
}
.navbar__menu li:hover {
  color: var(--primary-color);
}
.navbar__menu li::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}
.navbar__menu li:hover::after {
  width: 100%;
}

.navbar__icons {
  display: flex;
  gap: 20px;
  align-items: center;
}
.icon-wrapper {
  cursor: pointer;
  color: var(--text-color-light);
  transition: all 0.3s ease;
}
.icon-wrapper:hover {
  color: var(--primary-color);
  transform: scale(1.1);
}

.navbar__hamburger {
  display: none; /* Mặc định ẩn trên desktop */
  cursor: pointer;
}

/* --- Responsive cho Mobile --- */
.mobile-menu {
  position: fixed;
  top: 73px; /* Chiều cao của navbar */
  left: 0;
  width: 100%;
  background: var(--background-color);
  box-shadow: 0 4px 12px var(--shadow-color);
  transform: translateY(-120%);
  transition: transform 0.4s ease-in-out;
  z-index: 999;
  padding: 20px 0;
}

.mobile-menu.is-open {
  transform: translateY(0);
}

.mobile-menu__links {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.mobile-menu__links li {
  padding: 16px 0;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-color);
  transition: background-color 0.3s;
}
.mobile-menu__links li:hover {
  background-color: #f5f5f5;
}

/* Media Query cho màn hình nhỏ hơn 768px */
@media (max-width: 768px) {
  .navbar__search-container,
  .navbar__menu,
  .navbar__icons {
    display: none;
  }
  .navbar__hamburger {
    display: block;
  }
}
</style>
