import { COURSES_URL } from "../constants";

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllCourses = async () => {
    const response = await fetch(COURSES_URL);
    return await response.json();
}

export const findCourseById = (id) =>
    fetch(`${COURSES_URL}/${id}`)
        .then(response => response.json())


export const updateCourse = (id, course) =>
    fetch(`${COURSES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
