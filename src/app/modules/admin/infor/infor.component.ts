import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Directive } from '@angular/core';
import { Answer, Content } from '../../shared/types';
// @Directive({
//   selector: '[IntersectionObserverDirective]',
// })
@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss'],
})
export class InforComponent {
  @ViewChild('elChooseR') elChooseR: ElementRef;
  @ViewChild('elCriteriaR') elCriteriaR: ElementRef;
  @ViewChild('elSortR') elSortR: ElementRef;
  @ViewChild('elFindR') elFindR: ElementRef;
  @ViewChild('elFiltersR') elFiltersR: ElementRef;
  title = '';
  answer: Answer = {
    safe: false,
    deposit: false,
    bonus: false,
    tax: false,
    free: false,
  };
  content: Content = {
    choose: false,
    criteria: false,
    writing: false,
    sort: false,
    find: false,
    filters: false,
    faq: false,
  };
  constructor(private appService: AppService) {}
  scrollInfor(inForBoxLeft: HTMLDivElement) {
    let x = inForBoxLeft.scrollTop.toFixed();
    let y = Number(x);
    if (y < 650) {
      this.selectedScroll(this.elChooseR);
    } else if (y < 1300) {
      this.selectedScroll(this.elCriteriaR);
    } else if (y < 1800) {
      this.selectedScroll(this.elSortR);
    } else if (y < 2700) {
      this.selectedScroll(this.elFindR);
    } else {
      this.selectedScroll(this.elFiltersR);
    }
  }
  selectedScroll(el: ElementRef) {
    this.elChooseR.nativeElement.className = '';
    this.elCriteriaR.nativeElement.className = '';
    this.elSortR.nativeElement.className = '';
    this.elFindR.nativeElement.className = '';
    this.elFiltersR.nativeElement.className = '';

    el.nativeElement.className = 'selected';
  }
  selectTo(e: HTMLDivElement) {
    // console.log(e);
    // let x = document.getElementById('cdcd');
    e.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  hiddenContent(e: any) {
    let id: string = e.target.id.slice(0, -4);
    if (id === 'choose') {
      this.content.choose = !this.content.choose;
    } else if (id === 'criteria')
      this.content.criteria = !this.content.criteria;
    else if (id === 'writing') this.content.writing = !this.content.writing;
    else if (id === 'sort') this.content.sort = !this.content.sort;
    else if (id === 'find') this.content.find = !this.content.find;
    else if (id === 'filters') this.content.filters = !this.content.filters;
    else if (id === 'faq') this.content.faq = !this.content.faq;
  }
}
