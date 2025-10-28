import { AppThunk } from './store';
import { timelineSliceActions } from './timelineSlice';

export const changeIdWithAnimation =
  (groupName: string, id: number): AppThunk =>
  (dispatch) => {
    dispatch(timelineSliceActions.toggleShow({ groupName, show: false }));
    dispatch(timelineSliceActions.changeIdByGroupName({ groupName, id }));

    setTimeout(() => {
      dispatch(timelineSliceActions.toggleShow({ groupName, show: true }));
    }, 1000);
  };
