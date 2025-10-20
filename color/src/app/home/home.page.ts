import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, CommonModule, FormsModule],
})
export class HomePage {
  constructor() {}

  selectedColor: string = "black";

  colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

  selectColor(color: string) {
    this.selectedColor = color;
  }
}
