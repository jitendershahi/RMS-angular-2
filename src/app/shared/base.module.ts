import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
  {
    path:'home',
    loadChildren:'@app/home/home.module#HomeModule'
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
