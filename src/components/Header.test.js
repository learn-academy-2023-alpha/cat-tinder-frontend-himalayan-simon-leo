import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import cat1 from '../assests/cat-4912133_1280.png'




describe("<Header />", () =>{
  it ("checks the images in header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )


    // screen.logTestingPlaygroundURL()
    const image = screen.getByRole('img', {
      name: /my\-image/i
    })
    expect(image).toHaveAttribute('src', cat1)
    
  })
  
  // it ("checks my secondary header images with link", () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   )
    
  //   const image2 =  getByRole('img', { name: /my\-image/i })
  //   expect(image2).to 
    
  // ;

  // })

})