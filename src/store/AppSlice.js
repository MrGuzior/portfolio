import { createSlice } from '@reduxjs/toolkit'
import resumeData from './resumeData.json'

export const appSlice = createSlice({
  name: 'data',
  initialState: resumeData,
  reducers: {
  },
})

export const selectData = state => state.data

export default appSlice.reducer