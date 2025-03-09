import React, { useEffect } from "react";
import {
  selectcourseList,
  getcourses,
} from "../../features/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function CourseList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(selectcourseList);
  console.log(courses);
  const getcourseList = async () => {
    dispatch(getcourses());
  };

  useEffect(() => {
    getcourseList();
  }, []);

  function handleCreate(e) {
    e.preventDefault();
    navigate("/courses/add");
  }

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ color: 'blue', textAlign: 'center', fontSize: '2em' }}>courses</h1>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th colSpan={2}>
              <button type="button" onClick={handleCreate} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
                Create
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course) => (
            <tr key={course.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.price}</td>
              <td>
                <img src={course.video?.startsWith('http') ? course.video : `data:image/jpeg;base64,${course.video}`} alt={course.name} style={{ width: '200px', height: '200px' }} />
              </td>
              <td>{course.description}</td>
              <td>
                <Link to={`/courses/${course.id}`} style={{ color: 'blue' }}>Detail</Link>
              </td>
              <td>
                <Link to={`/courses/edit/${course.id}`} style={{ color: 'blue' }}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
