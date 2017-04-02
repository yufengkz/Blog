/**
 * Created by Administrator on 2017/4/1.
 */
import React from 'react';
import {hashHistory} from 'react-router'

import $ from 'jquery'

var img1 = require('../../../images/wxbg.png')
var img2 = require('../../../images/clipboard.png')
var img3 = require('../../../images/react.png')

export default class Detail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            article: {}
        }
    }
    componentWillMount(){
        var id = this.props.params.id
        let data = require('../../../data/data.json')
        let article = data.find( (item) => {
            return item.id == id
        })
        console.log(article)
        this.setState({article})
    }
    componentDidMount(){
        $(document).scrollTop(0)
    }

    handleBack(){
        hashHistory.goBack()
    }
    render() {


        return (
            <div className="right-side">
                <div className="about">
                    <h2 className="about_title">{this.state.article.category} <i className="line"></i></h2>
                    <div className="about_list">
                        <h2>{this.state.article.title} <button onClick={()=>this.handleBack()}>返回列表</button></h2>
                        <ul>
                            <li>
                                <h3>{this.state.article.introduction}</h3>
                                <h5>{this.state.article.createAt}</h5>
                                {this.state.article.id == 1 ? <p style={{width:'500px', height:'440px'}}><img style={{width: '100%', height: '100%'}} src={img1} alt=""/></p> : null}
                                {this.state.article.id == 2 ? <p style={{width:'740px', height:'440px'}}><img style={{width: '100%', height: '100%'}} src={img2} alt=""/></p> : null}
                                {this.state.article.id != 1 && this.state.article.id != 2 ? <p style={{width:'740px', height:'440px'}}><img style={{width: '100%', height: '100%'}} src={img3} alt=""/></p> : null}
                                <p>内容：{this.state.article.content}</p>
                                <p className="txt_b">作者：{this.state.article.author}</p>
                                {/*第一个有shadow*/}
                                <i className="shadow"></i>
                                <i className="dot"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

