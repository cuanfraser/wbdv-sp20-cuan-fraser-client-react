import { UPDATE_WIDGET, DELETE_WIDGET, CREATE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_ALL_WIDGETS } from "../constants.js";

const widgets = []

const widgetReducer = (
    state = { widgets: widgets }, action) => {
    switch (action.type) {
        case UPDATE_WIDGET:
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case DELETE_WIDGET:
            console.log("widgetId action: " + action.widgetId)
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }
        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer