import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Pagesauvgarde from './components/Pagesauvgarde';
import Pagecomparaison from './components/Pagecomparaison';





function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Pagesauvgarde/>
                        </Route>

                        <Route exact path="/comparaison">
                            <Pagecomparaison/>
                        </Route>
                        

                        <Route path="*">
                            <Notfound/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
