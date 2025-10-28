import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FreeMode, Navigation } from 'swiper/modules';

export function Slider({ groupName }: { groupName: string }) {
  const items = useSelector((state: RootState) => state.timeline.timelines);
  const group = useSelector(
    (state: RootState) => state.timeline.activeIdGroups[groupName]
  );
  const activeItemId = group?.id ?? items[0].id;
  const activeTimeline = items.find((item) => item.id == activeItemId);
  const showTopic = group?.showTopic ?? false;
  if (!activeTimeline?.slides) {
    return;
  }
  return (
    <div className='timeline-slider'>
      <Swiper
        modules={[FreeMode, Navigation]}
        spaceBetween={80}
        slidesPerView={'auto'}
        freeMode={true}
        centeredSlides={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
      >
        {activeTimeline.slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index}>
            <div className={`slide ${showTopic ? 'visible' : ''}`}>
              <h3 className='slide-year'>{slideContent.year}</h3>
              <p className='slide-desc'>{slideContent.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-button-prev custom-nav'></div>
      <div className='swiper-button-next custom-nav'></div>
    </div>
  );
}
