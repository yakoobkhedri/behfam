import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import AosVue from "aos-vue";
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';
import './assets/css/theme.min.css'
import VueApexCharts from "vue3-apexcharts";

const app=createApp(App)

app.use(VueApexCharts)
app.use(router)
app.use(AosVue)
app.use(Vue3PersianDatetimePicker, {
    name: 'CustomDatePicker',
    props: {
      format: 'YYYY-MM-DD HH:mm',
      displayFormat: 'jYYYY-jMM-jDD',
      editable: false,
      inputClass: 'form-control my-custom-class-name',
      placeholder: 'لطفا تاریخ را وارد کنید',
      altFormat: 'YYYY-MM-DD HH:mm',
      color: '#75bf7a',
      autoSubmit: true,
    }
  })
app.mount('#app')