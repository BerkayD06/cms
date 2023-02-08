import { environment } from './../environments/environment';
import { license } from './license';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class licenseService {
  private apiServerUrl =environment.licenseUrl;

  constructor(private http: HttpClient){ }

  public getLicense():Observable<license[]>{
    return this.http.get<license[]>(`${this.apiServerUrl}`);
  }
  public addLicense(license: license):Observable<license[]>{
    return this.http.post<license[]>(`${this.apiServerUrl}`,license);
  }
  public updateLicense(license: license):Observable<license[]>{
    return this.http.put<license[]>(`${this.apiServerUrl}`,license);
  }
  public deleteLicense(licenseId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${licenseId}`);
  }
}
