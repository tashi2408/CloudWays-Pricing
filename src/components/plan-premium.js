import React from 'react';
import { ReactComponent as Arrow } from './SVG/chevron-small-right.svg';



export class Premium extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front">
                    <h2 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">Premium</span>
                    </h2>
                    <h3 className="card__rupee">$249.99
                        <span className="card__tag">only/-</span>
                    </h3>
                    <div className="card__details">
                        <ul>
                            <li><Arrow className="card__details__icon" />1 TB Storage</li>
                            <li><Arrow className="card__details__icon" />5 Users Allowed</li>
                            <li><Arrow className="card__details__icon" />Send Upto 10 GB</li>
                            <li><Arrow className="card__details__icon" />10 Domains</li>
                            <li><Arrow className="card__details__icon" />24/7 Support</li>
                        </ul>
                    </div>
                    <p className="card__recommend">James and three others recommended this plan</p>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className='card__info'>
                        <div className="card__price">
                            <h2 className="card__price--head">Premium</h2>
                            <p className="card__price--amount">$249.99<span className="card__price--tagline">/Month</span></p>
                        </div>
                     <button className="btns">sign up</button>
                    </div>
                </div>
            </div>
        );
    }
}
