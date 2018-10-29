import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Cart from './Cart';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home}/>                 
                    <Route path='/cart' component={Cart}/>
                    <Route render={() => <p>Not Found</p>}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;