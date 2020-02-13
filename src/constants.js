import { connect } from "react-redux"

export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/1293115"
export const COURSES_URL = `${API_URL}/courses`
export const MODULES_URL = `${API_URL}/modules`
export const LESSONS_URL = `${API_URL}/lessons`
export const TOPICS_URL = `${API_URL}/topics`

export const CREATE_MODULE = "CREATE_MODULE"
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE"
export const FIND_MODULE = "FIND_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const SYNC_EDIT_INPUT = "SYNC_EDIT_INPUT"

export const CREATE_LESSON = "CREATE_LESSON"
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE"
export const FIND_LESSON = "FIND_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELTE_LESSON"

export const CREATE_TOPIC = "CREATE_TOPIC"
export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON"
export const FIND_TOPIC = "FIND_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELTE_TOPIC"