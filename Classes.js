class Humanship{
constructor(MFalcon){
    this.hull = 20
    this.attack = 5
    this.accuracy = .7
    this.ship = MFalcon

    }
}

class Alienship{
    constructor(tieFighter){
        this.hull = Math.floor(Math.random()* (6-3) + 3)
        this.attack = Math.floor(Math.random()* (4 - 2) +2)
        this.accuracy = Math.random() * (.8 - .6)+ .6;
        this.ship = tieFighter
    
    }   
}

let humanArr = [new Humanship("USS.Schwarzenegger")]
let alienArr = [new Alienship("UFO1"), new Alienship("UFO2")]

console.log(humanArr);
console.log(alienArr);

