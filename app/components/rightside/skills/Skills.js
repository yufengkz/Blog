import React from 'react';

export default class Skills extends React.Component {

    render() {
        var skills = require('../../../data/skills.json')
        console.log(skills)
        var lists = skills.map( (item, index) => {
            return <li key={'skills_' + index}>
                        <h3>{index + 1 + '.' + item.title}</h3>
                        <p className="txt_b">{item.degree}</p>
                        <p className="bd_b pb_10">{item.content}</p>
                        <i style={{display: index == 0 ? 'block' : 'none'}} className="shadow"></i>
                        <i className="dot"></i>
                    </li>
        })
        return (
            <div className="right-side">
                <div className="about">
                    <h2 className="about_title">Skills <i className="line"></i></h2>
                    <div className="about_list">
                        <h2 className="ico-skills">Skill Lists</h2>
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

