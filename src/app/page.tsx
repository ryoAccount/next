import Image from 'next/image'
import AddTask from './component/AddTask'
import TodoList from './component/TodoList'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200'>
      <h1 className='text-4xl font-bold text-gray-700 -mt-32'>Next 13 Todo App</h1>
      <div className='w-full max-w-xl mt-5'>
        <div className='w-full px-8 py-6 bg-white shadow-md rounded-lg'>
          <AddTask></AddTask>
          <TodoList></TodoList>
        </div>
      </div>
    </main>
  )
}
