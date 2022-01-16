import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import theme from './theme';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>,


    document.querySelector('#root'),
);
