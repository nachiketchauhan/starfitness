import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  faCoffee = faCoffee;
  loginForm!: FormGroup;
  hide = signal(true);
  alertMessage: any;
  showModal = false; //show model is control flag that control the model is visible or not

  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.maxLength(10), Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  toggleModal() { //method toggles the visibility of the modal
    this.showModal = !this.showModal;
  }
  
  
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onSignup() {
    this.router.navigate(["/signup"])
    }
    onForgot() {
    throw new Error('Method not implemented.');
    }
    clickEvent($event: MouseEvent) {
    throw new Error('Method not implemented.');
    }
    onSubmit() {
    this.router.navigate(["/dashboard"])
    }
      
}





