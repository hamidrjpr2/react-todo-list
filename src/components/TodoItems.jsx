import { useState } from "react";

export default function TodoItems({ id, title, completed, display, handleToggle, deleteHandler, handleEdit }) {
    const [editMode, setEditMode] = useState(false);
    const [editNewItem, setEditNewItem] = useState('');

    return (
        <li style={{ display: display }}>
            {
                !editMode
                    ?
                    <div>
                        <h5>{title}</h5>
                        <div>
                            <label>
                                <input type="checkbox"
                                       checked={completed}
                                       onChange={(e) => handleToggle(id, e.target.checked)}
                                />
                            </label>
                            <i className="fa-duotone fa-solid fa-trash" onClick={() => deleteHandler(id)}></i>
                            <i className="fa-duotone fa-solid fa-pen-to-square" onClick={() => {
                                setEditMode(true);
                                setEditNewItem(title); // Ensure the edit input is initialized with the current title
                            }}></i>
                        </div>
                    </div>

                    : (
                        <div>
                            <input className={'content-edit'} type="text"
                                   value={editNewItem}
                                   onInput={e => setEditNewItem(e.target.value)} // Changed onInput to onChange
                                   onKeyUp={e => {
                                       if (e.key === 'Enter') {
                                           handleEdit(id, editNewItem); // Use editNewItem directly
                                           setEditMode(false);
                                       }
                                   }}
                            />
                            <div>
                                <i className="fa-solid fa-cloud-xmark fa-duotone fa-solid fa-xmark-large" onClick={() => {
                                    setEditMode(false);
                                    setEditNewItem(title); // Reset the edit value to the original title
                                }}></i>
                                <i className="fa-solid fa-check" onClick={() => {
                                    handleEdit(id, editNewItem); // Use editNewItem directly
                                    setEditMode(false);
                                }}></i>
                            </div>
                        </div>
                    )
            }
        </li>
    );
}
