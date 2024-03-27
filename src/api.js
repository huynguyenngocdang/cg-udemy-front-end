import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Địa chỉ của server API
});

export default {
    getCourses: () => api.get('/courses'),
    createCourse: (course) => api.post('/courses', course),
    updateCourse: (course) => api.put(`/courses/${course.id}`, course),
    deleteCourse: (courseId) => api.delete(`/courses/${courseId}`),
};
