import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
ItemCount: number  ;
btnText = 'Add an Item';
goalText = 'My first life goal';
goals = [];
  constructor( private _data: DataService) { }

  ngOnInit() {
    this.ItemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);

  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.ItemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
