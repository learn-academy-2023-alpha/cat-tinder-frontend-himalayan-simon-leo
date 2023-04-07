import { render, screen } from '@testing-library/react';
import CatNew from './CatNew';
import { BrowserRouter } from 'react-router-dom';


describe("<CatNew />", () => {
    it("renders the CatNew page for the user", () => {
        render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
        )
      // screen.logTestingPlaygroundURL()
      const inputTitle = screen.getByText(/cat name/i)
      expect(inputTitle).toBeInTheDocument()
    })

  })
