import { React, Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='itemHeader'>
                    <h1>Kyle Eriss</h1>
                </div>
                <div className='itemHeader'>
                    <ul className='menu'>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}