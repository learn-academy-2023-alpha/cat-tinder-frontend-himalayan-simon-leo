import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'

const CatIndex = ({cats}) => {

  return (
    <>
      <h1>CatIndex</h1>
      <div className='card-flex'>
      {cats.map((cat, index) =>{
        return (
          <>
            <Card key={index} style={{width: '18rem'}} >
                <img alt={cat.name} src={cat.image}/>

                  <CardBody>

                    <CardTitle tag="h5">
                      {cat.name}
                    </CardTitle>

                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {cat.age}
                    </CardSubtitle>

                    <Button>
                      <NavLink to={`/catshow/${cat.id}`}>More About Me</NavLink>
                    </Button>

                  </CardBody>
            </Card>
                
          </>
        )

      })}
      </div>
    </>
  )
}

export default CatIndex