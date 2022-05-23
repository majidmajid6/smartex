import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Test1 from './components/Test1';
import Fin from './components/Fin';
import Notfound from './components/Notfound';





function App() {
    const [score, setScore] = useState(0);



    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Test1 setScore={setScore} />
                        </Route>

                        <Route exact path="/fin">
                            <Fin score={score}/>
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
