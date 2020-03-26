import React from "react";
import { findAllCourses, deleteCourse, createCourse, updateCourse } from "../services/CourseService";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseListComponent from "../components/CourseListComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: '',
        courses: []
    }

    componentDidMount = async () => {
        const courses = await findAllCourses();
        this.setState({ courses: courses });
    }

    toggle = () => {
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            }
            else {
                return ({
                    layout: 'table'
                })
            }
        })
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState.courses.filter(function (crs) {
                            return crs._id !== course._id
                        })
                    })
                })
            })
    }

    addCourse = () => {
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
            return ({
                courses: [...prevState.courses, actualCourse]
            })
        }))
    }

    updateCourse = (course) => {
        updateCourse(course._id, course)
            .then(this.setState(prevState => {

                return ({
                    courses: [...prevState.courses.filter(function (crs) {
                        return crs._id !== course._id
                    }), course]
                })
            }))
    }

    updateForm = (newState) =>
        this.setState(newState)

    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>

                <Router>
                    <Route path="/(table|)/" exact={true}
                        render={() =>
                            <CourseListComponent
                                courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                toggle={this.toggle}
                                history={this.props.history}
                            />
                        }
                    />
                    <Route path="/grid/" exact={true}
                        render={() =>
                            <CourseListComponent
                                courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                toggle={this.toggle}
                                history={this.props.history}
                            />
                        }
                    />
                    <Route path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                history={props.history}
                                courseId={props.match.params.courseId} />
                        } />
                    <Route path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                history={props.history}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId} />
                        } />
                    <Route path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                history={props.history}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId} />
                        } />
                    <Route path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                history={props.history}
                                topicId={props.match.params.topicId}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId} />
                        } />
                </Router>
            </div>
        )
    }
}


export default CourseManagerContainer;