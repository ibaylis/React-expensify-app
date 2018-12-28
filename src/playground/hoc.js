// Higher Order Components (HOC) - A component (HOC) that renders another component
// Purpose of HOC is to reuse code
//Render Hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = () => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentication={false} info="Here are the details" />, document.getElementById('app'));



















