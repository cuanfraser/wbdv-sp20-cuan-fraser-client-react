import {CREATE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_ALL_WIDGETS, UPDATE_WIDGET, DELETE_WIDGET} from "../constants.js"

export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
})

export const findAllWidgetsForTopic = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
})

export const updateWidget = (widgetId, widget) => ({
    type: UPDATE_WIDGET,
    widgetId: widgetId,
    widget: widget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})