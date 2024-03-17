import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenuOption: boolean = false;
  isContrast: boolean;
  textColor: string;

  constructor() {}

  ngOnInit(): void {
    this.isContrast = !!localStorage.getItem('contrast');
    console.info('isContrast: ', this.isContrast)
    this.textColor = this.isContrast ? 'header-background__contrast' : 'header-background__white';
  }

  changeContrast() {
    if (!localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', 'true');
    } else {
      localStorage.removeItem('contrast');
    }
    window.location.reload();
  }

  fontDecrease() {
    console.info('decrease')
  }

  fontIncrease() {
    console.info('increase')
  }
}
