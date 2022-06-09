import React, {useState} from 'react'
import EditQuote from './EditQuote.js'

const QuotesItem=(props)=>{
    const {id , name, body, removeItem, editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove=()=>{
        const confirmRemove = window.confirm("Are you Sure you want to remove this Item?")
        if (confirmRemove){
            removeItem(id)
        }
        
    }

    const handleToggle = ()=>{
        // const result  = !toggle
        // setToggle(result)

        setToggle(!toggle)
    }

    
    return (
        <div>
        {
            toggle ? 
            (<div>
                <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle}/>
                <button onClick={handleToggle}>Cancel</button>
            </div>) : 
            ( <div>
             <blockquote>{body} - {name}
             
             </blockquote>
             <button onClick={handleToggle}>Edit</button>
             <button onClick={handleRemove}>Remove</button>
          </div>)
        }
        </div>
    )
}

export default QuotesItem