import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayedChampsComponent } from './champion/pages/played-champs/played-champs.component';
import { DetailsComponent } from './champion/pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: PlayedChampsComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:championId',
    component: DetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
