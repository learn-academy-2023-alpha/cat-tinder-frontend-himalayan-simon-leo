import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <div className='footer-board'>
        <Nav pills>

          <NavItem>
            <NavLink href="#">

              <p>&copy; Alpha Cohort 2023 | Simon Curry & Leopoldo Fabian Cuero Rodriguez</p> 
            

            </NavLink>
          </NavItem>


        </Nav>
      </div>
    </>
  )
}

export default Footer