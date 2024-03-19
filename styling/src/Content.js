import React from 'react'
import './Content.css';

const Content = () => {
    const handleNameChange = () => {
        const names = ["Fulanny", "Zainabuuu", "Hayzed"];
        const int = Math.floor(Math.random() * 3);
    
        return names [int]
      }; 

      const handleCLick = () => {
        console.log("You clicked")
      }

      const handleCLick2 = (name) => {
        console.log(`${name} was clicked`)
      }
    
  return (
    
    <main className='student'>
      <h1>{handleNameChange()}</h1>
      <button onClick={handleCLick}>Click me</button>
      <button onDoubleClick={() => handleCLick2('Hayzed')}>Click me</button>
    </main>
  )
}

export default Content
