import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { axiosV1 } from '../../config/api'

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.get<IUser[]>('/users')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользоватилей ')
    }
  },
)

interface UserState {
  users: IUser[]
  title: string
  sort: string
  isLoading: boolean
  error: string
  count: number
}
const initialState: UserState = {
  users: [],
  sort: '',
  title: '',
  isLoading: false,
  error: '',
  count: 0,
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortedItem: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    getTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    clearInput: (state) => {
      state.title = ''
    },
  },
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
      state.isLoading = false
      state.error = ''
    },
    [getUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = true
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { sortedItem, getTitle, clearInput } = userSlice.actions

export default userSlice.reducer
