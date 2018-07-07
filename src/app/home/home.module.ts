import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeComponent } from '@app/home/home.component';
import { BaseModule } from '@app/shared/base.module';
import { SharedModule } from '@app/shared/shared.module';
import { SubmenuComponent } from './submenu/submenu.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, SubmenuComponent]
})
export class HomeModule { }
