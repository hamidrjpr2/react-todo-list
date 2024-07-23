import './../styles/wholeStyle.css'
import {useState} from "react";
import Search from './Search'

export default function Formlist({ addTodo, handleSearch }) {
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e) {
        if (e.type === 'click'){
            if (newItem === '') return
            addTodo(newItem)
            e.preventDefault()
            setNewItem('')
            e.target.previousElementSibling.focus()
        }
    }
    return (
        <>
            <Search
                style={{background: 'red'}}
                handleSearch={handleSearch}
            />
            <h1>
                React TodoList
            </h1>
            <div className='form'>
                <input type="text"
                    className='add-task'
                    placeholder='Add a task'
                       value={newItem}
                    onInput={e => {
                        setNewItem(e.target.value)
                    }}
                />
                <button className='add-task-btn'
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
        </>
    )
}