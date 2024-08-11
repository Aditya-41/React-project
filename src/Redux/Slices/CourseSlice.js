import toast from "react-hot-toast"

import axiosInstance from '../../Helpers/axiosinstance'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    courseData : [],
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const responce = axiosInstance.get("/courses");
        toast.promise(responce, {
            loading : "Loading Courses data ...",
            success : "Courses loaded Succesfully",
            error : "Failed to get the Courses"
        });
        return (await responce).data.courses;
    }
    catch(error) {
        toast.error(error?.responce?.data?.message)
    }
})

const courseSlice = createSlice({
    name : "courses",
    initialState,
    reducers : {},
    extraReducers : (biulder) => {

    }
})

export default courseSlice.reducer