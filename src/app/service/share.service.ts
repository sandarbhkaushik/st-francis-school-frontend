import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ShareService {
private loaderStatus = new BehaviorSubject(true);

shareLoaderStatus = this.loaderStatus.asObservable();
  constructor() { }

  saveLoaderStatus(data:boolean){
    this.loaderStatus.next(data);
    console.log(this.saveLoaderStatus);
  }
}

