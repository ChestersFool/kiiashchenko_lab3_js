import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {AsyncPipe, CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {
  shippingCosts: any;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
