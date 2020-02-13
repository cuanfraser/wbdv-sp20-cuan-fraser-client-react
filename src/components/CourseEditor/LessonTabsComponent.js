import React from "react";
import { connect } from "react-redux";
import lessonService from "../../services/LessonService.js"
import { createLesson, findLesson, updateLesson, deleteLesson, findLessonForModule } from "../../actions/lessonActions";

class LessonTabsComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonForModule(this.props.moduleId)
    }

    render() {
        return (
            <div>
                <h2>Lessons</h2>

                <ul class="nav nav-tabs">

                    {this.props.lessons.map(lesson =>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                {lesson.title}
                            </a>
                        </li>
                    )}

                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-plus fa pt-1" onClick={() => this.props.createLesson(this.props.moduleId)} ></i>
                        </a>
                    </li>
                    
                </ul>
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
        findLessonForModule: (moduleId) => {
            lessonService.findLessonForModule(moduleId)
                .then(lessons =>
                    dispatch(findLessonForModule(lessons)))
        },
        updateLesson: (lessonId, module) => {
            lessonService.updateLesson(lessonId, module)
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

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsComponent);