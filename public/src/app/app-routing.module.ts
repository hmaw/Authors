import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'new',component: NewComponent },
  { path: 'all',component: AllComponent },
  { path: 'edit/:id',component: EditComponent }, //Don't need delete as not having a page:
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
