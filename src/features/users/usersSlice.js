import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Author Example 1'},
    { id: '1', name: 'Author Example 2'},
    { id: '2', name: 'Author Example 3'}
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export default usersSlice.reducer 