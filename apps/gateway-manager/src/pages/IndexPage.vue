<template>
  <AppShell>
    <div class="row items-center justify-evenly">
      <div class="col-6">
        <h2>Composable Todo App</h2>
      </div>
    </div>
    <div class="q-pa-sm row items-center justify-evenly">
      <div class="col-6">
        <RemoteTodoForm />
      </div>
    </div>
    <div class="q-pa-sm row items-center justify-evenly">
      <div class="col-6">
        <RemoteTodoList />
      </div>
    </div>
  </AppShell>
</template>
<script setup lang="ts">
import { AppShell } from 'shared'
import { defineAsyncComponent } from 'vue'

const RemoteTodoForm = defineAsyncComponent(() => import('todo-form/TodoForm'))
const RemoteTodoList = defineAsyncComponent(() => import('todo-list/TodoList'))
</script>
