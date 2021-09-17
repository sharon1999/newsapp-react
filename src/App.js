
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News  from "./Components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 25
  state = {
    progress:0
  }
  setProgress = (progress) =>{
      this.setState ({progress:progress})
  }
  render() {
    return (
      <div>
        <Router> 
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress} 
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
