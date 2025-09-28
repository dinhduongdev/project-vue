<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="footer__brand">
        <div class="footer__logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2"/>
            <path d="M9.85718 22.1428L22.1429 9.85711" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Cyber</span>
        </div>
        <p>
          We are a residential interior design firm located in Portland. Our boutique-studio offers
          more than.
        </p>
        <div class="footer__social">
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
      <div class="footer__links">
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Bonus program</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Credit and payment</a></li>
            <li><a href="#">Service contracts</a></li>
            <li><a href="#">Non-cash account</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </div>
        <div>
          <h4>Assistance to the buyer</h4>
          <ul>
            <li><a href="#">Find an order</a></li>
            <li><a href="#">Terms of delivery</a></li>
            <li><a href="#">Exchange and return</a></li>
            <li><a href="#">Guarantee</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of use</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2025 cyber. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: #111;
  color: #fff;
  padding: 64px 48px 32px;
  border-top: 1px solid #2a2a2a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.footer__main {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.footer__brand {
  max-width: 320px;
  display: flex;
  flex-direction: column;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #fff;
}

.footer__brand p {
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
}

.footer__social {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #222;
  border-radius: 50%;
  color: #fff;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.footer__social a:hover {
  background-color: #0071e3; /* Example hover color */
  transform: scale(1.1);
}

.footer__social a svg {
  color: #fff;
}

.footer__links {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
}

.footer__links h4 {
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
}

.footer__links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__links li {
  margin-bottom: 12px;
}

.footer__links a {
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.98rem;
  transition: color 0.3s ease;
}

.footer__links a:hover {
  color: #fff;
}

.footer__bottom {
  text-align: center;
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid #2a2a2a;
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .footer {
    padding: 48px 24px 24px;
  }
  .footer__main {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
  .footer__links {
    flex-direction: column;
    gap: 40px;
  }
}
</style>