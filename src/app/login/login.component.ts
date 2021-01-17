import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticatedUser = [
    { username : 'di-admin@neutrinotechsystems.com', password: 'Nts@1234'}
  ];


  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.form.valid && this.form.value.username === 'di-admin@neutrinotechsystems.com' && this.form.value.password === 'Nts@1234') {
      this.router.navigate(['./home'])
    }
  }

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  }


