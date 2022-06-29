import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-dtails-page',
  templateUrl: './contact-dtails-page.component.html',
  styleUrls: ['./contact-dtails-page.component.scss']
})
export class ContactDtailsPageComponent implements OnInit, OnDestroy {

  contact: Contact
  contactId: string
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  async ngOnInit() {

    this.subscription = this.route.data.subscribe(data =>{
      this.contact = data.contact
    })
    // // this feels realy weird, not sure its the right way
    // await firstValueFrom(this.route.params)
    //   .then(params =>
    //     this.contactId = params.id
    //   )
    // await firstValueFrom(this.contactService.getContactById(this.contactId))
    //   .then(contact => {
    //     this.contact = contact
    //   })
  }

  onDeleteContact(): void {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
