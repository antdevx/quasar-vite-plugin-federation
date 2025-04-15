import { ref } from 'vue'
import { Dialog, Notify } from 'quasar';

interface Todo {
  id: number
  text: string
  done: boolean
}

const todos = ref<Todo[]>([{
  id: 1000,
  text: 'Learn Vue 3',
  done: true
}, {
  id: 2000,
  text: 'Learn Quasar',
  done: true
}, {
  id: 3000,
  text: 'Build a Todo App',
  done: true
}])
let idCounter = 1

export function useTodo () {
  const getTodos = () => {
    todos.value.sort((a, b) => {
        if (a.done === b.done) return 0
        if (a.done && !b.done) return 1
        if (!a.done && b.done) return -1

        return 0
    })

    return todos
  }

  const addTodo = (text: string) => {
    todos.value.push({ id: idCounter++, text, done: false })
  }

  const toggleTodo = (id: number) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }

  const removeTodo = (index: number) => {
    Dialog.create({
      title: 'Confirm',
      message: 'Are you sure you want to DELETE?',
      cancel: true,
      persistent: true
    }).onOk(() => {
      todos.value.splice(index, 1)
      Notify.create({
        type: 'success',
        message: 'Todo removed'
      })
    })
  }

  return {
    todos,
    addTodo,
    getTodos,
    toggleTodo,
    removeTodo
  }
}
