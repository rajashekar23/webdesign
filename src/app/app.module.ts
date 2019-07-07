import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { CoolComponent } from './components/cool/cool.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationsComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
