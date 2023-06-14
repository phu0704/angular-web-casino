import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Show18RoutingModule } from './show18-routing.module';
import { Show18Component } from './show18.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [Show18Component],
  imports: [CommonModule, Show18RoutingModule, NgxPaginationModule],
  exports: [Show18Component],
})
export class Show18Module {}
