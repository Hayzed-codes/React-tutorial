import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useRef } from 'react'


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">
        Add item
      </label>

      <input 
      autoFocus
      ref={inputRef}
      type="text"
      id='addItem'
      placeholder='Add Item'
      required
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      />

      <button
      type='Submit'
      aria-label='Add Item'
      onClick={(e) => inputRef.current.focus(e)}

      >
      
      <FaPlus />  
      </button>


    </form>
  )
}

export default AddItem
