import jkOrder from './jkOrder';
import {convertUIKeyToLowercase, AppUI} from 'tonva-react-usql';

const ui:AppUI = {
    usqs: {
        "JKDev/jkOrder": jkOrder,
    }
};

convertUIKeyToLowercase(ui);

export default ui;
export { CMyApp } from './CApp';
