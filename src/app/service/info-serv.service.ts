import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { perks } from '../interfaces/perks';

@Injectable({
  providedIn: 'root'
})
export class InfoServService {
  baseUrl!: "https://dbd-stats.info/api/perks"
  
  constructor(
    private http: HttpClient
  ) {}

  getPerks(): Observable<any>{
  return this.http.get(`https://dbd-stats.info/api/perks`)
  }
}
