<style>
  body div{
    padding:0;
    margin:0;
  }
</style>

<template>
  <div>
    <p>Root router path: {{ $route.fullPath }}</p>
      <ul>
        <li><router-link to="/index">/Index</router-link></li>
        <li><router-link to="/video">/Video</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
      </ul>
    <router-view/>
  </div>
</template>


<script>
  import Index from './index.vue';
  import Video from './video.vue';
  import VueRouter from 'vue-router';

  const Foo = { template: `<div class="foo"><h1>foo</h1></div>` }
  const Bar = { template: `<div class="bar"><h1>bar</h1></div>` }

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/index', component: Index },
      { path: '/video', component: Video },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]
  })


  export default{
    router,
    data:function(){
      return {
        message:'message'
      }
    },
    methods:{

    },
    watch:{

    },
    components:{
      index:Index
    }
  }

  
</script>