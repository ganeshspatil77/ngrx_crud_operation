import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Associate } from "../associate.modal";


const getAssociateState = createFeatureSelector<Associate[]>('associate');

export const getAssociateList = createSelector(getAssociateState,(state:any)=>{
    return state.list
})