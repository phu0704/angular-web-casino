import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from '../../shared/app.service';
import { User } from '../../shared/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  bookieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private appservice: AppService,
    private el: ElementRef,
    private reder: Renderer2
  ) {}

  ngAfterViewInit(): void {
    // this.el.nativeElement.querySelector('.check').style.background = 'red';
  }
  ngOnInit(): void {
    this.bookieForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-zA-Z0-9]{6,16}$/),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,32}$/
          ),
        ]),
      ],
    });
  }

  onSubmit() {
    let u: User = {
      id: 0,
      username: this.bookieForm.getRawValue().username,
      password: this.bookieForm.getRawValue().password,
    };
    this.appservice.getUser().subscribe((userList: User[]) => {
      let result = userList.find(
        (user: User) =>
          user.username === u.username && user.password === u.password
      );
      if (result !== undefined) {
        this.appservice.statusLogin = true;
        this.toastr.success('Login success');
        this.router.navigate(['/home']);
      } else {
        this.toastr.error('Incorrect username or password');
      }
    });
  }

  checkValid(name: string) {
    let x = this.bookieForm.get(name)?.errors;
    for (let i in x) {
      if (i === 'required') {
        return name + ' required';
      } else if (i === 'minlength') return name + ' at least 6 characters';
      else if (i == 'pattern' && name === 'username')
        return 'username must be at least 6 characters including uppercase, lowercase and number';
      else if (i == 'pattern' && name === 'password')
        return 'Password must be at least 8 characters and contain uppercase, lowercase and characters';
    }
    if (x === null) return '';
    return name + ' is required and must be valid.';
  }

  toast() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
