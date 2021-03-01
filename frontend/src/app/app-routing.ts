
import { Routes, RouterModule } from '@angular/router';
import { TableComponent} from './table/table.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all' },
  { path: 'user', component: TableComponent, pathMatch: 'full' },
  // { path: 'user/:id', component: TableComponentDetails },
  { path: 'table', component: TableComponent},
  { path: 'add', component: AddPersonComponent},
  { path: 'edit', component: EditPersonComponent, pathMatch: 'full'},
  { path: 'edit/:id', component: EditPersonComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
