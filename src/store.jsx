// store.js
import { configureStore } from '@reduxjs/toolkit';
import { osmApi } from './components/slice/osmApiSlice';

const store = configureStore({
  reducer: {
    [osmApi.reducerPath]: osmApi.reducer,  // إضافة الـ reducer الخاص بالـ osmApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(osmApi.middleware),
});

export default store;
