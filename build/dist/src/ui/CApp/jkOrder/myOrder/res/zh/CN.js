import React from 'react';
import _ from 'lodash';
export default {
    $: {
        order: {
            top: () => React.createElement(React.Fragment, null,
                React.createElement("h6", null, "\u8BA2\u5355\u6B65\u9AA4"),
                React.createElement("div", null, "\u7B2C\u4E00\u6B65\uFF1A\u9009\u5B9A\u5BA2\u6237"),
                React.createElement("div", null,
                    "\u7B2C\u4E8C\u6B65\uFF1A\u989C\u8272\u53D8\u5316",
                    React.createElement("span", { className: "text-success" }, "\u8BF4\u660E"),
                    React.createElement("span", { className: "text-danger" }, "\u6587\u5B57"),
                    "\uFF0C\u89E3\u91CA\u505A\u5355\u7684\u8FC7\u7A0B")),
            title: _.template('订单 ${customer} 金额${amount}元'),
        }
    }
};
//# sourceMappingURL=CN.js.map