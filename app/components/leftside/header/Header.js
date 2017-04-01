import React from 'react'
require('./Header.less')

export default class Header extends React.Component{
    render(){
        return(
            <div className="header_box">
                <a onClick={()=>{alert('屌丝一枚')}} href="javascript:;"><img src={require('../../../images/header.jpg')} alt=""/></a>
                <h2>YU FENG</h2>
                <p>Loser Developer</p>
            </div>
        )
    }
}


