import React from "react";
import Home from '../Pages/Home'
import Detail from '../Pages/Detail'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path="/detail/:pokemon"><Detail /></Route>
            </Switch>
        </Router>
    )
}