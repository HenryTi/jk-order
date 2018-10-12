import { CMyOrder } from ".";
import { VPage } from "tonva-tools";
export declare class VProductPage extends VPage<CMyOrder> {
    private product;
    private priceRows;
    private inputs;
    showEntry({ product, priceRows }: {
        product: any;
        priceRows: any[];
    }): Promise<void>;
    private addProduct;
    private refQuantity;
    private renderPack;
    private productPage;
}
