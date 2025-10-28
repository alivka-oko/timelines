import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FreeMode, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

export function Slider({ groupName }: { groupName: string }) {
  const items = useSelector((state: RootState) => state.timeline.timelines);
  const group = useSelector(
    (state: RootState) => state.timeline.activeIdGroups[groupName]
  );
  const activeItemId = group?.id ?? items[0].id;
  const activeTimeline = items.find((item) => item.id == activeItemId);
  const show = group?.show ?? false;
  if (!activeTimeline?.slides) {
    return;
  }

  const [slides, setSlides] = useState(activeTimeline.slides);

  useEffect(() => {
    setTimeout(() => {
      setSlides(activeTimeline.slides);
    }, 1000);
  }, [activeItemId]);

  return (
    <div className={`timeline-slider ${show ? 'visible' : ''}`}>
      <Swiper
        modules={[FreeMode, Navigation]}
        draggable={'true'}
        grabCursor={true}
        spaceBetween={80}
        slidesPerView={'auto'}
        freeMode={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev'
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index}>
            <div className={`slide`}>
              <h3 className='slide-year'>{slideContent.year}</h3>
              <p className='slide-desc'>{slideContent.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='button-prev custom-nav'>
        <svg
          width='8'
          height='12'
          viewBox='0 0 8 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.707093 0.707092L5.70709 5.70709L0.707093 10.7071'
            stroke='#3877EE'
            strokeWidth='2'
          />
        </svg>
      </div>
      <div className='button-next custom-nav'>
        <svg
          width='8'
          height='12'
          viewBox='0 0 8 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.707093 0.707092L5.70709 5.70709L0.707093 10.7071'
            stroke='#3877EE'
            strokeWidth='2'
          />
        </svg>
      </div>
    </div>
  );
}
