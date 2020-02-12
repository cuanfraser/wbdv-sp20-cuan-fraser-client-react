import React from "react";

class ModuleListComponent extends React.Component {
    render() {
        return (<div>
            <h2>Module List</h2>

            <div class="list-group wbdv-module-list">
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title active"
                    href="#">
                    Module 1 - jQuery<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 2 - React<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 3 - Redux<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 4 - Native<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 5 - Angular<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 6 - Node<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-between wbdv-module-item wbdv-module-item-title"
                    href="#">
                    Module 7 - Mongo<i class="fas fa-times fa pt-1 wbdv-module-item-delete-btn"></i>
                </a>
                <a class="list-group-item list-group-item-action d-flex justify-content-center wbdv-topic-add-btn"
                    href="#"> <i class="fas fa-plus fa pt-1"></i>
                </a>
            </div>
        </div>)
    }
}

export default ModuleListComponent;