import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Bookie } from '../../shared/types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookie',
  templateUrl: './bookie.component.html',
  styleUrls: ['./bookie.component.scss'],
})
export class BookieComponent implements OnInit, DoCheck, AfterViewInit {
  bookieList: Bookie[] = [];
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {}

  ngDoCheck(): void {}
  getBookieListApi() {
    this.appService.bookieListApi.subscribe((bookieList: Bookie[]) => {
      this.bookieList = bookieList.map((b: Bookie) => {
        return { ...b, status: false };
      });
    });
  }
  openHiddenBox(name: string): void {
    this.bookieList.forEach((bookie: Bookie): void => {
      if (bookie.name === name) {
        bookie.status = !bookie.status;
      }
    });
  }
  ngOnInit(): void {
    this.getBookieListApi();
  }
  getP(): number {
    return this.appService.p;
  }
  getItemsPerPage(): number {
    return this.appService.itemsPerPage;
  }
}
