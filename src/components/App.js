import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../redux/reducers';
import { getUsers, getRecords } from '../redux/actions';
import Login from './Login';
import Register from './Register';
import RecordTable from './RecordTable';
import '../styling/App.css';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

store.dispatch(getUsers());
store.dispatch(getRecords());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/" component={RecordTable} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App;