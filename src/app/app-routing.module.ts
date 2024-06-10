import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SiteListComponent } from './site-list/site-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
      },
      {
        path: 'loginPage',
        component: LoginPageComponent,

        children: [
          {
            path: 'siteList',
            pathMatch: 'full',
            component: SiteListComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
