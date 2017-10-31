import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { ManageNumberPipe } from './manage-number.pipe';
import { BootcampModule } from './bootcamp/bootcamp.module';


import { RouterModule } from '@angular/router';
import { RouteTestComponent } from './route-test/route-test.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponseService } from './response.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    ManageNumberPipe,
    RouteTestComponent
  ],
  imports: [
    BrowserModule,
    BootcampModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: RouteTestComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [ResponseService],
  bootstrap: [AppComponent] //the first to execute
})
export class AppModule { }
