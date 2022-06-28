import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toy } from "../../models/toy"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() toy: Toy = new Toy();
  @Output() deleteItem: EventEmitter<Toy> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Toy> = new EventEmitter();
  @Output() updateTotal: EventEmitter<Toy> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(toy: Toy)
  {
      this.deleteItem.emit(toy);
  }
  onToggle(toy: Toy)
  {
    toy.completed = !toy.completed;
    this.toggleItem.emit(toy);
  }
  onChangeQty(toy: Toy)
  {
    toy.quantity = toy.quantity;
    this.updateTotal.emit(toy);
  }

}
