import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Footer = () => {
  return (
    <>
        <Nav pills>
      <NavItem>
        <NavLink
          active
          href="#"
        >
          Our Cats
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
         Create a Cat
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Are you a Cat?
        </NavLink>
      </NavItem>
    </Nav>
</>
  )
}

export default Footer