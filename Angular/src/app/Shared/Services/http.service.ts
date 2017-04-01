import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  startDashboard() {
    console.log("HTTP");
    return this.http.get('http://localhost:3000/dashboard')
      .map((response: Response) => response.json());
  }

  queryDashboard(data: any) {
    const body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/dashboard', body, {headers})
      .map((response: Response) => response.json());
  }

  /*postData( data: any ) {
   const body = JSON.stringify(data);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('http://localhost:3000/user', body,{headers} )
   .map((response: Response) => response.json());
   }

   putData( data: any ) {
   const body = JSON.stringify(data);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.put('http://localhost:3000/user', body,{headers} )
   .map((response: Response) => response.json());
   }*/
}
