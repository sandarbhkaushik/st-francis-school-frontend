import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {

  @Input() data;
  pageData: any;
  constructor() {
  }
  ngOnInit() {
    this.pageData = this.data;
    // console.log(this.data);

  }

}
