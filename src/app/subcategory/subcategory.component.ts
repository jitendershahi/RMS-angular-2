import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/store/store.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  subcategory_data: any;

  constructor(private store: StoreService) {
    this.store.my_Method$.subscribe((data) => {
      this.subcategory_data = data.subcategories
    })
  }

  ngOnInit() {
  }

}
