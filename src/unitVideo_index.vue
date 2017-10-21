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