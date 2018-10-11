import * as React from 'react';
import { NavView } from 'tonva-tools';
import {CApp} from 'tonva-react-usql';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ui, { CMyApp } from './ui';

const tonvaApp = 'JKDev/jkOrder';

class App extends React.Component {
    async onLogined() {
      let cApp = new CMyApp(tonvaApp, ui);
      await cApp.start();
    }
    render() {
        return <NavView onLogined={this.onLogined} />;
    }
}

export default App;
