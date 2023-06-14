import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookie-reactive-form',
  templateUrl: './bookie-reactive-form.component.html',
  styleUrls: ['./bookie-reactive-form.component.scss'],
})
export class BookieReactiveFormComponent implements OnInit {
  bookieForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.bookieForm = this.fb.group({
      status: false,
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
        ]),
      ],
      rememberMe: false,
    });
  }

  onSubmit() {
    console.log(this.bookieForm.value);
    console.log(this.bookieForm.valid);
  }

  checkValid(name: string) {
    let x = this.bookieForm.get(name)?.errors;
    for (let i in x) {
      if (i === 'required') {
        return name + ' required';
      } else if (i === 'minlength') return name + ' at least 6 characters';
      else if (i == 'pattern') return ' wrong format';
    }
    if (x === null) return '';
    return name + ' is required and must be valid.';
  }

  toast() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
