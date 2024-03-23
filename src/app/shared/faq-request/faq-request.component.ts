import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-faq-request',
  templateUrl: './faq-request.component.html',
  styleUrls: ['./faq-request.component.scss']
})
export class FaqRequestComponent implements OnInit, DoCheck {

  isContrast: boolean;

  constructor(){}

  ngOnInit(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }

  ngDoCheck(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }
}
