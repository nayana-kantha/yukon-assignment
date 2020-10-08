import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(
    private http:HttpClient
  ) { }

  getDataTableData(){
    return this.http.get<any>(`${environment.getDataTableDataURL}`)
  }
}
