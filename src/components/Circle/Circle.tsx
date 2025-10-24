import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { timelineSliceActions } from '../../store/timelineSlice';

export function Circle() {
  const activeItem = useSelector(
    (state: RootState) => state.timeline.activeTimelineId
  );
  const items = useSelector((state: RootState) => state.timeline.timelines);
  const item = useSelector((state: RootState) => state.timeline.timelines).find(
    (item) => item.id === activeItem
  );
  const peak = 300;
  const anglePerItem = 360 / items.length;
  const dispatch = useDispatch<AppDispatch>();

  const circleRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [rotate, setRotate] = useState(peak);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (circleRef.current) {
      const [width, height] = [
        circleRef.current.clientWidth,
        circleRef.current.clientHeight
      ];
      setRadius(Math.min(width, height) / 2);
    }
    setRotate(peak - activeItem * anglePerItem);
  }, []);

  const handleClick = (index: number) => {
    setRotate(peak - index * anglePerItem);
    dispatch(timelineSliceActions.setActiveTimeline(index));
  };

  return (
    <>
      <div
        className='circle'
        ref={circleRef}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {items.map((item) => {
          const baseSize = 56;
          const smallSize = 6;
          const size =
            item.id === activeItem || hoverIndex === item.id
              ? baseSize
              : smallSize;
          const angle = (360 / items.length) * item.id;
          const rad = (angle * 3.14) / 180;
          const x = radius * Math.cos(rad) - size / 2;
          const y = radius * Math.sin(rad) - size / 2;
          return (
            <div
              key={item.id}
              className={`item ${item.id === activeItem ? 'active' : ''}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${x}px, ${y}px) rotate(${
                  360 - rotate
                }deg)`
              }}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => setHoverIndex(item.id)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.id}
            </div>
          );
        })}
      </div>
      <div className='title'>
        {item?.yearFrom} - {item?.yearTo}
      </div>
    </>
  );
}
