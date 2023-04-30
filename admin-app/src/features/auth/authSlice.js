import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserfromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


export const login = createAsyncThunk(
    'auth/admin-login', async (user, thunkApi) => {
        try {
            return await authService.login(user);

        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const getOrders = createAsyncThunk(
    "order/get-orders",
    async (thunkApi) => {
        try {
            return await authService.getOrders();
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const getOrder = createAsyncThunk(
    "order/get-order",
    async (id,thunkApi) => {
        try {
            return await authService.getOrder(id);
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)
export const updateAOrder = createAsyncThunk(
    "order/update-order",
    async (data,thunkApi) => {
        try {
            return await authService.updateOrder(data);
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)

export const getMonthlyData = createAsyncThunk(
    "orders/monthlydata",
    async (thunkApi) => {
        try {
            return await authService.getMonthlyOrders();
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)
export const getYearlyData = createAsyncThunk(
    "orders/yearlydata",
    async (thunkApi) => {
        try {
            return await authService.getYearlyStats();
        }
        catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.singleorder = action.payload;
                state.message = "success";
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getMonthlyData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMonthlyData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orderbyuser = action.payload;
                state.monthlydata = "success";
            })
            .addCase(getMonthlyData.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getYearlyData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getYearlyData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orderbyuser = action.payload;
                state.yearlydata = "success";
            })
            .addCase(getYearlyData.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateAOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.updatedorder = action.payload;
                state.message = "success";
            })
            .addCase(updateAOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            
    },
});

export default authSlice.reducer;