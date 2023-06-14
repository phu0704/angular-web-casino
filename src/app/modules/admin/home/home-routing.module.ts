import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BookieComponent } from '../bookie/bookie.component';
import { BookieFormComponent } from '../bookie-form/bookie-form.component';
import { AdminGuard } from '../../../admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'casinos',
        component: BookieComponent,
      },
      {
        path: 'bookie-template/:id',
        component: BookieFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
