import * as React from 'react';
import {CApp} from 'tonva-react-usql';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import logo from './logo.svg';
import { NavView } from 'tonva-tools';

const tonvaApp = 'JKDev/jkOrder';
let ui:any = undefined;

class App extends React.Component {
    async onLogined() {
      let cApp = new CApp(tonvaApp, ui);
      await cApp.start();
    }
    render() {
        return <NavView onLogined={this.onLogined} />;
    }
}

export default App;
