class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food += 2
    }

    eat() {
        if (this.food < 1) {
            this.isHealthy = false
        } else {
            this.food -= 1
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount() {

        let emptySeats = this.capacity - this.passengers.length
        return (emptySeats)

    }


    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        let quarintine = this.passengers.some(traveler => traveler.isHealthy === false)
        return quarintine

    }

    totalFood() {
        let totals = 0
        for (let index = 0; index < this.passengers.length; index++) {
            const foodcount = this.passengers[index].food
            totals = totals + foodcount
        }

        return totals
    }
}


let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`)