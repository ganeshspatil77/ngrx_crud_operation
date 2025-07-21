import { Injectable } from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar'
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { empty, showAlert } from "./App.action";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AppEffects {

    _showAlert!:any;
    constructor(private actions:Actions, private snackBar:MatSnackBar){
        this._showAlert = createEffect(()=>
            this.actions.pipe(
                ofType(showAlert),
                exhaustMap((action:any)=>{
                    return this.showSnackBar(action.message,action.resultType).afterDismissed().pipe(
                        map(()=>{
                            return empty();
                        })
                    )
                })
            )
        )
    }


    showSnackBar(message:string, resultType:string = 'fail'){
        let _class = resultType == 'pass' ? 'green-snackbar' : 'red-snackbar';
        return this.snackBar.open(message,'OK',{
            verticalPosition:'top',
            horizontalPosition:'end',
            duration:5000,
            panelClass:[_class]
        })
    }

}