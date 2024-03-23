import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit, OnDestroy {
  showMenuOption: boolean = false;
  isContrast: boolean;
  textColor: string;
  switchContrast$: Observable<string>;
  subscription: Subscription = new Subscription;

  constructor(private storage: StorageService) {}

  ngAfterViewInit(): void {
    // this.subscription.add(
    //   this.switchContrast$ = 
    // )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isContrast = !!localStorage.getItem('contrast');
    if (!localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', 'false');
    }
    if (localStorage.getItem('font')) {
      localStorage.setItem('font', '16');
    }
  }

  changeContrast() {
    this.isContrast = this.storage.switchContrast(this.isContrast);
  }

  fontDecrease() {
    this.storage.switchFontSize('up');
  }

  fontIncrease() {
    this.storage.switchFontSize('down');
  }
}
