import React from "react";
import ReactDOM from "react-dom";
import DropdownItem from "./DropdownItem";
import Link from "./Button";

import "./styles.css";

function Index() {
    return (
        <div className="App">
            <DropdownItem title="Item 1" theme="dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vulputate magna quis libero efficitur fringilla non non ex. Donec turpis
                ligula, pellentesque eget rutrum eu, mollis ac eros. Aliquam rhoncus
                rhoncus ante ac maximus. Donec malesuada enim massa, sit amet
                consectetur lectus accumsan eget. Nullam faucibus urna vel ex volutpat
                auctor. Quisque lacinia tellus vel lacus pulvinar, eget euismod dolor
                interdum. Duis congue nisl non posuere vestibulum. Donec condimentum
                vestibulum nunc, eget vulputate ex vulputate eget.
            </DropdownItem>
            <DropdownItem title="Item 2" theme="dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vulputate magna quis libero efficitur fringilla non non ex. Donec turpis
                ligula, pellentesque eget rutrum eu, mollis ac eros. Aliquam rhoncus
                rhoncus ante ac maximus. Donec malesuada enim massa, sit amet
                consectetur lectus accumsan eget. Nullam faucibus urna vel ex volutpat
                auctor. Quisque lacinia tellus vel lacus pulvinar, eget euismod dolor
                interdum. Duis congue nisl non posuere vestibulum. Donec condimentum
                vestibulum nunc, eget vulputate ex vulputate eget.
            </DropdownItem>
            <DropdownItem title="Item 3" theme="dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vulputate magna quis libero efficitur fringilla non non ex. Donec turpis
                ligula, pellentesque eget rutrum eu, mollis ac eros. Aliquam rhoncus
                rhoncus ante ac maximus. Donec malesuada enim massa, sit amet
                consectetur lectus accumsan eget. Nullam faucibus urna vel ex volutpat
                auctor. Quisque lacinia tellus vel lacus pulvinar, eget euismod dolor
                interdum. Duis congue nisl non posuere vestibulum. Donec condimentum
                vestibulum nunc, eget vulputate ex vulputate eget.
            </DropdownItem>
            <DropdownItem title="Item 4" theme="dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vulputate magna quis libero efficitur fringilla non non ex. Donec turpis
                ligula, pellentesque eget rutrum eu, mollis ac eros. Aliquam rhoncus
                rhoncus ante ac maximus. Donec malesuada enim massa, sit amet
                consectetur lectus accumsan eget. Nullam faucibus urna vel ex volutpat
                auctor. Quisque lacinia tellus vel lacus pulvinar, eget euismod dolor
                interdum. Duis congue nisl non posuere vestibulum. Donec condimentum
                vestibulum nunc, eget vulputate ex vulputate eget.
            </DropdownItem>
        </div>
    );
}

export default Index;