import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterViewComponent } from './shared/register-view/register-view.component';
import { FaqRequestComponent } from './shared/faq-request/faq-request.component';
import { AccountViewComponent } from './shared/account-view/account-view.component';
import { RegisterGuard } from './shared/register-view/register-view.guard';
import { HomePageComponent } from './home/home-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: RegisterViewComponent,
  },
  {
    path: 'account',
    component: AccountViewComponent,
    canActivate: [RegisterGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'faq',
    component: FaqRequestComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
