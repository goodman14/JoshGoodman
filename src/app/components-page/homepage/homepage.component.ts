import { Component, OnInit, HostListener } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private headingLeft: number;
  private headingTop: number;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent): void  { 
    console.log(event.clientX / 100)

    this.headingLeft = event.clientY / 250;
    this.headingTop = event.clientX / 250;
  }

}



