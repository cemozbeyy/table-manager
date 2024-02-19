import { Injectable } from '@angular/core';
import { TableModel } from './table-data';
import { State, Selector, Action, StateContext } from '@ngxs/store';

export class AddTableData {
    static readonly type = '@@ADD_DATA';

    constructor(public data: TableModel) { }
}
export interface TableStateModel {
    tableDatas: TableModel[];
}

@State<TableStateModel>({
    name: 'table',
    defaults: {
        tableDatas: []
    }
})
@Injectable()
export class TableState {

    @Selector()
    static tableDatas(state: TableStateModel) {
        return state.tableDatas;
    }

    @Action(AddTableData)
    addTableData(ctx: StateContext<TableStateModel>, action: AddTableData) {
        const state = ctx.getState();
        const newState: TableStateModel = {
            ...state,
            tableDatas: [...state.tableDatas, action.data]
        };
        ctx.setState(newState);
    }
}