import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookieComponent } from './bookie.component';

const routes: Routes = [
  // {
  //   path: 'casinos',
  //   component: BookieComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookieRoutingModule {}
