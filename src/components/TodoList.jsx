import './../styles/wholeStyle.css'
import TodoItems from "./TodoItems.jsx";

// eslint-disable-next-line react/prop-types
export default function TodoList({ todos, deleteHandler, handleToggle, handleEdit}) {
    return (
        <div className='todo-list'>
            <ul>
                {todos.map(todo => {
                    return (
                        <TodoItems
                            key={todo.id}
                            // id={todo.id}
                            // title={todo.title}
                            // display={todo.display}
                            {...todo}
                            completed={todo.completed}
                            deleteHandler={deleteHandler}
                            handleToggle={handleToggle}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
        </div>
    )
}