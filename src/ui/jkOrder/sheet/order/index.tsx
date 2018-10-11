import * as React from 'react';
import { SheetUI } from 'tonva-react-usql';
import { VOrderNew } from './new';
import { observer } from 'mobx-react';

const orderUI:SheetUI = {
    sheetNew: VOrderNew,
    sheetTitle: (values:any):string => {
        return '订单';
    },
    form: {
        items: {
            customer: {editable: false},
            sumAmount: ():number => {
                return 1;
            },
            products: {
                rowContent: observer((values:any) => {
                    let { product, pack, price, quantity} = values;
                    return <div className="row px-3 py-2">
                        <div className="col-8">
                            <div className="text-primary">{product.content()}</div>
                            <div className="small">{pack.content()}</div>
                        </div>
                        <div className='col-2 text-right'>
                            <span className="text-danger h5 mb-0">{price.toFixed(2)}</span> <small>元</small>
                        </div>
                        <div className='col-2'>{quantity}</div>
                    </div>;
                }),
                items: {
                    product: {editable:false},
                    pack: {editable:false},
                    price: {editable:false},
                    amount: function(this:any):number {
                        return (this.quantity === undefined || this.quantity === null? 0 : this.quantity) * 
                            (this.price === undefined || this.price === null? 0 : this.price);
                    }
                },
            }
        },
    }
};

export default orderUI;
