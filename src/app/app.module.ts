import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Grid1Component } from './grid1/grid1.component';
import { IgxGridModule, IgxCheckboxModule, IgxDatePickerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxAccordionModule } from 'igniteui-angular';

@NgModule({
  

  declarations: [
    AppComponent,
    Grid1Component
  ],
  
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxCheckboxModule,
    FormsModule,
    IgxDatePickerModule,
    IgxAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
