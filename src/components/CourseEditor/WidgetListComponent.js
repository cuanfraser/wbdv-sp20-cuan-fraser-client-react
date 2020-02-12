import React from "react";

class WidgetListComponent extends React.Component {
    render() {
        return (
            <div>
                <h4>Heading Widget</h4>

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

            </div>
        )
    }
}

export default WidgetListComponent;