import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {QuillModule} from 'ngx-quill';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import {ModalModule} from 'ngx-bootstrap/modal';

import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {FileDropModule} from 'ngx-file-drop';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import {routesComponents,Routing,serviceComponents} from "./componentes.module";

import { AppComponent } from './app.component';

const domain:string="http://localhost:8000";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: `${domain}/imagenes/subir`,
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
 

@NgModule({
  declarations: [
    AppComponent,
    routesComponents
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    DropzoneModule,
    FileDropModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [serviceComponents, {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
