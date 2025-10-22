import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Lanangheles } from '../../services/lanangheles';

@Component({
  selector: 'app-my-song',
  templateUrl: './my-song.page.html',
  styleUrls: ['./my-song.page.scss'],
  standalone: true,
  imports: [ IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MySongPage implements OnInit {

  constructor(private song: Lanangheles) { }

  songbook = this.song.SongBook;

  isHidden: boolean = true;

  toggleLyrics(id: number) {
    this.songbook[id].toggle = !this.songbook[id].toggle;
  }

  ngOnInit() {
  }

}
