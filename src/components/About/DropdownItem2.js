import React from "react";
import { Collapse } from "react-collapse";

class DropdownItem2 extends React.Component {
    state = {
        isDropdownOpen: true,
};
    render() {
        return (
            <div id={this.props.id}>
                <Collapse isOpened={this.state.isDropdownOpen}>
                    <div>{this.props.children}</div>
                </Collapse>
            </div>
        );
    }
}
export default DropdownItem2;

