import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  // contacts: Contact[]
  contacts$: Observable<Contact[]>


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$

  }

}
