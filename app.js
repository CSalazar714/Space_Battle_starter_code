 //Creating Buttons
       const buttons = document.createElement('div')
       buttons.id = "buttonDiv"
       const attackBtn = document.createElement('button')
       attackBtn.id = "attackBtn"
       attackBtn.innerText = "Attack"
       const retreatBtn = document.createElement('button')
       retreatBtn.id = "retreatBtn"
       retreatBtn.innerText = "Retreat"
       const startBtn = document.createElement('button')
       startBtn.id = "retreatBtn"
       startBtn.innerText = "Start Game"
       buttons.append(attackBtn)
       buttons.append(retreatBtn)

       // Class creation and attack function creation//

class Humanship{
    constructor(name,hull, attackDmg, accuracy){
        this.name = name;
        this.hull = 20
        this.attackDmg = 5
        this.accuracy = .7
        
    }
    attack(enemy) {
        if(Math.random()> this.accuracy){
            alert("Target Missed!")  
        }
         else{      
         enemy.hull -=this.attackDmg;
         alert("Target hit!"+ enemy.name + "has" + enemy.hull + " hull remaining." )
        }
    }
}
class Alienship{
    constructor(name,hull,attackDmg,accuracy){
        this.name = name
        this.hull = Math.floor(Math.random()* (6-3) + 3)
        this.attackDmg = Math.floor(Math.random()* (4 - 2) +2)
        this.accuracy = Math.random() * (.8 - .6)+ .6;
    }

        attack(enemy) {
            if(Math.random()> this.accuracy){
                alert(this.name + "Missed!")  
            }
             else{      
             enemy.hull -=this.attackDmg;
             alert("We're hit! we have " + enemy.hull + "hull remaining!"  )
            }
        }   
}
//creating arrays for each side//
let RebelsArr= [new Humanship("Millenium Falcon",20,5,.7)];
let EmpireArr = [];
const numTiefighters = 6;
//console.log(RebelsArr[0])
//used to create enemy ship array//

    // console.log(TiefighterArr)
for(let i = 0; i < numTiefighters; i++){
    const createAlienShip = new Alienship(`Tiefighter ${i + 1}`);
   EmpireArr.push(createAlienShip); }
    //Creating function to begin the game this will be the prompt to get player's name//
   function BeginGame(){
       let playerName = prompt("What is your Pilotname?")
       alert("Welcome" + playerName + "The Rebels need your help! The Empire has found our secret base and we need you to pilot the Millenium Falcon to defend us!")
   }
 // Battle function to go through steps of ships damaging each other//
    function Battle() {
        while(EmpireArr[0].hull > 0)
        if(RebelsArr[0].hull> 0 || EmpireArr.length > 0){
        RebelsArr.attack(EmpireArr[0])
            if(EmpireArr[0].hull > 0){
                EmpireArr.attack(RebelsArr[0])
            }
        }
            else{
                EmpireArr.shift()
                alert("Empire Tie Fighter Destroyed!")    
                while(EmpireArr.length > 0)
                {alert("Watch out here comes another one!")}
//checks to see if there are enemy ships left
        if(EmpireArr.length <= 0){
            gameOver = true
        }
        } 
        }
        // creating condition to end game//
    if(gameOver) {
        if (RebelsArr[0].hull <= 0){
        alert("You have been defeated, the resistance has lost")
    } else {
        alert("You have successfully defeated the Empire Tie Fighters! May the Force be with you!")
    }}
    gameover = false


//Buttons programmed attackBtn should run the Battle function and allow it to run it again for each enemy ship
        attackBtn.addEventListener('click', ()=>{
            Battle();
        });
//retreatBtn provides a message, and refreshes page to restart game. 
        retreatBtn.addEventListener(`click`, ()=>{
            alert("We appreciate the help, We'll do what we can from here.")
          //this should refresh the page that way "restarting" the game
            location.reload()
          //read firefox requires a false boolean response to use location.reload
            return(false)
        })
