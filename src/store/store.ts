import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import timelineReducer from './timelineSlice';

export const store = configureStore({
  reducer: {
    timeline: timelineReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
