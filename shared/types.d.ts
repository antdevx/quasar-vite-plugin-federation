declare module 'todo-form/*' {}

declare module 'todo-list/*' {}

declare module 'todo-footer/*' {}

declare module 'sharedComposables' {
  export function useTodo (): {
    todos: Ref<string[]>;
    getTodos: () => Ref<string[]>;
    addTodo: (item: string) => void;
    toggleTodo: (index: number) => void;
    removeTodo: (index: number) => void;
  };
}