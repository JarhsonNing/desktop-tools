<template>
    <div>
         <todoHeader></todoHeader>
        <div class="todolist-wrapper md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-50">
                <md-field>
                    <label>接下来做什么</label>
                    <md-input v-model="inputValue" @keyup.enter="addItem"></md-input>
                </md-field>
                <tab :curState="filter" @toggle="toggleFilter"></tab>
                <md-list v-if="filteList.length && filteList.length !=0">
                    <md-list-item v-for="(item, index) in filteList" :key="index">
                        <span class="md-list-item-text">{{item.value}}</span>
                        <md-checkbox v-model="item.completed"></md-checkbox>
                    </md-list-item>
                </md-list>        
            </div>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import todoHeader from './components/header'
import tab from './components/tab'
export default {
    name: 'todolisthome',
    data() {
        return {
            lists:[],
            unfinishedList: [],
            finishedList: [],
            inputValue: '',
            checkbox:'',
            inline:'',
            filter: 'active',
        }
    },
    computed:{
        filteList(){
            if(this.filter === 'all'){
                return this.lists;
            }
            let filterCompleted = this.filter === 'completed'
            return this.lists.filter(todo=> todo.completed === filterCompleted);
        }
    },
    methods:{
        toggleFilter(state){
            this.filter = state;
        },
        addItem() {
            if(!this.inputValue.trim())return;
            this.lists.unshift({
                value: this.inputValue,
                completed: false
            })
            this.inputValue = '';
        }
    },
    components:{
        todoHeader,
        tab
    }
}
</script>
<style lang="scss">
// 定义变量
$themeColor :#b17;
//样式的加减乘除
.test {
    height: (1px + 3px);
}
//继承；
.testE {
    @extend .test;
    font-size: 12px;
}
//代码复用
@mixin test2 {
    height: 20px;
    left: 20px;
}
.test2M {
    @include test2
}
//if 语句
.test3 {
    @if 1+3==4 {
      border: 1px solid;  
    }
    @if 5<3 {
        border: 2px #000 red;
    }
}
.test33 {
    @if lightness($themeColor)> 30% {
        background-color: #fff;
    }@else {
        background: #0ff;
    }
}
// 这里的lightness是一个scss颜色函数

//循环语法 for
@for $k from 1 to 5 {//through:条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值。
    .item-#{$k} {
        border:#{$k}px solid;
    }
}

//while
$m: 8;
@while $m > 0 {
    .item-#{$m} {
        width: 2em*$m;
    }
    $m :$m - 2;
}

//each
@each $img in a,b {
    .#{$img} {
        background-image: url('./pic/#{$img}.jpg');
    }
}

//function
@function double ($number) {
    @return $number*2;
}
.text9 {
    font-size: double(20px);
}
// @import 'other.scss'

</style>
<style lang="scss" scoped>
$themeColor:#b17;
.todolist-wrapper{
    margin-top: 60px;
  .md-field.md-focused > label{
      color: $themeColor;
  }
  .md-field.md-focused::before{
    background-color: $themeColor;
  }
}
</style>