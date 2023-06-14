import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookieReactiveFormRoutingModule } from './bookie-reactive-form-routing.module';
import { BookieReactiveFormComponent } from './bookie-reactive-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [BookieReactiveFormComponent],
  imports: [
    CommonModule,
    BookieReactiveFormRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
})
export class BookieReactiveFormModule {}
