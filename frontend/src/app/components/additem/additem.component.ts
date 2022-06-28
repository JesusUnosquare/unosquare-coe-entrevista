import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toy } from "../../models/toy"
import { ItemService } from "../../services/item.service";

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  name:string = "";
  description:string = "";
  ageRestriction:number = 0;
  company:string = "";
  price:number=0;
  imageLink:string="";

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const toy = new Toy();
    toy.name = this.name;
    toy.description = this.description;
    toy.ageRestriction = this.ageRestriction;
    toy.company = this.company;
    toy.price = this.price;
    toy.imageLink = this.imageLink;

    this.itemService.addItem(toy).subscribe( i =>{
      this.router.navigate(['/shopping']);
    });
  }

}
