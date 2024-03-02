import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoreService } from '../../../../app/service/core.service';
import { Title }     from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  pageSlug: any;
  showloader: boolean = true;
  contentData: any;
  private _album: any = [];
  facultyData: any = [];

  constructor(public route: ActivatedRoute, public coreService: CoreService, private titleService: Title, private _lightbox: Lightbox ) {
  }

  ngOnInit() {
    this.showloader = false;
    const sub = this.route.params.subscribe(params => {
      this.pageSlug = params.slug; // (+) converts string 'id' to a number
      console.log(this.pageSlug);
      if(this.pageSlug != undefined && this.pageSlug != null){
        this.getPageContent(this.pageSlug);
      }
      if(this.pageSlug == 'faculty-staff-images'){
        this.getFaculty(1);
      }
      if(this.pageSlug == 'administrative-departmente02bfce4-016a-4902-90e1-c2a1e323db98'){
        this.getFaculty(4);
      }

    });
  }

  getPageContent(slug){
    // this.allContentData.forEach(element => {
    //   if(element.slug == this.pageSlug){
    //     this.contentData = element;
    //     this.titleService.setTitle( this.contentData.title + ' | St Francis English School' );
    //   }
    // });
    this.showloader = true;
    this.coreService.getPageContent(slug).subscribe(res => {
      console.log(res);
      this.contentData = res[0];
      this.showloader = false;
      if(this.contentData.media && this.contentData.media.length){
        this.contentData.media.forEach(element => {
          element.file_type = element.media_file.substr((element.media_file.lastIndexOf('.') + 1));
          
          if(element.file_type.toLowerCase() == 'jpg' || element.file_type.toLowerCase() == 'png' || element.file_type.toLowerCase() == 'jpeg'){
            element.show_img = true;
          }else{
            element.show_img = false;
          }
        });
      }
      console.log(this.contentData);
      // this.titleService.setTitle( this.contentData.title + ' | St Francis English School' );
    },
    err=>{
      console.log(err);
    });
  }

  open(index: number): void {
    // open lightbox
    let image = [];
    this.contentData.media.forEach(element => {
      element.src = element.media_file.slice(30);
      image.push(element)
    });

    console.log(index);
    console.log();

    this._lightbox.open(image, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  download(){
    // http://localhost:4200/
    // http://stfrancisschoolkorba.ac.in
     var url='http://stfrancisschoolkorba.ac.in/assets/img/scool-events.docx';
     window.open(url, "_blank");
  }

  downloadFile(url){
    window.open(url, "_blank");
  }

  getFaculty(id){
    this.coreService.getFaculty(id).subscribe(res=>{
      this.facultyData = res;
      console.log(res);
    },
    err=>{
      console.log(err);
    });
  }


}
