import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class LikeService {


  constructor() {
  }

  getItem(id: string): number  {
    if(localStorage.getItem(id)!=null){
      // @ts-ignore
      return +localStorage.getItem(id);
    }
    return  0;
  }

  setItem(id: string | undefined, value: number | undefined): void {
    if(!id){
      throw Error("id is mandatory");
    } if(value==null){
      throw Error("value is mandatory");
    }
    localStorage.setItem(id, ''+value);
  }

  removeItem(id: number): void {
    localStorage.removeItem(''+id);
  }
}
