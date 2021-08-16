import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [MenuModule, ButtonModule, CardModule, DialogModule],
  exports: [MenuModule, ButtonModule, CardModule, DialogModule],
})
export class PrimeNGModule {}
