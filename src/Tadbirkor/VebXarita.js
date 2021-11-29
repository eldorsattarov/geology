import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";

const VebXarita = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
            <div className="vebXarita">
                <div className="container">
                    <div className="row">
                        Veb Xarita
                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default VebXarita;
