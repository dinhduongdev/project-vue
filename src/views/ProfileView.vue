<template>
  <AppNavbar />
  <div class="profile-view">
    <h1>User Profile</h1>
    <div class="profile-card">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User Avatar"
        class="profile-avatar"
      />
      <div class="profile-info">
        <div><strong>Name:</strong> John Doe</div>
        <div><strong>Email:</strong> johndoe@example.com</div>
        <div><strong>Phone:</strong> 0123 456 789</div>
        <div><strong>Address:</strong> 123 Main St, City, Country</div>
      </div>
    </div>
    <button class="profile-edit">Edit Profile</button>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.profile-view {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.profile-card {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 24px;
}
.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}
.profile-info {
  font-size: 1.1rem;
  color: #333;
}
.profile-edit {
  background: var(--primary-color, #6a11cb);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  cursor: pointer;
  font-weight: 500;
}
.profile-edit:hover {
  background: #2575fc;
}
</style>
