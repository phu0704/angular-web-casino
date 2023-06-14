import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../shared/app.service';

@Component({
  selector: 'app-show18',
  templateUrl: './show18.component.html',
  styleUrls: ['./show18.component.scss'],
})
export class Show18Component implements OnInit {
  @ViewChild('bookie') elBookie!: ElementRef;
  lengthBookieList: number = 0;
  unHoverPre: boolean = false;
  unHoverNext: boolean = false;
  constructor(private appService: AppService) {}
  show18More() {
    this.appService.itemsPerPage = this.appService.itemsPerPage + 18;
    this.appService.p = 1;
  }
  getBookieStart() {
    return (
      this.appService.p * this.appService.itemsPerPage -
      this.appService.itemsPerPage +
      1
    );
  }
  getBookieEnd() {
    let page = this.appService.itemsPerPage;
    if (this.appService.p * page > this.getLengthBookieList())
      return this.getLengthBookieList();
    return this.appService.p * page;
  }
  setP(e: any) {
    this.appService.p = e;
    // this.elBookie.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  getLengthBookieList(): number {
    return this.lengthBookieList;
  }
  previour() {
    if (this.appService.p > 1) {
      this.appService.p--;

      // document.getElementById('bookie').scrollIntoView({ behavior: 'smooth' });
    } else {
      this.unHoverPre = true;
    }
    this.checkBtn();
  }
  next() {
    if (this.appService.p * 4 < this.getLengthBookieList()) {
      this.appService.p++;
      // document.getElementById('bookie').scrollIntoView({ behavior: 'smooth' });
    } else this.unHoverNext = true;
    this.checkBtn();
  }
  getP() {
    return this.appService.p;
  }
  checkBtn() {
    if (this.appService.p <= 1) {
      this.unHoverPre = true;
    } else this.unHoverPre = false;
    if (this.appService.p * 4 > this.getLengthBookieList()) {
      this.unHoverNext = true;
    } else this.unHoverNext = false;
  }

  ngOnInit(): void {
    this.appService.bookieListApi.subscribe((bookieList) => {
      this.lengthBookieList = bookieList.length;
      this.checkBtn();
    });
  }
}
