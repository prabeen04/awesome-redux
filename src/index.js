import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Provider store={store}>
                 <MuiThemeProvider>  
                 <Router basename={process.env.PUBLIC_URL}>    
                    <App />
                 </Router>   
                </MuiThemeProvider>   
                </Provider>, document.getElementById('root'));
registerServiceWorker();
