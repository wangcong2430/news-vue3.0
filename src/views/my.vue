<template>
  <div class='index'>
    <div class="my" v-if="state.flag">
      <div class="userinfo">
        <img alt='' :src="'https://www.young1024.com:3002/avatar/' + state.userinfo.avatar" />
        <span>{{ state.userinfo.username }}</span>
      </div>
      <div class="mylist">
        <ul>
          <li><a @click="gocollect">我的收藏</a></li>
        </ul>
      </div>
      <div class="btnbox">
        <a class="logout" @click="logout">退出</a>
      </div>
    </div>
    <div class="btnbox" v-else>
      <a class="logout" @click="login">去登录</a>
    </div>
  </div>
</template>
<script>
import { reactive,onMounted } from 'vue'//生命周期钩子函数模块需要提前引入
import { useRouter } from 'vue-router';
export default {
  name: 'index',
  setup(props) {
      const state=reactive({
       flag:'',
       userinfo:{}
      })
      const router=useRouter()
      onMounted(()=>{
       if(localStorage.getItem('token')){
        state.flag=true
        state.userinfo=JSON.parse(localStorage.getItem('userinfo'))
       }else{
        state.flag=false
       }
      })
        
      
    return {
     state,
    gocollect(){
       router.push('/collect')
    },
    logout(){
       localStorage.clear()
       state.flag=false
    },
    login(){
        router.push('/login')
    }
    }
  }
}
</script>
<style scoped>
.index {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.my {
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
}

.foot {
  height: 40px;
  width: 100%;
  border-top: 1px solid #c4c4c4;
  display: flex;
}

.foot>a {
  flex: 1;
  height: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.foot>a.sel>span:nth-child(2) {
  color: #de3232;
}

.foot>a.sel>.indexicon {
  background: url(../images/index2.png);
  background-size: contain;
}

.foot>a.sel>.myicon {
  background: url(../images/my2.png);
  background-size: contain;
}

.indexicon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../images/index1.png);
  background-size: contain;
}

.myicon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../images/my1.png);
  background-size: contain;
}

.foot>a>span:nth-child(2) {
  color: #787878;
  font-size: 12px;
  margin-top: -10px;
}

.userinfo {
  height: 180px;
  width: 100%;
  background-color: #dd3635;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.userinfo>img {
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

.userinfo>span {
  font-size: 24px;
  color: #ffffff;
}

.mylist {
  box-sizing: border-box;
  padding: 20px 0;
}

.mylist>ul>li {
  background-color: #c4c4c4;
  box-sizing: border-box;
  height: 38px;
  padding-left: 10px;
  padding-right: 10px;
}

.mylist>ul>li>a {
  display: flex;
  width: 100%;
  height: 38px;
  color: #ffffff;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
}

.mylist>ul>li>a::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-45deg);
}

.btnbox {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logout {
  display: inline-block;
  width: 65%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #dd3635;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
}
</style >
