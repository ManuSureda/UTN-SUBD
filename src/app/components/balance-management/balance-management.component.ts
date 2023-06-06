import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-balance-management',
  templateUrl: './balance-management.component.html',
  styleUrls: ['./balance-management.component.css']
})
export class BalanceManagementComponent implements OnInit {

  balanceForm = new FormGroup({

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
