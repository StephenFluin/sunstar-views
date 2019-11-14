import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Sunstar {
  name;
  description;
  photo;
  type;
  lat;
  long;
  timeBefore;
  timeAfter;
  user?;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sunstars = this.http.get<{[key: string]: Sunstar}>('https://sunstar-views.firebaseio.com/sunstars.json')
  .pipe(
    map(starMap =>
      Object.keys(starMap).map(key => starMap[key])
    )
  );
  constructor(private http: HttpClient) {


   }
}
