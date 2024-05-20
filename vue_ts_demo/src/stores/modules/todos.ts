import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

interface Todo {
	text: string
	id: number
	isFinished: boolean
}

type Filter = 'all' | 'finished' | 'unfinished'
export const useTodos = defineStore('todos', () => {
	const todoList = ref<Todo[]>([
		{ text: '111', id: 1, isFinished: true },
		{ text: '222', id: 1, isFinished: false },
		{ text: '333', id: 1, isFinished: true }
	])
	const filter = ref<Filter>('all')
	const nextId = ref(0)

	// 选项式 API 自有$reset()
	// 组合式 重置state,
	function $reset() {
		todoList.value = [
			{ text: '111', id: 1, isFinished: true },
			{ text: '222', id: 1, isFinished: false },
			{ text: '333', id: 1, isFinished: true }
		]
		filter.value = 'all'
		nextId.value = 0
	}

	function finishedTodos() {
		return todoList.value.filter((todo: Todo) => todo.isFinished)
	}
	function unfinishedTodos() {
		return todoList.value.filter((todo: Todo) => !todo.isFinished)
	}

	function filteredTodos() {
		if (filter.value === 'finished') {
			return finishedTodos()
		} else if (filter.value === 'unfinished') {
			return unfinishedTodos()
		}
		return todoList.value
	}

	function addTodo(text: string) {
		const newTodo = {
			text,
			id: nextId.value++,
			isFinished: false
		}
		todoList.value.push(newTodo)
	}
	function changeFilterText(val: Filter) {
		filter.value = val
	}

	return { todoList, filter, filteredTodos, addTodo, changeFilterText, $reset }
})
