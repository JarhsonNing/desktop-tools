<template>
    <div>
        <input type="text" v-model="inputValue" placeholder="接下来做什么" @keyup.enter="addItem">
        <h2>待办
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
            if(!this.inputValue.trim())return;
            this.unfinishedList.push(
                {value:this.inputValue});
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
    }
}
</script>