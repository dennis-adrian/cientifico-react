import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './Organisms/Header';
import Character from './Pages/Character';
import Home from './Pages/Home';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/character/:id' component={Character} />
            <Route component={() => (
                <div className="Error404">
                    <h2>Error 404</h2>
                </div>
            )} />
        </Switch>
    </Router>
);

export default App;