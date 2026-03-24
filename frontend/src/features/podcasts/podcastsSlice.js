import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPodcasts = createAsyncThunk(
  'podcasts/fetchPodcasts',
  async (searchQuery = 'technology', { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/podcasts?search=${searchQuery}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchQuery: '',
    category: 'all',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcasts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPodcasts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPodcasts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Erreur inconnue';
      });
  },
});

export const { setSearchQuery, setCategory } = podcastsSlice.actions;
export default podcastsSlice.reducer;