import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/user.interface"
import { fetchUsers } from "./actions"

interface IUserState {
    users: IUser[],
    isLoading: boolean,
    error: string | null,
    count: number
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null,
    count: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { // synchronous actions
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    },
    extraReducers: (builder) => {  // asynchronous actions
        builder
            .addCase(fetchUsers.fulfilled, (state:IUserState, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state: IUserState) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected, (state: IUserState, action: PayloadAction<unknown>) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
})

export default userSlice.reducer;
export const { increment, decrement } = userSlice.actions;
