import { Injectable } from '@angular/core';
import { Toy } from "../models/toy";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

 // url:string = 'http://localhost:5176/api';
  url:string = environment.hostURL + ":" + environment.port + "/api";
  toys:Toy[]=[];
  httpOptions = {
    headers: {
      'Content-Type' : 'application/json'
    }
  };

  constructor(private http:HttpClient) {}
  getItems():Observable<Toy[]>{
    alert(this.url + '/toy');
    console.log(this.http.get<Toy[]>(this.url + '/toy'));
    return this.http.get<Toy[]>(this.url + '/toy');
  }

  addItem(toy:Toy):Observable<Toy[]>{
    return this.http.post<Toy[]>(this.url,toy,this.httpOptions);
  }

  toggleItem(toy:Toy):Observable<Toy>{
    return this.http.put<Toy>(this.url + '/toy', toy, this.httpOptions);
  }

  deleteItem(toy:Toy):Observable<Toy>{
    return this.http.delete<Toy>(this.url + '/toy/' + toy.id);
  }
}
