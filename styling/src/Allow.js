import React from 'react'
import './Allow.css';

const Allow = () => {
    const display = () => {
        const food = ['Bread', 'Beans', 'Rice', 'Yam', 'Egg'];
        const init = Math.floor(Math.random() * 5);

        return food[init]
        
    }

   


  return (
    <main className='classWork'>
        <h3>I like to eat {display()}</h3>
      <p>This is the work given</p>
      
    </main>
  )
}

export default Allow
