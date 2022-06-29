import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit, OnDestroy {

  contact: Contact
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
  }
  onSubmit() {
    this.contactService.saveContact(this.contact)
    this.router.navigate(['/contact'])    
  }

  onDeleteContact(): void {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
