import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function Slider({ groupName }: { groupName: string }) {
  const items = useSelector((state: RootState) => state.timeline.timelines);
  const group = useSelector(
    (state: RootState) => state.timeline.activeIdGroups[groupName]
  );
  const activeItemId = group?.id ?? items[0].id;

  return <>da {activeItemId}</>;
}
