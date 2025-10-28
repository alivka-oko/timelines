import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    <Swiper spaceBetween={80} navigation={true} slidesPerView={3}>
      {activeTimeline.slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent.id} virtualIndex={index}>
          <div className={`slide ${showTopic ? 'visible' : ''}`}>
            <div>{slideContent.year}</div>
            <div>{slideContent.text}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
