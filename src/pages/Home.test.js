import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';



describe("<Home />", () =>{
    it ("checks the images in header", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )