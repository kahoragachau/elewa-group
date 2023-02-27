import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BrandsPageComponent } from './pages/brands-page/brands-page.component';

export const ELEWA_BRANDS_ROUTES: Route[] = [
  { path: '', component:BrandsPageComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ELEWA_BRANDS_ROUTES)],
  exports: [RouterModule]
})

export class BrandsRoutingModule { }
