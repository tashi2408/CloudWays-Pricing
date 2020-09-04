import React from 'react';
import { Ultimate } from "./plan-ultimate";
import { Premium } from "./plan-premium";
import { Standard } from "./plan-standard";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { IndexRoute } from "react-router";
import { ReactComponent as Arrow } from './SVG/chevron-small-right.svg';



export class Description extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className="description">
                    <Route path="/" component={Premium}  exact />
                    <Route path="/premium" component={Premium}  exact />
                    <Route path="/standard" component={Standard} exact/>
                    <Route path="/ultimate" component={Ultimate} exact/>
                </div>
        );
    }
}