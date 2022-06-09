import React from 'react'
import QuotesContainer from './components/QuotesContainer.js'
import './App.css'

const App = (props)=>{
  return (
    <div className='App'>
      <h1>Quote App</h1>
      <QuotesContainer/>
    </div>
  )
}

export default App