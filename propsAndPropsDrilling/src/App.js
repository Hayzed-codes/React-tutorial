import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {
  // const name = "Hayzed";
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
    <div className="App">
      <Header title = "Welcome to props" />
      <Content 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer length={items.length}/>

    </div>
    
    


  );
}

{/* JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). */}
export default App;
