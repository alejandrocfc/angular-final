import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  baseUrl = 'https://datos.gob.es/apidata/catalog/dataset?_sort=title';

  constructor( public http: HttpClient) { }

  public getData(pageSize) {
    return this.http.get(`${this.baseUrl}&_pageSize=${pageSize}&_page=0`);
  }
}
