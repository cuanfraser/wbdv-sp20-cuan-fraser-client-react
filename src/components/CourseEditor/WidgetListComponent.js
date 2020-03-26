import React from "react";
import { connect } from "react-redux";
import widgetService from "../../services/WidgetService.js"
import { findAllWidgetsForTopic, createWidget, deleteWidget, updateWidget } from "../../actions/widgetActions.js"
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent.js";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent.js"

class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {
            title: ''
        }
    }

    save = (widget) => {
        this.setState(prevState => {
            return {
                widget: widget
            }
        })
        this.props.updateWidget(widget.id, widget)
    }

    render() {
        return (
            <div>
                <h4>Widget List</h4>

                {this.props.widgets && this.props.widgets.map(widget =>
                    <div key={widget.id} >
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidgetComponent
                                save={this.save}
                                editing={widget.id === this.state.widget.id}
                                widget={widget} />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidgetComponent
                                save={this.save}
                                editing={widget.id === this.state.widget.id}
                                widget={widget} />
                        }
                        <button onClick={() =>
                            this.setState({
                                widget: widget
                            })}>
                            ...
                        </button>
                        
                        <div className="row">
                            <div className="col-sm-1">
                                <button className="btn btn-success btn-block wbdv-button" id="saveBtn">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button className="btn btn-danger btn-block wbdv-button" id="deleteBtn"
                                    onClick={() =>
                                        this.props.deleteWidget(widget.id)}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button className="btn btn-warning btn-block wbdv-button" id="upBtn">
                                    <i className="fas fa-arrow-up"></i>
                                </button>
                            </div>
                            <div className="col-sm-1">
                                <button className="btn btn-warning btn-block wbdv-button" id="downBtn">
                                    <i className="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <button className="btn btn-primary wbdv-button" id="addWidgetBtn"
                    onClick={() =>
                        this.props.createWidget(this.props.topicId, { "type": "HEADING", "title": "test", "size": 1 })}>
                    <i className="fas fa-plus"></i>
                </button>

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
    createWidget: (tid, widget) =>
        widgetService.createWidget(tid, widget)
            .then(actualWidget => dispatch(createWidget(actualWidget))),
    findWidgetsForTopic: (tid) =>
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch(findAllWidgetsForTopic(widgets)))
})


export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);