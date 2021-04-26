import { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import PlayingLogCard from './PlayingLogCard';

import { PlayingLog } from '../interfaces/PlayingLog';

type Props = {
  playingLogs: PlayingLog[];
}

const PlayingLogCarousel: React.FC<Props> = ({ playingLogs }: Props) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);

  // const items = playingLogs.map(log => <PlayingLogCard playingLog={log}></PlayingLogCard>);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex: any) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = playingLogs.map((log) => {
  //   return (
  //     <CarouselItem
  //       className="custom-tag"
  //       tag="div"
  //       key={log.id}
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //     >
  //       <PlayingLogCard playingLog={log}></PlayingLogCard>
  //     </CarouselItem>
  //   );
  // });
  return (
    // <Carousel
    //   activeIndex={activeIndex}
    //   next={next}
    //   previous={previous}
    // >
    //   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //   {slides}
    // </Carousel>
    <>
      {playingLogs.map(log => <PlayingLogCard playingLog={log}></PlayingLogCard>)}
    </>
  );
};

export default PlayingLogCarousel;
