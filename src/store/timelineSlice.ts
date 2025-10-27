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
    initGroup(state, action: PayloadAction<string>) {
      const isExist = state.activeIdGroups[action.payload];
      if (!isExist) {
        state.activeIdGroups[action.payload] = {
          id: state.timelines[0].id,
          showTopic: true
        };
      }
    },
    changeIdByGroupName(
      state,
      action: PayloadAction<{ groupName: string; id: number }>
    ) {
      state.activeIdGroups[action.payload.groupName].id = action.payload.id;
    },
    toggleShowTopic(
      state,
      action: PayloadAction<{ groupName: string; show: boolean }>
    ) {
      state.activeIdGroups[action.payload.groupName].showTopic =
        action.payload.show;
    }
  }
});

export const timelineSliceActions = timelineSlice.actions;
export default timelineSlice;
