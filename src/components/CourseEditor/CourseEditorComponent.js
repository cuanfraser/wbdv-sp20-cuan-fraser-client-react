import React from "react";
import { Link } from "react-router-dom";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import { Provider } from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import { createStore, combineReducers } from "redux";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/widgetReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer);

const CourseEditorComponent = ({ courseId, moduleId, lessonId, topicId, history }) => {

    return (
        <Provider store={store}>

            <div className="container-fluid">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand wbdv-course-title">Course Editor: {courseId}</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/">
                                <i className="fas fa-times wbdv-course-editor wbdv-close"></i>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent courseId={courseId} moduleId={moduleId} history={history} />
                    </div>
                    <div className="col-8">

                        <LessonTabsComponent courseId={courseId} moduleId={moduleId} lessonId={lessonId} history={history}/>

                        <TopicPillsComponent courseId={courseId} moduleId={moduleId} lessonId={lessonId} topicId={topicId} history={history}/>

                        <WidgetListComponent courseId={courseId} topicId={topicId} history={history}/>
                    </div>
                </div>

            </div>

        </Provider>
    )
}

export default CourseEditorComponent;