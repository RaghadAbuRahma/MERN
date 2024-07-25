class Ninja {
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }

    showStat(){
        console.log("Name:" + this.name + "Health:" + this.health + "Strength:" + this.strength + "Speed:" + this.speed);
    }

    drinkSake(){
        this.health += 10;
    }
}

const N = new Ninja("raghad");
// N.sayName();

N.drinkSake();
N.showStat();

