import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()                 /* item sendo injetado pelo componente home.component.html */
  photoCover:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  id:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
