let restaurant = {
    name : 'BK',
    guestCapacity : 75,
    guestCount : 0,
    checkSeatRemaing : function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount ;
        return partySize <= seatsLeft 

    },
    seatParty : function(numberOfGuests){
        this.guestCount = this.guestCount + numberOfGuests ;
        return this.guestCount ;
    },
    removeParty : function(removeOfGuests){
        this.guestCount = this.guestCount - removeOfGuests ;
        return this.guestCount;
    }

}
console.log(restaurant.checkSeatRemaing(4));
restaurant.seatParty(60);
restaurant.seatParty(12);
console.log(restaurant.checkSeatRemaing(4));
restaurant.removeParty(10);
console.log(restaurant.checkSeatRemaing(4));