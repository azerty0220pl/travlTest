class Room {
    constructor(name, bookings, rate, discount) {
        if (typeof (name) !== "string")
            throw new Error("name should be a string.");

        this.name = name;

        if (this.name.length === 0)
            throw new Error("name should be longer than 0.");

        if (!Array.isArray(bookings))
            throw new Error("bookings should be an array.");

        bookings.forEach(el => {
            if (!(el instanceof Booking))
                throw new Error("All elements of bookings should be instances of Booking.");
        });

        this.bookings = bookings;

        if (typeof (rate) !== "number" || rate <= 0)
            throw new Error("rate should be an integer greater than 0");

        this.rate = Math.floor(rate);

        if (typeof (discount) !== "number" || discount < 0 || discount > 100)
            throw new Error("rate should be a number greater than 0 and smaller than 100");

        this.discount = Math.floor(discount);
    }

    isOccupied(date) {
        if (!(date instanceof Date))
            throw new Error("date should be instaceof Date");

        return this.bookings.find(el => el.checkIn <= date && el.checkOut >= date);
    }

    occupancyPercetage(startDate, endDate) {
        return;
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {
        return;
    }

    static availableRooms(rooms, startDate, endDate) {
        return;
    }
}

class Booking {
    constructor (name, email, checkIn, checkOut, discount, room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee(){
        return;
    }
}

module.exports = {
    Room: Room,
    Booking: Booking
}