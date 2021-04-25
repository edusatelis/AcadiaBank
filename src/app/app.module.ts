import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MobileComponent } from './mobile/mobile.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    CreditCardComponent,
    InsuranceComponent,
    MobileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
