import { Component, OnInit, Input } from '@angular/core';
import {Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() abcd;
@Output() notifySale = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}