import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {}

  getArray(n: number) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(i + 1);
    }
    return array;
  }

  getJurosComp(meses: number) {
    return this.vp * Math.pow(1 + this.j / 100, meses);
  }
}
