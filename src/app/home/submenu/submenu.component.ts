import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() branches: CatalogBranch[]

  constructor() { }

  ngOnInit() {
  }

  selectBranch(branch: any, event: any) {
  }
}

export interface CatalogBranch {
  branch_id: string
  name: string
  categories: Category[]
}

export interface Category {
  name: string
  image: string
  subcategories: Subcategories[]
}

export interface Subcategories {
  name: string
}