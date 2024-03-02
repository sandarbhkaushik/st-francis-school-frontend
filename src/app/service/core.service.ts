import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getMenu(){
    console.log('called 2');
    return this.http.get('/api/menu/allmenuitem/');
  }

  getPageContent(data){
    return this.http.get('/api/core/corePageDetail/'+data);
  }

  getAllPages(){
    return this.http.get('/api/core/corePageListWithMedia/');
  }

  getEvent(){
    return this.http.get('/api/core/event/');
  }

  getEventDetail(slug){
    return this.http.get(`/api/core/event/${slug}/`);
  }
  //get faculty based on department id
  getFaculty(id){
    return this.http.get('/api/faculty/profilebydepartment/'+ id);
  }


}
