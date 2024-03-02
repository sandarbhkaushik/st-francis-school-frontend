import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoreService } from '../../../../app/service/core.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  contentData: any = [];
  showloader: boolean = true;
  eventDta: any = [];
  facultyData: any = [];

  constructor(public coreService: CoreService, public route: ActivatedRoute,  private titleService: Title ) { }
  public  pageData: any = [];

  ngOnInit() {
    this.getAllPages();
    this.getEvent();
    this.titleService.setTitle('Home | St Francis English School' );
    this.showloader = false;

  }

  getAllPages(){
    this.showloader = true;
    this.coreService.getAllPages().subscribe(res=>{
      this.contentData = res;

      for (let i = 0; i < this.contentData.length; i++){
        if(this.contentData[i].slug == 'history' || this.contentData[i].slug == 'vision' || this.contentData[i].slug == 'mission' || this.contentData[i].slug == 'principalmessage' || this.contentData[i].slug == 'headmistress'){
          this.pageData.push(this.contentData[i]);
          console.log(this.contentData[i].slug);

        }
        console.log(this.pageData);
        this.showloader = false;
      }
    },
    err=>{
      console.log(err);
      this.showloader = false;
    });
  }

  getEvent(){
    this.coreService.getEvent().subscribe(res=>{
      this.eventDta = JSON.parse(JSON.stringify(res));
      console.log(this.eventDta);
    },
    err=>{
      console.log(err);
    });
  }

}
