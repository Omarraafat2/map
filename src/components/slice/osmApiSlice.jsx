
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// إنشاء Slice لـ RTK Query لجلب بيانات OpenStreetMap من Overpass API
export const osmApi = createApi({
  reducerPath: 'osmApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://overpass-api.de/api/' }),
  endpoints: (builder) => ({
    getOsmData: builder.query({
      query: (query) => `interpreter?data=${encodeURIComponent(query)}`,
    }),
  }),
});

export const { useGetOsmDataQuery } = osmApi;
