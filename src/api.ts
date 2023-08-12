import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" }) // SSR
  return res.json()
}

export const addTodo = async (todo: Task): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
   }) 
  return res.json()
}

export const editTodo = async (id: string, newTask: string): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: newTask })
   }) 
  return res.json()
}
