import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { AssociateService } from "../../services/associate.service";
import { addAssociate, addAssociatesuccess, loadAssociate, loadAssociatefail, loadAssociatesuccess } from "./Associate.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showAlert } from "../common/App.action";

@Injectable()
export class AssociateEffect {

    _loadAssociate!: any
    _addAssociate!: any
    constructor(private actions$: Actions, private assoService: AssociateService) {
        console.log('effect associated', this.actions$);

        this._loadAssociate = createEffect(() =>

            this.actions$.pipe(ofType(loadAssociate), exhaustMap((action) => {
                return this.assoService.getAllAssociate().pipe(map((data: any) => {
                    return loadAssociatesuccess({ list: data })
                }),
                    catchError((_error) => of(loadAssociatefail({ errorMessage: _error.message })))
                )
            }))

        )

        this._addAssociate = createEffect(() =>

            this.actions$.pipe(ofType(addAssociate), switchMap((action: any) => {
                return this.assoService.createAssociate(action.inputData).pipe(switchMap((data) => {
                    return of(addAssociatesuccess({ inputData: action.inputData }),
                        showAlert({ message: 'Created Successfullu', resultType: 'pass' }))

                }),
                    catchError((_error) => of(showAlert({ message: 'Fail to create associate', resultType: 'fail' })))
                )
            }))

        )

    }



}