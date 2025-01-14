import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  alertMessage: any;
  showModal = false; //show model is control flag that control the model is visible or not

  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



    onSubmit() {
    this.router.navigate(["/dashboard"])
    }
      
}





