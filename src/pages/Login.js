import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../redux/actions/loginAction";

const Login = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={(event, errors, values) => {props.login(event, errors, values, props.history)}}>
                                <AvField type="text" name="email" label="email" required errorMessage="To'ldirish majburiy" value="shaxboz02@mail.com"/>
                                <AvField type="text" name="token" label="Token" required errorMessage="To'ldirish majburiy" value="125215135dg"/>
                                <AvField type="text" name="inn" label="inn" required errorMessage="To'ldirish majburiy" value="12414124"/>
                                <AvField type="text" name="name_parsed" label="name_parsed" required errorMessage="To'ldirish majburiy" value="shaxboaka"/>
                                <AvField type="text" name="city" label="city" required errorMessage="To'ldirish majburiy" value="killer"/>
                                <AvField type="text" name="cn" label="cn" required errorMessage="To'ldirish majburiy" value="Asia"/>
                                <AvField type="text" name="organization" label="organization" required errorMessage="To'ldirish majburiy" value="ACA"/>
                                <AvField type="text" name="serial_number" label="serial_number" required errorMessage="To'ldirish majburiy" value="124124"/>
                                <AvField type="text" name="type" label="type" required errorMessage="To'ldirish majburiy" value="GZ"/>
                                <AvField type="text" name="path" label="path" required errorMessage="To'ldirish majburiy" value="C:://"/>
                                <AvField type="text" name="category_business" label="category_business" required errorMessage="To'ldirish majburiy" value="IT"/>

                                <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                {/*{*/}
                                {/*    "email": "shaxboz02@mail.com",*/}
                                {/*    "token": "125215135dg",*/}
                                {/*    "inn": 12414124,*/}
                                {/*    "name_parsed": "shaxboaka",*/}
                                {/*    "city": "killer",*/}
                                {/*    "cn": "Asia",*/}
                                {/*    "organization": "ACA",*/}
                                {/*    "serial_number": 124124,*/}
                                {/*    "type": "GZ",*/}
                                {/*    "path": "C:://",*/}
                                {/*    "category_business": "IT"*/}
                                {/*}*/}
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {login})(Login);
