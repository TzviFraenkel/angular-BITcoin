import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] | null //don't know why it says it might be of type null

  constructor() { }

  ngOnInit(): void {
  }

}
