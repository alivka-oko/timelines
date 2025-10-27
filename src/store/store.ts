import { configureStore } from '@reduxjs/toolkit';
import timelineSlice from './timelineSlice';

export const store = configureStore({
  reducer: {
    timeline: timelineSlice.reducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
