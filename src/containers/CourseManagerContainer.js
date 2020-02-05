import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        courses: [
            { _id: '123', title: 'Course A' },
            { _id: '456', title: 'Course B' },
            { _id: '789', title: 'Course C' },
            { _id: '101', title: 'Course D' },
            { _id: '112', title: 'Course E' }
        ]
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

    deleteCourse = (course) =>
        this.setState(prevState => {
            return ({
                courses: prevState.courses.filter(function (crs) {
                    return crs._id !== course._id
                })
            })
        })

    addCourse = () =>
        this.setState(prevState => {
            return ({
                courses: [...prevState.courses, {
                    _id: (new Date()).getTime(),
                    title: 'New Course'
                }]
            })
        })

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.toggle}>Toggle</button>
                <button onClick={this.addCourse}>Add Course</button>
                {this.state.layout === 'table' && <CourseTableComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse} />}
                {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses} />}
            </div>
        )
    }
}


export default CourseManagerContainer;