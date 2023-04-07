import React, {useState} from 'react'
import {Form, Col, FormGroup, Label, Button, FormText, Input} from 'reactstrap'
import {useNavigate} from 'react-router-dom'




const CatNew = ({createCat}) => {
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/CatIndex")
}

  return (
    <>
      <Form>
        <FormGroup row>

          <Label for="name" sm={2}>
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
          <Label for="age" sm={2}>
            Cat Age
          </Label>

          <Col sm={10}>
            <Input
              name="Age"
              placeholder="What is your age?"
              type="number"
              onChange={handleChange}/>
              

          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Enjoys" sm={2} >
            Cat Enjoys
          </Label>
          <Col sm={10}>
            <Input
              id="enjoys"
              name="enjoys"
              placeholder='What do you enjoy?'
              type="textarea"
              onChange={handleChange}
              />
              
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="name" sm={2}>
            Cat Photo
          </Label>

          <Col sm={10}>
            <Input
              name="image"
              placeholder="Image URL"
              type="text"
              onChange={handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ offset: 2, size: 10}}>

            <Button onClick={handleSubmit} name="submit">
              Submit
            </Button>

          </Col>
        </FormGroup>

      </Form>
    </>
  )
}

export default CatNew