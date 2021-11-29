import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";

const InteraktivXarita = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
            <div className="interaktivXarita">
                <div className="container">
                    <div className="row">
                        Interaktiv Xarita
                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default InteraktivXarita;
