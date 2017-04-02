import React from 'react'
import {Link} from 'react-router'
import $ from 'jquery'


export default class Home extends React.Component {

    render() {
        let data = require('../../../data/data.json')

        let lists = []
        /*第一个有shadow*/
        for(let i = 0; i < data.length; i ++)
        {
            lists.push(<li key={i}>
                            <h3>{data[i].title}<Link to={"/detail/" + data[i].id}>&nbsp;&nbsp;&nbsp;&nbsp;点击查看详情</Link></h3>
                            <h5>{data[i].createAt}</h5>
                            <p>描述：{data[i].introduction}</p>
                            <p className="txt_b">作者：{data[i].author}</p>
                            <i className={i == 0 ? 'shadow' : ''}></i>
                            <i className="dot"></i>
                        </li>)
        }
        return(
            <div className="right-side">
                <div className="about">
                    <h2 className="about_title">Article <i className="line"></i></h2>
                    <div className="about_list">
                        <h2 className="ico-education">文章列表</h2>
                        <ul>
                            {
                                lists
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

