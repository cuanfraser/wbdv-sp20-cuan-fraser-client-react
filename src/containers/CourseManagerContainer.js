import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import { findAllCourses, deleteCourse, createCourse, updateCourse } from "../services/CourseService";
import CourseEditorComponent from "../components/CourseEditorComponent";
import CourseListComponent from "../components/CourseListComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
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

    showEditor = () =>
        this.setState({
            showEditor: true
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    render() {
        return (
            <div>
                <h1>Course Manager</h1>

                <Router>
                    <Route path="/(table|)/" exact={true}
                        render={() =>
                            <CourseListComponent
                                courses={this.state.courses}
                                showEditor={this.state.showEditor}
                                deleteCourse={this.state.deleteCourse}
                                updateCourse={this.state.updateCourse}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                toggle={this.toggle}
                            />
                        }
                    />
                    <Route path="/grid/" exact={true}
                        render={() =>
                            <CourseListComponent
                                courses={this.state.courses}
                                showEditor={this.state.showEditor}
                                deleteCourse={this.state.deleteCourse}
                                updateCourse={this.state.updateCourse}
                                updateForm={this.updateForm}
                                newCourseTitle={this.state.newCourseTitle}
                                addCourse={this.addCourse}
                                layout={this.state.layout}
                                toggle={this.toggle}
                            />
                        }
                    />
                    {/* TODO: TEMP!!! */}
                    <Route path="/course-editor/" exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                            />
                        }
                    />
                    <Route path="/course-editor/:courseId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                courseId={props.match.params.courseId} />
                        } />
                    <Route path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId} />
                        } />
                    <Route path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
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