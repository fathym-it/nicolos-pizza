import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { HomeComponent } from './controls/home/home.component';
import { MenuComponent } from './controls/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FathymSharedModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  exports: [MenuComponent],
  entryComponents: [MenuComponent]
})
export class AppModule { }
