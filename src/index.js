import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}></Router>, document.getElementById('root'));
