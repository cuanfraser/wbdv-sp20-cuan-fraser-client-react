import React from "react";
import { connect } from "react-redux";
import lessonService from "../../services/LessonService.js"
import { createLesson, findLessonsForModule } from "../../actions/lessonActions";
import LessonTabsItemComponent from "./LessonTabsItemComponent";

class LessonTabsComponent extends React.Component {

    state = {
        newLessonTitle: ""
    }

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.moduleId !== this.props.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId);
        }
    }

    render() {
        return (
            <div>
                {this.props.moduleId &&
                    <>
                        <h2>Lessons</h2>

                        <ul className="nav nav-tabs">

                            {this.props.lessons.map(lesson =>
                                <LessonTabsItemComponent key={lesson._id} history={this.props.history} courseId={this.props.courseId}
                                    moduleId={this.props.moduleId} lessonId={this.props.lessonId} lesson={lesson} />
                            )}

                            <li className="nav-item">
                                <button className="nav-link link-button">
                                    <i className="fas fa-plus fa pt-1" onClick={() => this.props.createLesson(this.props.moduleId)} ></i>
                                </button>
                            </li>

                        </ul>
                    </>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, { title: "New Lesson" })
                .then(actualLesson =>
                    dispatch(createLesson(actualLesson)))
        },
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons =>
                    dispatch(findLessonsForModule(lessons)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsComponent);