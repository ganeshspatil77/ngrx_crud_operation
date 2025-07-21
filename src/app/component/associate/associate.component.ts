import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addAssociate } from '../../store/Associate/Associate.action';
import { Associate } from '../../store/associate.modal';

@Component({
  selector: 'app-associate',
  standalone: true,
  imports: [ReactiveFormsModule, MatRadioModule, MatSelectModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './associate.component.html',
  styleUrl: './associate.component.scss'
})
export class AssociateComponent implements OnInit {
  associateForm: any = {}
  title: string = 'Create Associate';
  isEdit: boolean = false;
  dialogData: any;


  constructor(private formBuilder: FormBuilder, private store: Store, private ref: MatDialogRef<AssociateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) { }



  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;

    this.associateForm = this.formBuilder.group({
      id: this.formBuilder.control(0),
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
      phone: this.formBuilder.control('', Validators.required),
      address: this.formBuilder.control('', Validators.required),
      type: this.formBuilder.control('CUSTOMER'),
      group: this.formBuilder.control('level1'),
      status: this.formBuilder.control(true),
    })
  }

  closePopUp() {
    this.ref.close();
  }

  saveAssociate() {
    if (this.associateForm.valid) {

      let obj: Associate = {
        id: +this.associateForm.value.id,
        name:this.associateForm.value.name,
        email: this.associateForm.value.email,
        phone: this.associateForm.value.phone,
        group: this.associateForm.value.group,
        address: this.associateForm.value.address,
        type: this.associateForm.value.type,
        status: this.associateForm.value.status,

      }

      

      this.store.dispatch(addAssociate({ inputData:obj}))
      this.closePopUp();

    }
  }



}
