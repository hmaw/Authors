import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    AllComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

