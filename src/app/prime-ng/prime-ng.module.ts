import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [MenuModule, ButtonModule],
  exports: [MenuModule, ButtonModule],
})
export class PrimeNGModule {}
