import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import moduleService from "../../services/ModuleService";
import { createModule, deleteModule, findModuleForCourse, updateModule, syncEditInput } from "../../actions/moduleActions";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <div>
                <h2>Module List</h2>

                <div class="list-group wbdv-module-list">
                    {this.props.modules.map(module =>
                        <div class="list-group-item list-group-item-action d-flex wbdv-module-item wbdv-module-item-title">
                            <Link to={`/course-editor/${this.props.courseId}/module/${module._id}`} class="mr-auto p-1">
                                <div  id={`${module._id}-title`}>{module.title}</div>
                            </Link>
                            <input id={`${module._id}-input`} style={{ visibility: "hidden" }} value={this.props.editModuleTitle} onChange={(e) => syncEditInput(module._id, e.target.value)} />
                            <i class="fas fa-edit fa pt-1 p-1 wbdv-module-item-edit-btn"
                                onClick={() => {
                                    document.getElementById(`${module._id}-title`).style.visibility = "hidden";
                                    document.getElementById(`${module._id}-input`).style.visibility = "visible";
                                }}></i>
                            <i class="far fa-save fa pt-1 p-1 wbdv-module-item-save-btn"
                                onClick={() => this.props.updateModule(module._id, { _id: module._id, title: this.props.editModuleTitle, _courses: module._courses })}></i>
                            <i class="fas fa-times fa pt-1 p-1 wbdv-module-item-delete-btn" onClick={() => this.props.deleteModule(module._id)}></i>
                        </div>
                    )}

                    <a class="list-group-item list-group-item-action d-flex justify-content-center wbdv-topic-add-btn"
                        href="#" onClick={() => this.props.createModule(this.props.courseId)} > <i class="fas fa-plus fa pt-1"></i>
                    </a>
                </div>
            </div>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules,
        editModuleTitle: state.modules.editModuleTitle
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, { title: "New Module" })
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        },
        findModuleForCourse: (courseId) => {
            moduleService.findModuleForCourse(courseId)
                .then(modules =>
                    dispatch(findModuleForCourse(modules)))
        },
        updateModule: (moduleId, module) => {
            moduleService.updateModule(moduleId, module)
                .then(actualModule =>
                    dispatch(updateModule(moduleId, actualModule)))
        },
        deleteModule: (moduleId) => {
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId)))
        },
        syncEditInput: (moduleId, editModuleTitle) => {
            dispatch(syncEditInput(moduleId, editModuleTitle))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent);