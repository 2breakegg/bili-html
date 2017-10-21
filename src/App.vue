<style>
  body div{
    padding:0;
    margin:0;
  }
</style>

<template>
  <div>
    <index></index>
  </div>
</template>


<script>
  import Index from './index.vue'
  export default{
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