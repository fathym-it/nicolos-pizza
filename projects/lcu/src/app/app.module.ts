import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule } from '@lcu/common';
import { NicolosPizzaModule } from '@fathym-it/nicolos-pizza-common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    NicolosPizzaModule
  ],
  exports: [NicolosPizzaModule]
})
export class AppModule {}
