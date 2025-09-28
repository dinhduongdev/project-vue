<template>
  <section class="hero-banner">
    <div class="hero-banner__content">
      <h4>Pro.Beyond.</h4>
      <h1>IPhone 17 <span>Pro</span></h1>
      <p>Created to change everything for the better. For everyone</p>
      <button class="hero-banner__btn">Shop Now</button>
    </div>
    <div class="hero-banner__image">
      <img src="https://cdn2.fptshop.com.vn/unsafe/iphone_17_pro_cosmic_orange_1_12e8ea1358.png" alt="iPhone 14 Pro" />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-banner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  background: #111;
  color: #f5f5f7;
  padding: 64px 48px;
  min-height: 500px;
  overflow: hidden;
  border-radius: 24px;
  margin: 20px;
}

.hero-banner__content {
  max-width: 500px;
  animation: fadeInUp 0.8s ease-out forwards;
}

.hero-banner__content h4 {
  color: #999;
  font-weight: 500;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.hero-banner__content h1 {
  font-size: 4rem;
  font-weight: 600;
  margin: 8px 0;
  line-height: 1.1;
  letter-spacing: -1px;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.hero-banner__content h1 span {
  font-weight: 700;
  background: linear-gradient(90deg, #c5c5c5, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-banner__content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #a1a1a6;
  max-width: 400px;
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

.hero-banner__btn {
  margin-top: 32px;
  padding: 14px 36px;
  background: #0071e3;
  border: none;
  color: #fff;
  border-radius: 980px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.8s ease-out 0.8s forwards;
  opacity: 0;
}

.hero-banner__btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 113, 227, 0.25);
}

.hero-banner__image {
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

.hero-banner__image img {
  max-width: 380px;
  border-radius: 24px;
  transition: transform 0.4s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.hero-banner__image img:hover {
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .hero-banner {
    flex-direction: column;
    text-align: center;
    padding: 48px 24px;
  }
  
  .hero-banner__content {
    order: 2;
  }

  .hero-banner__image {
    order: 1;
    margin-bottom: 32px;
  }

  .hero-banner__content p {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>