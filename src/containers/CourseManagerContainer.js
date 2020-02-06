import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import { findAllCourses, deleteCourse, createCourse, updateCourse } from "../services/CourseService";
import CourseEditorComponent from "../components/CourseEditorComponent";

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

                {this.state.showEditor && <CourseEditorComponent />}

                {!this.state.showEditor &&
                    <div>
                        <button onClick={this.toggle}>Toggle</button>
                        <input onChange={(e) => this.updateForm({ newCourseTitle: e.target.value })}
                            value={this.state.newCourseTitle} />
                        <button onClick={this.addCourse}>Add Course</button>
                        {this.state.layout === 'table' && <CourseTableComponent
                            courses={this.state.courses}
                            showEditor={this.showEditor}
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                        />}
                        {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses} />}
                    </div>}
            </div>
        )
    }
}


export default CourseManagerContainer;