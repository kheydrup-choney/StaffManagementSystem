declare module '*.vue' {
    import { defineComponent } from 'vue';
    const component: ReturnType<typeof defineComponent>;
    export default component;
  }
  
  declare module 'vue-chartjs' {
    import { defineComponent } from 'vue';
    const Bar: ReturnType<typeof defineComponent>;
    export { Bar };
  }
  