export function Header(props) {
    let {todos} = props
    let todosLength = todos.length
    
    let isTasksPlural = todos.length !== 1

    let tasksorTask = isTasksPlural ? 'tasks' : 'task'


    return (

    <header>

        <h1 className="text-gradient">TO DO TASK {todosLength} {tasksorTask}</h1>

        </header>

    )
}