import React, {useEffect, useState} from 'react'
import QuotesList from './QuotesList.js'
import AddQuote from './AddQuote.js'
import '../index.css';


const QuoteContainer = (props)=>{
    const [quotes, setQuotes] = useState([])

    //reading the quotes from local storage

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('quotes'))||[] // if local storage.getItem is true return quotes or  else return empty array
        setQuotes(result)
    },[])

    // writing / updating / setting the quotes to local storage

    useEffect(()=>{
        localStorage.setItem('quotes', JSON.stringify(quotes))
    },[quotes])

    const addItem=(quote)=>{
        console.log("addItem", quote)
        const result = [quote, ...quotes]
        setQuotes(result)
    }

    const editItem=(quote)=>{
        const result = quotes.map((q)=>{
            if (q.id===quote.id){
                return {...q ,...quote} // here 'q' is the original quote and 'quote' is an updated quote
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }

    const removeItem=(id)=>{
        const result = quotes.filter((quote)=>{
            return quote.id !==id
        })
        setQuotes(result)
    }

    return (
        <div className='quotes-container'>
            <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem}/>
            <AddQuote addItem={addItem}/>
        </div>
    )
}

export default QuoteContainer