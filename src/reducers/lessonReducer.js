import { CREATE_LESSON, FIND_LESSON_FOR_MODULE, UPDATE_LESSON, DELETE_LESSON } from "../constants.js";

const initialState = {
    lessons: []
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case FIND_LESSON_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        case UPDATE_LESSON:
            return {
                lessons: [
                    state.lessons.filter(lesson => lesson._id !== action.lessonId),
                    action.lesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        default:
            return state
    }
}

export default lessonReducer