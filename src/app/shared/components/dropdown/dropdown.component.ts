import { Component, Input } from '@angular/core';
import { Options } from '../../models/options.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() placeholder: string = ""
  @Input() listValue: Options[] = []

  expand: boolean = false

  selectedValue: Options


  constructor() {

  }

  ngOnInit(): void {

  }

  handleExpand() {
    this.expand = !this.expand
  }
}
