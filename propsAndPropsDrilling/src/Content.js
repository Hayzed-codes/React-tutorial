import { FaTrashCan } from "react-icons/fa6";
import './Content.css';

const Content = ({items, handleCheck, handleDelete}) => {

    
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
