import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  menuItems: any[]

  constructor() {
    this.menuItems = [{ name: "Tea", qty: 0 }, { name: "coffe", qty: 10 }]
  }

  ngOnInit() {
  }

  increase(i) {
    this.menuItems[i].qty++
  }

  getUpdatedMenuItem(event) {
    this.menuItems[event.index] = event.menuItem;
  }

}
