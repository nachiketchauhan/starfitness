import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {
  MatDialog
} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  faCoffee = faCoffee;
  loginForm!: FormGroup;

  alertMessage: any;
  showModal = false; //show model is control flag that control the model is visible or not

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signup(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
     
    });

    
  }



  onSubmit() {
    this.router.navigate(["/dashboard"])
  }

}





