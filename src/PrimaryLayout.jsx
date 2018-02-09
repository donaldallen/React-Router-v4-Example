import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";

export default class PrimaryLayout extends Component {
    render() {
        return (
            <div className="primary-layout">
                <header>Our React Router 4 App</header>
                
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>

                <main>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/users" component={UsersPage} />
                </main>
            </div>
        );
    }
}
