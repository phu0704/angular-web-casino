import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InforRoutingModule } from './infor-routing.module';
import { InforComponent } from './infor.component';

@NgModule({
  declarations: [InforComponent],
  imports: [CommonModule, InforRoutingModule],
  exports: [InforComponent],
})
export class InforModule {}
