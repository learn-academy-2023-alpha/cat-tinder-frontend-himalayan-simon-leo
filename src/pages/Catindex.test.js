import { render, screen } from '@testing-library/react';
import CatIndex from './CatIndex';
import { BrowserRouter } from 'react-router-dom';
import cats from '../mockCats'


describe("<CatIndex />", () =>{
  it ("renders cat cards", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={cats} />
      </BrowserRouter>
    )
    cats.forEach(cat => {
        const catName = screen.getByText(cat.name)
        expect(catName).toBeInTheDocument()
    })
})
})