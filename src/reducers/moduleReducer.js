import {CREATE_MODULE, FIND_MODULE_FOR_COURSE, FIND_MODULE, UPDATE_MODULE, DELETE_MODULE} from "../constants.js";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {

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
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
            return state
    }
}

export default moduleReducer