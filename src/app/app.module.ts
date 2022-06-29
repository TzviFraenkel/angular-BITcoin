import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './root-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDtailsPageComponent } from './pages/contact-dtails-page/contact-dtails-page.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsPageComponent,
    ContactEditPageComponent,
    ContactDtailsPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
