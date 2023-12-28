<template>
  <!-- Header -->
  <app-header />

  <router-view></router-view>

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
