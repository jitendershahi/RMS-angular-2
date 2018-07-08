import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: '@app/home/home.module#HomeModule'
  },
  {
    path: 'home/category',
    loadChildren: '@app/category/category.module#CategoryModule'
  },
  {
    path: 'home/category/subcategory',
    loadChildren: '@app/subcategory/subcategory.module#SubcategoryModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class BaseModule { }
