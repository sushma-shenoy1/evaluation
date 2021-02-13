
import {  HttpParams, HttpHeaders, HttpRequest,  } from '@angular/common/http';

import {tap} from 'rxjs/operators'
import { HttpClient, } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class ApiHandlerService {



  constructor(private http: HttpClient) { }

  // getData=(endPoint, paramsRequest): Observable<any>=> {
  //   let reqOpts = {
  //   params: new HttpParams(),
  //   };
  //   let reqParams = 'apiKey=563492ad6f917000010000010cadcae5347145f788736612c2047055&'
  //   if(paramsRequest){
  //   for (let i = 0; i < paramsRequest.length; i++) {
  //   let key = paramsRequest[i].key;
  //   let val = paramsRequest[i].value;
  //   reqParams = reqParams + key + '=' + val;
  //   if (i != paramsRequest.length - 1) {
  //   reqParams = reqParams + '&';
  //   }
  //   }
  //   }
  //   return this.http.get<any>(endPoint+'?'+ reqParams).pipe(
  //   tap(_ => {

  //   } )
  //   );
  //   }
  get(page) {
    let header = new HttpHeaders().set(
      "Authorization",
     '563492ad6f917000010000010cadcae5347145f788736612c2047055'
    );
    return this.http.get(`https://api.pexels.com/v1/curated/?&page=${page}&per_page=20`, { headers: header });

  }
  getvideos(page){
    let header = new HttpHeaders().set(
      "Authorization",
     '563492ad6f917000010000010cadcae5347145f788736612c2047055'
    );
    return this.http.get(`https://api.pexels.com/videos/popular?&page=${page}&per_page=20`, { headers: header });
  }
}
