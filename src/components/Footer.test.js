import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';



describe("<Footer />", () =>{
  it ("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    // screen.logTestingPlaygroundURL()
    const footer = screen.getByText(
      /© alpha cohort 2023 \| simon curry & leopoldo fabian cuero rodriguez/i)
    expect(footer).toBeInTheDocument()

  
  })
})