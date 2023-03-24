import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "bd3c9dc299mshe715df2405fa878p1f2c89jsn8060a01418f1"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/track",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) => `/songs/list-recommendations?key=${songid}&l=en-US`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/get-details?id=${artistId}`,
    }),
    getArtistTopSongs: builder.query({
      query: ({ artistId }) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (counry) =>
        `/charts/track?locale=ru-${counry}&pageSize=20&startFrom=0`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&limit=20`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = spotifyApi;
