import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Platypus Pizza';

  menuitems:MenuItem[] = [

    {
      name: "Cheese Pizza",
      category: "dinner",
      price: 10.00,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Pepperoni Pizza",
      category: "dinner",
      price: 10.00,
      vegetarian: false,
      soldOut: true
    },
    {
      name: "Margherita Pizza",
      category: "dinner",
      price: 10.00,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Chicken Tenders",
      category: "dinner",
      price: 8.50,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Garden Stuffed Potato",
      category: "dinner",
      price: 8.50,
      vegetarian: true,
      soldOut: true
    },
    {
      name: "Chili Cheese Fries",
      category: "sides",
      price: 6.75,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Classic Seasoned Fries",
      category: "sides",
      price: 5.25,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Brownie Ice Cream Sundae",
      category: "dessert",
      price: 5.00,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Cherry Pie",
      category: "dessert",
      price: 5.00,
      vegetarian: true,
      soldOut: true
    }

  ];
  displayTY:boolean = false;
  total: number = 0;

  addToOrder(price:number):void{
    this.total += price;
    this.displayTY = false;
  }

  resetOrder():void{
    this.total = 0;
    this.displayTY= true;
  }
}
