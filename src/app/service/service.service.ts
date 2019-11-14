import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Imodel} from '../interface/Imodel'



@Injectable({
  providedIn: 'root',
})

export class ServiceService {

  constructor(private http:HttpClient) { }

  postData(userData):Observable<Imodel>
  {
    return this.http.post<Imodel>("https://localhost:44323/api/user",userData).pipe();
  }
}
