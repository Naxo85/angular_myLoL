import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByMasteryComponent } from './champion/pages/by-mastery/by-mastery.component';
import { DetailsComponent } from './champion/pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ByMasteryComponent,
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
