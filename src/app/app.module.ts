import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PdfmakeModule } from 'ng-pdf-make';

import { AppComponent } from './app.component';
//import { GeneratepdftemplateComponent } from './generatepdftemplate/generatepdftemplate.component';
import { PdfconfigComponent } from './pdfconfig/pdfconfig.component';


@NgModule({
  declarations: [
    AppComponent,
    //GeneratepdftemplateComponent,
    PdfconfigComponent
  ],
  imports: [
    BrowserModule,
    // PdfmakeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
