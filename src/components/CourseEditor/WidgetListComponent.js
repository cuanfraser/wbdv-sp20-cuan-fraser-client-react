import React from "react";
import { connect } from "react-redux";
import widgetService from "../../services/WidgetService.js"
import { findAllWidgetsForTopic, createWidget } from "../../actions/widgetActions.js"
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent.js";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent.js";
import ListWidgetComponent from "./widgets/ListWidgetComponent";
import ImageWidgetComponent from "./widgets/ImageWidgetComponent";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    render() {
        return (
            <div>
                {this.props.topicId &&
                    <>
                        <h4>Widget List</h4>

                        <ul className="list-group">
                            {this.props.widgets && this.props.widgets.map((widget, index) =>
                                <>
                                    <li key={widget.id} className="list-group-item">
                                        {
                                            widget.type === "HEADING" &&
                                            <HeadingWidgetComponent
                                                widget={widget} topicId={this.props.topicId} />
                                        }
                                        {
                                            widget.type === "PARAGRAPH" &&
                                            <ParagraphWidgetComponent
                                                widget={widget} topicId={this.props.topicId} />
                                        }
                                        {
                                            widget.type === "LIST" &&
                                            <ListWidgetComponent
                                                widget={widget} topicId={this.props.topicId} />
                                        }
                                        {
                                            widget.type === "IMAGE" &&
                                            <ImageWidgetComponent
                                                widget={widget} topicId={this.props.topicId} />
                                        }

                                    </li>
                                </>
                            )}

                            <li className="list-group-item list-group-item-action d-flex justify-content-center" >
                                <div className="col-sm-1">
                                    <button className="btn" id="addWidgetBtn"
                                        onClick={() =>
                                            this.props.createWidget(this.props.topicId, { "type": "HEADING", "text": "New Widget", "size": 1 })}>
                                        <i className="fas fa-plus fa pt-1"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatch) => ({
    createWidget: (tid, widget) =>
        widgetService.createWidget(tid, widget)
            .then(actualWidget => dispatch(createWidget(actualWidget))),
    findWidgetsForTopic: (tid) =>
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch(findAllWidgetsForTopic(widgets)))
})


export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);