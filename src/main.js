import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation'
import App from './App.vue'
import router from './router'
import progressBar from './includes/progress-bar'

import './assets/base.css'
import './assets/main.css'
import './includes/firebase'
import 'nprogress/nprogress.css'
import { auth } from './includes/firebase'
import Icon from './directives/icon'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'

registerSW({ imediate: true })

progressBar(router)

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)
    app.directive('icon', Icon)

    app.mount('#app')
  }
})
