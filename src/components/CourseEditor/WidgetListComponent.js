import React from "react";
import { connect } from "react-redux";
import widgetService from "../../services/WidgetService.js"
import { findAllWidgetsForTopic, createWidget, deleteWidget, updateWidget } from "../../actions/widgetActions.js"
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent.js";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent.js"

class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetForTopic(this.props.topicId)
    }
    render() {
        return (
            <div>
                <h4>Widget List</h4>

                {console.log(this.props.widgets)}

                {this.props.widgets && this.props.widgets.map(widget =>
                    <div>
                        <button onClick={() =>
                            this.props.deleteWidget(widget.id)}>
                            X
                            </button>
                        <button onClick={() =>
                            this.setState({
                                widget: widget
                            })}>
                            ...
                            </button>
                        <h3>Common to all widgets</h3>
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidgetComponent
                                save={this.save}
                                editing={false}//widget.id === this.state.widget.id}
                                widget={widget} />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidgetComponent
                                save={this.save}
                                editing={widget.id === this.state.widget.id}
                                widget={widget} />
                        }
                    </div>
                )}

                {false && <div>
                    <h5>Heading Widget</h5>

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

                </div> }
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
            .then(status => dispatch(deleteWidget(wid))),
    createWidget: (widget) =>
        widgetService.createWidget(this.props.topicId, widget)
            .then(actualWidget => dispatch(createWidget(actualWidget))),
    findWidgetForTopic: (tid) =>
        widgetService.findWidgetForTopic(tid)
            .then(widgets => dispatch(findAllWidgetsForTopic(widgets)))
})


export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);