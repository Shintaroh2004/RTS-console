import './app.css'
import App from './App.svelte'
import { invoke } from '@tauri-apps/api'

invoke('greet', { name: 'World' })
  .then((response) => console.log(response))

const app = new App({
  target: document.getElementById('app')!,
})

export default app
