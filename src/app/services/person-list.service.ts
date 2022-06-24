import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

enum Endpoint {
  listPerson = "listado-persona",
} 

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PersonListService {
  private readonly OTROSI_END: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  consult(data):Observable<any> {
    return this.http
      .post(this.OTROSI_END + Endpoint.listPerson, data)
  }
}
