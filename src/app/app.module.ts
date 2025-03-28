import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MatModule } from './module/mat/mat.module';
import { HttpClientModule,  } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
