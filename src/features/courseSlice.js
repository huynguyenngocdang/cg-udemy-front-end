import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    findCourses,
    findCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} from "../api/courseAPI";

const initialState = {
    values: null,
    value: null,
    loading: false,
    error: null,
    success: false,
};

export const getCourses = createAsyncThunk("course/list", async () => {
    const response = await findCourses();
    return response.data;
});

export const getCourse = createAsyncThunk("course/detail", async (courseId) => {
    const response = await findCourse(courseId);
    return response.data;
});

export const addCourse = createAsyncThunk("course/create", async (course) => {
    const response = await createCourse(course);
    return response.data;
});

export const editCourse = createAsyncThunk("course/edit", async (course) => {
    const response = await updateCourse(course);
    return response.data;
});

export const removeCourse = createAsyncThunk("course/remove", async (courseId) => {
    const response = await deleteCourse(courseId);
    return response.data;
});

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //Update states of get courses action
            .addCase(getCourses.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.values = action.payload;
                state.error = false;
            })

            //Update states of get course action
            .addCase(getCourse.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getCourse.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getCourse.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of add course action
            .addCase(addCourse.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(addCourse.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(addCourse.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of edit course action
            .addCase(editCourse.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(editCourse.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(editCourse.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of remove course action
            .addCase(removeCourse.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(removeCourse.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(removeCourse.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            });
    },
});

export const {setLoading, setError, setSuccess} = courseSlice.actions;

export const selectLoading = (state) => state.course.loading;
export const selectError = (state) => state.course.error;
export const selectSuccess = (state) => state.course.success;
export const selectCourseList = (state) => state.course.values;
export const selectCourseDetail = (state) => state.course.value;
export const selectCourseAdded = (state) => state.course.value;
export const selectcourseEdited = (state) => state.course.value;
export const selectcourseRemoved = (state) => state.course.value;

//Enhancement feature of course slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
    const currentValue = selectLoading(getState());
    if (currentValue === isCalled) {
        dispatch(setLoading(true));
    }
};

export default courseSlice.reducer;