import { Component,OnInit } from '@angular/core';
import { CoreService } from '../app/service/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'st-francis-school-frontend';
  menuList: any = [
    {
      "slug": "a",
      "link": "",
      "id": 1,
      "title": "Abous Us",
      "child": [
        {
          "slug": "history",
          "group_id": 1,
          "id": 1,
          "title": "History"
        },
        {
          "slug": "vision",
          "group_id": 1,
          "id": 2,
          "title": "Vision"
        },
        {
          "slug": "mission",
          "group_id": 1,
          "id": 3,
          "title": "Mission"
        },
        {
          "slug": "principalmessage",
          "group_id": 1,
          "id": 4,
          "title": "Principal’s Message"
        },
        // {
        //   "slug": "head-mistresss-message",
        //   "group_id": 1,
        //   "id": 5,
        //   "title": "Head Mistress’s Message"
        // },
        {
          "slug": "faculty-staff-images",
          "group_id": 1,
          "id": 6,
          "title": "Faculty – Staff Images"
        }
      ]
    },
    {
      "slug": "i",
      "link": "",
      "id": 2,
      "title": "Institution",
      "child": [
        {
          "slug": "infrastructure",
          "group_id": 2,
          "id": 7,
          "title": "Infrastructure"
        },
        {
          "slug": "classroom",
          "group_id": 2,
          "id": 8,
          "title": "Classroom"
        },
        {
          "slug": "library",
          "group_id": 2,
          "id": 9,
          "title": "Library"
        },
        {
          "slug": "computer-lab",
          "group_id": 2,
          "id": 10,
          "title": "Computer lab"
        },
        {
          "slug": "playground",
          "group_id": 2,
          "id": 11,
          "title": "Playground"
        },
        {
          "slug": "medical-room",
          "group_id": 2,
          "id": 12,
          "title": "Medical Room"
        },
        {
          "slug": "art-craft",
          "group_id": 2,
          "id": 13,
          "title": "Art & Craft"
        },
        {
          "slug": "teaching-methods",
          "group_id": 2,
          "id": 14,
          "title": "Teaching Methods"
        },
        {
          "slug": "staff-room",
          "group_id": 2,
          "id": 15,
          "title": "Staff Room"
        },
        {
          "slug": "physical-education",
          "group_id": 2,
          "id": 16,
          "title": "Physical Education"
        },
        {
          "slug": "display-board",
          "group_id": 2,
          "id": 17,
          "title": "Display Board"
        },
        {
          "slug": "inclusion-of-value-education",
          "group_id": 2,
          "id": 18,
          "title": "Inclusion of Value Education"
        },
        {
          "slug": "music-dance",
          "group_id": 2,
          "id": 19,
          "title": "Music & Dance"
        },
        {
          "slug": "co-curricular-activities",
          "group_id": 2,
          "id": 20,
          "title": "Co-Curricular Activities"
        },
        {
          "slug": "club-house-system",
          "group_id": 2,
          "id": 21,
          "title": "Club House System"
        },
        {
          "slug": "assembly-conduction",
          "group_id": 2,
          "id": 22,
          "title": "Assembly Conduction"
        }
      ]
    },
    {
      "slug": "admission",
      "link": "admission",
      "id": 3,
      "title": "Admission",
      "child": [
        {
          "slug": "test",
          "group_id": 3,
          "id": 23,
          "title": "Test"
        }
      ]
    },
    // {
    //   "slug": "academics",
    //   "link": "academics",
    //   "id": 3,
    //   "title": "Academics",
    //   "child": [
    //     {
    //       "slug": "admission",
    //       "group_id": 3,
    //       "id": 1001,
    //       "title": "Admission"
    //     },
    //     {
    //       "slug": "fee-structure",
    //       "group_id": 3,
    //       "id": 1002,
    //       "title": "Fee Structure"
    //     },
    //     {
    //       "slug": "school-song",
    //       "group_id": 3,
    //       "id": 1003,
    //       "title": "School Song"
    //     },
    //     {
    //       "slug": "school-timing",
    //       "group_id": 3,
    //       "id": 1004,
    //       "title": "School Timing"
    //     },
    //   ]
    // },
    {
      "slug": "parents-zone",
      "link": "parents-zone",
      "id": 4,
      "title": "Parents Zone",
      "child": []
    },
    {
      "slug": "topper-images",
      "link": "topper-images",
      "id": 5,
      "title": "Topper Images",
      "child": []
    },
    {
      "slug": "gallery",
      "link": "gallery",
      "id": 6,
      "title": "Gallery",
      "child": []
    },
    {
      "slug": "contact-us",
      "link": "contact-us",
      "id": 7,
      "title": "Contact Us",
      "child": []
    }
  ];

  constructor(public coreService: CoreService){

  }
  OnInit(){
  
  }
  // getMenu(){
  //   console.log('called 1');
  //   this.coreService.getMenu().subscribe(res=>{
  //     console.log(res);
  //     this.menuList = res;      
  //   },
  //   err=>{
  //     console.log(err);
  //   });
  // }
}
