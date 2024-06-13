import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  findcourses,
  findcourse,
  createcourse,
  updatecourse,
  deletecourse,
} from "../api/courseAPI";

const initialState = {
  values: null,
  value: null,
  loading: false,
  error: null,
  success: false,
};

export const getcourses = createAsyncThunk("course/list", async () => {
  const response = await findcourses();
  return response.data;
});

export const getcourse = createAsyncThunk("course/detail", async (courseId) => {
  const response = await findcourse(courseId);
  return response.data;
});

export const addcourse = createAsyncThunk("course/create", async (course) => {
  const response = await createcourse(course);
  return response.data;
});

export const editcourse = createAsyncThunk("course/edit", async (course) => {
  const response = await updatecourse(course);
  return response.data;
});

export const removecourse = createAsyncThunk("course/remove", async (courseId) => {
  const response = await deletecourse(courseId);
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
      .addCase(getcourses.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getcourses.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getcourses.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.values = action.payload;
        state.error = false;
      })

      //Update states of get course action
      .addCase(getcourse.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(getcourse.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getcourse.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of add course action
      .addCase(addcourse.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(addcourse.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addcourse.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of edit course action
      .addCase(editcourse.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(editcourse.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(editcourse.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      })

      //Update states of remove course action
      .addCase(removecourse.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = false;
      })
      .addCase(removecourse.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removecourse.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.value = action.payload;
        state.error = false;
      });
  },
});

export const { setLoading, setError, setSuccess } = courseSlice.actions;

export const selectLoading = (state) => state.course.loading;
export const selectError = (state) => state.course.error;
export const selectSuccess = (state) => state.course.success;
export const selectcourseList = (state) => state.course.values;
export const selectcourseDetail = (state) => state.course.value;
export const selectcourseAdded = (state) => state.course.value;
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
