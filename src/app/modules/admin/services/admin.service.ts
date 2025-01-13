import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../auth/services/storage/storage.service';
import { Observable } from 'rxjs';

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

  getAllProperty(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/list-properties", {
      headers: this.createAuthorizationHeader()
    })

  }

  deleteProperty(propertyId: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/property/" +propertyId,{
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
