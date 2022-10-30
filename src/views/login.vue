<template>
      <form>
        <div class="box">
            <div class="m_t25">
                <input type="text" class="input1" placeholder="用户名" v-model="state.username" />
            </div>
            <div class="m_t25">
                <input type="new-password" class="input1" placeholder="密码" v-model="state.password" />
            </div>

            <div class="m_t25">

                <input type="button" class="login_btn" value="登录" @click="login" />


            </div>

            <div class="m_t15">

                <div class="tar">
                    <a class="link_btn" @click="goSign">注册</a>
                </div>

            </div>
        </div>
    </form>
</template>
<script>
import { reactive,onMounted } from 'vue'//生命周期钩子函数模块需要提前引入
import request from '../utils/request'
import { useRouter } from 'vue-router'
//import { Toast } from 'vant';
export default {
  name: 'index',
  setup(props) {
      
      const state=reactive({
       username:'',
       password:''
      })
      
      onMounted(()=>{
       
      })
      const router=useRouter()
      
    return {
     state,
     login(){
        request.post('/login',{
            username:state.username,
            password:state.password
        }).then((res)=>{
           // console.log(res.data)
           if(res.status==='success'){
                localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))
                localStorage.setItem('token',res.data.token)
                router.push('/')
           }else{
            //Toast('请检查用户名和密码');
           }
         
        })
     },
     goSign(){
       router.push('/sign')
     },
    }
  }
}
</script>
<style scoped>
.box {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.input1 {
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    border: 1px solid #de3232;
    border-radius: 5px;
    width: 100%;
    min-width: 1px;
    height: 38px;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
}

.input1::placeholder {
    color: #a5a5a5;
    font-size: 18px;
}

.login_btn {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    min-width: 1px;
    height: 38px;
    border-radius: 5px;
    background-color: #de3232;
    color: #ffffff;
    font-size: 18px;
    outline: none;
    text-align: center;
}

.link_btn {
    color: #4d35a6;
    font-size: 14px;
    text-decoration: underline;
}
</style >
