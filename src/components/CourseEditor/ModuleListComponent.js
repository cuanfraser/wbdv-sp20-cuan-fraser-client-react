import React from "react";
import { connect } from "react-redux";
import moduleService from "../../services/ModuleService";
import { createModule, deleteModule, findModuleForCourse } from "../../actions/moduleActions";

class ModuleListComponent extends React.Component {
    
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (<div>
            <h2>Module List</h2>

            <div class="list-group wbdv-module-list">
                {this.props.modules.map(module =>
                    // <li key={module._id}>
                    //     <button onClick={
                    //         () => this.props.deleteModule(module._id)}>
                    //         Delete
                    //     </button>
                    //     {module.title}
                    // </li>
                    <div class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title">
                        {module.title}
                        <i class="fas fa-edit fa pt-1 wbdv-module-item-update-btn"></i>
                        <i class="far fa-save fa pt-1 wbdv-module-item-save-btn"></i>
                        <i onClick={() => this.props.deleteModule(module._id)} class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                    </div>
                )}
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title active"
                    href="#">
                    Module 1 - jQuery<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>

                <a class="list-group-item list-group-item-action d-flex justify-content-center wbdv-topic-add-btn"
                    href="#" onClick={() => this.props.createModule(this.props.courseId)} > <i class="fas fa-plus fa pt-1"></i>
                </a>
            </div>
        </div>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
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
        deleteModule: (moduleId) => {
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent);