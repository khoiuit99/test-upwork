import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdvertisementComponent } from 'src/app/shared/components/advertisement/advertisement.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { ProductViewComponent } from 'src/app/shared/components/product-view/product-view.component';
import { Advertisement } from 'src/app/shared/models/advertisement.model';
import { ProductMobile } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductViewComponent,
    DropdownComponent,
    AdvertisementComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  listTab: any[] = [
    {
      id: 1,
      name: "Prices"
    },
    {
      id: 2,
      name: "Reviews"
    },
    {
      id: 3,
      name: "Price developement"
    },
    {
      id: 4,
      name: "About the product"
    },
    {
      id: 5,
      name: "Specifications"
    }
  ]
  currentTab: number = 1

  dataFake: ProductMobile = {
    listImage: [
      "../../../assets/apple16-1.png",
      "../../../assets/apple16-2.png",
      "../../../assets/apple16-3.png",
      "../../../assets/apple16-4.png"
    ],
    color: [
      {
        colorName: "All",
        hexColor: ""
      },
      {
        colorName: "black",
        hexColor: "#000000"
      },
      {
        colorName: "white",
        hexColor: "#808080"
      },
      {
        colorName: "yellow",
        hexColor: "#FFDE21"
      }
    ],
    description: `<div class="">
    Experience the next generation of mobile technology with the iPhone 16 Pro Max 256GB,
    equipped with the Apple A18 Pro chip and fast 5G connection.
    <span class="underline cursor-pointer">Read more</span><br><br>
    Compare prices from <b>SEK 17,190</b> to <b>SEK 22,038</b> · Investment 1 in <span
        class="underline cursor-pointer">Mobile phones</span>
    </div>`,
    productName: "Apple iPhone 16 Pro Max, 256GB",
    rating: 4.1,
    type: ["64GB", "128GB", "256GB"]
  }

  advertiseList: Advertisement[] = [
    {
      name: "From Compumall",
      productName: `Apple IPhone 16 Pro Max 6.9" 256GB Black titanium -> Delivered to us`,
      price: 18.423,
      status: "Free shipping. 4-5 days",
      type: 1,
      logo: null,
      rating: null
    },
    {
      name: "Macrent",
      productName: `IPhone 16 Pro Max 256GB Natural Titanium`,
      price: 17.485,
      status: "Back order",
      type: 2,
      logo: "./assets/logo1.svg",
      rating: null
    },
    {
      name: "POWER",
      productName: `Apple IPhone 16 Pro Max 256 GB, Natural Titanlum`,
      price: 17.489,
      status: "Free shipping. 4-5 days",
      type: 2,
      logo: "./assets/logo2.svg",
      rating: 4.8
    }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  setTab(tab: any) {
    this.currentTab = tab.id
  }
}
