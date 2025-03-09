import axios from "axios";

const course_MANAGEMENT_API =
  "http://localhost:8080";

export const findcourses = async () => {
  let result = null;
  try {
    result = await axios.get(`${course_MANAGEMENT_API}/api/courses`);
  } catch (e) {
    console.log("Find courses API error: " + e);
  }
  return result;
};

export const findcourse = async (courseId) => {
  let result = null;
  try {
    result = await axios.get(`${course_MANAGEMENT_API}/api/courses/${courseId}`);
  } catch (e) {
    console.log("Find course API error: " + e);
  }
  return result;
};

export const createcourse = async (courseData) => {
  let result = null;
  try {
    result = await axios.post(`${course_MANAGEMENT_API}/api/courses`, courseData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (e) {
    console.log("Find course API error: " + e);
  }
  return result;
};

export const updatecourse = async (course) => {
  let result = null;
  try {
    result = await axios.put(`${course_MANAGEMENT_API}/api/courses/${course.id}`, course);
  } catch (e) {
    console.log("Update course API error: " + e);
  }
  return result;
};

export const deletecourse = async (courseId) => {
  let result = null;
  try {
    result = await axios.delete(`${course_MANAGEMENT_API}/api/courses/${courseId}`);
  } catch (e) {
    console.log("Delete course API error: " + e);
  }
  return result;
};
