const { Room, Booking } = require('./index');

// Room Constructor Tests       /////////////////////////////////////////////////////////////////////////////////////////
// Room.name                    /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.name is a string", () => {
    it("is string", () => {
        expect(typeof (new Room("A - 303", [], 1, 0).name)).toBe("string");
    });

    it("is string", () => {
        expect(typeof (new Room("Some Array", [], 1, 0).name)).toBe("string");
    });

    it("is int", () => {
        expect(new Room(4, [], 1, 0)).toThrow();
    });

    it("is float", () => {
        expect(new Room(4.1, [], 1, 0)).toThrow();
    });

    it("is boolean", () => {
        expect(new Room(true, [], 1, 0)).toThrow();
    });

    it("is null", () => {
        const room = new Room(null, [], 1, 0);
        expect(typeof (room.name)).toThrow();
    });
});

describe("Room.name.length is greater than 0", () => {
    it("is > 0", () => {
        expect(new Room("Some Array", [], 1, 0).name.length).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Room("Some Other Array", [], 1, 0).name.length).toBeGreaterThan(0);
    });

    it("equals 0", () => {
        expect(new Room("", [], 1, 0)).toThrow();
    });
});

// Room.bookings                /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.bookings is array", () => {
    it("is empty array", () => {
        expect(Array.isArray(new Room("a", [], 1, 0).bookings)).toBeTruthy();
    });

    it("is array (not empty)", () => {
        expect(Array.isArray(new Room("a", [0, 1, 2], 1, 0).bookings)).toBeTruthy();
    });

    it("is boolean", () => {
        expect(new Room("a", false, 1, 0)).toThrow();
    });

    it("is int", () => {
        expect(new Room("a", 1, 1, 0)).toThrow();
    });

    it("is string", () => {
        expect(new Room("a", "Some String", 1, 0)).toThrow();
    });
});

describe("Room.bookings elements to be Booking objects", () => {
    it("is empty", () => {
        new Room("", [], 0, 0).bookings.forEach(el => {
            expect(el instanceof Booking).toBeTruthy();
        });
    });

    it("is array of proper Booking", () => {
        new Room("a", [new Booking("name", "email", new Date(), new Date(), 41, new Room("A - 303", [], 14500, 40))], 1, 0).bookings.forEach(el => {
            expect(el instanceof Booking).toBeTruthy();
        });
    });

    it("is array of proper Booking", () => {
        new Room("a", [new Booking("name", "email", new Date(), new Date(), 41, new Room("A - 303", [], 14500, 40)), new Booking("name", "email", new Date(), new Date(), 41, new Room("A - 303", [], 14500, 40))], 1, 0)
            .bookings.forEach(el => {
                expect(el instanceof Booking).toBeTruthy();
            });
    });

    it("is array of int", () => {
        new Room("a", [0, 1, 2, 3, 4, 5], 1, 0)
            .bookings.forEach(el => {
                expect(el instanceof Booking).toBeTruthy();
            });
    });

    it("is array of mixed types", () => {
        new Room("a", [new Booking("name", "email", new Date(), new Date(), 41, new Room("A - 303", [], 14500, 40)), 1, false, 3, 4, 5], 1, 0)
            .bookings.forEach(el => {
                expect(el instanceof Booking).toBeTruthy();
            });
    });

    it("is array of mixed types", () => {
        new Room("a", [null, 1.1, true, 3, 4, 5], 1, 0)
            .bookings.forEach(el => {
                expect(el instanceof Booking).toBeTruthy();
            });
    });
});
