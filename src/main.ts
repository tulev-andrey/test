import { createApp } from 'vue'
import App from './App.vue'
import { Button, Checkbox, Input, InputNumber, Select, Slider } from 'ant-design-vue'

const app = createApp(App)

app.use(Select).use(Checkbox).use(Input).use(InputNumber).use(Slider).use(Button)

app.mount('#app')
