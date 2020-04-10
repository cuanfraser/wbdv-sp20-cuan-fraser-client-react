import { CREATE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC, DELETE_TOPIC } from "../constants.js";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => topic.id === action.topic.id ? action.topic : topic)
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }
        default:
            return state
    }
}

export default topicReducer