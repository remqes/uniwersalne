import { Component, OnInit, DoCheck } from '@angular/core';
import { StorageService } from '../storage.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const enum ButtonTypes {
  offers = 'offers',
  observed = 'observed',
  settings = 'settings',
};

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent implements OnInit, DoCheck {

  constructor(private storage: StorageService, private http: HttpClient) {}

  activeField: string;
  isContrast: boolean;
  isFavInStorage: boolean = false;
  getUserOffers$: Observable<any>;

  ngOnInit(): void {
    this.activeField = this.storage.activeField ?? 'observed';
    this.getUserOffers$ = this.storage.getUserOffers();
    this.isContrast = !!localStorage.getItem('contrast');

    this.isFavInStorage = localStorage.getItem('favourite') !== null;
  }

  ngDoCheck(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }

  activateView(type: string) {
    switch(type) {
      case 'offers': 
        this.activeField = this.storage.activeField = 'offers';
        break;
      case 'observed': 
        this.activeField = this.storage.activeField = 'observed';
        break;
      case 'settings': 
        this.activeField = this.storage.activeField = 'settings';
        break;    
    }
  }

}
