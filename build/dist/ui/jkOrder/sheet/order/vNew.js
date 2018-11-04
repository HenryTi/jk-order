import * as React from 'react';
import { Page } from 'tonva-tools';
import { List } from 'tonva-react-form';
import { VEntity } from 'tonva-react-usql';
export class VSheetNew extends VEntity {
    constructor() {
        super(...arguments);
        this.onSubmit = async () => {
            let values = this.vForm.getValues();
            let valuesWithBox = this.vForm.values;
            //let ret = 
            await this.controller.onSave(values, valuesWithBox);
            /*
            this.ceasePage();
            //this.openPage(this.finishedPage);
            await this.controller.showSaved(ret);
            */
        };
        /*
        protected view = () => <Page header={this.label}>
            {this.vForm.render()}
        </Page>;
        */
        this.addRow = async () => {
            await this.selectProduct();
        };
        this.step1Next = async () => {
            this.ceasePage();
            this.customer = await this.cCustomerSelect.call('');
            this.openPage(this.orderPage);
            this.openPage(this.customerPage);
        };
        this.conformOrder = async () => {
            this.ceasePage();
            let { entity } = this.cCustomerSelect;
            entity.useId(this.customer.id);
            this.vForm.setValue('customer', entity.boxId(this.customer.id));
            await this.selectProduct();
        };
        this.addProductRows = async ({ product, packRows }) => {
            let { entity } = this.cProductSelect;
            entity.useId(product);
            let packEntity = entity.divs['pack'];
            let vArr = this.vForm.vArrs['products'];
            let { list } = vArr;
            for (let packRow of packRows) {
                let { pack, price, quantity, amount } = packRow;
                //packEntity.useId(pack);
                list.push({
                    product: entity.boxId(product),
                    pack: pack,
                    price: price,
                    quantity: quantity,
                    amount: amount,
                });
            }
            this.product = undefined;
            await this.selectProduct();
        };
        this.selectProduct = async () => {
            this.product = await this.cProductSelect.call();
            this.priceRows = await this.getPrices(this.product.id);
            //this.showVPage(VProductPage, {product:this.product, priceRows: prices});
            this.openPage(this.productPage);
        };
        this.stopOrder = () => {
            this.closePage();
        };
        /*
        private onSubmit = async () => {
            let values = this.form.getValues();
            let valuesWithBox = this.form.values;
            //let ret = await this.saveSheet(values, this.form.values);
            await this.controller.onSave(values, valuesWithBox)
            //alert('[' + this.label + '] 已保存: ' + JSON.stringify(ret));
            this.ceasePage();
            //this.openPage(<this.finishedPage />);
            //await this.showSaved(ret);
        }
        */
        this.step1SelectCustomer = () => {
            return React.createElement(Page, { header: "\u65B0\u5EFA\u8BA2\u5355" },
                React.createElement("div", { className: "p-3 d-flex align-items-center flex-column" }, this.x.top()),
                React.createElement("div", { className: "p-3 d-flex justify-content-center" },
                    React.createElement("button", { className: "w-25 btn btn-primary", onClick: this.step1Next }, "\u5F00\u59CB")));
        };
        this.customerPage = () => {
            return React.createElement(Page, { header: "\u786E\u8BA4\u5BA2\u6237" },
                React.createElement("div", { className: "p-3" }, "\u5BA2\u6237\u8BE6\u60C5\uFF0C\u4FE1\u7528\uFF0C\u6536\u8D27\u5730\u5740\uFF0C\u6536\u6B3E\u4FE1\u606F\uFF0C\u7B49\u7B49"),
                this.cCustomerSelect.createForm(undefined, this.customer).render(),
                React.createElement("div", { className: "p-3 d-flex justify-content-center" },
                    React.createElement("button", { className: "w-25 btn btn-primary", onClick: this.conformOrder }, "\u786E\u8BA4\u5F00\u5355"),
                    React.createElement("button", { className: "mx-3 btn btn-outline-secondary", onClick: this.stopOrder }, "\u62D2\u7EDD")));
        };
        this.orderPage = () => {
            return React.createElement(Page, { header: this.x.detail }, this.vForm.render());
        };
        this.inputs = {};
        this.addProduct = async () => {
            this.ceasePage();
            let packRows = [];
            for (let priceRow of this.priceRows) {
                let { pack, retail } = priceRow;
                let quantity = Number.parseFloat(this.inputs[pack.id].value);
                if (Number.isNaN(quantity))
                    continue;
                let packRow = {
                    pack: pack,
                    quantity: quantity,
                    price: retail,
                    amount: retail * quantity,
                };
                packRows.push(packRow);
            }
            await this.addProductRows({
                product: this.product.id,
                packRows: packRows
            });
        };
        this.refQuantity = (input, packId) => {
            this.inputs[packId] = input;
        };
        this.renderPack = (packRow, index) => {
            let { pack, retail } = packRow;
            return React.createElement("div", { className: "px-3 py-1 d-flex" },
                React.createElement("div", { className: "row py-1 align-items-center flex-fill" },
                    React.createElement("div", { className: "col-sm-6" }, pack.content()),
                    React.createElement("div", { className: "col-sm-6" },
                        React.createElement("div", { className: "row align-items-center" },
                            React.createElement("div", { className: "col-6 text-sm-right" },
                                React.createElement("span", { className: "text-danger" }, retail),
                                " \u5143"),
                            React.createElement("div", { className: "col-6" },
                                React.createElement("input", { className: "text-center form-control form-control-sm", ref: (input) => this.refQuantity(input, pack.id), type: "number", min: 0 }))))));
        };
        this.productPage = () => {
            let { discription } = this.product;
            return React.createElement(Page, { header: "\u9009\u5B9A\u4EA7\u54C1" },
                React.createElement("div", { className: "p-3 text-primary bg-white my-3" }, discription),
                React.createElement(List, { items: this.priceRows, item: { render: this.renderPack } }),
                React.createElement("div", { className: "p-3 d-flex justify-content-center" },
                    React.createElement("button", { className: "w-25 btn btn-primary", onClick: this.addProduct }, "\u52A0\u5165\u8BA2\u5355")));
        };
    }
    //private vSheetNew: VSheetNew;
    async showEntry(param) {
        //this.controller.vSheetNew = this;
        let cUsq = this.controller.cUsq;
        this.mapPrice = cUsq.entities.map('price');
        let customer = cUsq.entities.tuid('customer');
        this.cCustomerSelect = cUsq.cTuidSelect(customer);
        let product = cUsq.entities.tuid('product');
        this.cProductSelect = cUsq.cTuidSelect(product);
        this.vForm = this.createForm(this.onSubmit, param);
        let productsBand = this.vForm.getBand('products');
        productsBand.setAddRow(this.addRow);
        this.openPage(this.step1SelectCustomer);
    }
    async getPrices(productId) {
        await this.mapPrice.loadSchema();
        let { queries } = this.mapPrice;
        let ret = await queries.page.page({ _product: productId }, 0, 1000);
        return ret;
    }
}
//# sourceMappingURL=vNew.js.map