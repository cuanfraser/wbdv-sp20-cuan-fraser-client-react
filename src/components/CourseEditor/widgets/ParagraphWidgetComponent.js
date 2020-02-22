import React from "react";

const ParagraphWidgetComponent = ({widget, editing}) =>
    <div>
        {
            !editing &&
            <div>
                <p>{widget.title}</p>
            </div>
        }
        {
            editing &&
            <div>
                <textarea>{widget.title}</textarea>
            </div>
        }
    </div>

export default ParagraphWidgetComponent;