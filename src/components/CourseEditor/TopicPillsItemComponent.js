import React from "react";
import topicService from "../../services/TopicService";
import { updateTopic, deleteTopic } from "../../actions/topicActions"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TopicPillsItemComponent extends React.Component {

    state = {
        edit: false,
        selected: false,
        topic: this.props.topic
    }

    componentDidMount() {
        this.setState({
            selected: this.props.topic.id === this.props.topicId
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected !== this.state.selected) {
            this.setState({ edit: false })
        }
        if (this.state.selected !== (this.props.topic.id === this.props.topicId)) {
            this.setState({
                selected: this.props.topic.id === this.props.topicId
            })
        }
    }

    enableEditMode = e => {
        e.stopPropagation()
        this.setState({ edit: true })
    }

    updateTopicEvent = e => {
        e.stopPropagation()
        this.props.updateTopic(this.state.topic.id, this.state.topic)
        this.setState({ edit: false })
    }

    cancelChangeEvent = e => {
        e.stopPropagation()
        this.setState({ topic: this.props.topic, edit: false })
    }

    deleteTopicEvent = e => {
        e.stopPropagation()
        this.props.deleteTopic(this.props.topic.id)
        if (this.props.topic.id === this.props.topicId) {
            this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`)
        }
    }

    titleChangeEvent = e => {
        e.persist();
        this.setState(prevState => ({
            topic: {
                ...prevState.topic,
                title: e.target.value
            }
        }))
    }

    render() {
        return (
            <div key={this.props.topic.id} className={`nav-item nav-link d-flex ${this.state.selected ? "active" : ""}`}>
                {!this.state.edit &&
                    <>
                        <div className="col">
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}
                                className={`${this.state.selected ? "text-white" : ""}`}>
                                {this.state.topic.title}
                            </Link>
                        </div>
                        <div className="float-right">
                            <i className="fas fa-edit fa pt-1 p-1" onClick={this.enableEditMode}></i>
                            <i className="fas fa-trash fa pt-1 p-1" onClick={() => this.props.deleteTopic(this.props.topic.id)}></i>
                        </div>
                    </>}

                {this.state.edit && (
                    <>
                        <div className="col float-left">
                            <input className="form-control" type="text" placeholder="New Topic Title" onChange={this.titleChangeEvent} />
                        </div>
                        <div className="float-right">
                            <i className="far fa-save fa pt-1 p-1" onClick={this.updateTopicEvent}></i>
                            <i className="fas fa-times pt-1 p-1" onClick={this.cancelChangeEvent}></i>
                        </div>
                    </>
                )}
            </div>
        )
    }
}


const stateToPropertyMapper = state => {
    return {
        topics: state.topics.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateTopic: (topicId, topic) => {
            topicService.updateTopic(topicId, topic)
                .then(actualTopic =>
                    dispatch(updateTopic(topicId, actualTopic)))
        },
        deleteTopic: (topicId) => {
            topicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic(topicId)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillsItemComponent);
