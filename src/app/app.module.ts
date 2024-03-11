import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageModule } from './home/home-page.module';
import { FilterContainerComponent } from './shared/filter-container/filter-container.component';
import { TileRecordComponent } from './shared/tile-record/tile-record.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FilterContainerComponent,
    TileRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
