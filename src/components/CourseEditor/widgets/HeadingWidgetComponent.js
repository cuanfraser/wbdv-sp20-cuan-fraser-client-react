import React from "react";

class HeadingWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget
    }
    render() {
        return (
            <div>
                {
                    !this.props.editing &&
                    <div>
                        {this.state.widget.size === 1 && <h1>{this.state.widget.title}</h1>}
                        {this.state.widget.size === 2 && <h2>{this.state.widget.title}</h2>}
                        {this.state.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                        {this.state.widget.size === 4 && <h4>{this.state.widget.title}</h4>}
                        {this.state.widget.size === 5 && <h5>{this.state.widget.title}</h5>}
                        {this.state.widget.size === 6 && <h6>{this.state.widget.title}</h6>}
                    </div>
                }
                {
                    this.props.editing &&
                    <div>
                        <div class="form-group row">
                            <label for="textFld" class="col-sm-1 col-form-label">
                                Text </label>
                            <div class="col-sm-3">
                                <input id="textFld" class="form-control wbdv-field wbdv-text" value={this.state.widget.title} placeholder="Heading text"
                                    onChange={(e) => {
                                        const newTitle = e.target.value;
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                title: newTitle
                                            }
                                        }))
                                    }
                                    }
                                />
                            </div>

                        </div>

                        <div class="form-group row">
                            <label for="sizeFld" class="col-sm-1 col-form-label">
                                Size </label>
                            <div class="col-sm-3">
                                <select class="form-control wbdv-field wbdv-type" id="sizeFld"
                                    onChange={(e) => {
                                        const newSize = parseInt(e.target.value)
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                size: newSize
                                            }
                                        }))
                                    }}
                                    value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
                                {/* <select class="form-control wbdv-field wbdv-type" id="sizeFld">
                                <option selected value="Heading 1">Heading 1</option>
                                <option value="Heading 2">Heading 2</option>
                                <option value="Heading 2">Heading 3</option>
                            </select> */}
                            </div>
                        </div>

                        <div class="form-group row">
                            <button onClick={() =>
                                this.props.save(this.state.widget)}>
                                Save
                            </button>
                        </div>
                    </div>
                }
                {/* <div class="form-group row">
                    <label for="typeFld" class="col-sm-1 col-form-label">
                        Type </label>
                    <div class="col-sm-3">
                        <select class="form-control wbdv-field wbdv-type" id="typeFld">
                            <option selected value="Heading">Heading</option>
                            <option value="Text">Text</option>
                            <option value="Image">Image</option>
                        </select>
                    </div>
                </div> */}


            </div>
        )
    }
}

export default HeadingWidgetComponent