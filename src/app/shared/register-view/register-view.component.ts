import { Component } from '@angular/core';

enum PossibleFields {
  login = 'login',
  register = 'register',
}

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent {

  isLoginView: boolean = true;

  setView(type: string) {
    this.isLoginView = type === PossibleFields.login ? true : false;
  }

  login() {
    
  }

}
