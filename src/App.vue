<template>
  <!-- Header -->
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <app-player></app-player>

  <!-- Auth Modal -->
  <app-auth />
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppPlayer from '@/components/Player.vue'
import AppAuth from '@/components/AppAuth.vue'
import useUserStore from '@/stores/user'
import { mapWritableState } from 'pinia'
import { auth } from './includes/firebase'

export default {
  components: {
    AppHeader,
    AppAuth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
