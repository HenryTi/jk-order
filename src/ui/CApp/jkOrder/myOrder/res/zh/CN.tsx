import React from 'react';
import _ from 'lodash';

export default {
    $: {
        order: {
            top: ()=><>
                <h6>订单步骤</h6>
                <div>第一步：选定客户</div>
                <div>
                    第二步：颜色变化
                    <span className="text-success">说明</span>
                    <span className="text-danger">文字</span>，解释做单的过程
                </div>
            </>,
            title: _.template('订单 ${customer} 金额${amount}元'),
        }
    }
}
