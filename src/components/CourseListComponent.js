import React from 'react'
import CourseTableComponent from './CourseTableComponent'
import CourseGridComponent from './CourseGridComponent'

const CourseListComponent = ({
    toggle,
    updateForm,
    newCourseTitle,
    addCourse,
    layout,
    courses,
    showEditor,
    deleteCourse,
    updateCourse
}) =>
    <div>
        <button onClick={toggle}>Toggle</button>
        <input onChange={(e) => updateForm({ newCourseTitle: e.target.value })}
            value={newCourseTitle} />
        <button onClick={addCourse}>Add Course</button>
        {layout === 'table' && <CourseTableComponent
            courses={courses}
            showEditor={showEditor}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
        />}
        {layout === 'grid' && <CourseGridComponent courses={courses} />}
    </div>

export default CourseListComponent