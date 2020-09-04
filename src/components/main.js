import React from 'react';
import { Promotion } from "./promotion";
import { Overview } from "./overview";
import { Review } from "./user-review";
import { Action } from "./action";
import { Description } from "./description";



export class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <main className="hotel-view">
                < Promotion />
                <Overview />
                <div className="details">
                    <Description />
                    <Review />
                </div>
                <Action />
            </main>
        );
    }
}