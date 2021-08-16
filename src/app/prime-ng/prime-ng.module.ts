import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [MenuModule, ButtonModule, CardModule],
  exports: [MenuModule, ButtonModule, CardModule],
})
export class PrimeNGModule {}
