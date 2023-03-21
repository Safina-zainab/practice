import create from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text: any) =>
    set((state: { todos: any }) => ({
      todos: [{ text }, ...state.todos],
    })),
}));
