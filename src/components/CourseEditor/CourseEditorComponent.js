import React from "react";
import { Link } from "react-router-dom";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

const CourseEditorComponent = ({ courseId }) => {

    return (<div class="container-fluid">

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
                <ModuleListComponent/>
            </div>
            <div class="col-8">

                <LessonTabs/>

                <TopicPillsComponent/>

                <WidgetListComponent/>
            </div>
        </div>

    </div>)
}

export default CourseEditorComponent;