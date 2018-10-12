var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { NavView } from 'tonva-tools';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ui, { CMyApp } from './ui';
const tonvaApp = 'JKDev/jkOrder';
class App extends React.Component {
    onLogined() {
        return __awaiter(this, void 0, void 0, function* () {
            let cApp = new CMyApp(tonvaApp, ui);
            yield cApp.start();
        });
    }
    render() {
        return React.createElement(NavView, { onLogined: this.onLogined });
    }
}
export default App;
//# sourceMappingURL=App.js.map