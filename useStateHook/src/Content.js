import {useState} from 'react';
import { FaTrashCan } from "react-icons/fa6";
import './Content.css';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'A bag of Garri' 
    },
    {
      id: 2,
      checked: false,
      item: 'Rice' 
    },
    {
      id: 3,
      checked: false,
      item: 'Semo' 
    },
    {
      id: 4,
      checked: false,
      item: 'Ponmo' 
    },
  ])

const handleCheck = (value) => {
  // console.log(`key: ${id}`);
  const listItems = items.map((item) => 
    item.id  === value ? { ...item, checked: !item.checked } :item
  );
  setItems(listItems);
  localStorage.setItem('Shoppinglist', JSON.stringify(listItems))
}

const handleDelete = (del) => {
  const listItems = items.filter((item) => item.id !== del);
  setItems(listItems);
  // localStorage.setItem('Delete', JSON.stringify(listItems))
};

    
  return (
    
    <main className='student'>

      {items.length ? (
        <ul>
        {items.map((item) => {
          return (
          <li className='item' key={item.id}>
            <input type="checkbox" 
            onClick={() => handleCheck(item.id)}
            checked={item.checked}  />

            <label 
            style={(item.checked) ? {textDecoration: "line-through"} : null}
            onDoubleClick={() => handleDelete(item.id)}>
              {item.item}</label>
            <FaTrashCan 
            onClick={() => handleDelete(item.id)}
            role='button'
            tabIndex={0}/>
          </li>
        );
})}
      </ul>
      ) : (
        <p style={{marginTop: "2rem"}}>
          Your list is empty

        </p>
      )}

    </main>
  )
}

export default Content
