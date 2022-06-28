import { Component, OnInit } from '@angular/core';
import { Toy } from "../../models/toy"
import { ItemService } from "../../services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  toys:Toy[] = [];
  total: number = 0;

   constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.toys = data;
      this.gettotal();
    });
  }

  deleteItem(toy: Toy){
    this.toys = this.toys.filter(x => x.id !== toy.id);
    this.itemService.deleteItem(toy).subscribe();
    this.gettotal();
  }
  toggleItem(toy: Toy){
     //this.itemService.toggleItem(toy).subscribe();
     this.gettotal();
  }
  updateItem(toy: Toy){
    const index = this.toys.findIndex(toys => {
      return toys.id === toy.id;
    }); 
    if (index !== -1) {
      this.toys[index].quantity = toy.quantity;
    }
    console.log(this.toys);
     this.gettotal();
  }

  gettotal(){
    this.total = this.toys
                  .filter(toy =>  (!toy.completed || !toy.hasOwnProperty('completed')) && toy.hasOwnProperty('quantity') )
                  .map(toy => toy.quantity * toy.price )
                  .reduce((acc,x) => acc += x ,0);
  }

}
