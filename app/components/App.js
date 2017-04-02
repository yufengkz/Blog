import React from 'react'
import LeftSide from './leftside/Leftside'
import Nav from './nav/Nav'
import $ from 'jquery'
require('./nav/Nav.less')
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <div className="clearfix">
                    <LeftSide></LeftSide>
                    {this.props.children}
                </div>
            </div>
        )
    }
}



