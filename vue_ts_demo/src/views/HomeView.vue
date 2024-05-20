<template>
  <div class="home_view">
    HomeView {{ msg }}
    <div>
      <div>
        Current Count: {{ counter.count }}
        <button @click="increment()">count+1</button>
      </div>
      <div>
        <button @click="addTodo('test' + todoList.length + 1)">add item</button>
        <div>
          <button @click="handleFilter">handleFilter</button>
          <button @click="changeFilterText('all')">all</button>
          <button @click="changeFilterText('finished')">finished</button>
          <button @click="changeFilterText('unfinished')">unfinished</button>
        </div>
        <ol>
          <li
            class="item"
            v-for="item in filteredTodos()"
            :key="item.id"
            @click="item.isFinished = !item.isFinished"
          >
            {{ item.text }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore, useTodos } from '@/stores';
const msg = ref('Hello Vue 3 + TypeScript + Vite');
const counter = useCounterStore();
const todos = useTodos();
const { todoList, filter } = storeToRefs(todos);
// 作为 action 的 changeFilterText, filteredTodos, addTodo 可以直接解构
const { changeFilterText, filteredTodos, addTodo } = todos;
const { increment } = counter;

function handleFilter() {
  filter.value = 'finished';
}
</script>

<style lang="scss" scoped>
.home_view {
  background-color: azure;
  color: $color-main;
}
.item {
  cursor: pointer;
  color: black;
  width: 50px;
  margin: 10px;
  padding: 10px;
  background-color: aquamarine;
}
</style>
