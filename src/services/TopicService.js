import { TOPICS_URL } from "../constants";
// TODO CHANGE
const LESSONS_URL = "https://cs4550-hw6-javaserver-cfraser.herokuapp.com/api/lessons"
// const TOPICS_URL = "http://localhost:8080/api/topics"

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`)
        .then(response => response.json())


export const updateTopic = (topicId, topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}