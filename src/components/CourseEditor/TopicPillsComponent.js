import React from "react";
import { connect } from "react-redux";
import topicService from "../../services/TopicService";
import { createTopic, findTopicsForLesson } from "../../actions/topicActions";
import TopicPillsItemComponent from "./TopicPillsItemComponent";

class TopicPillsComponent extends React.Component {

    state = {
        newTopicTitle: ""
    }

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lessonId !== this.props.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <div>
                <h3>Topics</h3>

                <ul className="nav nav-pills wbdv-topic-pill-list">

                    {this.props.topics &&
                        this.props.topics.map(topic =>
                            <TopicPillsItemComponent key={topic._id} history={this.props.history} courseId={this.props.courseId}
                                moduleId={this.props.moduleId} lessonId={this.props.lessonId} topicId={this.props.topicId} topic={topic} />
                        )
                    }

                    <li className="nav-item">
                        <button className="nav-link link-button"
                            onClick={() => this.props.createTopic(this.props.lessonId)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatch) => ({
    createTopic: (tid, topic) =>
        topicService.createTopic(tid, { title: "New Topic" })
            .then(actualTopic => dispatch(createTopic(actualTopic))),
    findTopicsForLesson: (tid) =>
        topicService.findTopicsForLesson(tid)
            .then(topics => dispatch(findTopicsForLesson(topics)))
})

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)
    (TopicPillsComponent)