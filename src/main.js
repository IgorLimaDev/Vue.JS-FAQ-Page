import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import busca_atendimento from './components/busca-atendimento.vue'
import Inicio from './components/Inicio'

import "./assets/css/styles.css"
import "./assets/css/styles.mobile.css"

Vue.use(VueRouter)

const routes = [
    //define the root url of the application.
    { path: '/', component: Inicio },
    { path: '/busca_atendimento', component: busca_atendimento },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: "#app",
    router: router,
    render: h => h(App),
})