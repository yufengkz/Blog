import React from 'react'
import LeftSide from './leftside/Leftside'
import Nav from './nav/Nav'
import $ from 'jquery'
require('./nav/Nav.less')
export default class App extends React.Component{
    componentDidMount(){
        /*if($(window).width() >= 1200){
            var rh = $('.right-side').height()
            var lh = $('.left-side').height()
            var old_rh = rh;
            var old_lh = lh;
            setInterval(function () {
                if(rh > lh) {
                    $('.left-side').css({height: rh})
                    var new_rh = $('.right-side').height()
                    var new_lh = $('.left-side').height()
                    if(new_rh < old_rh){
                        $('.left-side').css({height: old_lh})
                    }
                }
                if(rh < lh) {
                    $('.right-side').css({height: lh})
                    var new_rh = $('.right-side').height()
                    var new_lh = $('.left-side').height()
                    if(new_lh < old_lh){
                        $('.right-side').css({height: old_rh})
                    }
                }

            }, 1000)
        }*/
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



