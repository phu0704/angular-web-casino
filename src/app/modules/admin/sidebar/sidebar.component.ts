import { Component, EventEmitter, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { option } from '../../shared/types';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  optionList: option[] = [];
  constructor(private appService: AppService) {}
  getSidebar(): boolean {
    return this.appService.sidebarStatus;
  }
  ngOnInit(): void {
    this.optionList = this.appService.optionList.map((e) => {
      return {
        ...e,
        status: false,
      };
    });
  }
  openSlideBar() {
    this.appService.sidebarStatus = !this.appService.sidebarStatus;
  }
  hiddenOption(e: any) {
    let name = e.target.name;
    this.optionList.map((i) => {
      if (i.name === name) {
        i.status = !i.status;
      }
    });
  }
}
