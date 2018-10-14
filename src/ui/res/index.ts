import { x } from 'tonva-tools';
import CN from './zh/CN';

const res = {
    zh: {
        CN: CN
    }
};

let resX = x(res);
export const dictionary = resX.x;
export default res;
