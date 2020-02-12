import { COURSES_URL, MODULES_URL } from "../constants";

export const findModuleForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    deleteModule,
    findModuleForCourse
}