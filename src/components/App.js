import React, { Component } from 'react';
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import NotMatch from './NotMatch';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    App
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/posts" component={Posts} />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;