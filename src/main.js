import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueMeta from 'vue-meta'

Vue.use(VueCompositionAPI)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
})

Vue.config.productionTip = false

import '@/core/styles/css/main.css'
import '@/core/styles/scss/main.scss'
import '@@/public/icons/style.css'

// Plugins
import router from './router'
import { store } from '@store'
import { i18nPlugin } from '@plugins/i18n'
import { eventBus } from '@plugins/bus'
// Axios instances
import clientApi from '@/core/apis/client'
import authApi from '@/core/apis/auth'
// Mixins
import { globalMixin } from '@mixins/global'
//
import { utils } from '@utils'
import dev from '@/core/utils/functions/dev'

import App from '@/App.vue'

import '@/core/components/base'
import '@/core/plugins/element-ui'

Vue.mixin(globalMixin)

Vue.use(clientApi)
Vue.use(authApi)
Vue.use(eventBus)
Vue.use(utils)

Vue.config.errorHandler = (err, vm, info) => {
  vm.$root.error = {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something is wrong',
  }
  vm.$route.meta.layout = 'error'
  // Force router reload
  // Add a random temporary query parameter.
  router.replace({ query: { temp: Date.now() } })
  // Remove the temporary query parameter.
  router.replace({ query: { temp: undefined } })
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
  dev.error(err, vm, info)
}

Vue.config.warnHandler = (msg, vm, trace) => {
  // `trace` is the component hierarchy trace
  dev.warn(msg, vm, trace)
}

const app = new Vue({
  store,
  router,
  i18n: i18nPlugin,
  render: (h) => h(App),
}).$mount('#app')

export { app }
