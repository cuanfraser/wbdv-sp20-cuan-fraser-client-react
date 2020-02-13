import {CREATE_MODULE, FIND_MODULE_FOR_COURSE, FIND_MODULE, UPDATE_MODULE, DELETE_MODULE} from "../constants.js"

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const findModuleForCourse = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
})

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})