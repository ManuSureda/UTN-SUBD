import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-share-ticket',
  templateUrl: './share-ticket.component.html',
  styleUrls: ['./share-ticket.component.css']
})
export class ShareTicketComponent implements OnInit {

  shareTicketForm = new FormGroup({
    guestID: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

}
