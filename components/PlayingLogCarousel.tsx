import { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
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
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={log.id}>
        <PlayingLogCard playingLog={log}></PlayingLogCard>
      </CarouselItem>
    );
  });

  const goToIndex = (index: number) => {
    if (animating) return;
    setActiveIndex(index);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === playingLogs.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? playingLogs.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="yrl-carousel pb-5">
      <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={4000}>
        {carouselItems}
        <CarouselIndicators items={playingLogs} activeIndex={activeIndex} onClickHandler={goToIndex} />
      </Carousel>
    </div>
  );
};

export default PlayingLogCarousel;
