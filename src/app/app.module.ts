import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routerConfig';
import {HttpClientModule} from '@angular/common/http';
import { CoinService } from './coin.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
