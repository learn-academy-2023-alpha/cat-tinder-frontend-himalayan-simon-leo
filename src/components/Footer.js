import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <Nav pills>

        <NavItem>
          <NavLink active href="#">

            <p>&copy; Alpha Cohort 2023 | Simon Curry & Leopoldo Fabian Cuero Rodriguez</p> 
          

          </NavLink>
        </NavItem>


      </Nav>
  </>
  )
}

export default Footer