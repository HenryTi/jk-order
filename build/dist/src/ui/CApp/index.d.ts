/// <reference types="react" />
import { CApp } from "tonva-react-usql";
export declare class CMyApp extends CApp {
    private exLinks;
    protected loadUsqs(): Promise<void>;
    private exLinkRender;
    protected appPage: () => JSX.Element;
}
