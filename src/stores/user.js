import { auth, usersCollection } from '@/includes/firebase'
import defineStore from 'pinia'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      const { name, email, age, country } = values
      usersCollection.doc(userCred.user.uid).set({
        name,
        email,
        age,
        country
      })

      userCred.user.updateProfile({
        displayName: values.name
      })

      this.useUserStore.userLoggedIn = true
    }
  }
})
