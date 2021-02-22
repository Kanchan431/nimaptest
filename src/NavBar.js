import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Tabs } from 'antd';
import { Jobs, Inbox, Calender, Reports, Career, } from './components/Information';

const TabPane = Tabs;

function callback(key) {
  console.log(key);
}

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <Tabs defaultActiveKey="1" onChange={callback}>         
              <TabPane tab={<Link to="/">Jobs</Link>} key="1">
              </TabPane>
              <TabPane tab={<Link to="/inbox">Inbox</Link>} key="2">
              </TabPane>
              <TabPane tab={<Link to="/calender">Calender</Link>} key="3">
              </TabPane>
              <TabPane tab={<Link to="/career">Career Page</Link>} key="4">
              </TabPane>
              <TabPane tab={<Link to="/reports">Reports</Link>} key="5">
              </TabPane>
            </Tabs>
          </ul>
          <Switch>
            <Route exact path='/' component={Jobs}></Route>
            <Route exact path='/Inbox' component={Inbox}></Route>
            <Route exact path='/Calender' component={Calender}></Route>
            <Route exact path='/Career' component={Career}></Route>
            <Route exact path='/Reports' component={Reports}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default NavBar;


