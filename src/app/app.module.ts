import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseModule } from '@app/shared/base.module';
import { appRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared/shared.module';
import { UserService } from '@app/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from '@app/store/store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    BaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
