import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({ courses, showEditor, deleteCourse}) =>
    <div>
        <h2>Course Table Component</h2>
        <ul>
            {
                courses.map(function (course, index) {
                    return (
                        <CourseRow course={course} showEditor={showEditor} deleteCourse={deleteCourse} />
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent;