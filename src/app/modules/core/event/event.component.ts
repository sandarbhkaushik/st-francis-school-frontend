import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() events;
  pageData: any = {};
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.pageData = this.events;
    // console.log(JSON.parse(JSON.stringify(this.pageData)));
  }

  viewDetailPage(data:any){
    console.log(data);
    console.log('event-detail/'+data.slug);
    this.router.navigate(['event/'+data.slug]);
  }

}
