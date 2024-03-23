import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { filter, tap, EMPTY, catchError, Subject, Observable, Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit, OnDestroy, DoCheck {

  isContrast: boolean;

  @Input() query: any;
  @Output() filteredQuery: EventEmitter<any>;
  brandsArray: any[];
  @Output() emitFilter: EventEmitter<any> = new EventEmitter();

  filterGroup = new FormGroup({
    marka: new FormControl(),
    model: new FormControl(),
    rokprodMin: new FormControl(1980, [Validators.min(1980), Validators.max(2024)]),
    rokprodMax: new FormControl(2024, [Validators.min(1980), Validators.max(2024)]),
    lokalizacja: new FormControl(),
    cenaMin: new FormControl(0, [Validators.min(0), Validators.max(1000000)]),
    cenaMax: new FormControl(1000000, [Validators.min(0), Validators.max(1000000)]),
    przebiegMin: new FormControl(0, [Validators.min(0), Validators.max(1000000)]),
    przebiegMax: new FormControl(1000000, [Validators.min(0), Validators.max(1000000)]),
    stan: new FormControl(),
  });

  get f() {
    return this.filterGroup.controls;
  }
  get marka() {
    return this.filterGroup.get('marka');
  }
  get model() {
    return this.filterGroup.get('model');
  }
  get rokprodMin() {
    return this.filterGroup.get('rokprodMin');
  }
  get rokprodMax() {
    return this.filterGroup.get('rokprodMax');
  }
  get lokalizacja() {
    return this.filterGroup.get('lokalizacja');
  }
  get cenaMin() {
    return this.filterGroup.get('cenaMin');
  }
  get cenaMax() {
    return this.filterGroup.get('cenaMax');
  }
  get przebiegMin() {
    return this.filterGroup.get('przebiegMin');
  }
  get przebiegMax() {
    return this.filterGroup.get('przebiegMax');
  }
  get stan() {
    return this.filterGroup.get('stan');
  }

  constructor(
    private storage: StorageService,
  ) {}


  ngOnDestroy(): void {
  }
  
  ngDoCheck(): void {
    this.isContrast = !!localStorage.getItem('contrast');
  }

  ngOnInit() {

    this.isContrast = !!localStorage.getItem('contrast');

    this.f.cenaMin.valueChanges.subscribe((value) => {
      this.f.cenaMin.setValue(value, { emitEvent: false});
    });
    this.f.cenaMax.valueChanges.subscribe((value) => {
      this.f.cenaMax.setValue(value, { emitEvent: false});
    });
    this.f.model.valueChanges.subscribe((value) => {
      this.f.model.setValue(value, { emitEvent: false });
    });
    this.f.marka.valueChanges.subscribe((value) => {
      this.f.model.setValue(null);
      this.f.marka.setValue(value, { emitEvent: false });
    });
  }

  refetchData() {
    this.emitFilter.emit([
      {name: 'cenaMax', value: this.f.cenaMax.value},
      {name: 'cenaMin', value: this.f.cenaMin.value},
      {name: 'marka', value: this.f.marka.value},
      {name: 'model', value: this.f.model.value},
      {name: 'lokalizacja', value: this.f.lokalizacja.value},
      {name: 'rokprodMin', value: this.f.rokprodMin.value},
      {name: 'rokprodMax', value: this.f.rokprodMax.value},
      {name: 'przebiegMin', value: this.f.przebiegMin.value},
      {name: 'przebiegMax', value: this.f.przebiegMax.value},
      {name: 'stan', value: this.f.stan.value}]);
  }

  resetFilter() {
    this.filterGroup.reset();
    this.f.cenaMax.setValue(1000000);
    this.f.cenaMin.setValue(0);
    this.f.przebiegMax.setValue(1000000);
    this.f.przebiegMin.setValue(0);
    this.f.rokprodMax.setValue(2024);
    this.f.rokprodMin.setValue(1980);
    this.refetchData();
  }
}
