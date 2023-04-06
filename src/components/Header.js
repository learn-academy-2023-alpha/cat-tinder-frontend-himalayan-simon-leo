import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import cat1 from '../assests/cat-4912133_1280.png'

const Header = () => {
  return (
    <>
      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/CatIndex">
          <img alt="my-image" src={cat1} style={{height: 40, width: 40}} />
          <p>Get Started!</p>
        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="secondary" dark >
        <NavbarBrand href="/">

          <p>Catssss</p>

        </NavbarBrand>
      </Navbar>

      <Navbar className="my-2" color="dark" dark >
        <NavbarBrand href="/">
          <img alt="catlogo" src={cat1} style={{height: 40, width: 40}}/>
          <p> So Many Catsss</p>
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Header