<template>
    <div class='index'>
        <div class="head">
            <a class="back_btn" @click="goback">返回</a>
        </div>

        <div class="searchbox">
            <div class="searchbar">
                <input type="text" v-model="state.keyword"/>
                <span @click="search"></span>
            </div>
        </div>
        <div class='content'>
            <ul>
                <li v-for="(item,index) in state.searchInfo" :key="index" @click="goinfo(item._id)">
                    <div class="info" >
                        <div class="title">{{item.title}}</div>
                        <div class="something">
                            <span class="m_r10">{{item.source}}-{{item.type}}</span>
                            <span>{{state.formTime(item.time-0)}}</span>
                        </div>
                    </div>
                    <div class="img">
                        <img  alt='' :src="item.img"/>
                    </div>
                </li>               
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive,onMounted } from 'vue'//生命周期钩子函数模块需要提前引入
import request from '../utils/request'
import{useRouter}from 'vue-router'
import formTime from '../utils/formTime'
export default {
  name: 'index',
  setup(props) {
      const state=reactive({
       keyword:'',
       searchInfo:[],
       formTime:formTime.formTime
      })
      
      onMounted(()=>{
       
      })
        
    const router=useRouter()  
    return {
     state,
     goback(){
       router.go(-1)
     },
     search(){
        request.post('/search',{
            keyword:state.keyword
        }).then((res)=>{
            console.log(res)
            state.searchInfo=res.data
        })
     },
     goinfo(id){
        router.push('/newsinfo/'+id)
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

.head {
    height: 40px;
    width: 100%;
    background-color: #dd3635;
    display: flex;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
}

.content {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

ul {
    overflow-y: auto;
}

.content>ul>li {
    display: flex;
    flex-direction: row;
    height: 100px;
    border-bottom: 1px solid #f3f3f3;
    box-sizing: border-box;
    padding-top: 14px;
    padding-bottom: 14px;
}

.content>ul>li:last-child {
    border-bottom: 0;
}

.info {
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
}


.title {
    font-size: 18px;
    color: #222222;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}

.something {
    color: #a5a5a5;
    font-size: 12px;
}


.img {
    width: 115px;
    height: 72px;
    overflow: hidden;
}

.img>img {
    width: 100%;
}

.back_btn {
    color: #ffffff;
    font-size: 16px;
}

.back_btn::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-left: 3px solid #ffffff;
    border-top: 3px solid #ffffff;
    transform: rotate(-45deg);
}

.searchbox {
    height: 65px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
}

.searchbar {
    border: 1px solid #888888;
    height: 34px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
}

.searchbar>input {
    flex: 1;
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    height: 32px;
    outline: none;
    text-indent: 10px;
    font-size: 16px;
    color: #c4c4c4;
}

.searchbar>span {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(../images/search2.png) no-repeat;
    background-size: 70%;
    background-position: center;
    margin-right: 10px;
}
</style >
