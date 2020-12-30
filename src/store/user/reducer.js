import {
    createSlice
} from "@reduxjs/toolkit";
import {
    login,
    logout
} from "./actions";

const user = createSlice({
    name: "user",
    initialState: {
        logged: false
    },
    extraReducers: {
        [login.type]: (user, action) => {
            user = {
                ...action.payload,
                logged: true
            };
            return user;
        },
        [logout.type]: (user, action) => {
            user = {
                logged: false
            };
            return user;
        }
    },
});
const userReducer = user.reducer;
export default userReducer;