import * as React from 'react';
import { Page } from "tonva-tools";
import { dictionary as x } from '../../res';
import { VSheetNew } from "tonva-react-usql";

export class VOrderNew extends VSheetNew {
    protected view = () => <Page header={this.label}>
        <div>{x.order.top}</div>
        {this.vForm.render()}
    </Page>;
}
