import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent implements OnInit {

  item: any[]

  @Input()
  menuItems: any[]

  @Output()
  out: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.item = ["sandeep", "deepak", "prashant"]
  }

  ngOnInit() {
  }

  decrease(i) {
    this.menuItems[i].qty--;
    this.out.emit(this.item)
  }

}