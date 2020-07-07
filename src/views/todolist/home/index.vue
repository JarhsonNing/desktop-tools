<template>
    <div>
         <todoHeader></todoHeader>
        <div class="todolist-wrapper md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-50">
                <md-field>
                    <label>接下来做什么</label>
                    <md-input v-model="inputValue" @keyup.enter="addItem"></md-input>
                </md-field>
                <md-list v-if="unfinishedList.length && unfinishedList.length !=0">
                    <md-subheader>待办事件</md-subheader>
                    <md-list-item v-for="(item, index) in unfinishedList" :key="index">
                        <span class="md-list-item-text">{{item.value}}</span>
                        <md-checkbox v-model="item.isCompleted"></md-checkbox>
                    </md-list-item>
                </md-list>
                <!-- <h2>待办
                    <span v-if="unfinishedList.length && unfinishedList.length !=0">{{unfinishedList.length}}条</span>
                </h2>
                <ol>
                    <li v-for="(item, index) in unfinishedList" :key="index">
                        <input type="text" v-model="unfinishedList[index].value" 
                        :disabled="!unfinishedList[index].disabled" @keyup.enter="disabledItem(item)" @dblclick="dblclick" @blur="disabledItem(item)">
                        <button @click="completeItem(item)">完成</button>
                        <button @click="removeItem(item)">丢弃</button>
                        <button @click="editItem(item)">修改</button>
                    </li>
                </ol> -->
                <md-list v-if="finishedList.length && finishedList.length != 0">
                    <md-subheader>已完成</md-subheader>
                    <md-list-item>
                        
                    </md-list-item>
                </md-list>
                <h2>已完成
                    <span v-if="finishedList.length && finishedList.length != 0">
                        {{finishedList.length}}条
                        </span>
                </h2>
                <ol>
                    <li v-for="(item, index) in finishedList" :key="index">{{item.value}}
                        <button @click="deleteItem(index)">删除</button>
                    </li>
                </ol>            
            </div>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import todoHeader from './components/header'
export default {
    name: 'todolisthome',
    data() {
        return {
            lists:[],
            unfinishedList: [],
            finishedList: [],
            inputValue: '',
            checkbox:'',
            inline:''
        }
    },
    computed:{
        // unfinishedList
    },
    methods:{
        addItem() {
            if(!this.inputValue.trim())return;
            this.unfinishedList.unshift({
                value: this.inputValue,
                isCompleted: false
            })
            this.inputValue = '';
        },
        completeItem(item) {
            let index = this.unfinishedList.indexOf(item)
            if(item.disabled){
                item.disabled = false;
            }
            this.unfinishedList.splice(index, 1);
            this.finishedList.push(item);
        },
        removeItem(item) {
            let index = this.finishedList.indexOf(item)
            this.unfinishedList.splice(index, 1);
        },
        deleteItem(item) {
            let index = this.finishedList.indexOf(item)
            this.finishedList.splice(index, 1);
        },
        editItem(item){
            if(item.disabled === undefined){
                Vue.set(item,'disabled',true)
            }else{
                item.disabled = !item.disabled;
            }
        },
        disabledItem(item) {
            if(item.disabled){
                item.disabled = false;
            }
        },
        dblclick(){
            console.log('dblclick')
        }
    },
    components:{
        todoHeader
    }
}
</script>
<style lang="scss" scoped>
.todolist-wrapper{
    margin-top: 60px;
}
</style>