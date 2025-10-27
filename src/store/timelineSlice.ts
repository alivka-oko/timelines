import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TimelineState } from './types';
import { mockTimelines } from '../mocks/timelines';

const initialState: TimelineState = {
  activeTimelineId: 1,
  timelines: mockTimelines,
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setActiveTimeline(state, action: PayloadAction<number>) {
      state.activeTimelineId = action.payload;
    }
  }
});

export const timelineSliceActions = timelineSlice.actions;
export default timelineSlice;
