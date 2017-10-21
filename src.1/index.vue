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

<style name='pic'>
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    /* border-radius: 4px; */
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #ff0000;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    /* //border-radius: 4px; */
    /* min-height: 36px; */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .unitVideo{
    margin:5% 5% 0 5%;
    border-radius: 14px;
  }

  .unitPicDiv1{
    position: relative;
  }
  .unitPicDiv2{
    padding-bottom:62.5%; 
    height:0;
  }
  .unitPic{
    width:100%;
    border-radius: 4px;
  }
  .unitTitle{
    font-size:0.7rem;
    height: 2rem;
    overflow: hidden;
    /* height:1.3rem; */
  }
</style>


<template>
  <div>
    <comp v-bind:hotList="hotList"></comp>
    <!-- <img src='http://localhost:8086/api/bili'/>
    <img src='http://n.sinaimg.cn/news/transform/20170906/vbQZ-fykqmrw0829037.jpg'/> -->
    <div class="block">
      <el-carousel height="0" >
        <el-carousel-item v-for="item in carousel" :key="item">
          <a v-bind:href="item.url"><img style="width:100%" v-bind:src="proxyUrl+item.pic"/></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- <el-row>
      <el-col :span="12">
        <a>
          <div class="unitVideo">
            <img class="unitPic" v-bind:src="proxyUrl+'http://i2.hdslb.com/bfs/archive/f5270410d4e30350c9879738b34432ca859d3a6f.jpg'"/>
            <div class="unitTitle">【洛天依.言和原创专辑宣传】Kill My【Sya】</div>
          </div>
        </a>        
      </el-col>
      <el-col :span="12">
        <a>
          <div class="unitVideo">
            <img class="unitPic" v-bind:src="proxyUrl+'http://i2.hdslb.com/bfs/archive/f5270410d4e30350c9879738b34432ca859d3a6f.jpg'"/>
            <div class="unitTitle">【洛天依.言和原创专辑宣传】Kill My【Sya】</div>
          </div>
        </a>
      </el-col>
    </el-row> -->

    <el-row>
      <el-col :span="12"  v-for="item in hotList" :key="item">
        <a>
          <div class="unitVideo">
            <div class="unitPicDiv1">
              <div class="unitPicDiv2">
                <img class="unitPic" v-bind:src="proxyUrl+item.pic+'@339w_212h.webp'"/>
              </div>
            </div>
            <div class="unitTitle">{{item.title}}</div>
          </div>
        </a>        
      </el-col>
    </el-row>
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
      var carouselTemp=[];
      for(let d in data.data){
        carouselTemp.push(data.data[d]);                
      }
      console.log('that',that);
      console.log('that:'+attr,that[attr]);      
      that[attr]=carouselTemp;
      console.log('carouselTemp',carouselTemp);
      console.log('that[attr]',that[attr]);
    });
  }
  let comp={template:'#comp'}

  export default{
    data:function(){
      return{
        proxyUrl:proxyUrl,
        carousel:[],
        hotList:[]
      }
    },
    created:function(){
      let that=this;
      fetchApi(apiUrl,that,'carousel');
      fetchApi(hotUrl,that,'hotList');
      // quick
      // fetch(apiUrl)
      // .then((response) => response.json())
      // .then((data) => {
      //   var carouselTemp=[];
      //   carouselTemp=data.data;
      //   // for(let d in data.data){
      //   //   carouselTemp.push(data.data[d]);                
      //   // }
      //   that.carousel=carouselTemp;
      // });
    },
    components:{
      'comp':unitVideo
    }
  }
</script>