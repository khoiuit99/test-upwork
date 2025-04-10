import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductViewComponent } from 'src/app/shared/components/product-view/product-view.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductViewComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  listImage: string[] = [
    "../../../assets/apple16-1.png",
    "../../../assets/apple16-2.png",
    "../../../assets/apple16-3.png",
    "../../../assets/apple16-4.png"
  ]

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

  constructor() {

  }

  ngOnInit(): void {

  }

  setTab(tab: any) {
    this.currentTab = tab.id
  }
}
