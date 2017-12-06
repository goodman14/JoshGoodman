import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-blocks',
  templateUrl: './screen-blocks.component.html',
  styleUrls: ['./screen-blocks.component.scss']
})
export class ScreenBlocksComponent implements OnInit {

  private boxes: BoxElement[] = [];

  constructor() { }

  ngOnInit() {

    for ( let i = 0; i <= 15; i++) {

      this.boxes.push({
        boxClass: 'box-' + i,
        opacity: 1,
        color: '#fffff',
      });

    }
  }

}

interface BoxElement {
  boxClass: string;
  opacity: number;
  color: string;
// tslint:disable-next-line:eofline
}