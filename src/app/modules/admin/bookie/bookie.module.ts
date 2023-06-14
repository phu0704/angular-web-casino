import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookieRoutingModule } from './bookie-routing.module';
import { BookieComponent } from './bookie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Show18Component } from './show18/show18.component';
import { Show18Module } from './show18/show18.module';

@NgModule({
  declarations: [BookieComponent],
  imports: [
    CommonModule,
    BookieRoutingModule,
    NgxPaginationModule,
    Show18Module,
  ],
})
export class BookieModule {}
