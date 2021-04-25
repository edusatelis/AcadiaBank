import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { FooterComponent } from './components/footer/footer.component';

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
