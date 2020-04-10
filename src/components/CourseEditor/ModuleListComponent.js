import React from "react";
import { connect } from "react-redux";
import moduleService from "../../services/ModuleService";
import { createModule, findModulesForCourse } from "../../actions/moduleActions";
import ModuleListItemComponent from "./ModuleListItemComponent"

class ModuleListComponent extends React.Component {

    state = {
        newModuleTitle: "",
        module: this.props.module
    }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    render() {
        return (
            <div>
                <h2>Module List</h2>

                <div className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map(module =>
                        <ModuleListItemComponent key={module._id} history={this.props.history} courseId={this.props.courseId} moduleId={this.props.moduleId} module={module} />
                    )}

                    <button className="list-group-item list-group-item-action d-flex justify-content-center"
                        onClick={() => this.props.createModule(this.props.courseId)} > <i className="fas fa-plus fa pt-1"></i>
                    </button>
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
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules =>
                    dispatch(findModulesForCourse(modules)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent);