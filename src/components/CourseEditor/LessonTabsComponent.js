import React from "react";

class LessonTabs extends React.Component {
    render() {
        return (
            <div>
                <h2>Lessons</h2>

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Lesson 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 4</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LessonTabs;