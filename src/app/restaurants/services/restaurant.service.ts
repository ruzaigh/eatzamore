import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private dataUrl = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getProvince(){
    return this.http.get<any>(this.dataUrl)
  }
}
