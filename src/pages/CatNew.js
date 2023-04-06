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
    <Label
      for="name"
      sm={2}
    >
      Cat Name
    </Label>
    <Col sm={10}>
      <Input
        name="name"
        placeholder="ittybittykittykats!"
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
      Cat Age
    </Label>
    <Col sm={10}>
      <Input
        name="Age"
        placeholder="0"
        type="number"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      Cat Enjoys
    </Label>
    <Col sm={10}>
      <Input
        id="enjoys"
        name="text"
        type="textarea"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="Enjoys"
      sm={2}
    >
      File
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it‘s great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
      Checkbox
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      <FormGroup check>
        <Input
          id="checkbox2"
          type="checkbox"
        />
        {' '}
        <Label check>
          Check me out
        </Label>
      </FormGroup>
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