<template>
  <div class="index" id="box">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'//生命周期钩子函数模块需要提前引入
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  name: 'index',
  setup(props) {
    const state = reactive({
     
    })
    const active = ref(0);
    const router=useRouter()
    onMounted(() => {
     
    })
   
   
    return {
      state,
      active,
      onChange(index){
        //console.log(index)
        if(index==1){
          router.push('/my')
        }else if(index==0){
          router.push('/')
        }
      }
    }
  }
}
</script>
<style scoped>
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
