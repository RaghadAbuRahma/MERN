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
        console.log("Name:" + this.name +","+ "Health:" + this.health +","+  "Strength:" + this.strength +","+  "Speed:" + this.speed);
    }

    drinkSake(){
        this.health += 10;
    }
}

const N = new Ninja("raghad");
// N.sayName();

// N.drinkSake();
// N.showStat();


class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed =10;
        this.strength = 10;
        this. wisdom = 10;
    }


speakWisdom(){
    super.drinkSake();
    console.log("this is a wise phrase");


    }

}
const S1 = new Sensei("Sensei");
S1.speakWisdom();
S1.showStat();

