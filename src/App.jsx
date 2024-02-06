import './App.css'
import { Button,myButton } from './components/button/Button'
import Login from './components/login/Login'
import Parent from './components/Pages/Parent'
import StudentList from './components/studentList/StudentList'
import SwitchTheme from './components/switchTheme/SwitchTheme'
import TodoList from './components/todoList/TodoList'
function App() {
  return (
    <div>
      <TodoList/>
      {/* <StudentList/> */}
      {/* <Login/> */}
     {/* <Parent/>
    <Button/>
    <SwitchTheme/> */}
    </div>
  )
}

export default App
//conditinal rendering (state ? true: false) (state && true)