import { CREATE_MODULE, FIND_MODULE_FOR_COURSE, FIND_MODULE, UPDATE_MODULE, DELETE_MODULE, SYNC_EDIT_INPUT } from "../constants.js";

const initialState = {
    modules: [],
    editModuleTitle: "test"
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case FIND_MODULE_FOR_COURSE:
            return {
                modules: action.modules
            }
        case UPDATE_MODULE:
            return {
                modules: [
                    state.modules.filter(module => module._id !== action.moduleId),
                    action.module
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        case SYNC_EDIT_INPUT:
            return {
                editModuleTitle: action.editModuleTitle
            }
        default:
            return state
    }
}

export default moduleReducer