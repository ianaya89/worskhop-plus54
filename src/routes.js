import Home from './components/Home.vue'
import Source from './components/Source.vue'
import About from './components/About.vue'

export default [
  { path: '/', component: Home },
  { path: '/source/:aaaa', component: Source },
  { path: '/about', component: About }
]
