import React from 'react';
import { render } from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/rightside/home/Home.js'
import About from './components/rightside/about/About.js'
import Skills from './components/rightside/skills/Skills.js'
import Detail from './components/rightside/detail/Detail'


require('./css/base.less')

let root = document.getElementById('app');
render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={About}/>
            <Route path="about" component={About}/>
            <Route path="home" component={Home}/>
            <Route path="skills" component={Skills}/>
            <Route path="/detail/:id" component={Detail}/>
            <Redirect from="detail/:id" to="/detail/:id"/>
        </Route>
    </Router>
    ,root);
