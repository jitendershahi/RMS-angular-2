import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  location_data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.userService.getLocationData()
      .subscribe((res: any) => {
        this.location_data = res.data.locations
      })
  }
}
