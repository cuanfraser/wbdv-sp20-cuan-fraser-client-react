import React from "react";
import {Link} from "react-router-dom"

class CourseRow extends React.Component {
    state = {
        editing: false,
        updateCourseTitle: ''
    }
    render() {
        return (
            <li>
                {!this.state.editing && <Link to={`/course-editor/${this.props.course._id}`}>
                    {this.props.course.title}
                </Link>}
                {this.state.editing && <input onChange={(e) => this.setState({ updateCourseTitle: e.target.value })}
                    value={this.state.updateCourseTitle} />}
                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() =>
                    this.setState({ editing: true })}>Edit</button>

                <button onClick={() => {
                    {this.setState(prevState => {
                        return this.props.updateCourse({ _id: this.props.course._id, title: prevState.updateCourseTitle })
                    })};
                    {this.setState({ editing: false, updateCourseTitle: '' })};
                }
                }>Save</button>
            </li>
        )
    }
}


export default CourseRow;