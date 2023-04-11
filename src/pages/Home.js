import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://www.shelterluv.com/sites/default/files/animal_pics/13719/2023/04/03/09/20230403091529.png',
    altText: 'Slide 1',
    caption: 'MVP',
    key: 1,
    url: 'https://www.kittyofangels.org/adopt.html#sl_embed&page=shelterluv_embed_137191660769533000%2Fembed%2Fanimal%2FRTLA-A-1079'
  },
  {
    src: 'https://www.shelterluv.com/sites/default/files/animal_pics/13719/2023/03/23/15/20230323152543.png',
    altText: 'Ruby',
    caption: 'Ruby',
    key: 2,
    url: 'https://www.kittyofangels.org/adopt.html#sl_embed&page=shelterluv_embed_137191660769533000%252Fembed%252Fanimal%252FRTLA-A-1114'
  },
  {
    src: 'https://www.austinpetsalive.org/assets/animals/_gallery/20230315193814.png',
    altText: 'Slide 3',
    caption: 'General Erasmus Dickinson',
    key: 3,
    url: 'https://www.austinpetsalive.org/adopt/cats/apa-a-99394'
  },
];

const imgStyle = {
  height: '500px',
  width: '100%',
  objectFit: 'cover',
}

function Catspin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const captionStyle = {
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
    padding: '10px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <a href={item.url} target="_blank">
          <img src={item.src} alt={item.altText} style={imgStyle} />
        </a>
        <CarouselCaption
          captionHeader={item.caption}
          css={captionStyle}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

const Home = () => {
  return (
    <Catspin />
  );
};

export default Home;