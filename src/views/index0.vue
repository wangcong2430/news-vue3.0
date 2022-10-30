<template>
    <div class="index0">
        <div class="head">
            <div class="nav">
                <ul>
                    <li v-for="(item, index) in state.type" :key="index" :class="state.typeindex === index ? 'cur' : ''"
                        @click="changeTypeindex(index)">
                        <a>{{ item }}</a>
                    </li>
                </ul>
            </div>
            <div class="search">
                <a class="s_btn" @click="search"></a>
            </div>
        </div>


        <div class="content" v-if="state.typeindex === 1">
            <ul>
                <li v-for="(item, index) in state.newsList" :key="index">

                    <div class="info">
                        <div class="title">{{ item.title }}</div>
                        <div class="something">
                            <span class="m_r10">{{ item.media }} --{{ item.type }} </span>
                            <span>{{ state.formTime(item.pubtime - 0) }}</span>
                        </div>
                    </div>
                    <div class="img">
                        无图
                    </div>
                </li>
            </ul>
        </div>
        <div class="content" v-else>
            <ul>
                <li v-for="(item, index) in state.newsList" :key="index" @click="newsinfo(item._id)">
                    <div class="info">
                        <div class="title">{{ item.title }}</div>
                        <div class="something">
                            <span class="m_r10">{{ item.source }} --{{ item.type }} </span>
                            <span>{{ state.formTime(item.time - 0) }}</span>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="item.img" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive, onMounted } from 'vue'//生命周期钩子函数模块需要提前引入
import { useRouter } from 'vue-router'
import request from '../utils/request'
import formTime from '../utils/formTime'
export default {
    name: 'index0',
    setup(props) {
        const state = reactive({
            type: ['军事', '财经', 'NBA', '汽车', '文化', '股票', '时政'],
            newsList: [],
            typeindex: 0,
            formTime: formTime.formTime,            
        })
        const router = useRouter()
        onMounted(() => {
            request.post('/news', {
                type: state.type[state.typeindex]
            }).then((res) => {
                //console.log(res)
                //console.log(this)
                state.newsList = res.data
            })
        })
        return {
            state,

            changeTypeindex(idx) {
                state.typeindex = idx
                request.post('/news', {
                    type: state.type[state.typeindex]
                }).then((res) => {
                    //console.log(res)              
                    state.newsList = res.data
                })
            },
            newsinfo(id) {
                router.push(`/newsinfo/${id}`)
            },
            search() {
                router.push('/search')
            },
            onLoad() {

            }

        }
    }
}
</script>

<style scoped>
.index0 {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 45px;
}

.head {
    height: 40px;
    width: 100%;
    background-color: #dd3635;
    display: flex;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.nav {
    flex: 1;
    overflow-x: auto;
}

.nav>ul {
    display: flex;
    height: 40px;
    align-items: center;
    flex-wrap: nowrap;
}

.nav>ul>li {
    margin-right: 20px;
    flex-shrink: 0;
}

.nav>ul>li.cur a {
    font-size: 19px;
    font-weight: 600;
}

.nav>ul>li>a {
    color: #ffffff;
    font-size: 16px;
}

.search {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.s_btn {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(../images/search.png) no-repeat;
    background-size: contain;
}

.content {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.content>ul>li {
    display: flex;
    height: 100px;
    border-bottom: 1px solid #f3f3f3;
    box-sizing: border-box;
    padding-top: 14px;
    padding-bottom: 14px;
    text-align: start;
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
    text-align: center;
    line-height: 72px;
    border: #787878 solid 1px;
}

.img>img {
    width: 100%;
}

.noimg {
    width: 115px;
    height: 72px;
    overflow: hidden;
    line-height: 72px;
    text-align: center;
    color: #a5a5a5;
    border: 1px solid #a5a5a5;
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
</style>