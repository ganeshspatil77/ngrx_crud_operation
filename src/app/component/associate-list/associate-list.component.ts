import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { AssociateComponent } from '../associate/associate.component';
import { Associate } from '../../store/associate.modal';
import { Store } from '@ngrx/store';
import { getAssociateList } from '../../store/Associate/Associate.selector';
import { loadAssociate } from '../../store/Associate/Associate.action';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort'

@Component({
  selector: 'app-associate-list',
  standalone: true,
  imports: [MatSlideToggleModule, MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './associate-list.component.html',
  styleUrl: './associate-list.component.scss'
})
export class AssociateListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  associateList!: Associate[];
  displayedColumns: any[] = [];
  datasource: any;

  constructor(private dialogBox: MatDialog, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadAssociate())
    this.store.select(getAssociateList).subscribe((item) => {
      this.associateList = item
      console.log('associateList', this.associateList);
      if (this.associateList.length > 0) {
        this.displayedColumns = []
        this.displayedColumns = Object.keys(this.associateList[0]);
        this.displayedColumns.push("action");
        this.datasource = new MatTableDataSource<Associate>(this.associateList);
        setTimeout(() => {
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
      },2000);
      }

    })
  }


  openAddModel(code: number, title: string) {
    this.dialogBox.open(AssociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })
  }

}
