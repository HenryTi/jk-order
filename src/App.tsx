import * as React from 'react';
import {CrApp} from 'tonva-react-usql';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import logo from './logo.svg';
import { NavView } from 'tonva-tools';

const tonvaApp = 'devapp/DevApp';
let ui:any = undefined;

class App extends React.Component {
    async onLogined() {
      let crApp = new CrApp(tonvaApp, ui);
      await crApp.start();
    }
    render() {
        return <NavView onLogined={this.onLogined} />;
    }
}

export default App;
