import React from 'react'
import { useParams } from 'react-router'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const CatShow = ({cats}) => {
  const {id}= useParams()
  let selectedCat = cats.find(cat => cat.id === +id)
    return (
      <>
      {selectedCat && (
        <Card style={{ width: '18rem' }} >
            <img alt={selectedCat.name} src={selectedCat.image} />
              <CardBody>

                <CardTitle tag="h5">
                  Name: {selectedCat.name}
                </CardTitle>

                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                 Age: {selectedCat.age}
                </CardSubtitle>

                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                 Enjoys: {selectedCat.enjoys}
                </CardSubtitle> 
                <Button>
                  <NavLink to={`/catedit/${selectedCat.id}`} className="nav-link">
                    Edit Cat Profile
                  </NavLink>
                </Button>

              </CardBody>
            </Card>
          )}
      </>
    )

  }
export default CatShow