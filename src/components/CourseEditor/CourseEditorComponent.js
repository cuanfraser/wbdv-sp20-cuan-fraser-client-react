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
import widgetReducer from "../../reducers/widgetReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer);

const CourseEditorComponent = ({ courseId, moduleId, lessonId, topicId }) => {

    return (
        <Provider store={store}>

            <div class="container-fluid">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand wbdv-course-title" href="#">Course Editor: {courseId}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/">
                                <i class="fas fa-times wbdv-course-editor wbdv-close"></i>
                            </Link>
                        </div>
                    </div>
                </nav>

                <div class="row">
                    <div class="col-4">
                        <ModuleListComponent courseId={courseId} />
                    </div>
                    <div class="col-8">

                        <LessonTabsComponent moduleId={moduleId}/>

                        <TopicPillsComponent lessonId={lessonId}/>

                        <WidgetListComponent topicId={topicId}/>
                    </div>
                </div>

            </div>

        </Provider>
    )
}

export default CourseEditorComponent;