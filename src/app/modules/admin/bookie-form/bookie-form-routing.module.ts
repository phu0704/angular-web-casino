import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookieFormComponent } from './bookie-form.component';

const routes: Routes = [
  {
    path: 'bookie-template/:id',
    component: BookieFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookieFormRoutingModule {}
