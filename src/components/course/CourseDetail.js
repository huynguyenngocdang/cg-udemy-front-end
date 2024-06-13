import React, { useEffect } from "react";
import {
  selectcourseDetail,
  getcourse,
  removecourse,
} from "../../features/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseDetail() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseDetail = useSelector(selectcourseDetail);

  const getcourseDetail = async () => {
    if (courseId != null) {
      dispatch(getcourse(courseId));
      console.log(courseDetail);
    }
  };

  useEffect(() => {
    getcourseDetail();
  }, []);

  function getBackcourseList() {
    navigate("/teacher");
  }

  function removeCurrentcourse() {
    if (courseId) {
      dispatch(removecourse(courseId));
      alert(`Remove course ${JSON.stringify(courseDetail)} successfully!!!`);
      navigate("/teacher");
    }
  }

  return (
    <div>
      <h1>course Detail</h1>
      <p>
        <b style={{margin:20}}>Id:</b> {courseDetail?.id}
      </p>
      <p>
        <b>Name:</b> {courseDetail?.name}
      </p>
      <p>
        <b>Price:</b> {courseDetail?.price}
      </p>
      <p>
        <b>Description:</b> {courseDetail?.description}
      </p>
      <button type="button" onClick={getBackcourseList}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeCurrentcourse}>
        Remove
      </button>
    </div>
  );
}
