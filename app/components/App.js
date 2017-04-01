import React from 'react'
import LeftSide from './leftside/Leftside'
import Nav from './nav/Nav'
import $ from 'jquery'
require('./nav/Nav.less')
export default class App extends React.Component{
    componentDidMount(){
        setInterval(function () {
            var rh = $('.right-side').height()
            var lh = $('.left-side').height()
            if(rh > lh)  $('.left-side').css({height: rh})
            if(rh < lh)  $('.right-side').css({height: lh})

        },5 * 1000)
    }
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



