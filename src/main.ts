import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ── Dark mode ─────────────────────────────────────
const applyTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', prefersDark)
}
applyTheme()
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)

createApp(App).mount('#app')
