import React from 'react';
import { ReactComponent as Sad } from './SVG/emoji-sad.svg';
import { ReactComponent as Happy } from './SVG/emoji-happy.svg';
import { ReactComponent as Neutral } from './SVG/emoji-neutral.svg';
import { Link } from 'react-router-dom';



export class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item side-nav__item--active">
                        <Link to="/standard" className="side-nav__link" >
                            <Sad className="side-nav__icon" />
                            <span>standard</span>
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/premium" className="side-nav__link">
                            <Happy className="side-nav__icon" />
                            <span>PREMIUM</span>
                        </Link>
                    </li>
                    <li className="side-nav__item">
                        <Link to="/ultimate" className="side-nav__link">
                            <Neutral className="side-nav__icon" />
                            <span>ULTIMATE</span>
                        </Link>
                    </li>
                </ul>

                <div className="legal">Designed by Tashi</div>
            </nav>
        );
    }
}