import Counter from "./components/Counter"
import Login from "./components/Login"
import Todo from "./components/Todo"


const App = () => {
  return (
  <>
  <h1 className="text-center">Global State Management</h1>

  <Login/>
  <Todo/>
  <Counter/>
  </>
  )
}

export default App