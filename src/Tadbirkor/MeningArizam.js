import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";

const MeningArizam = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
            <div className="meningArizam">
                <div className="container">
                    <div className="row">
                       <div className="col-12 meningArizamtop">
                           <h3>Аризалар</h3>
                       </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default MeningArizam;
