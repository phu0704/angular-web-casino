import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookieFormRoutingModule } from './bookie-form-routing.module';
import { BookieFormComponent } from './bookie-form.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BookieFormComponent],
  imports: [
    CommonModule,
    BookieFormRoutingModule,
    FormsModule,
    RouterLink,
    MatInputModule,
  ],
})
export class BookieFormModule {}
