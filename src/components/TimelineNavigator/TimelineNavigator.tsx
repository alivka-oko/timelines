import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { changeIdWithAnimation } from '../../store/timelineThunks';
import './TimelineNavigator.scss';

export function TimelineNavigator({ groupName }: { groupName: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.timeline.timelines);
  const group = useSelector(
    (state: RootState) => state.timeline.activeIdGroups[groupName]
  );
  const activeIndex = items.findIndex((item) => item.id === group?.id);

  const maxIndex = items.length - 1;
  const nextId = activeIndex < maxIndex ? activeIndex + 1 : 0;
  const prevId = activeIndex > 0 ? activeIndex - 1 : maxIndex;
  const next = () => {
    dispatch(changeIdWithAnimation(groupName, items[nextId].id));
  };
  const prev = () => {
    dispatch(changeIdWithAnimation(groupName, items[prevId].id));
  };

  return (
    <div className='timeline__navigator'>
      <div className='timeline__navigator-counter'>
        {activeIndex + 1}/{items.length}
      </div>
      <div className='timeline__navigator-buttons'>
        <button
          className='timeline__navigator-button prev'
          onClick={prev}
          disabled={activeIndex === 0}
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071'
              stroke='#42567A'
              strokeWidth='2'
            />
          </svg>
        </button>
        <button
          onClick={next}
          className='timeline__navigator-button next'
          disabled={!(activeIndex < maxIndex)}
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071'
              stroke='#42567A'
              strokeWidth='2'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
