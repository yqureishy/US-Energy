import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Imports_ExportsTotal from './components/Crude/Imports-ExportsTotal';
import Production_ReservesTotal from './components/Crude/Production_ReservesTotal'
import Hydroelectric from './components/Renewable/Hydroelectric'
import Geothermal from './components/Renewable/Geothermal'
import Solar from './components/Renewable/Solar'
import Wind from './components/Renewable/Wind'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
            <BaseLayout>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/Non-Renewables/Imports_ExportsTotal" component = {Imports_ExportsTotal} />
              <Route exact path = "/Non-Renewables/Production_ReservesTotal" component = {Production_ReservesTotal} />
              <Route exact path = "/Renewables/Hydroelectric" component = {Hydroelectric} />
              <Route exact path = "/Renewables/Geothermal" component = {Geothermal} />
              <Route exact path = "/Renewables/Solar" component = {Solar} />
              <Route exact path = "/Renewables/Wind" component = {Wind} />

            </Switch>
            </BaseLayout>
            </BrowserRouter>
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
