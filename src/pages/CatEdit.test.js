import { render, screen } from '@testing-library/react';
import CatEdit from './CatEdit';
import { BrowserRouter } from 'react-router-dom';


describe("<CatEdit />", () => {
    it("renders the CatEdit page for the user", () => {
        render(
        <BrowserRouter>
            <CatEdit />
        </BrowserRouter>
        )
      screen.logTestingPlaygroundURL()
      const changes = screen.getByRole('button', {
        name: /submit changes/i
      })
      expect(changes).toBeInTheDocument()
    })

  })
