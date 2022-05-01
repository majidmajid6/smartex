import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Test5 from './components/Test5';
import Test6 from './components/Test6';
import Test7 from './components/Test7';
import Test8 from './components/Test8';
import Notfound from './components/Notfound';





function App() {

    const [positive, setpositive] = useState(0);
    const [negative, setnegative] = useState(0);


    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Test1 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative} />
                        </Route>

                        <Route exact path="/test2">
                            <Test2 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test3">
                            <Test3 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test4">
                            <Test4 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test5">
                            <Test5 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test6">
                            <Test6 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test7">
                            <Test7 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
                        </Route>

                        <Route exact path="/test8">
                            <Test8 setpositive={setpositive} positive={positive} setnegative={setnegative} negative={negative}/>
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
