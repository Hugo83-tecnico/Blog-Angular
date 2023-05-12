import { Component, OnInit } from '@angular/core';
import { dataFake, dataFakeMainCard } from 'src/app/data/dataFake';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  photoCard: string = '';
  cardTitle: string = '';
  cardDescription: string = '';
  list:any = dataFake;                 /* Recebendo a lista do banco de dados fake */
  
  constructor() {}

 

  ngOnInit(): void {

    this.setValueToComponent('1')
    console.log(this.list)

  }
  setValueToComponent(id:string | null){
    const result = dataFakeMainCard.filter(article => article.id === id)[0];       
    this.photoCard = result.photo;
    this.cardTitle = result.title;
    this.cardDescription = result.description;
   
  }
 

}
