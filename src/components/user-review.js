import React from 'react';
import UserP from './user-1.jpg';
import UserPn from './user-2.jpg';

export class Review extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="user-review">
                <figure className="review">
                    <blockquote className="review__text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                    </blockquote>
                    <figcaption className="review__user">
                        <img src={UserP} alt="user-1" className="review__photo"/>
                        <div className="review__user-box">
                            <p className="review__user-name">John Smith</p>
                            <p className="review__user-date">Jan 2nd, 2019</p>
                        </div>
                        <div className="review__rating">8.2</div>
                    </figcaption>
                </figure>
                <figure className="review">
                    <blockquote className="review__text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                    </blockquote>
                    <figcaption className="review__user">
                        <img src={UserPn} alt="user-1" className="review__photo"/>
                        <div className="review__user-box">
                            <p className="review__user-name">Mary Thomas</p>
                            <p className="review__user-date">Aug 24th, 2019</p>
                        </div>
                        <div className="review__rating">9.3</div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}