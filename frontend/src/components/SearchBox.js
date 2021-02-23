import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            history.push(`/?keyword=${keyword}`)
        }
        else{
            history.push(history.push(history.location.pathname))
        }

    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} className='mr-sm-2'>

            </Form.Control>

            <Button type='submit' variant='outline-info' className='p-2 my-1 mx-1'>Search</Button>
            
        </Form>
    )
}

export default SearchBox
