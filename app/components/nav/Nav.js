/**
 * Created by Administrator on 2017/3/31.
 */

import React from 'react'
import {Link} from 'react-router'
require('./Nav.less')

export default class Nav extends React.Component{
    render(){
        let color = {
            color : '#fff',
            fontWeight: 'bold',
            fontSize: '18px'
        }
        return(
            <div>
                <div className="banner">
                    <h2>YuFeng 个人博客</h2>
                    {/*Nav*/}
                    <div id="contactUs">
                        <div id="countrySelection">
                            <div id="countrySelection-wrapper">
                                <ul id="countrySelection-items">
                                    <li className="countrySelection-item">
                                        <Link activeStyle={color} to="home">Home</Link>
                                    </li>
                                    <li className="countrySelection-item">
                                        <Link activeStyle={color} to="about">About</Link>
                                    </li>
                                    <li className="countrySelection-item">
                                        <Link activeStyle={color} to="skills">Skills</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}








