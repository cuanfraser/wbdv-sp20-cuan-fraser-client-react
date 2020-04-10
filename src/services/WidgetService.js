import { TOPICS_URL, WIDGETS_URL } from "../constants";
// const WIDGETS_URL = "http://localhost:8080/api/widgets"
// const TOPICS_URL = "http://localhost:8080/api/topics"

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const findWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`)
        .then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createWidget,
    findWidgetsForTopic,
    findWidget,
    updateWidget,
    deleteWidget
}