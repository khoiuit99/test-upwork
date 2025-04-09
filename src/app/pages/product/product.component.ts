import { Component, OnInit } from '@angular/core';
import { ProductViewComponent } from 'src/app/shared/components/product-view/product-view.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
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

  constructor() {

  }

  ngOnInit(): void {

  }
}
