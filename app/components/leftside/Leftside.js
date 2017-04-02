/**
 * Created by Administrator on 2017/3/30.
 */
import React from 'react'
import Header from './header/Header'
import Aboutme from './aboutme/Aboutme'
import Contact from './contact/Contact'
import Skills from './skills/Skills'
require('./LeftSide.less')

export default class LeftSide extends React.Component{
    render(){
        return(
            <div className="left-side theme">
                <Header></Header>
                <Aboutme></Aboutme>
                {/*<Skills></Skills>*/}
                <Contact></Contact>
            </div>
        )
    }
}