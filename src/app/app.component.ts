import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { BreadCrumbService } from './shared/services/breadcrumb.service';
import { MyProductComponent } from './shared/components/my-product/my-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbComponent,
    MyProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private _breadCrumbService: BreadCrumbService
  ){

  }
  
  title = 'test-upwork';
}
