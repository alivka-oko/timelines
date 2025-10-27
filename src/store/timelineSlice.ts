import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimelineState } from './types';
import { mockTimelines } from '../mocks/timelines';

const initialState: TimelineState = {
  activeIdGroups: {},
  timelines: mockTimelines
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    changeIdByGroupName(
      state,
      action: PayloadAction<{ groupName: string; id: number }>
    ) {
      state.activeIdGroups[action.payload.groupName] = action.payload.id;
    }
  }
});

export const timelineSliceActions = timelineSlice.actions;
export default timelineSlice;
