<template>
  <q-list 
    separator
    bordered
    class="bg-white"
  >
    <q-item 
      v-for=" (todo, index) in todos"
      :key="todo.text"
      @click="todo.done = !todo.done"
      :class="{ 'done bg-blue-1' : todo.done }"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-checkbox v-model="todo.done" class="no-pointer-events" color="primary" />
      </q-item-section>
      <q-item-section>
        <q-item-label :class="{ 'text-strike': todo.done }">{{ todo.text }}</q-item-label>
      </q-item-section>
      <q-item-section
        v-if="todo.done"
        side
      >
        <q-btn
          flat
          round
          icon="delete"
          color="primary"
          @click.stop="removeTodo(index)"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodo } from 'sharedComposables'

const { getTodos, removeTodo } = useTodo()
const todos = computed(() => getTodos().value)
</script>