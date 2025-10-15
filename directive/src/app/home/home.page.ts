import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonCard, IonCardTitle, IonCardContent, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSelect, IonSelectOption, IonCard, IonCardTitle, IonCardContent, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule],
})
export class HomePage {
  constructor() {}

  showMessage: boolean = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
