class Card {
    constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    }
}


class Effect extends Card {
    constructor (name, cost, text, stat, magnitude) {
        super (name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;

        }

        play(target) {
            if (target instanceof Unit) {
                const message = this.text;
                console.log(message);
        
                if (this.name == "HardAlgorithm") {
                    target.resilience += 3;
                } else if (this.name == "UnhandledPromiseRejection") {
                    target.resilience -= 2;
                } else {
                    target.power += 2;
                }
            } else {
                throw new Error("Target must be a unit!");
            }
        }
        


}


class Unit extends Card {
    constructor(name, cost, resilience, power){
        super(name, cost) 
        this.resilience = resilience;
        this.power = power;
    }

    attack( target ) {
        if (target instanceof Unit) {
            console.log("reduce target's resilience")
            target.resilience -= this.power;
        }
        else {
        throw new Error("Target must be a unit!");
    }

        
    }
}


const RedBeltNinja = new Unit("RedBeltNinja", 3, 3, 4);
const BlackBeltNinja = new Unit ("BlackBeltNinja", 4, 5, 4);
const HardAlgorithm	 = new Effect("HardAlgorithm",2, "increase target's resilience by 3", "resilience", +3 );
const UnhandledPromiseRejection = new Effect ("UnhandledPromiseRejection", 1, "reduce target's resilience by 2", "resilience", -2);
const PairProgramming	= new Effect ("Pair Programming	", 3, "increase target's power by 2	", "power", +2);



HardAlgorithm.play(RedBeltNinja);
console.log("Red Belt Ninja's resilience:" + RedBeltNinja.resilience);
UnhandledPromiseRejection.play(RedBeltNinja);
console.log("Red Belt Ninja's resilience:" + RedBeltNinja.resilience);
PairProgramming.play(RedBeltNinja);
console.log("Red Belt Ninja's power:" + RedBeltNinja.power);
RedBeltNinja.attack(BlackBeltNinja);
console.log("Black Belt Ninja's resilience:" + BlackBeltNinja.resilience);


