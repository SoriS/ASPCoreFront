import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HttpAppService} from "./maincomponent/app.service"
import { AppComponent } from './maincomponent/app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent],
    providers: [HttpAppService],
    bootstrap: [AppComponent]
})
export class AppModule{}