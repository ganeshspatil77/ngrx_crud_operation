import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associate } from '../store/associate.modal';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  baseUrl:string = 'http://localhost:3200/associate'

  constructor(private http:HttpClient) { }

  getAllAssociate(){
    return this.http.get<Associate>(this.baseUrl)
  }

  getByCode(code:number){
    return this.http.get<Associate>(this.baseUrl + '/' + code)
  }

  deleteAssociate(code:number){
    return this.http.delete<Associate>(this.baseUrl + '/' + code)
  }

  updateAssociate(data:Associate){
    return this.http.put<Associate>(this.baseUrl + '/' + data.id, data)
  }

  createAssociate(data:Associate){
    return this.http.post<Associate>(this.baseUrl + '/', data)
  }
}
