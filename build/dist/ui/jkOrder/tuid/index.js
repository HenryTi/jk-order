import * as React from 'react';
import { observer } from 'mobx-react';
import { LMR, Muted } from 'tonva-react-form';
const customer = {
    inputContent: (values) => {
        let { id, discription } = values;
        return React.createElement(React.Fragment, null, discription || 'id ' + id + ' ...');
    },
    rowContent: (row) => {
        let { discription } = row;
        let right = React.createElement(Muted, null);
        return React.createElement(LMR, { className: "px-3 py-2", left: discription, right: right });
    },
};
const productPackRowContent = observer((values) => {
    let { id, ratio, name, $owner } = values;
    let content, rText = String(ratio);
    if ($owner !== undefined) {
        let packType = $owner.valueFromFieldName('packType');
        let packName = packType.valueFromFieldName ? packType.valueFromFieldName('name') : packType['name'];
        if (packName) {
            if (name)
                content = name + ' = ' + (rText + packName);
            else
                content = (rText + packName);
        }
    }
    if (content === undefined)
        content = (name ? name + ' ' + rText : rText) + ' err: no $owner in values';
    return React.createElement("div", { className: "px-3 py-2" }, content);
});
const product = {
    inputContent: (values) => {
        let { id, discription } = values;
        return React.createElement(React.Fragment, null, discription || 'id ' + id + ' ...');
    },
    rowContent: observer((row) => {
        let { discription, packType } = row;
        let right;
        if (packType && packType.content) {
            right = React.createElement(Muted, null, packType.content());
        }
        return React.createElement(LMR, { className: "px-3 py-2", left: discription, right: right });
    }),
    divs: {
        pack: {
            inputContent: observer((values) => {
                let { id, ratio, name, $owner } = values;
                if ($owner === undefined)
                    return React.createElement(React.Fragment, null, name || ratio || 'id' + id + ' ...');
                let packType = $owner.valueFromFieldName('packType');
                let packName = packType.valueFromFieldName ? packType.valueFromFieldName('name') : packType['name'];
                return React.createElement(React.Fragment, null, name || (ratio + packName) || 'id' + id + ' ...');
            }),
            rowContent: productPackRowContent,
        }
    },
    form: {
        items: {
            packType: {
                autoList: true,
            },
            pack: {
                rowContent: productPackRowContent,
            }
        }
    }
};
const packType = {
    inputContent: (values) => {
        let { id, name, discription } = values;
        return React.createElement(React.Fragment, null, discription || name || 'id ' + id + ' ...');
    },
    rowContent: (row) => {
        let { name, discription } = row;
        let right = React.createElement(Muted, null, discription);
        return React.createElement(LMR, { className: "px-3 py-2", left: name, right: right });
    },
};
export default {
    customer: customer,
    product: product,
    packType: packType,
};
//# sourceMappingURL=index.js.map