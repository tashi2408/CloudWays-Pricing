import React from 'react';
import { ReactComponent as Arrow } from './SVG/chevron-small-right.svg';


export class Standard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front">
                    <h2 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">Standard</span>
                    </h2>
                    <h3 className="card__rupee">$199.99
                        <span className="card__tag">only/-</span>
                    </h3>
                    <div className="card__details">
                        <ul>
                            <li><Arrow className="card__details__icon" />500 GB Storage</li>
                            <li><Arrow className="card__details__icon" />2 Users Allowed</li>
                            <li><Arrow className="card__details__icon" />Send Upto 3 GB</li>
                            <li><Arrow className="card__details__icon" />15 Domains</li>
                            <li><Arrow className="card__details__icon" />24/7 Support</li>
                        </ul>
                    </div>
                    <p className="card__recommend">Lucy and three others recommended this plan</p>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className='card__info'>
                        <div className="card__price">
                            <h2 className="card__price--head">Standard</h2>
                            <p className="card__price--amount">$199.99<span className="card__price--tagline">/Month</span></p>
                        </div>
                     <button className="btns">sign up</button>
                    </div>
                </div>
            </div>
        );
    }
}
