import {CREATE_MODULE, FIND_MODULE_FOR_COURSE, FIND_MODULE, UPDATE_MODULE, DELETE_MODULE, SYNC_EDIT_INPUT} from "../constants.js"

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const findModuleForCourse = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
})

export const updateModule = (moduleId, module) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId,
    module: module
})

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const syncEditInput = (moduleId, editModuleTitle) => ({
    type: SYNC_EDIT_INPUT,
    moduleId: moduleId,
    editModuleTitle: editModuleTitle
})