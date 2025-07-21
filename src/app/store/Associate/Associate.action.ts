import {createAction, props} from '@ngrx/store'
import { Associate } from '../associate.modal'

export const LOAD_ASSOCIATE='[associate page] load associate'
export const LOAD_ASSOCIATE__SUCCESS='[associate page] load associate success'
export const LOAD_ASSOCIATE_FAIL='[associate page] load associate fail'
export const ADD_ASSOCIATE='[associate page] add associate'
export const ADD_ASSOCIATE__SUCCESS='[associate page] add associate success'


export const loadAssociate = createAction(LOAD_ASSOCIATE)
export const loadAssociatesuccess = createAction(LOAD_ASSOCIATE__SUCCESS, props<{list:Associate[]}>())
export const loadAssociatefail = createAction(LOAD_ASSOCIATE_FAIL, props<{errorMessage:string}>())
export const addAssociate = createAction(ADD_ASSOCIATE, props<{inputData:Associate}>())
export const addAssociatesuccess = createAction(LOAD_ASSOCIATE__SUCCESS, props<{inputData:Associate}>())
