import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import cat1 from '../assests/cat-4912133_1280.png'

const Header = () => {
  return (
    <>
      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/CatIndex">
          {/* <img alt="my-image" src={cat1} style={{height: 40, width: 40}} /> */}
          <p>All Our cats</p>
        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="secondary" dark >
        <NavbarBrand href="/CatNew">

          <p>Post a cat</p>

        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/">
          {/* <img alt="catlogo" src={cat1} style={{height: 40, width: 40}}/> */}
          <p>Adopt a cat!</p>
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header