import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8081"]

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postProperty(propertyDto: any){
return this.http.post(BASIC_URL + "/api/admin/property",propertyDto,{
  headers: this.createAuthorizationHeader()
})
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      "Authorization",
      "Bearer" + StorageService.getToken()
    );
  }
}
