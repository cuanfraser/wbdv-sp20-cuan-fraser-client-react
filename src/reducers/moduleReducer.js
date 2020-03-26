import { CREATE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE, DELETE_MODULE } from "../constants.js";

const initialState = {
    modules: []
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
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
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