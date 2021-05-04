import { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import PlayingLogCard from './PlayingLogCard';

import { PlayingLog } from '../interfaces/models/PlayingLog';

type Props = {
  playingLogs: PlayingLog[];
}

const PlayingLogCarousel: React.FC<Props> = ({ playingLogs }: Props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const carouselItems = playingLogs.map((log) => {
    return (
      <div className="yrl-carousel">
        <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={log.id}>
          <PlayingLogCard playingLog={log}></PlayingLogCard>
          <CarouselCaption className="yrl-playing-log-carousel-item" captionText=""></CarouselCaption>
        </CarouselItem>
      </div>
    );
  });

  const goToIndex = (index: number) => {
    if (animating) return;
    setActiveIndex(index);
  };

  return (
    <>
      <Carousel activeIndex={activeIndex} next={() => {}} previous={() => {}} interval={4000}>
        {carouselItems}
        <CarouselIndicators items={playingLogs} activeIndex={activeIndex} onClickHandler={goToIndex} />
      </Carousel>
    </>
  );
};

export default PlayingLogCarousel;
