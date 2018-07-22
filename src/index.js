import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>   
     <Nav/> 
     </BrowserRouter>,    
   
    document.getElementById('root'));
registerServiceWorker();
