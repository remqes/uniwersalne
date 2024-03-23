import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, catchError, map, tap, Observable } from 'rxjs';
import { JSON_PATH } from '../shared/types';
import { Router } from '@angular/router';

type FavOffers = {
  key: string;
  fav: boolean;
}

export interface FilterKontakt {
  imie_nazwisko: string;
  numer_telefonu: string;
  adres_email: string;
}

export interface FilterValues {
  id: string;
  cenaMax?: number;
  cenaMin?: number;
  marka: string;
  model: string;
  lokalizacja?: string;
  rokprodMin?: number;
  rokprodMax?: number;
  przebiegMin?: number;
  przebiegMax?: number;
  rok_produkcji: number;
  przebieg: number;
  pojemnosc_silnika: number;
  moc: number;
  rodzaj_paliwa: string;
  skrzynia_biegow: string;
  historia_serwisowa: string;
  cena: number;
  miasto: string;
  img: string;
  informacje_dodatkowe: string;
  stan: string;
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  activeField: string;
  checkFavourites: FavOffers[];
  refetchData$: Observable<FilterValues>;
  filters: any[];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getUserOffers() {
    const path = 'assets/userOffers.json';
    
    return this.http.get(path).pipe(
      catchError((error) => {
        console.error(error);

        return EMPTY;
      })
    );
  }

  fetch(): Observable<FilterValues[]> {
    return this.http.get<FilterValues[]>(JSON_PATH).pipe(
      catchError((error) => {
        console.error(error);
        return EMPTY;
      })
    );
  }

  switchContrast(item: boolean): boolean {
    if (!localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', 'true');
    } else {
      localStorage.removeItem('contrast');
    }
    return item = !item;
    
  }

  switchFontSize(size: string) {
      if (size === 'up') {
        localStorage.setItem('font', 'small');
      }
      if (size === 'down') {
        localStorage.setItem('font', 'big');
      }
  }

}
