import React from 'react';
import {Main} from "./main";
import { Sidebar } from "./slidebar";
import logo from './logo1.png';
import { ReactComponent as Bookmark } from './SVG/bookmark.svg';
import { ReactComponent as Chatbox } from './SVG/chat.svg';
import { BrowserRouter, Route, Link } from "react-router-dom";


export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            < BrowserRouter>
                <div className="container">
                <header className="header">
                    <img src={logo} alt="logo" className="logo"></img>
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <Bookmark className="user-nav__icon"/>
                        </div>
                        <div className="user-nav__icon-box">
                            <Chatbox className="user-nav__icon"/>
                            <span className="user-nav__notification">3</span>
                        </div>
                        <div className="user-nav__signin">
                            <div className="user-nav__signin-text">Sign Up</div>
                        </div>
                    </nav>
                </header>
                <div className="content">
                    <Sidebar />
                    <Main />
                </div>
            </div>
            </BrowserRouter> 
        );
    }
}