import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { Todolist } from "./components/Todolist";
import { useState, useEffect } from 'react'

function App() {

  // let todos = [
  //   { input: 'First to do!', complete: true },
  //   { input: 'Second to do!', complete: false },
  //   { input: 'Third to do!', complete: false },
  //   { input: 'Fourth to do!', complete: true },
  // ]  

  let [todos, setTodos] = useState([])

  let [selectedTab, setSelectedTab] = useState('All')
  let [editingIndex, setEditingIndex] = useState(null)
  let [editedText, setEditedText] = useState('')

  function handleAddTodo(newTodo) {
    let newTodolist = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodolist)
    handleSaveData(newTodolist)
  }

  function handleEditTodo(index) {
    setEditingIndex(index)
    setEditedText(todos[index].input)
  }

  function handleSaveEditedTodo() {
    let newTodoList = [...todos]
    newTodoList[editingIndex].input = editedText
    setTodos(newTodoList)
    setEditingIndex(null)
    setEditedText('')
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleCompleteTodo(index) {

    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify ({ todos: currTodos }))
  }


  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }

    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)

  }, [])

  return (

    <>

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
      <Todolist handleEditTodo={handleEditTodo}
      handleSaveEditedTodo={handleSaveEditedTodo}
      editedText={editedText} setEditedText={setEditedText}
      editingIndex={editingIndex}
      handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab} todos={todos} />
    </>
  )
}

export default App;