import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import '../css/todoitem.css'

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    const [checked, setChecked] = useState(false);
    const [toClass, setToClass] = useState("row mx-2 align-items-center")
    let dispatch = useDispatch();

    const setCheckbox = () => {
        setChecked(!checked);
        if(!checked) {
            setToClass("row mx-2 align-items-center done")
        } else {
            setToClass("row mx-2 align-items-center")
        }
    }

    return (
        <div>
            <div className={toClass}>
                <input 
                    type="checkbox"
                    onChange={(e) => setCheckbox()} 
                    className="check_btn"
                />
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
