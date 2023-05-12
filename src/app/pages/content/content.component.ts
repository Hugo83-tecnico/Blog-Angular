import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

 
  photoCover: string = '';
  contentTitle: string = 'Em construção';
  contentDescription:string = 'Em construção'

  private id: string | null = "0"

  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get("id") 
      )

    this.setValueToComponent(this.id)
  }
  
  setValueToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0];
    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
  }


}
