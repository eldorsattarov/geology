import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-collapse";

import { css } from "emotion";

class DropdownItem extends React.Component {
    state = {
        isDropdownOpen: true,

    };

    render() {
        return (
            <div
                className={this.props.theme === "red" ? accordionContainerDark : accordionContainerLight}
                id={this.props.id}>
                <Collapse isOpened={this.state.isDropdownOpen} className="">
                    <div>{this.props.children}</div>
                </Collapse>
            </div>
        );
    }
}

export default DropdownItem;

//Light Theme
const headerBarLight = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const openAccordionToggleLight = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const displayText = css`
  text-align: left;
`;

const accordionContainerLight = css`
  margin: 20px;
  color: black;
`;

//Dark Theme
const headerBarDark = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const accordionContainerDark = css`
  margin: 20px;
  color: white;
`;

const openAccordionToggleDark = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
