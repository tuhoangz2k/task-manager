import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fetchCount } from './counter/counterAPI';
import { ILoginForm } from '../Models';
import { useAppSelector } from 'app/hooks';

type User = {
    id: number | string;
    username: string;
    password: string;
};
export interface usersState {
    isLogin: boolean;
    userList: Array<User>;
}

const initialState: usersState = {
    isLogin: !!localStorage.getItem('token'),
    userList: [
        { id: 1, username: 'username1@gmail.com', password: '123456' },
        { id: 2, username: 'username2@gmail.com', password: '123456' },
        { id: 3, username: 'username3@gmail.com', password: '123456' },
    ],
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    },
);

export const userSlice = createSlice({
    name: 'userList',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action: PayloadAction<ILoginForm>) => {
            const user = current(state.userList).find(
                (user) => user.username === 'username1@gmail.com',
            );
            if (!!user) {
                state.isLogin = true;
                localStorage.setItem('token', JSON.stringify(user.id));
            }
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {},
});

export const { login } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsLogin = (state: RootState) => state.userList.isLogin;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default userSlice.reducer;
