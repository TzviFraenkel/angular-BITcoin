import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by.model';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

  filterBy: FilterBy = { term: '' }
  subscription: Subscription

  constructor(private contactSErvice: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactSErvice.filterBy$.subscribe(filterBy =>
      this.filterBy = filterBy
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onChangeFilter() {
    this.contactSErvice.setFilterBy({...this.filterBy})
  }

}
