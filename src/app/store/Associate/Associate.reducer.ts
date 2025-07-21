import { createReducer, on } from "@ngrx/store";
import { associateState } from "./Associate.state";
import { addAssociatesuccess, loadAssociatefail, loadAssociatesuccess } from "./Associate.action";

const _associateReducer = createReducer(associateState,
    on(loadAssociatesuccess, (state, action) => {
        console.log(action)
        return {
            ...state,
            list: [...action.list],
            errorMessage: ''
        }
    }),

    on(loadAssociatefail, (state, action) => {
        return {
            ...state,
            list: [],
            errorMessage: action.errorMessage
        }
    }),

    on(addAssociatesuccess, (state, action) => {
        const maxId = Math.max(...state.list.map((o: any) => o = o.id));
        const newData = { ...action.inputData }
        newData.id = maxId + 1

        return {
            ...state,
            list: [...state.list, newData],
            errorMessage: ''
        }
    })
)



export function AssociateReducer(state: any, action: any) {
    return _associateReducer(state, action)
}