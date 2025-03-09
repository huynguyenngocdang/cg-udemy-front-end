import React, { useState, useEffect, useRef } from 'react';
import api from '../api';

function TeacherDashboard() {
    const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     api.getCourses().then(setCourses);
    // }, []);

    useEffect(() => {
        api.getCourses().then((result) => {
            setCourses(result.data)
        });
    }, []);


    const createCourse = async (course) => {
        const { name, video, price, category } = course;

        const videoData = await convertVideoToApiFormat(video);

        const newCourse = await api.post('/courses', { name, video: videoData, price, category });
        setCourses([...courses, newCourse]);
    };


    const updateCourse = async (updatedCourse) => {
        await api.updateCourse(updatedCourse);
        setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
    };

    const deleteCourse = async (courseId) => {
        await api.deleteCourse(courseId);
        setCourses(courses.filter(course => course.id !== courseId));
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <CourseList courses={courses} onUpdate={updateCourse} onDelete={deleteCourse} />
            <CourseForm onSubmit={createCourse} />
        </div>
    );
}

function CourseList({ courses, onUpdate, onDelete }) {
    console.log(courses);
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div
                class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
                        class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button">
                        <span class="sr-only">Action button</span>
                        Action
                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdownAction"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate
                                    account</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                User</a>
                        </div>
                    </div>
                </div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="table-search-users"
                        class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for users"></input>
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                {Array.isArray(courses) ? courses.map(course => (
                    <CourseItem key={course.id} course={course} onUpdate={onUpdate} onDelete={onDelete} />
                )) : null}
            </table>
        </div>
    );
}

function CourseItem({ course, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCourse, setEditedCourse] = useState(course);

    const handleUpdate = () => {
        onUpdate(editedCourse);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input value={editedCourse.name} onChange={e => setEditedCourse({ ...editedCourse, name: e.target.value })} />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                // <div>
                //     <h2>{course.name}</h2>
                //     {/* <video src={course.video} controls />  */}
                //     <button onClick={() => setIsEditing(true)}>Edit</button>
                //     <button onClick={() => onDelete(course.id)}>Delete</button>
                // </div>

                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg"
                                alt="Jese image"></img>
                            <div class="ps-3">
                                <div class="text-base font-semibold">{course.name}</div>
                                <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            React Developer
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" onClick={() => setIsEditing(true)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            <a href="#" onClick={() => onDelete(course.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete user</a>
                        </td>
                    </tr>

                </tbody>
                    
            )
}
        </div >
    );
}

function CourseForm({ onSubmit }) {
    const [newCourse, setNewCourse] = useState('');
    const [video, setVideo] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setcategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: newCourse, video, price, category });
        setNewCourse('');
        setVideo(null);
        setcategory('');
    };

    const handleVideoUpload = (videoFile) => {
        setVideo(videoFile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={newCourse} onChange={e => setNewCourse(e.target.value)} />
            <input value={price} onChange={e => setPrice(e.target.value)} />
            <input value={category} onChange={e => setPrice(e.target.value)} />
            <VideoUpload onUpload={handleVideoUpload} />
            <button type="submit">Create Course</button>
        </form>
    );
}

function VideoUpload({ onUpload }) {
    const fileInputRef = useRef();

    const handleUpload = async (event) => {
        event.preventDefault();
        const file = fileInputRef.current.files[0];
        if (file) {
            // Giả sử chúng ta có một API để tải lên video
            await api.uploadVideo(file);
            onUpload(file);
            alert('Video uploaded successfully!');
        } else {
            alert('Please select a video to upload');
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" accept="video/*" ref={fileInputRef} />
            <button type="submit">Upload Video</button>
        </form>
    );
}

function convertVideoToApiFormat(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}


export default TeacherDashboard;
