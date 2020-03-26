import {CREATE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC, DELETE_TOPIC} from "../constants.js"

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})

export const findTopicsForLesson = (topics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: topics
})

export const updateTopic = (topicId, topic) => ({
    type: UPDATE_TOPIC,
    topicId: topicId,
    topic: topic
})

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})