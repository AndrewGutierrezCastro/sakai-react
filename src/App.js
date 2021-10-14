import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './layout/flags/flags.css';
import './layout/layout.scss';
import './App.scss';
import ChatComponent from './components/ChatComponent';

const App = () => {
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);

    return (
        <div>
            <AppTopbar layoutColorMode={layoutColorMode} mobileTopbarMenuActive={mobileTopbarMenuActive}/>
            <div className="layout-main-container">
                <div className="layout-main">
                    <Route path="/" exact component={ChatComponent}/>
                </div>

                <AppFooter layoutColorMode={layoutColorMode}/>
            </div>
        </div>
    );

}

export default App;
