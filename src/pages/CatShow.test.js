import { render, screen } from '@testing-library/react';
import CatShow from './CatShow';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import cats from '../mockCats'

const rendershow = () => {
   render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
            <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
        </Routes>
      </MemoryRouter>
    ) 
}

describe("<CatIndex />", () =>{
  it ("renders cat enjoys attibute", () => {
    rendershow()
    // screen.logTestingPlaygroundURL()
    const enjoys = screen.getByRole('heading', {
      name: /enjoys: sunshine and warm spots/i
    })

    expect(enjoys).toBeInTheDocument()

})
})