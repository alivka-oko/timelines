import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { timelineSliceActions } from '../../store/timelineSlice';
import './Circle.scss';
import { AnimatedYear } from '../AnimatedYear/AnimatedYear';
import { changeIdWithAnimation } from '../../store/timelineThunks';

export function Circle({ groupName }: { groupName: string }) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(timelineSliceActions.initGroup(groupName));
  }, [groupName]);

  const items = useSelector((state: RootState) => state.timeline.timelines);
  const group = useSelector(
    (state: RootState) => state.timeline.activeIdGroups[groupName]
  );
  const activeItemId = group?.id ?? items[0].id;

  const activeItemIndex = items.findIndex((item) => item.id === activeItemId);
  const peak = 240;
  const anglePerItem = 360 / items.length;

  const circleRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [rotate, setRotate] = useState(240);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const showTopic = group?.show ?? false;
  useEffect(() => {
    if (circleRef.current) {
      const [width, height] = [
        circleRef.current.clientWidth,
        circleRef.current.clientHeight
      ];
      setRadius(Math.min(width, height) / 2);
    }
    setRotate(peak - activeItemIndex * anglePerItem);
  }, [activeItemIndex]);

  const handleClick = (index: number) => {
    setRotate(peak - index * anglePerItem);
    dispatch(changeIdWithAnimation(groupName, items[index].id));
  };

  return (
    <div className='circle-timeline'>
      <div className='years'>
        <AnimatedYear
          year={items[activeItemIndex].yearFrom}
          style='primary-color'
        />
        <AnimatedYear
          year={items[activeItemIndex].yearTo}
          style='secondary-color'
        />
      </div>
      <div
        className='circle'
        ref={circleRef}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {items.map((item, index) => {
          const baseSize = 56;
          const smallSize = 6;
          const size =
            item.id === activeItemId || hoverIndex === index
              ? baseSize
              : smallSize;
          const angle = (360 / items.length) * (index + 1);
          const rad = (angle * 3.14) / 180;
          const x = radius * Math.cos(rad) - size / 2;
          const y = radius * Math.sin(rad) - size / 2;
          return (
            <div
              key={item.id}
              className={`item ${item.id === activeItemId ? 'active' : ''}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${x}px, ${y}px) rotate(${
                  360 - rotate
                }deg)`
              }}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {index + 1}
              <div
                className={`topic ${
                  showTopic && activeItemId === item.id ? 'visible' : ''
                }`}
              >
                {item.topic}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
