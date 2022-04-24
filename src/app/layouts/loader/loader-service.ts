import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * @author Ayoub LAHKIM
 */
@Injectable({ providedIn: 'root' })
export class LoaderService {

  public isLoading = new BehaviorSubject(false);

  constructor() { }
}
