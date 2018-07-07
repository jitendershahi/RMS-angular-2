import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConstants } from '@app/api/apiconstants';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getLocationData() {
    return this.http.get<Response>(APIConstants.GET_LOCATION)
  }
}
