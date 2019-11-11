// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import settings from "../data/theme.json";
import DefaultLayout from '~/layouts/Default.vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default function (Vue, { router, appOptions, head, isClient }) {
  // Set default layout as a global component

  const opts = { icons: {
    iconfont: 'mdi',
  } }// opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts)
  Vue.component('Layout', DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? 'dark' : ''
  };
}
