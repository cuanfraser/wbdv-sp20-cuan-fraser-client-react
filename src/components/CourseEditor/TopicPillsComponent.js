import React from "react";

class TopicPillsComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Topics</h3>

                <ul class="nav nav-pills wbdv-topic-pill-list">
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-pill active" href="#">Topic 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-pill" href="#">Topic 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-pill" href="#">Topic 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-pill" href="#">Topic 4</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wbdv-topic-pill wbdv-topic-add-btn" href="#">
                            <i class="fas fa-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TopicPillsComponent;