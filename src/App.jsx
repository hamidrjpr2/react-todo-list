import Formlist from './components/Formlist.jsx'
// import TodoList from "./components/TodoList.jsx";
import './styles/wholeStyle.css'
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList.jsx";

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem('todos')
        return localTodos ? JSON.parse(localTodos) : []
    })

    const [sFilter, setSFilter] = useState(todos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos]);

    function addTodo(title) {
        setTodos(myTodos => {
            return [
                ...myTodos,
                {id: Math.random() * 100, title, completed: false, display:'flex'}
            ]
        })
        console.log(todos)
    }


    function handleEdit(id, newTitle, keyCode) {
        setTodos(myTodos => {
            return myTodos.map(row => {
                if (row.id === id) {
                    return {...row, title: newTitle}
                }
                return row
            })
        })

        if (keyCode == 'Enter') {
            setTodos(myTodos => {
                return myTodos.map(row => {
                    if (row.id === id) {
                        return {...row, title: newTitle}
                    }
                    return row
                })
            })
        }
    }

    function handleToggle(id, myChecked) {
        setTodos(myTodos => {
            return myTodos.map(row => {
                if (row.id === id) {
                    return {...row, completed: myChecked}
                }
                return row
            })
        })

    }

    function deleteHandler(id) {
        setTodos(myTodos => {
            return myTodos.filter(row => row.id !== id)
        })
    }

    function handleSearch(title) {
        setTodos(myTodos => {
            return myTodos.map(row => {
                return (row.title.toLowerCase().includes(title.toLowerCase())) ? {...row, display:'flex'} : {...row, display: 'none'}

            })
        })
    }

    return (
        <>
            <main>
                <Formlist
                    addTodo={addTodo}
                    handleSearch={handleSearch}
                />
                <TodoList todos={todos}
                          deleteHandler={deleteHandler}
                          handleToggle={handleToggle}
                          handleEdit={handleEdit}
                />
            </main>
        </>
    )
}