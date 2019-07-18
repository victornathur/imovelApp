import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get("https://5d262d00eeb36400145c59b3.mockapi.io/imovel/")
  }

  post(imovel){
    return this.http.post("https://5d262d00eeb36400145c59b3.mockapi.io/imovel/", imovel)
  }

  delete(imovel){
    return this.http.delete("https://5d262d00eeb36400145c59b3.mockapi.io/imovel/" + imovel)
  }

}
