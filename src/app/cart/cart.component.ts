import { Component, OnInit } from '@angular/core';

import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({name: '', address: ''});
     this.products = this.cartService.getItems();
  }

  ngOnInit() {
         
            }

onSubmit()
{
  this.products = this.cartService.clearCart();
  this.checkoutForm.reset();
}

}