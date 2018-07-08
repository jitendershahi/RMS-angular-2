import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() branches: CatalogBranch[]

  constructor(private store:StoreService,
              private router:Router) { }

  ngOnInit() {
  }

  selectBranch(branch: any, event: any) {
    this.store.myMethod(branch)
    this.router.navigate(['home/category'])
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