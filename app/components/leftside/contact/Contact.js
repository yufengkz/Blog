/**
 * Created by Yufeng on 2017/3/30.
 */

import React from 'react'
require('./Contact.less')

export default class Contact extends React.Component{
    render(){
        return (
            <div className="contact">
                <h2>Contact</h2>
                <ul>
                    <li>
                        <a className="ico-phone" href="javascript:;"></a>
                        <div className="class">
                            <h3>Phone</h3>
                            <p>18600901690</p>
                        </div>
                    </li>
                    <li>
                        <a className="ico-email" href="javascript:;"></a>
                        <div className="class">
                            <h3>Email</h3>
                            <p>yufeng.org@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <a className="ico-web" href="javascript:;"></a>
                        <div className="class">
                            <h3>Web</h3>
                            <p><a href="https://github.com/yufengkz">https://github.com/yufengkz</a></p>
                        </div>
                    </li>
                    <li>
                        <a className="ico-blog" href="javascript:;"></a>
                        <div className="class">
                            <h3>Blog</h3>
                            <p><a href="https://yufengkz.github.io/static">https://yufengkz.github.io/static</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}





