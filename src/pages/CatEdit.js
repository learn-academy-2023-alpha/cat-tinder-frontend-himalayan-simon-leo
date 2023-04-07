import React, {useState} from 'react'
import {Form, Col, FormGroup, Label, Button, FormText, Input} from 'reactstrap'
import {useNavigate, useParams} from 'react-router-dom'



const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat?.name,
    age: currentCat?.age,
    enjoys: currentCat?.enjoys,
    image: currentCat?.image
  })

  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
  updateCat(editCat, currentCat?.id)
  navigate(`/catshow/${currentCat.id}`)
}


  return (
    <>
      <Form>
        <FormGroup row>

          <Label 
          for="name"
          sm={2}>

            Cat Name
          </Label>

          <Col sm={10}>
            <Input
              name="name"
              placeholder={currentCat.name}
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
              name="age"
              placeholder={currentCat.age}
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
              placeholder={currentCat.enjoys}
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
              placeholder={currentCat.image}
              type="text"
              onChange={handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ offset: 2, size: 10}}>

            <Button onClick={handleSubmit} name="submit">
              Submit Changes
            </Button>

          </Col>
        </FormGroup>

      </Form>
    </>
  )
}

export default CatEdit