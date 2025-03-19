import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  getCourse,
  selectCourseDetail,
  editCourse,
} from "../../features/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseEditing() {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const isCreate = !courseId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseDetail1 = useSelector(selectCourseDetail);
  
  const success = useSelector(selectSuccess);
  const [courseDetail, setCourseDetail] = useState({});

  const getcourseDetail = async () => {
    if (courseId != null) {
      dispatch(getCourse(courseId));
      setCourseDetail(courseDetail1);
      console.log(courseDetail1);
      console.log(courseId)
    }
  };

  useEffect(() => {
    getcourseDetail();
  }, []);

  function handleChange(event) {
    setCourseDetail({
      ...courseDetail,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editCourse(courseDetail));
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
    // window.location.reload();
  }

  return (
    <div>
      <h1>course Edit</h1>
      <form>
        <div>
          <label style={{margin:20}}>Id</label>
          <input
            name="id:                            "
            value={courseDetail?.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{margin:20}}>Name</label>
          <input
            name="name"
            value={courseDetail?.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{margin:20}}>Price</label>
          <input
            name="price"
            value={courseDetail?.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{margin:20}}>Description</label>
          <input
            name="description"
            value={courseDetail?.description || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackcourseList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
}
