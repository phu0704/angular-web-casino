import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {}
  getSidebarStatus() {
    return this.appService.sidebarStatus;
  }

  ngOnInit(): void {
    this.router.navigate(['/home/casinos']);
  }
}
