import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const startEdit = (todo) => {
      setEditingId(todo.id)
      setEditText(todo.text)
    }
    const cancelEdit = () => {
      setEditingId(null)
      setEditText('')
    }
    const saveEdit = (id) => {
      dispatch(updateTodo({id, text: editText}))
      setEditingId(null)
      setEditText('')
    }

  return (
    <>
     <div>Todos</div>
    <ul className="list-none">
    {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <>
                <input
                  className="bg-gray-800 text-white px-2 py-1 rounded mr-2"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="space-x-2">
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-white bg-green-500 border-0 py-1 px-3 rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="text-white bg-gray-500 border-0 py-1 px-3 rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="space-x-2 flex items-center">
                  <button
                    onClick={() => startEdit(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-3 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 rounded text-md"
                  >
                    {/* your existing delete SVG here */}
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos