import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';
import { ContactDtailsPageComponent } from './pages/contact-dtails-page/contact-dtails-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactsPageComponent },
  { path: 'contact/:id', component: ContactDtailsPageComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
