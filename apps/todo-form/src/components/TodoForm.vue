<!-- apps/todo-form/src/components/TodoForm.vue -->
<template>
  <!-- <q-input v-model="newTodo" label="Add todo" @keyup.enter="submit" /> -->
  <div class="row q-pa-sm bg-primary">
    <q-input filled dense square class="col" bg-color="white" v-model="newTodo" placeholder="Add Task"
      @keyup.enter="addTask">
      <template v-slot:append>
        <q-btn round dense flat icon="add" color="primary" @click="addTask" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from 'sharedComposables';

const { addTodo } = useTodo()
const newTodo = ref('')

function addTask() {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>
