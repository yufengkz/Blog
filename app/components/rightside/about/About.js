/**
 * Created by Yufeng on 2017/3/30.
 */

import React from 'react'
require('./About.less')

export default class About extends React.Component{
    render(){
        var abouts = require('../../../data/about.json')
        console.log(abouts)
        let lists = []
        abouts.map( (about, index) => {
            lists.push(<li key={index}>
                <h3>项目名称：{about.title}<a target="_blank" href={about.project_address}>&nbsp;&nbsp;&nbsp;&nbsp;项目地址({about.project_address})</a></h3>
                <h5>{about.date}</h5>
                <p><span style={{fontWeight: 'bold'}}>项目描述</span>：{about.introduction}</p>
                <div className="works"><span style={{fontWeight: 'bold', float: 'left'}}>工作描述：</span><Items works={about.works}>{about.works[index]}</Items>
                </div>
                <p className="txt_b">主要技术：{about.skills}...</p>
                {/*第一个有shadow*/}
                {index == 0 ? <i className="shadow"></i> : ''}
                <i className="dot"></i>
            </li>)
        } )


        return(
            <div className="right-side">
                <div className="about">
                    <h2 className="about_title">About Me <i className="line"></i></h2>
                    <div className="about_list">
                        <h2>项目经验</h2>
                        <ul>
                            {
                                lists
                            }
                            <li><h3>......</h3><i className="dot"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Items extends React.Component{

    render(){
        var works = this.props.works
        var lists = []
        for(let i = 0; i < works.length; i ++){
            lists.push(<p key={i}>{ i + 1 + '. ' + works[i].work_introduction}</p>)
        }
        return (
            <div>{lists}</div>
        )
    }
}



