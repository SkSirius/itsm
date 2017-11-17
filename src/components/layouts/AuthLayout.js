import React from "react";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Login Layout</h1>
        </header>
        {children}
    </div>
);

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
};

export default AppLayout;
