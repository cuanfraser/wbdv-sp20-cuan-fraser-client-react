import React from "react";
import moduleService from "../../services/ModuleService";
import { updateModule, deleteModule } from "../../actions/moduleActions"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ModuleListItemComponent extends React.Component {

    state = {
        edit: false,
        module: this.props.module,
        selected: false
    }

    componentDidMount() {
        this.setState({
            selected: this.props.module._id === this.props.moduleId
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected !== this.state.selected) {
            this.setState({ edit: false })
        }
        if (this.state.selected !== (this.props.module._id === this.props.moduleId)) {
            this.setState({
                selected: this.props.module._id === this.props.moduleId
            })
        }
    }

    enableEditMode = e => {
        e.stopPropagation()
        this.setState({ edit: true })
    }

    updateModuleEvent = e => {
        e.stopPropagation()
        this.props.updateModule(this.state.module._id, this.state.module)
        this.setState({ edit: false })
    }

    cancelChangeEvent = e => {
        e.stopPropagation()
        this.setState({ module: this.props.module, edit: false })
    }

    deleteModuleEvent = e => {
        e.stopPropagation()
        this.props.deleteModule(this.props.module._id)
        if (this.props.module._id === this.props.moduleId) {
            this.props.history.push(`/course-editor/${this.props.courseId}`)
        }
    }

    titleChangeEvent = e => {
        e.persist();
        this.setState(prevState => ({
            module: {
                ...prevState.module,
                title: e.target.value
            }
        }))
    }

    render() {
        return (
            <div key={this.props.module._id} className={`list-group-item list-group-item-action d-flex ${this.state.selected ? "active" : ""}`}>
                {!this.state.edit &&
                    <>
                        <div className="col">
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.module._id}`} className={`${this.state.selected ? "text-white" : ""}`}>
                                {this.state.module.title}
                            </Link>
                        </div>
                        <div className="float-right">
                            <i className="fas fa-edit fa pt-1 p-1" onClick={this.enableEditMode}></i>
                            <i className="fas fa-trash fa pt-1 p-1" onClick={() => this.props.deleteModule(this.props.module._id)}></i>
                        </div>
                    </>}

                {this.state.edit && (
                    <>
                        <div className="col float-left">
                            <input className="form-control" type="text" placeholder="New Module Title" onChange={this.titleChangeEvent} />
                        </div>
                        <div className="float-right">
                            <i className="far fa-save fa pt-1 p-1" onClick={this.updateModuleEvent}></i>
                            <i className="fas fa-times pt-1 p-1" onClick={this.cancelChangeEvent}></i>
                        </div>
                    </>
                )}
            </div>
        )
    }
}


const stateToPropertyMapper = state => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateModule: (moduleId, module) => {
            moduleService.updateModule(moduleId, module)
                .then(actualModule =>
                    dispatch(updateModule(moduleId, actualModule)))
        },
        deleteModule: (moduleId) => {
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId)))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListItemComponent);
