import { environment } from './../environments/environment';
import { Content } from './content';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { license } from './license';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private baseURL = 'http://localhost:8091/content';
  addLicense(value: any) {
    throw new Error('Method not implemented.');
  }
  private apiServerUrl = environment.contentUrl;

  constructor(private http: HttpClient) {}

  public getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiServerUrl}`);
  }
  public addContent(content: Content): Observable<Content[]> {
    return this.http.post<Content[]>(`${this.apiServerUrl}`, content);
  }
  public updateContent(
    contentId: Number,
    content: Content
  ): Observable<Object> {
    return this.http.put(`${this.baseURL}/${contentId}`, content);
  }
  public deleteContent(contentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/${contentId}`);
  }
  getContentById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.baseURL}/${id}`);
  }
  public addLicensetocontent(
    contentId: number,
    content: Content,
    license: license
  ): Observable<Object> {
    return this.http.put(`${this.baseURL}/${contentId}/license`, content);
  }

  public addContentLicense(id:number , license:license): Observable<Object> {
    return this.http.put<Object>(`${this.apiServerUrl}/contentlisans/${id}`,license);
  }
}
