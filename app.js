const YouWin = () => {
    if(alienArr[0].hull <= 0){
        console.log("Enemy Ship has been destroyed!")
        alienArr.slice(0,1);
    }
}


class Humanship{
constructor(MFalcon){
    this.hull = 20
    this.attackDmg = 5
    this.accuracy = .7
    this.ship = MFalcon

    }
    attack(enemy) {

        if(Math.random()> this.accuracy){
            console.log(this.ship + "fired upon the enemy!");
            console.log(enemy.hull -= this.attackDmg)
    }

        else{
        console.log( enemy.hull -= (this.attackDmg));
        
        if (enemy.hull <= 0){
        console.log("You destroyed the enemy ship!")
            if(alienArr[0]=== ""){
                console.log("You defeated all the enemy ships! You successfully defended the planet!")
            }
            else{
                console.log("Watch out! next ship is approaching!")
            }
    }
    }
}}

class Alienship{
    constructor(tieFighter){
        this.hull = Math.floor(Math.random()* (6-3) + 3)
        this.attackDmg = Math.floor(Math.random()* (4 - 2) +2)
        this.accuracy = Math.random() * (.8 - .6)+ .6;
        this.ship = tieFighter
    
    }   
    attack(enemy) {

        if(Math.random()> this.accuracy){
            console.log("You Missed!")
    }
        else{
        return enemy.hull -= (this.attackDmg)
    }   
        if (enemy.hull <= 0){
        console.log("You destroyed the enemy ship!")
       
    }
        else{
        console.log("Enemy has "+ enemy.hull +" hp remaining!" )
        
    }
    
    }
}


let humanArr = [new Humanship("USS.Schwarzenegger")]
let alienArr = [new Alienship("tieFighter1")]

// console.log(humanArr);
// console.log(alienArr);

// attack(enemy) {

//     if(Math.random()> accuracy){
//         console.log("You Missed!")
//     }else{
//     return enemy.hull -= this.attack
// }
// console.log("You Hit! Enemy tieFighter has" + enemy.hull + "Hp remaining!")
// }

console.log(humanArr[0].attack(alienArr[0]))

