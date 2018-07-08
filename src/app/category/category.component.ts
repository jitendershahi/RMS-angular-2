import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';
import { AppStore } from '@app/store/AppStore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category_data: any;

  constructor(private store: StoreService, private router: Router) {
    this.store.myMethod$.subscribe((data) => {
      this.category_data = data.categories
    })
  }

  ngOnInit() {
  }

  navigateToNext(category: any) {
    this.store.my_Method(category)
    this.router.navigate(['home/category/subcategory'])
  }

}
