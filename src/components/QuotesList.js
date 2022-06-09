import React from 'react'
import QuotesItem from './QuotesItem'

const QuoteList=(props)=>{
    const {quotes, removeItem, editItem} = props
    return (
        <div>
           {
               quotes.length===0?(
                <div>
                    <h1>No Quotes Found</h1>
                    <p>Add Your First Quote</p>
                </div>
               ) : (
                   <div>
                        <h1>My Quotes - {quotes.length}</h1>
                        {quotes.map((quote)=>{
                            console.log("In Quotes List", {...quote})
                            return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
                        })}
                   </div>
               )
           }
        </div>
        
    )
}

export default QuoteList