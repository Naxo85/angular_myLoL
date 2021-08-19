import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayedChampsComponent } from './champion/pages/played-champs/played-champs.component';
import { DetailsComponent } from './champion/pages/details/details.component';
import { RotationChampsComponent } from './champion/pages/rotation-champs/rotation-champs.component';
import { HistoryComponent } from './matches/pages/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: PlayedChampsComponent,
  },
  {
    path: 'played',
    component: PlayedChampsComponent,
  },
  {
    path: 'details/:gameId',
    component: DetailsComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'rotation',
    component: RotationChampsComponent,
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
