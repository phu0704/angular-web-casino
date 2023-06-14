import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppService } from '../../shared/app.service';
import { Bookie } from '../../shared/types';
import { FormBuilder, NgForm, NgModel } from '@angular/forms';
import { switchMap } from 'rxjs';
import { error } from '@angular/compiler-cli/src/transformers/util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookie-form',
  templateUrl: './bookie-form.component.html',
  styleUrls: ['./bookie-form.component.scss'],
})
export class BookieFormComponent implements OnInit {
  @ViewChild('bookieForm') bookieForm: NgForm;
  id: number = 0;
  bookie: Bookie = {
    id: 0,
    logo: '',
    color: '',
    name: '',
    Featured: false,
    Evaluate: 0,
    PERFECT: false,
    Reputation: false,
    criteria: {
      playersFrom: false,
      englishWeb: false,
      englishSupport: false,
      liveChat: false,
      providers: 0,
      paymentMethod: 0,
      gameLicense: 0,
      vpn: false,
    },
    exclusive: '',
    whyPlay: [''],
    bonus: {
      maxDeposit: '',
      match: '',
      minDeposit: '',
      wagerReq: '',
      excludeBonus: false,
      noDeposit: '',
    },
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
    });
    this.getBookieApi();
  }
  getBookieApi() {
    this.appService.bookieListApi.subscribe((bookieList: Bookie[]) => {
      bookieList.forEach((b: Bookie) => {
        if (b.id === this.id) {
          this.bookie = { ...b };
        }
      });
    });
  }
  onSubmit() {
    console.log('submit');
    this.appService
      .setBookieListApi(this.bookie)
      .pipe(
        switchMap(() => this.activatedRoute.params),
        switchMap((params) =>
          this.router.navigate(['/home/casinos'], { queryParams: params })
        )
      )
      .subscribe({
        next: () => this.toastr.success('Update bookie success'),
        error: () => this.toastr.error('Update bookie error'),
        complete: () => this.toastr.error('Update bookie complete'),
      });
  }
  resetForm() {
    this.bookieForm.reset();
  }
  restore() {
    this.getBookieApi();
  }

  getNotify(bookieForm: NgForm): string {
    if (!bookieForm.valid) {
      return 'Please enter all fields correctly and completely';
    }
    return '';
  }
  checkValid2(name: NgModel) {
    console.log(name.errors?.['required']);
    console.log(name.errors?.['minlength']);
    console.log(name.errors?.['maxlength']);
  }
  checkValid(name: NgModel): boolean {
    //If error return true
    if (!name.valid) return true;
    return false;
  }

  checkError(name: NgModel, pattern: string): string {
    if (name.errors?.['required']) return 'field cannot be empty';
    else if (name.errors?.['minlength']) return 'missing characters';
    else if (name.errors?.['maxlength']) return 'character overflow';
    else if (name.errors?.['pattern']) return pattern;

    return 'nodata';
  }
}
