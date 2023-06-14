import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BookieFormModule } from '../bookie-form/bookie-form.module';
import { BookieReactiveFormModule } from '../bookie-reactive-form/bookie-reactive-form.module';
import { BookieModule } from '../bookie/bookie.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { InforModule } from '../infor/infor.module';
import { IntroModule } from '../intro/intro.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    BookieFormModule,
    BookieReactiveFormModule,
    BookieModule,
    FooterModule,
    HeaderModule,
    InforModule,
    IntroModule,
    SidebarModule,
  ],
})
export class HomeModule {}
