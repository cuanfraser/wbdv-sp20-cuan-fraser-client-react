import React from "react";
import lessonService from "../../services/LessonService";
import { updateLesson, deleteLesson } from "../../actions/lessonActions"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LessonTabsItemComponent extends React.Component {

    state = {
        edit: false,
        newTitle: "",
        selected: false
    }

    componentDidMount() {
        this.setState({
            selected: this.props.lesson._id === this.props.lessonId
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected !== this.state.selected) {
            this.setState({ edit: false })
        }
        if (this.state.selected !== (this.props.lesson._id === this.props.lessonId)) {
            this.setState({
                selected: this.props.lesson._id === this.props.lessonId
            })
        }
    }

    enableEditMode = e => {
        e.stopPropagation()
        this.setState({ edit: true })
    }

    updateLessonEvent = e => {
        e.stopPropagation()
        const lesson = { ...this.props.lesson }
        lesson.title = this.state.newTitle;
        this.props.updateLesson(lesson._id, lesson)
        this.setState({ edit: false })
    }

    deleteLessonEvent = e => {
        e.stopPropagation()
        this.props.deleteLesson(this.props.lesson._id)
        if (this.props.lesson._id === this.props.lessonId) {
            this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`)
        }
    }

    titleChangeEvent = e => {
        this.setState({ newTitle: e.target.value })
    }

    render() {
        return (
            <div key={this.props.lesson._id} className={`nav-item nav-link d-flex ${this.state.selected ? "active" : ""}`}>
                {!this.state.edit &&
                    <>
                        <div className="col">
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson._id}`}>
                                {this.props.lesson.title}
                            </Link>
                        </div>
                        <div className="float-right">
                            <i className="fas fa-edit fa pt-1 p-1" onClick={this.enableEditMode}></i>
                            <i className="fas fa-trash fa pt-1 p-1" onClick={() => this.props.deleteLesson(this.props.lesson._id)}></i>
                        </div>
                    </>}

                {this.state.edit && (
                    <>
                        <div className="col float-left">
                            <input className="form-control" type="text" placeholder="New Lesson Title" onChange={this.titleChangeEvent} />
                        </div>
                        <div className="float-right">
                            <i className="far fa-save fa pt-1 p-1" onClick={this.updateLessonEvent}></i>
                            <i className="fas fa-times pt-1 p-1" onClick={() => this.setState({ edit: false })}></i>
                        </div>
                    </>
                )}
            </div>
        )
    }
}


const stateToPropertyMapper = state => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateLesson: (lessonId, lesson) => {
            lessonService.updateLesson(lessonId, lesson)
                .then(actualLesson =>
                    dispatch(updateLesson(lessonId, actualLesson)))
        },
        deleteLesson: (lessonId) => {
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsItemComponent);
