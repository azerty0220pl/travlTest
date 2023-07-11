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

    occupancyPercentage(startDate, endDate) {
        if (!(startDate instanceof Date))
            throw new Error("startDate should be instaceof Date");

        if (!(endDate instanceof Date))
            throw new Error("endDate should be instaceof Date");

        if (startDate > endDate)
            throw new Error("startDate cannot be greater than endDate");

        let i = 0;
        let counter = 0;
        let date = new Date(startDate.getTime());

        for (; date <= endDate; i++) {
            if (this.isOccupied(date))
                counter++;
            date.setDate(date.getDate() + 1);
        }

        return counter / i * 100;
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {
        rooms.forEach(el => {
            if (!(el instanceof Room))
                throw new Error("All elements of rooms should be instances of Room.");
        });

        if (!(startDate instanceof Date))
            throw new Error("startDate should be instaceof Date");

        if (!(endDate instanceof Date))
            throw new Error("endDate should be instaceof Date");

        if (startDate > endDate)
            throw new Error("startDate cannot be greater than endDate");

        let res = 0;

        rooms.forEach(el => {
            res += el.occupancyPercentage(startDate, endDate);
        })

        return res > 0 ? res / rooms.length : 0;
    }

    static availableRooms(rooms, startDate, endDate) {
        rooms.forEach(el => {
            if (!(el instanceof Room))
                throw new Error("All elements of rooms should be instances of Room.");
        });

        if (!(startDate instanceof Date))
            throw new Error("startDate should be instaceof Date");

        if (!(endDate instanceof Date))
            throw new Error("endDate should be instaceof Date");

        if (startDate > endDate)
            throw new Error("startDate cannot be greater than endDate");

        let res = [];

        rooms.forEach(el => {
            if (el.occupancyPercentage(startDate, endDate) === 0)
                res.push(el);
        })

        return res;
    }
}

class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
        if (typeof (name) !== "string")
            throw new Error("name should be a string.");

        this.name = name;

        if (this.name.length === 0)
            throw new Error("name should be longer than 0.");

        if (typeof (email) !== "string")
            throw new Error("email should be a string.");

        this.email = String(email);
        if (this.email.length === 0)
            throw new Error("email should be longer than 0.");

        if (!(checkIn instanceof Date))
            throw new Error("checkIn should be instaceof Date");
        if (!(checkOut instanceof Date))
            throw new Error("checkOut should be instaceof Date");

        if (checkIn > checkOut)
            throw new Error("checkIn cannot be greater than checkOut")

        this.checkIn = checkIn;
        this.checkOut = checkOut;

        if (typeof (discount) !== "number" || discount % 1 !== 0 || discount < 0 || discount > 100)
            throw new Error("rate should be an integer bigger than 0 and smaller than 100");

        this.discount = discount;

        if (!(room instanceof Room))
            throw new Error("All elements of bookings should be instances of Booking.");

        this.room = room;
    }

    getFee() {
        const time = this.checkOut - this.checkIn;
        const days = Math.ceil(time / (1000 * 60 * 60 * 24)) + 1;

        return days * this.room.rate * (1 - this.room.discount / 100) * ( 1 - this.discount / 100);
    }
}

module.exports = {
    Room: Room,
    Booking: Booking
}