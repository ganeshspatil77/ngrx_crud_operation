export interface Associate {
    id:number;
    name:string;
    email:string;
    phone:string;
    type:string;
    address:string;
    group:string;
    status:boolean
}

export interface AssociateState {
    list:Associate[],
    associateObj:Associate,
    errorMessage:string
}