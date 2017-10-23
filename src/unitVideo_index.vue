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
    height: 1.8rem;
    overflow: hidden;
  }
</style>

<template>
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
</template>

<script>
  const proxyUrl=`./api/bili?url=`;
  export default{
    data:function(){
      return {
        proxyUrl:`./api/bili?url=`
      }
    },
    props:['hotList']
  }
</script>