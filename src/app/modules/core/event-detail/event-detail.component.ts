import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/service/core.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  public id: string;
  contentData: any;
  showloader: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('slug');
    console.log(this.id);
    this.showloader = true;
    this.coreService.getEventDetail(this.id).subscribe(
      res => {
        this.showloader = false;

        this.contentData = res;
        console.log(this.contentData);

      },
      error => {
        this.showloader = false;
        console.log(error);
      }
    );

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


}
