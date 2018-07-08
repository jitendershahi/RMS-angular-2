import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryComponent } from './subcategory.component';

@NgModule({
  imports: [
    CommonModule,
    SubcategoryRoutingModule
  ],
  declarations: [SubcategoryComponent]
})
export class SubcategoryModule { }
