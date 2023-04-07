import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink, useParams, useNavigate } from 'react-router-dom'



const CatShow = ({cats, deleteCat}) => {
  const {id}= useParams()
  const navigate = useNavigate()
  let selectedCat = cats.find(cat => cat.id === +id)

  const handleSubmit = () => {
    deleteCat(selectedCat.id)
    navigate("/catindex")
  }
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
                <NavLink to="/catindex">
                    <Button onClick={handleSubmit}>Delete Profile</Button>
                </NavLink>

              </CardBody>
            </Card>
          )}
      </>
    )

  }
export default CatShow