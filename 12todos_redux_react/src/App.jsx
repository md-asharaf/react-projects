import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
function App() {
  return (
    <div className='w-1/2 mx-auto text-center'>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
