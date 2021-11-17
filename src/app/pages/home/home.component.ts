import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sell_product = [
    {
      image: `assets/images/skybag.jpg`,
      text: `Skybag`,
      price: `<del>$400</del> $109`,
    },
    {
      image: `assets/images/red t-shirt.jpg`,
      text: `Red T-Shirt`,
      price: `$100`,
    },
    {
      image: `assets/images/nike.jpg`,
      text: `Nike bag`,
      price: `<del>$400</del> $109`,
    },
    {
      image: `assets/images/jeans-1 - Copy.jpg`,
      text: `Denim`,
      price: `$140`,
    },
    {
      image: `assets/images/puma bag.jpg`,
      text: `Puma Bag`,
      price: `$250`,
    },
    {
      image: `assets/images/back jeans.jpg`,
      text: `Back Jeans`,
      price: `<del>$400</del> $109`,
    },
    {
      image: `assets/images/d t-shirt.jpg`,
      text: `Printed T-Shirt`,
      price: `$150`,
    },
    {
      image: `assets/images/puma 1.jpg`,
      text: `puma bag`,
      price: `<del>$400</del> $300`,
    },
    {
      image: `assets/images/yellow - Copy.jpg`,
      text: `Yellow T-Shirt`,
      price: `$129`,
    },
  ];

  des = false;
  popup() {
    if (this.des == false) {
      this.des = true;
    } else {
      this.des = false;
    }
  }
}
