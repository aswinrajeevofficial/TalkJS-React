import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import Home from "./Home";
import VideoLecture from "./VideoLecture";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/viewLiveLecture" component={VideoLecture} />
                </Switch>
            </Router>
        )
    }
}