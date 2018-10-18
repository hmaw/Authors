import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  getAllAuthors(){
    return this._http.get('/author');
  }
  delAuthor(id){
    return this._http.delete('/author/' +id); //passing the info to delete
  }
  addAuthors(author:Object){
    return this._http.post('/author',author); //Passing whole object in
  }
  editAuthor(data){
    return this._http.put('/author/', data);
  }

  getById(id){
    return this._http.get('/author/'+ id); //With this type, use the /
  }
}

