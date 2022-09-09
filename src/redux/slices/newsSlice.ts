import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INews } from '../../models/IUser'
import { axiosV1 } from '../../config/api'
import { Values } from '../../pages/AddNews/AddNews'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.get<INews[]>('/news')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить новости ')
    }
  },
)
export const postNews = createAsyncThunk(
  'news/postNews',
  async (values: Values, thunkAPI) => {
    try {
      const { data } = await axiosV1.post<INews[]>('/news', values)
      return console.log(data)
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить новости ')
    }
  },
)

interface NewsState {
  news: INews[]
  title: string
  sort: string
  isLoading: boolean
  error: string
}
const initialState: NewsState = {
  news: [],
  sort: '',
  title: '',
  isLoading: false,
  error: '',
}
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    sortedItem: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    getTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    clearField: (state) => {
      state.title = ''
    },
  },
  extraReducers: {
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
      state.isLoading = false
      state.error = ''
    },
    [fetchNews.pending.type]: (state, action: PayloadAction<INews[]>) => {
      state.isLoading = true
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [postNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
      state.isLoading = false
      state.error = ''
    },
    [postNews.pending.type]: (state, action: PayloadAction<INews[]>) => {
      state.isLoading = true
    },
    [postNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { sortedItem, getTitle, clearField } = newsSlice.actions

export default newsSlice.reducer
