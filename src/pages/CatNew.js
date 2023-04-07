import React, { useState } from 'react'
import {Form, FormGroup, Col, Button, Label, Input} from 'reactstrap'
import { useNavigate } from 'react-router-dom'


const CatNew = ({createCat}) => {
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "", 
  })

  const handleChange = (e)=>{
    setNewCat({...newCat, [e.target.name]: e.target.value})
    
  }

  const handleSubmit = () =>{
    createCat(newCat)
    navigate("/catindex")
  }

  return (
  
    <>
      <div>CatNew</div>
      <Form>
  <FormGroup row>
    <Label
      for="name"
      sm={2}
    >
      Cat Name
    </Label>
    <Col sm={10}>
      <Input
        name="name"
        placeholder="What is your name?"
        type="text"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="age"
      sm={2}
    >
      Age
    </Label>
    <Col sm={10}>
      <Input
        name="age"
        placeholder="What is your age?"
        type="number"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>
  
  <FormGroup row>
    <Label
      for="enjoys"
      sm={2}
    >
      Enjoys
    </Label>
    <Col sm={10}>
      <Input
        name="Enjoys"
        placeholder="What do you enjoy?"
        type="text"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="image"
      sm={2}
    >
      image URL
    </Label>
    <Col sm={10}>
      <Input
        name="image"
        type="url"
        onChange={handleChange}
      />
    </Col>
  </FormGroup>

  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button onClick={handleSubmit} name='Submit'>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
    
    </>
  )
}

export default CatNew