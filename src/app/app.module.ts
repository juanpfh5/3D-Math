import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PopoverContentComponent } from '../app/components/exercise/popover-content.component'
import { HelpPopoverComponent } from '../app/components/exercise/help-popover.component'

import { AudioService } from './services/audio.service';

@NgModule({
  declarations: [AppComponent, PopoverContentComponent, HelpPopoverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AudioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
