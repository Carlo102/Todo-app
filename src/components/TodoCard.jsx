export function TodoCard(props) {
    let { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo, handleSaveEditedTodo, editingIndex, editedText, setEditedText } = props

    return (

        <div className='card todo-item'>
            {editingIndex === todoIndex ? (
                <input type="text" value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />

            ) : (
                <p>{todo.input}</p>
            )}
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
                {editingIndex === todoIndex ? (
                    <button onClick={() => {
                        handleSaveEditedTodo()
                    }}>
                        <h6>Save</h6>
                    </button>
                ) : (
                    <button onClick={() => {
                        handleEditTodo(todoIndex)
                    }} disabled={todo.complete}>
                        <h6>Edit</h6>
                    </button>
                
                )}

            </div>
        </div>
    )
}