import { render, screen } from '@testing-library/react';
import CatShow from './CatShow';
import { MemoryRouter, Routes } from 'react-router-dom';
import mockCats from './mockCats'

const rendershow = () => {
   render(
      <MemoryRouter initialEntries={"/catshow/1"}>
        <Routes>
            <Route path="/catshow/:id" element={<CatShow cats={mockCats}/>} />
        </Routes>
      </MemoryRouter>
    ) 
}



describe("<CatIndex />", () =>{
  it ("renders cat enjoys attibute", () => {
    rendershow()
    // screen.logTestingPlaygroundURL()
    const enjoys = screen.getByText(`${mockCats[0].enjoys}`)

    expect(enjoys).toBeInTheDocument()
    



})
})