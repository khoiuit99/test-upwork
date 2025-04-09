import { Component, OnInit } from '@angular/core';
import { BreadCrumbService } from '../../services/breadcrumb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {

  breadCrumb: string[] = []

  constructor(
    private _breadCrumbService: BreadCrumbService
  ) {
    this.breadCrumb = this._breadCrumbService.breadCrumb
  }

  ngOnInit(): void {

  }
}
