import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lanangheles {
  section: any = "BSIT 3I";
  
  // Create object that contains song details of many songs
  SongBook = [
    {
      id: 0,
      title: "You're Gonna Go Far, Kid",
      artist: "The Offspring",
      album: "Rise and Fall, Rage and Grace",
      lyrics: `Show me how to lie
          You're getting better all the time
          And turning all against the one
          Is an art that's hard to teach
          Another clever word
          Sets off an unsuspecting herd
          And as you step back into line
          A mob jumps to their feet`,
      toggle: false
    },
    {
      id: 1,
      title: "The Resistance",
      artist: "Skillet",
      album: "Awake",
      lyrics: `We won't back down
          We won't give in
          'Cause this is where the fight begins
          We are the brave, the bold, the strong
          We'll fight until the end`,
      toggle: false
    }
    ,
    {
      id: 2,
      title: "Comatose",
      artist: "Skillet",
      album: "Awake",
      lyrics: `Comatose, I can't wake up
          This dream is slowly taking my life away
          Comatose, I can't wake up
          But I know I can't stay here forever`,
      toggle: false
    },
    {
      id: 3,
      title: "Wintersaga",
      artist: "Wind Rose",
      album: "Wintersaga",
      lyrics: `Through the frozen lands we ride
          With the northern winds as guide
          Our hearts are burning bright
          In the endless winter night`,
      toggle: false
    },
    {
      id: 4,
      title: "Heneral",
      artist: "Chelsea Alley",
      album: "Heneral",
      lyrics: `Wag mo nang pahirapan pa!`,
      toggle: false
    },
    {
      id: 5,
      title: "You're Gonna Go Far, Kid",
      artist: "The Offspring",
      album: "Rise and Fall, Rage and Grace",
      lyrics: `Show me how to lie
          You're getting better all the time
          And turning all against the one
          Is an art that's hard to teach
          Another clever word
          Sets off an unsuspecting herd
          And as you step back into line
          A mob jumps to their feet`,
      toggle: false
    },
    {
      id: 6,
      title: "The Resistance",
      artist: "Skillet",
      album: "Awake",
      lyrics: `We won't back down
          We won't give in
          'Cause this is where the fight begins
          We are the brave, the bold, the strong
          We'll fight until the end`,
      toggle: false
    }
    ,
    {
      id: 7,
      title: "Comatose",
      artist: "Skillet",
      album: "Awake",
      lyrics: `Comatose, I can't wake up
          This dream is slowly taking my life away
          Comatose, I can't wake up
          But I know I can't stay here forever`,
      toggle: false
    },
    {
      id: 8,
      title: "Wintersaga",
      artist: "Wind Rose",
      album: "Wintersaga",
      lyrics: `Through the frozen lands we ride
          With the northern winds as guide
          Our hearts are burning bright
          In the endless winter night`,
      toggle: false
    },
    {
      id: 9,
      title: "Heneral",
      artist: "Chelsea Alley",
      album: "Heneral",
      lyrics: `Wag mo nang pahirapan pa!`,
      toggle: false
    }
  ]
}
