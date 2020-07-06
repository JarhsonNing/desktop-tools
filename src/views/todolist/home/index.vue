<template>
    <div>
        <input type="text" v-model="inputValue" placeholder="接下来做什么" @keyup.enter="addItem">
        <h2>待办
            <span v-if="unfinishedList.length && unfinishedList.length !=0">{{unfinishedList.length}}条</span>
        </h2>
        <ol>
            <li v-for="(item, index) in unfinishedList" :key="index">
                <input type="text" v-model="unfinishedList[index].value" 
                :disabled="!unfinishedList[index].disabled" @keyup.enter="disabledItem(index)" @blur="disabledItem(index)">
                <button @click="completeItem(index)">完成</button>
                <button @click="removeItem(index)">丢弃</button>
                <button @click="editItem(index)">修改</button>
            </li>
        </ol>
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
</template>
<script>
import Vue from 'vue'
export default {
    data() {
        return {
            unfinishedList: [],
            finishedList: [],
            inputValue: ''
        }
    },
    methods:{
        addItem() {
            if(!this.inputValue)return;
            this.unfinishedList.push(
                {value:this.inputValue});
            this.inputValue = '';
        },
        completeItem(index) {
            let item = this.unfinishedList[index];
            if(item.disabled){
                item.disabled = false;
            }
            this.unfinishedList.splice(index, 1);
            this.finishedList.push(item);
        },
        removeItem(index) {
            let item = this.unfinishedList[index];
            this.unfinishedList.splice(index, 1);
        },
        deleteItem(index) {
            let item = this.finishedList[index];
            this.finishedList.splice(index, 1);
        },
        editItem(index){
            if(!this.unfinishedList[index].disabled){
                Vue.set(this.unfinishedList[index],'disabled',true)
            }else{
                this.unfinishedList[index].disabled = true;
            }
        },
        disabledItem(index) {
            if(this.unfinishedList[index].disabled){
                this.unfinishedList[index].disabled = false;
            }
        }
    }
}
</script>