import { TodoCard } from "./TodoCard";

export function Todolist(props) {

    let { todos, selectedTab } = props



    let filterTodolist = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)
    return (
        <>
            {filterTodolist.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input
                            == todo.input)}

                        {...props}
                        todo={todo} />
                )
            }
            )}


        </>
    )
}