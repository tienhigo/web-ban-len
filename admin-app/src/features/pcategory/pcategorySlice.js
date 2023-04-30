import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import pcategoryService from "./pcategoryService";


export const getCategories = createAsyncThunk(
    "productCategory/get-categories",
    async (thunkAPI) => {
        try {
            return await pcategoryService.getCategories();
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

export const createCategory = createAsyncThunk(
    "productCategory/create-category",
    async (categoryData, thunkAPI) => {
        try {
            return await pcategoryService.createCategory(categoryData);

        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateACategory = createAsyncThunk(
    "productCategory/update-category",
    async (category, thunkAPI) => {
        try {
            return await pcategoryService.updateCategory(category);

        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getACategory = createAsyncThunk(
    "productCategory/get-category",
    async (id,thunkAPI) => {
        try {
            return await pcategoryService.getCategory(id);
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });
export const deleteACategory = createAsyncThunk(
        "productCategory/delete-category",
        async (id,thunkAPI) => {
            try {
                return await pcategoryService.deleteCategory(id);
            }
            catch (error) {
                return thunkAPI.rejectWithValue(error);
            }
        });

export const resetState = createAction("Reset_all");

const initialState = {
    pcategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const pcategorySlice = createSlice({
    name: "pcategories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pcategories = action.payload;

            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

            })
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdCategory = action.payload;

            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

            })
            .addCase(getACategory.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(getACategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.categoryName = action.payload.title;

            })
            .addCase(getACategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

            })
            .addCase(updateACategory.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(updateACategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedCategory = action.payload;

            })
            .addCase(updateACategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

            })
            .addCase(deleteACategory.pending, (state) => {
                state.isLoading = true;

            })
            .addCase(deleteACategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCategory = action.payload;

            })
            .addCase(deleteACategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

            })
            .addCase(resetState, () => initialState);
        ;
    },
});
export default pcategorySlice.reducer;