import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import PrimaryLayout from "./PrimaryLayout";

class MyApp extends Component {
    render() {
        return (
            <Router>
                <PrimaryLayout />
            </Router>
        );
    }
}

export default MyApp;
