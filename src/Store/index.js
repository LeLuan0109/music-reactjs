import { configureStore } from '@reduxjs/toolkit';
import isPlayingSlice from './reducters/isPlaying.slice';
import isRandomSlice from './reducters/isRandom.slice';
import isRepeatSlice from './reducters/isRepeat.slice';
const store = configureStore({
  reducer: {
    isPlaying: isPlayingSlice,
    isRandom: isRandomSlice,
    isRepeat: isRepeatSlice,
  },
});
export default store;
