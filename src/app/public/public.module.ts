import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { StoreComponent } from './store/store.component';
import { PublicationComponent } from './publication/publication.component';


@NgModule({
  declarations: [StoreComponent, PublicationComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
