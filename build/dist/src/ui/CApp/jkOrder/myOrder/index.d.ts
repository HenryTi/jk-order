import { CSheet, CUsq, Sheet } from "tonva-react-usql";
export interface PackRow {
    pack: number;
    price: number;
    quantity: number;
    amount: number;
}
export interface ProductRow {
    product: number;
    packRows: PackRow[];
}
export declare class CMyOrder extends CSheet {
    private customer;
    private product;
    private cCustomerSelect;
    private cProductSelect;
    private form;
    private mapPrice;
    constructor(cUsq: CUsq, sheet: Sheet);
    internalStart(param?: any): Promise<void>;
    private addRow;
    private step1Next;
    private conformOrder;
    private getPrices;
    addProductRows: ({ product, packRows }: ProductRow) => Promise<void>;
    private selectProduct;
    private stopOrder;
    private onSubmit;
    private step1SelectCustomer;
    private customerPage;
    private orderPage;
    private restart;
    private finishedPage;
}
