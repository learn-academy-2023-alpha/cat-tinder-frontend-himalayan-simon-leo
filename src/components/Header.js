import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import cat3 from '../assests/download.png'
import cat1 from '../assests/cat-4912133_1280.png'

const Header = () => {
  return (
    <>
      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/">
          <img alt="my-Image" src={cat1} style={{height: 40, width: 40}} />
        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="secondary" dark >
        <NavbarBrand href="/">

          Catssss

        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/">
          <img alt="logo" src={cat1} style={{height: 40, width: 40}}/>
          So Many Catsss
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header