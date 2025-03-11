import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import { IUser } from "../../interfaces/user.interface";

export const fetchUsers = createAsyncThunk <IUser[], void>(
    "users/fetchAll",
    async (_, thunkApi) => {
        try {
            const res = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            return res.data;
        } catch (error) {
            console.error("Fetch users error:", error); 
            return thunkApi.rejectWithValue("Users not found");
        }
    }
);
