import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({ courses, deleteCourse, updateCourse}) =>
    <div>
        <h2>Course Table Component</h2>
        <ul>
            {
                courses.map(function (course, index) {
                    return (
                        <CourseRow course={course} deleteCourse={deleteCourse} updateCourse={updateCourse}/>
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent;