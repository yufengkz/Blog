/**
 * Created by Yufeng on 2017/3/30.
 */

import React from 'react'
require('./About.less')

export default class About extends React.Component{
    render(){
        return(
            <div className="right-side">
                <div className="about">
                    <h2 className="about_title">About Me <i className="line"></i></h2>
                    <div className="about_list">
                        <h2>项目经验</h2>
                        <ul>
                            <li>
                                <h3>项目名称：艺道中国找书画平台开发<a target="_blank" href="http://www.yidaochn.com/">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2016年6月</h5>
                                <p>描述：找书画隶属于北京博远同创科技有限公司，找书画作为全国首家书画作品溯源查询平台，专门为艺术品鉴证、备案提供服务，从艺术品源头出发，将艺术品鉴证备案电子数据化，建立艺术品权威的 "身份证"信息，实现书画作品有底可查、有据可依、有证可论，让艺术品行业更加持续、健康、生态发展。</p>
                                <p className="txt_b">主要技术：JQuery、JavaScript、Java模板引擎FreeMarker...</p>
                                {/*第一个有shadow*/}
                                <i className="shadow"></i>
                                <i className="dot"></i>
                            </li>
                            <li>
                                <h3>项目名称：艺道中国找书画平台微信版开发-微信版<a target="_blank" href="http://weixin.yidaochn.com/finder/">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2016年6月</h5>
                                <p>描述：找书画隶属于北京博远同创科技有限公司，找书画作为全国首家书画作品溯源查询平台，专门为艺术品鉴证、备案提供服务，从艺术品源头出发，将艺术品鉴证备案电子数据化，建立艺术品权威的 "身份证"信息，实现书画作品有底可查、有据可依、有证可论，让艺术品行业更加持续、健康、生态发展。</p>
                                <p className="txt_b">主要技术：Zepto、Vue、JavaScript...</p>
                                <i className="dot"></i>
                            </li>
                            <li>
                                <h3>项目名称：艺道中国艺术家官网-微信版<a target="_blank" href="http://weixin.yidaochn.com/yidao/zhao/index">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2017年1月</h5>
                                <p>描述：找书画隶属于北京博远同创科技有限公司，找书画作为全国首家书画作品溯源查询平台，专门为艺术品鉴证、备案提供服务，从艺术品源头出发，将艺术品鉴证备案电子数据化，建立艺术品权威的 "身份证"信息，实现书画作品有底可查、有据可依、有证可论，让艺术品行业更加持续、健康、生态发展。</p>
                                <p className="txt_b">主要技术：Zepto、JavaScript、JQuery...</p>
                                <i className="dot"></i>
                            </li>
                            <li>
                                <h3>项目名称：艺道艺术家藏品展示-艺库微信版<a target="_blank" href="http://weixin.yidaochn.com/yiku?id=2">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2016年</h5>
                                <p>描述：为方便艺术家进行藏品展示，开发一款类似相册功能的web网页，艺术家可根据藏品类别进行上传、管理、展示等功能。</p>
                                <p className="txt_b">主要技术：Zepto、JavaScript</p>
                                <i className="dot"></i>
                            </li>
                            <li>
                                <h3>项目名称：艺道在线拍卖网站开发<a target="_blank" href="http://paimai.yidaochn.com/">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2015年3月</h5>
                                <p>描述：艺道中国隶属于北京博远同创科技有限公司，是集艺术品交易、艺术家服务、艺术机构推广为一体的大型互联网交流平台，为目前艺术品领域最具特色的综合服务型平台。在电子商务飞速发展及互联网+的时代，中国的艺术品行业也受到影响，逐步向电子商务化发展。艺道中国经过大量的数据调研证明在艺术品行业完全可以依照艺术品行业的特色打造全新的移动互联网交易平台。</p>
                                <p className="txt_b">主要技术：JQuery、JavaScript、Java模板引擎FreeMarker</p>
                                <i className="dot"></i>
                            </li>

                            <li>
                                <h3>项目名称：艺道在线拍卖网站开发-微信版<a target="_blank" href="http://weixin.yidaochn.com/paimai">&nbsp;&nbsp;&nbsp;&nbsp;open</a></h3>
                                <h5>2015年11月</h5>
                                <p>描述：艺道中国隶属于北京博远同创科技有限公司，是集艺术品交易、艺术家服务、艺术机构推广为一体的大型互联网交流平台，为目前艺术品领域最具特色的综合服务型平台。在电子商务飞速发展及互联网+的时代，中国的艺术品行业也受到影响，逐步向电子商务化发展。艺道中国经过大量的数据调研证明在艺术品行业完全可以依照艺术品行业的特色打造全新的移动互联网交易平台。</p>
                                <p className="txt_b">主要技术：Zepto、JavaScript、Swiper、Java模板引擎FreeMarker</p>
                                <i className="dot"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



