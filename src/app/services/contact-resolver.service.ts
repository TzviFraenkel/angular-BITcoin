import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Promise<Contact>> {
  contact: Contact
  constructor(private contactService: ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    // console.log('id',id);
    await firstValueFrom(this.contactService.getContactById(id))
      .then(contact => {
        this.contact = contact
      })
    return {...this.contact}
  }
}
