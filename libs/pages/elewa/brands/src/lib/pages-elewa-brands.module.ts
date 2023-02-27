import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';

import { BrandsPageComponent } from './pages/brands-page/brands-page.component';
import { BrandsRoutingModule } from './brands.routing';

@NgModule({
  imports: [CommonModule,LayoutModule,BrandsRoutingModule],
  declarations: [BrandsPageComponent],
  exports: [BrandsPageComponent]
})
export class PagesElewaBrandsModule {}
