import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit(): void {}

  openSlidebar() {
    this.appService.sidebarStatus = !this.appService.sidebarStatus;
  }

  selectBtn(e: any) {
    this.appService.tab.map((item) => {
      if (item.name === e.target.name) {
        if (!item.status) item.status = true;
      } else {
        item.status = false;
      }
    });
  }
  getStatus(name: string) {
    let status = true;
    this.appService.tab.map((i) => {
      if (name === i.name) status = i.status;
    });
    return status;
  }
}
