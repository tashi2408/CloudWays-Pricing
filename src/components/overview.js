import React from 'react';
import { ReactComponent as Star } from './SVG/star.svg';
import { ReactComponent as Location } from './SVG/location-pin.svg';


export class Overview extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <div className="overview">
                    <h1 className="overview__heading">Cloudways</h1>
                    <div className="overview__stars">
                        <Star className="overview__icon-star"/>
                        <Star className="overview__icon-star"/>
                        <Star className="overview__icon-star"/>
                        <Star className="overview__icon-star"/>
                        <Star className="overview__icon-star"/>
                    </div>

                    <div className="overview__location">
                        <Location className="overview__icon-location"/>
                        <button className="btn-inline">Delhi, India</button>
                    </div>

                    <div className="overview__rating">
                        <div className="overview__rating--average">8.9</div>
                        <div className="overview__rating--count">422 votes</div>
                    </div>
                </div >
        );
    }
}