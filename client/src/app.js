import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Notfound from './components/Notfound';





function App() {
    const [resto, setResto] = useState([])


    return (
        <Router>
            <div className="App">
                <Navbar setResto={setResto} />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home  resto= {resto}/>
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
