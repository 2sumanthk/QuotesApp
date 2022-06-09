import React,{useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const QuoteForm=(props)=>{
    const {formSubmission, id : slNo, name:author, body:quote, handleToggle} = props
    const [id, setID] = useState(slNo ? slNo : uuidv4 ())
    const [name, setName] = useState(author ? author : '')
    const [body, setBody] = useState(quote ? quote : '')
    const [formErrors, setFormErrors] = useState({})


    const errors = {
    } // to handle empty fields error


    const handleChange=(e)=>{
        const attr = e.target.name
        if(attr==='name'){
            setName(e.target.value)
        }else if(attr==='body'){
            setBody(e.target.value)
        }
    }

    const runValidations = ()=>{
        if(name.trim().length===0){
            errors.name = 'Author name cannot be blank'
        }
        if(body.trim().length===0){
            errors.body = 'Quote field cannot be empty'
        }
    }




    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidations()


        if(Object.keys(errors).length===0){
            setFormErrors({})

            const formData ={
            id:id,
            name : name,
            body : body,
        }
        formSubmission(formData)
        console.log('form data',formData )

            if(handleToggle){
                 handleToggle()
             }

             setName('')
             setBody('')

    }  else{
            setFormErrors(errors)
            console.log('form Errors',errors)
        }

        // const formData = {
        //     id : id,
        //     name : name,
        //     body : body
        // }
        // formSubmission(formData)
        // console.log('form data',formData )

        // // reset the form
        // if(handleToggle){
        //     handleToggle()
        // }
        // setName('')
        // setBody('')
    }

    // const handleNameChange=(e)=>{
    //     setName(e.target.value)
    // }

    // const handleBodyChange=(e)=>{
    //     setBody(e.target.value)
    // }


    return (
        <div className='quotes-form'>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" value={name} name='name' onChange={handleChange}/><br/>
                {name==="" && formErrors.name && <span style={{color:'red'}}> {formErrors.name}</span> }
                <br/>
                <label>Body</label><br/>
                <textarea value={body} name='body' onChange={handleChange}/><br/>
                {body==="" && formErrors.body && <span style={{color:'red'}}> {formErrors.body}</span> }
                <br/>
                <input type='submit' value='Save'/>
            </form>
        </div>
    )
}

export default QuoteForm