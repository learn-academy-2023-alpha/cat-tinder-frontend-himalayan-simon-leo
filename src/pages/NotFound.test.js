import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router-dom';
import CAT404 from '../assests/CAT404.jpeg'


describe("<NotFound />", () =>{
    it ("checks the images in NotFound", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>

      ) 
      screen.logTestingPlaygroundURL()
     const NotFoundTest = screen.getByRole('img', {
        name: /my\-404\-image/i
      })
      expect(NotFoundTest).toHaveAttribute('src', CAT404)
      }
    )})