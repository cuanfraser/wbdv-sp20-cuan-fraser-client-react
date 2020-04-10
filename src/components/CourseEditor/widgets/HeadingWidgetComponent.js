import React from "react";
import { connect } from "react-redux";
import widgetService from "../../../services/WidgetService.js"
import { deleteWidget, updateWidget } from "../../../actions/widgetActions"

class HeadingWidgetComponent extends React.Component {
    state = {
        editing: false,
        widget: this.props.widget
    }

    enableEditMode = e => {
        e.stopPropagation()
        this.setState({ editing: true })
    }

    updateWidgetEvent = e => {
        e.stopPropagation()
        this.props.updateWidget(this.state.widget.id, this.state.widget)
        this.setState({ editing: false })
    }

    cancelChangeEvent = e => {
        e.stopPropagation()
        this.setState({ widget: this.props.widget, editing: false })
    }

    deleteWidgetEvent = e => {
        e.stopPropagation()
        this.props.deleteWidget(this.state.widget.id)
    }

    upPositionEvent = e => {
        e.stopPropagation()
    }

    downPositionEvent = e => {
        e.stopPropagation()
    }

    typeChangeEvent = e => {
        e.persist();
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                type: e.target.value
            }
        }))
    }

    textChangeEvent = e => {
        e.persist();
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                text: e.target.value
            }
        }))
    }

    nameChangeEvent = e => {
        e.persist();
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                name: e.target.value
            }
        }))
    }

    sizeChangeEvent = e => {
        const newSize = parseInt(e.target.value)
        this.setState(prevState => ({
            widget: {
                ...prevState.widget,
                size: newSize
            }
        }))
    }

    render() {
        return (
            <div>
                {
                    !this.state.editing &&
                    <div className="row">
                        <div className="col-11">
                            {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                            {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                            {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                            {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                            {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                            {this.state.widget.size === 6 && <h6>{this.state.widget.text}</h6>}
                        </div>
                        <button className="btn btn-block col-1" onClick={this.enableEditMode}>
                            <i className="fas fa-edit" ></i>
                        </button>
                    </div>
                }
                {
                    this.state.editing &&
                    <form>

                        <div className="form-group row">
                            <label htmlFor="typeFld" className="col-sm-1 col-form-label">
                                Type </label>
                            <div className="col">
                                <select className="form-control wbdv-field wbdv-type" id="typeFld"
                                    onChange={this.typeChangeEvent}
                                    value={this.state.widget.type}>
                                    <option value={"HEADING"}>Heading</option>
                                    <option value={"PARAGRAPH"}>Paragraph</option>
                                    <option value={"LIST"}>List</option>
                                    <option value={"IMAGE"}>Image</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="textFld" className="col-sm-1 col-form-label">
                                Text </label>
                            <div className="col">
                                <input type="text" id="textFld" className="form-control wbdv-field wbdv-text" value={this.state.widget.text} placeholder="Heading text"
                                    onChange={this.textChangeEvent}
                                />
                            </div>

                        </div>

                        <div className="form-group row">
                            <label htmlFor="sizeFld" className="col-sm-1 col-form-label">
                                Size </label>
                            <div className="col">
                                <select className="form-control wbdv-field wbdv-type" id="sizeFld"
                                    onChange={this.sizeChangeEvent}
                                    value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="nameFld" className="col-sm-1 col-form-label">
                                Name </label>
                            <div className="col">
                                <input id="nameFld" className="form-control wbdv-field wbdv-text" value={this.state.widget.name} placeholder="Widget name"
                                    onChange={this.nameChangeEvent}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-1">
                                <button className="btn btn-success btn-block wbdv-button" id="saveBtn"
                                    onClick={this.updateWidgetEvent}>
                                    <i className="fas fa-save"></i>
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <a className="btn btn-danger btn-block wbdv-button" id="deleteBtn" onClick={this.deleteWidgetEvent}>
                                    <i className="fas fa-trash-alt"></i>
                                </a>
                            </div>
                            <div className="col-sm-1">
                                <a className="btn btn-warning btn-block wbdv-button" id="upBtn" onClick={this.upPositionEvent}>
                                    <i className="fas fa-arrow-up"></i>
                                </a>
                            </div>
                            <div className="col-sm-1">
                                <a className="btn btn-warning btn-block wbdv-button" id="downBtn" onClick={this.downPositionEvent}>
                                    <i className="fas fa-arrow-down"></i>
                                </a>
                            </div>
                            <div className="col-sm-1">
                                <a className="btn btn-warning btn-block wbdv-button" id="cancelBtn" onClick={this.cancelChangeEvent}>
                                    <i className="fas fa-times"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, widget) =>
        widgetService.updateWidget(wid, widget)
            .then(status => dispatch(updateWidget(wid, widget))),
    deleteWidget: (wid) =>
        widgetService.deleteWidget(wid)
            .then(status => dispatch(deleteWidget(wid)))
})


export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(HeadingWidgetComponent);