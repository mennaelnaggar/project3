import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
   apiKay = '51e3643f17cf998bc7dc6b9ec5108a81';
  //  https://api.themoviedb.org/3/tv/popular/?api_key=51e3643f17cf998bc7dc6b9ec5108a81
  constructor( private http: HttpClient) { }
  getAllTVshows():Observable<any>  {
  return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKay}`)
  }

  
getTVshowsById(TVID:number):Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/tv/${TVID}?api_key=${this.apiKay} `)
}
 searchAllTV(tvName:string):Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKay}&query=${tvName}`)
 }
}



