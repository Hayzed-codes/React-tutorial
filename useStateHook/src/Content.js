import {useState} from 'react';
import { FaTrashCan } from "react-icons/fa6";
import './Content.css';

const Content = () => {
  // const [name, setName] = useState('Kenny');
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

    // const handleNameChange = () => {
    //     const names = ["Fulanny", "Zainabuuu", "Hayzed"];
    //     const int = Math.floor(Math.random() * 3);
    
    //     setName(names[int])
    //   }; 



    //   const handleCLick2 = (name) => {
    //     console.log(`${name} was clicked`)
    //   }
    
  return (
    
    <main className='student'>
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleCLick}>Click me</button>
      <button onDoubleClick={() => handleCLick2('Hayzed')}>Click me</button> */}

      <ul>
        {items.map((item) => {
          return (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked}  />

            <label>{item.item}</label>
            <FaTrashCan/>
          </li>
        );
})}
      </ul>

    </main>
  )
}

export default Content
