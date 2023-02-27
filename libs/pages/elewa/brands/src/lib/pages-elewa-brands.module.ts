import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@elewa-group/elements/layout';
import { BrandsPageComponent } from './pages/brands-page/brands-page.component';

@NgModule({
  imports: [CommonModule,LayoutModule],
  declarations: [BrandsPageComponent],
})
export class PagesElewaBrandsModule {}
