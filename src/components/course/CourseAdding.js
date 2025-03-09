import React, { useState } from "react";
import { selectcourseAdded, addcourse } from "../../features/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseAdding() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const isCreate = !courseId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseAdded = useSelector(selectcourseAdded);
  const [video, setVideo] = useState(null);

  function handleVideoChange(event) {
    setVideo(event.target.files[0]);
  }

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  async function  handleSubmit() {
    // Create a FormData instance to hold the video file
    const formData = new FormData();
    formData.append("video", video);
    formData.append("course", JSON.stringify(course));

    // Append other course data to the FormData instance
    for (const key in course) {
      formData.append(key, course[key]);
    }

    // Dispatch the addcourse action with the FormData instance
    await dispatch(addcourse(formData));
    setCourse(courseAdded);
    alert(
      `${isCreate ? "Create" : "Edit"} course ${JSON.stringify(
        course
      )} successfully!!!`
    );
    navigate("/teacher");
    // window.location.reload();
  }

  function getBackcourseList() {
    navigate("/");
  }

  return (
    <div>
      <h1>course Add</h1>
      <form>
        <div>
          <label>Course name</label>
          <input
            name="name"
            value={course?.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name="price"
            value={course?.price || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Stock</label>
          <input
            name="stock"
            value={course.stock || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Video</label>
          <input type="file" accept="video/*" onChange={handleVideoChange} />
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            value={course.description || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackcourseList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
