import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from '../features/podcasts/podcastsSlice';

export const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
  },
});