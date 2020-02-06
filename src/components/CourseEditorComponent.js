import React from "react";

const CourseEditorComponent = () => {

    return (<div class="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand wbdv-course-title" href="#">Course Editor</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="../course-list/course-list.template.client.html">
                        <i class="fas fa-times wbdv-course-editor wbdv-close"></i>
                    </a>
                </div>
            </div>
        </nav>

        <div class="row">
            <div class="col-4">
                <h2>Module List</h2>

                <div class="list-group wbdv-module-list">
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title active"
                        href="#">
                        Module 1 - jQuery<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 2 - React<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 3 - Redux<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 4 - Native<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 5 - Angular<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 6 - Node<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                        href="#">
                        Module 7 - Mongo<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </a>
                    <a class="list-group-item list-group-item-action d-flex justify-content-center wbdv-topic-add-btn"
                        href="#"> <i class="fas fa-plus fa pt-1"></i>
                    </a>
                </div>

            </div>
            <div class="col-8">
                <h2>Lessons</h2>

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 1
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Lesson 2
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 3
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Lesson 4
                        </a>
                    </li>
                </ul>

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

                <h4>Heading Widget</h4>

                <form>
                    <div class="form-group row">
                        <label for="typeFld" class="col-sm-1 col-form-label">
                            Type </label>
                        <div class="col-sm-3">
                            <select class="form-control wbdv-field wbdv-type" id="typeFld">
                                <option selected value="Heading">Heading</option>
                                <option value="Text">Text</option>
                                <option value="Image">Image</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="sizeFld" class="col-sm-1 col-form-label">
                            Size </label>
                        <div class="col-sm-3">
                            <select class="form-control wbdv-field wbdv-type" id="sizeFld">
                                <option selected value="Heading 1">Heading 1</option>
                                <option value="Heading 2">Heading 2</option>
                                <option value="Heading 2">Heading 3</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="textFld" class="col-sm-1 col-form-label">
                            Text </label>
                        <div class="col-sm-3">
                            <input class="form-control wbdv-field wbdv-text" id="textFld" placeholder="Heading text" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-1">
                            <button class="btn btn-success btn-block wbdv-button" id="saveBtn">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="col-sm-1">
                            <button class="btn btn-danger btn-block wbdv-button" id="deleteBtn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="col-sm-1">
                            <button class="btn btn-warning btn-block wbdv-button" id="upBtn">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                        </div>
                        <div class="col-sm-1">
                            <button class="btn btn-warning btn-block wbdv-button" id="downBtn">
                                <i class="fas fa-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>)
}

export default CourseEditorComponent;