<style name='carousel'>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__indicators{
    background:rgba(0,0,0,0.3);
    padding: 0 5px;
  }

  .el-carousel__button{
    width:15px;    
  }

  .el-carousel__container{
    height: 0px;padding-top: 15.625%;
    padding-bottom: 15.625%;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>




<template>
  <div>
    <div class="block">
      <el-carousel height="0" >
        <el-carousel-item v-for="item in carousel" :key="item">
          <a v-bind:href="item.url"><img style="width:100%" v-bind:src="proxyUrl+item.pic"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <router-link to="/Video">热门</router-link>
      <comp v-bind:hotList="hotList"></comp>
    </div>
    <div>
      动画
      <comp v-bind:hotList="animationList"></comp>
    </div>
  </div>  
  
</template>

<script>
  import unitVideo from './unitVideo_index.vue';
  const proxyUrl=`./api/bili?url=`;
  let carousel=[];
  let apiUrl=`api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695`;
  let hotUrl=`http://api.bilibili.com/x/web-interface/ranking/index?day=3`;
  let animationUrl=`http://api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp`;
  let fetchApi=function(apiUrl,that,attr){
    fetch(proxyUrl+apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let tempData=data.data;
      if(tempData.archives){
        that[attr]=tempData.archives;
      }else{
        that[attr]=tempData;
      }
    });
  }
  let comp={template:'#comp'}

  export default{
    data:function(){
      return{
        proxyUrl:proxyUrl,
        carousel:[],
        hotList:[],
        animationList:[]
      }
    },
    created:function(){
      let that=this;
      fetchApi(apiUrl,that,'carousel');
      fetchApi(hotUrl,that,'hotList');
      fetchApi(animationUrl,that,'animationList');
    },
    components:{
      'comp':unitVideo
    }
  }
</script>