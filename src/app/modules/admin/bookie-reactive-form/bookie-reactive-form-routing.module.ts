import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookieReactiveFormComponent } from './bookie-reactive-form.component';

const routes: Routes = [
  {
    path: 'bookie-reactive/:id',
    component: BookieReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookieReactiveFormRoutingModule {}
