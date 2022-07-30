import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {mergeMap, Observable} from "rxjs";
import { environment } from "src/environments/environment";
import {GameEntity} from "../model/game.entity";
import {Categories} from "../model/types.enum";

@Injectable({
  providedIn: 'root'
})
export class JackPotService {

  constructor(private http: HttpClient) {
  }

  findAllJackPots(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/jackpots.php`);
  }


}
