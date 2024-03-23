import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { EMPTY, Observable, Subscription, of } from 'rxjs';
import { map, tap, catchError, filter, switchMap } from 'rxjs/operators';
import { isEmpty } from 'lodash';

import { StorageService } from '../shared/storage.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements DoCheck, OnDestroy, OnInit {

  isContrast: boolean;
  fontSize: string;
  fetchedData$: Observable<any>;
  subscription: Subscription = new Subscription;

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  ngOnDestroy(): void {

  }

  ngDoCheck(): void {
    this.isContrast = !!localStorage.getItem('contrast');
    this.fontSize = localStorage.getItem('font') ?? 'small';
  }

  ngOnInit(): void {
    this.isContrast = !!localStorage.getItem('contrast');
    this.fontSize = localStorage.getItem('font') ?? 'small';
    this.fetchData();
  }

  filterEmitter(event: any) {
    this.fetchedData$ = this.storage.fetch().pipe(
      switchMap(() => {
        return this.storage.fetch().pipe(
          map((data) => {
            const cenaMax = event[0].value;
            const cenaMin = event[1].value;
            const marka = event[2].value;
            const model = event[3].value;
            const lokalizacja = event[4].value;
            const rokprodMin = event[5].value;
            const rokprodMax = event[6].value;
            const przebiegMin = event[7].value;
            const przebiegMax = event[8].value;
            const stan = event[9].value;
            
            if (cenaMax !== null && cenaMin !== null) {
              data = data.filter((item) => item.cena <= cenaMax && item.cena >= cenaMin);
            }
            if (rokprodMin !== null && rokprodMax !== null) {
              data = data.filter((item) => item.rok_produkcji <= rokprodMax && item.rok_produkcji >= rokprodMin);
            }
            if (przebiegMin !== null && przebiegMax !== null) {
              data = data.filter((item) => item.przebieg <= przebiegMax && item.przebieg >= przebiegMin);
            }
            if (lokalizacja !== null && !isEmpty(lokalizacja)) {
              data = data.filter((item) => 
                lokalizacja.toLocaleLowerCase() === item.miasto.toLocaleLowerCase()
              );
            } 
            if (stan !== null && !isEmpty(stan)) {
              data = data.filter((item) => stan.includes(item.stan.toLocaleLowerCase()));
            }
            if (marka !== null) {
              data = data.filter((item) => marka.toLocaleLowerCase() === item.marka.toLocaleLowerCase());
            }
            if (model !== null) {
              data = data.filter((item) => model.toLocaleLowerCase() === item.model.toLocaleLowerCase());
            }

            return data;
          }),
        );
      }),
      catchError((error) => {
        console.error(error);

        return of([]);
      })
    );
  }

  fetchData() {
    this.fetchedData$ = this.storage.fetch();
  }
}
