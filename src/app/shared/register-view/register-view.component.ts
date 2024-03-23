import { Component, OnInit, DoCheck } from '@angular/core';

enum PossibleFields {
  login = 'login',
  register = 'register',
}

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements DoCheck, OnInit {

  isLoginView: boolean = true;
  isContrast: boolean;

  setView(type: string) {
    this.isLoginView = type === PossibleFields.login ? true : false;
  }

  ngDoCheck(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }

  ngOnInit(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }

  login() {
    document.getElementById('email')?.setAttribute('value', '');
    document.getElementById('password')?.setAttribute('value', '');
  }

}
