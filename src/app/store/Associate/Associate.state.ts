import { AssociateState } from "../associate.modal";

export const associateState:AssociateState = {
    list:[],
    errorMessage:'',
    associateObj:{
        id: 0,
        name: "",
        email: "",
        phone: "",
        type: "CUSTOMER",
        address: "",
        group: "level1",
        status: true
    }
}