import React from 'react';


export class Action extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="cta">
                <h2 className="cta__book-now">
                    Hurry up! to avail a extra 10% discount.
                </h2>
                <button className="btn">
                    <span className="btn__visible">Sign Up</span>
                    <span className="btn__invisible">Few hours left</span>
                </button>
            </div>
        );
    }
}