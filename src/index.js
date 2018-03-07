import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
                 <MuiThemeProvider>   
                    <App />
                    </MuiThemeProvider>   
                </Provider>, document.getElementById('root'));
registerServiceWorker();
