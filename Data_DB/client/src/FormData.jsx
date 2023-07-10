import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
function FormData() 
{
    const [name , setName] = useState()
    const [email , setEmail] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/add',{name,email})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <Container>
  <h1>Enter Data</h1>
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
    </Form.Group>
    <Form.Group>
      <Form.Control type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Enter</Button>
  </Form>
</Container>

  )
}

export default FormData
