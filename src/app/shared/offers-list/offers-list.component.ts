import { Component, Input, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef, SimpleChanges  } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements AfterViewInit, OnInit {

  @Input() filteredQuery$: Observable<any>;
  @Input() isGlobalOffers: boolean;
  @Input() observed: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  observedLocalStorage: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.paginator) {
      
    }
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    if (localStorage.getItem('favourite') !== null) {
      this.observedLocalStorage = JSON.parse(localStorage.getItem('favourite') as string);
    }
  }
}
