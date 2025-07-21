import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssociateListComponent } from './component/associate-list/associate-list.component';
import { Store } from '@ngrx/store';
import { loadAssociate } from './store/Associate/Associate.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssociateListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx_crud';

  constructor(private store: Store) {
  // this.store.dispatch(loadAssociate());
}
}
