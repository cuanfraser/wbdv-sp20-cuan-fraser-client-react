import {CREATE_LESSON, FIND_LESSON_FOR_MODULE, FIND_LESSON, UPDATE_LESSON, DELETE_LESSON} from "../constants.js"

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})

export const findLessonForModule = (lessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: lessons
})

export const updateLesson = (lessonId, lesson) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId,
    lesson: lesson
})

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})