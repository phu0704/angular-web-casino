import {
  AfterContentChecked,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  content = '';
  statusShow = false;
  constructor(private appService: AppService) {}
  getContent() {
    this.appService.tab.map((i) => {
      if (i.status) {
        this.content = i.content;
        if (this.content === '') this.content = 'No data';
      }
    });
    return this.content;
  }
  showMore() {
    this.statusShow = !this.statusShow;
  }
  ngOnInit(): void {}
  checkContent(): boolean {
    let heightContent: number | undefined = 0;
    heightContent = document.getElementById('content-showmore')?.clientHeight;
    if (heightContent !== undefined && heightContent < 96) {
      return true;
    } else {
      return false;
    }
    return false;
  }
}
