import "_common/style/reset.scss"

import boot from "@baoji/vue-boot"
import Vue from "vue"
import "./components/code.css"
import VueHighlightJS from "vue-highlightjs"
import App from "./components/app"
Vue.use(VueHighlightJS)

boot(App)
