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
        expect(() => new Room(4, [], 1, 0)).toThrow();
    });

    it("is float", () => {
        expect(() => new Room(4.1, [], 1, 0)).toThrow();
    });

    it("is boolean", () => {
        expect(() => new Room(true, [], 1, 0)).toThrow();
    });

    it("is null", () => {
        expect(() => new Room(null, [], 1, 0)).toThrow();
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
        expect(() => new Room("", [], 1, 0)).toThrow();
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
        expect(() => new Room("a", false, 1, 0)).toThrow();
    });

    it("is int", () => {
        expect(() => new Room("a", 1, 1, 0)).toThrow();
    });

    it("is string", () => {
        expect(() => new Room("a", "Some String", 1, 0)).toThrow();
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

// Room.rate                    /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.rate to be a number", () => {
    it("is int", () => {
        expect(typeof (new Room("a", [], 10, 0).rate)).toBe("number");
    });

    it("is float", () => {
        expect(typeof (new Room("a", [], 10.54, 0).rate)).toBe("number");
    });

    it("is string", () => {
        expect(() => { new Room("a", [], "10.45", 0) }).toThrow();
    });

    it("is null", () => {
        expect(() => { new Room("a", [], null, 0) }).toThrow();
    });

    it("is boolean", () => {
        expect(() => { new Room("a", [], false, 0) }).toThrow();
    });
});

describe("Room.rate to be > 0", () => {
    it("is 0", () => {
        expect(new Room("a", [], 0, 0).rate).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Room("a", [], 1, 0).rate).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Room("a", [], 256, 0).rate).toBeGreaterThan(0);
    });

    it("is < 0", () => {
        expect(new Room("a", [], -1, 0).rate).toBeGreaterThan(0);
    });

    it("is < 0", () => {
        expect(new Room("a", [], -1432, 0).rate).toBeGreaterThan(0);
    });
});

describe("Room.rate to be an int", () => {
    it("is int", () => {
        expect(new Room("a", [], 12, 0).rate % 1).toEqual(0);
    });

    it("is int", () => {
        expect(new Room("a", [], 5434, 0).rate % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Room("a", [], 543.32, 0).rate % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Room("a", [], 5.2, 0).rate % 1).toEqual(0);
    });
});

// Room.discount                 /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.discount to be a number", () => {
    it("is int", () => {
        expect(typeof (new Room("a", [], 1, 10).discount)).toBe("number");
    });

    it("is float", () => {
        expect(typeof (new Room("a", [], 1, 10.54).discount)).toBe("number");
    });

    it("is string", () => {
        expect(typeof (new Room("a", [], 1, "10.45").discount)).toBe("number");
    });

    it("is null", () => {
        expect(() => { new Room("a", [], 1, null) }).toThrow();
    });

    it("is boolean", () => {
        expect(() => { new Room("a", [], 1, false) }).toThrow();
    });
});

describe("Room.discount to be >= 0", () => {
    it("is 0", () => {
        expect(new Room("a", [], 1, 0).discount).toBeGreaterThanOrEqual(0);
    });

    it("is > 0", () => {
        expect(new Room("a", [], 1, 1).discount).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Room("a", [], 1, 256).discount).toBeGreaterThan(0);
    });

    it("is < 0", () => {
        expect(() => { new Room("a", [], 1, -1) }).toThrow();
    });

    it("is < 0", () => {
        expect(() => { new Room("a", [], 1, -1432) }).toThrow();
    });
});

describe("Room.discount to be <= 100", () => {
    it("is 100", () => {
        expect(new Room("a", [], 1, 100).discount).toBeLessThanOrEqual(100);
    });

    it("is < 100", () => {
        expect(new Room("a", [], 1, 1).discount).toBeLessThanOrEqual(100);
    });

    it("is < 100", () => {
        expect(new Room("a", [], 1, 99).discount).toBeLessThanOrEqual(100);
    });

    it("is > 100", () => {
        expect(() => { new Room("a", [], 1, 101) }).toThrow();
    });

    it("is > 100", () => {
        expect(() => { new Room("a", [], 1, 1432) }).toThrow();
    });
});

describe("Room.discount to be an int", () => {
    it("is int", () => {
        expect(new Room("a", [], 1, 12).discount % 1).toEqual(0);
    });

    it("is int", () => {
        expect(new Room("a", [], 1, 78).discount % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Room("a", [], 1, 86.32).discount % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Room("a", [], 1, 5.2).discount % 1).toEqual(0);
    });
});

// Room isOccupied               /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.isOccupied(date) param is Date", () => {
    const room = new Room("a", [], 1, 0);

    it("is Date", () => {
        expect(() => room.isOccupied(new Date())).not.toThrow();
    });

    it("is number", () => {
        expect(() => room.isOccupied(4)).toThrow();
    });

    it("is string", () => {
        expect(() => room.isOccupied("17/02/2002")).toThrow();
    });

    it("is null", () => {
        expect(() => room.isOccupied(null)).toThrow();
    });
});

describe("Room.isOccupied(date) return is correct", () => {
    const room0 = new Room("a", [], 1, 0);

    const room1 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 12),
                new Date(2023, 6, 14),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    const room2 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 11),
                new Date(2023, 6, 13),
                0,
                new Room("a", [], 1, 0)
            ),
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 15),
                new Date(2023, 6, 17),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    it("Should be false (empty bookings)", () => {
        expect(room0.isOccupied(new Date())).toBeFalsy();
    });

    it("Should be false", () => {
        expect(room1.isOccupied(new Date(2023, 6, 14))).toBeFalsy();
    });

    it("Should be false", () => {
        expect(room2.isOccupied(new Date(2023, 6, 14))).toBeFalsy();
    });

    it("Should be false", () => {
        expect(room2.isOccupied(new Date(2023, 6, 19))).toBeFalsy();
    });

    it("Should be true", () => {
        expect(room1.isOccupied(new Date(2023, 6, 11))).toBeTruthy();
    });

    it("Should be true", () => {
        expect(room1.isOccupied(new Date(2023, 6, 12))).toBeTruthy();
    });

    it("Should be true", () => {
        expect(room1.isOccupied(new Date(2023, 6, 13))).toBeTruthy();
    });

    it("Should be true", () => {
        expect(room2.isOccupied(new Date(2023, 6, 15))).toBeTruthy();
    });

    it("Should be true", () => {
        expect(room2.isOccupied(new Date(2023, 6, 16))).toBeTruthy();
    });

    it("Should be true", () => {
        expect(room2.isOccupied(new Date(2023, 6, 17))).toBeTruthy();
    });
});

// Room occupancyPercentage      /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.occupancyPercentage param are Date", () => {
    const room = new Room("a", [], 1, 0);

    it("are Date", () => {
        expect(() => room.occupancyPercentage(new Date(), new Date())).not.toThrow();
    });

    it("is number", () => {
        expect(room.occupancyPercentage(4)).toThrow();
    });

    it("are string", () => {
        expect(() => room.occupancyPercentage("17/02/2002", "15/02/2002")).toThrow();
    });

    it("is boolean", () => {
        expect(() => room.occupancyPercentage(null, true)).toThrow();
    });
});

describe("Room.occupancyPercentage param are Dates that make sense", () => {
    const room = new Room("a", [], 1, 0);

    it("same date", () => {
        expect(() => room.occupancyPercentage(new Date(2023, 6, 12), new Date(2023, 6, 12))).not.toThrow();
    });

    it("same date", () => {
        expect(() => room.occupancyPercentage(new Date(2022, 11, 21), new Date(2022, 11, 21))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => room.occupancyPercentage(new Date(2023, 6, 12), new Date(2023, 6, 16))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => room.occupancyPercentage(new Date(2022, 4, 11), new Date(2025, 11, 1))).not.toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => room.occupancyPercentage(new Date(2025, 4, 11), new Date(2025, 4, 10))).toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => room.occupancyPercentage(new Date(2026, 1, 1), new Date(2025, 11, 2))).toThrow();
    });
});

describe("Room.occupancyPercentage return is correct", () => {
    const room0 = new Room("a", [], 1, 0);

    const room1 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 12),
                new Date(2023, 6, 14),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    const room2 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 11),
                new Date(2023, 6, 13),
                0,
                new Room("a", [], 1, 0)
            ),
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 15),
                new Date(2023, 6, 17),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    it("Should be 0 (empty bookings)", () => {
        expect(room0.occupancyPercentage(new Date(2023, 6, 15), new Date(2023, 6, 19))).toEqual(0);
    });

    it("Should be 0", () => {
        expect(room1.occupancyPercentage(new Date(2023, 7, 15), new Date(2023, 7, 19))).toEqual(0);
    });

    it("Should be 0", () => {
        expect(room2.occupancyPercentage(new Date(2023, 6, 14), new Date(2023, 6, 14))).toEqual(0);
    });

    it("Should be 25", () => {
        expect(room1.occupancyPercentage(new Date(2023, 6, 9), new Date(2023, 6, 12))).toEqual(25);
    });

    it("Should be 75", () => {
        expect(room2.occupancyPercentage(new Date(2023, 6, 12), new Date(2023, 6, 15))).toEqual(75);
    });

    it("Should be 50", () => {
        expect(room2.occupancyPercentage(new Date(2023, 6, 16), new Date(2023, 6, 19))).toEqual(50);
    });
});

// Room totalOccupancyPercentage /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.totalOccupancyPercentage param are valid", () => {
    const room = new Room("a", [], 1, 0);

    it("rooms are empty array", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(), new Date())).not.toThrow();
    });

    it("rooms are array", () => {
        expect(() => Room.totalOccupancyPercentage([room, room], new Date(), new Date())).not.toThrow();
    });

    it("dates are Date", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(), new Date())).not.toThrow();
    });

    it("date is number", () => {
        expect(() => Room.totalOccupancyPercentage([], 4)).toThrow();
    });

    it("dates are string", () => {
        expect(() => Room.totalOccupancyPercentage([], "17/02/2002", "18/02/2002")).toThrow();
    });

    it("date is boolean", () => {
        expect(() => Room.totalOccupancyPercentage([], null, false)).toThrow();
    });
});

describe("Room.occupancyPercentage Dates make sense", () => {

    it("same date", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2023, 6, 12), new Date(2023, 6, 12))).not.toThrow();
    });

    it("same date", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2022, 11, 21), new Date(2022, 11, 21))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2023, 6, 12), new Date(2023, 6, 16))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2022, 4, 11), new Date(2025, 11, 1))).not.toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2025, 4, 11), new Date(2025, 4, 10))).toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => Room.totalOccupancyPercentage([], new Date(2026, 1, 1), new Date(2025, 11, 2))).toThrow();
    });
});

describe("Room.occupancyPercentage return is correct", () => {
    const room0 = new Room("a", [], 1, 0);

    const room1 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 12),
                new Date(2023, 6, 14),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    const room2 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 11),
                new Date(2023, 6, 13),
                0,
                new Room("a", [], 1, 0)
            ),
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 15),
                new Date(2023, 6, 17),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    it("Should be 0 (empty rooms)", () => {
        expect(Room.totalOccupancyPercentage([], new Date(2023, 6, 15), new Date(2023, 6, 19))).toEqual(0);
    });

    it("Should be 0", () => {
        expect(Room.totalOccupancyPercentage([room0], new Date(2023, 7, 15), new Date(2023, 7, 19))).toEqual(0);
    });

    it("Should be 0", () => {
        expect(Room.totalOccupancyPercentage([room1], new Date(2023, 7, 15), new Date(2023, 7, 19))).toEqual(0);
    });

    it("Should be 0", () => {
        expect(Room.totalOccupancyPercentage([room2], new Date(2023, 6, 14), new Date(2023, 6, 14))).toEqual(0);
    });

    it("Should be 25", () => {
        expect(Room.totalOccupancyPercentage([room1, room2], new Date(2023, 6, 9), new Date(2023, 6, 12))).toEqual(25);
    });

    it("Should be 75", () => {
        expect(Room.totalOccupancyPercentage([room1, room0, room2], new Date(2023, 6, 12), new Date(2023, 6, 15))).toEqual(75);
    });

    it("Should be 50", () => {
        expect(Room.totalOccupancyPercentage([room1, room2], new Date(2023, 6, 16), new Date(2023, 6, 19))).toEqual(50);
    });
});

// Room availableRooms           /////////////////////////////////////////////////////////////////////////////////////////
describe("Room.availableRooms params are valid", () => {
    const room = new Room("a", [], 1, 0);

    it("rooms are empty array", () => {
        expect(() => Room.availableRooms([], new Date(), new Date())).not.toThrow();
    });

    it("rooms are array", () => {
        expect(() => Room.availableRooms([room, room], new Date(), new Date())).not.toThrow();
    });

    it("dates are Date", () => {
        expect(() => Room.availableRooms([], new Date(), new Date())).not.toThrow();
    });

    it("date is number", () => {
        expect(() => Room.availableRooms([], 4)).toThrow();
    });

    it("dates are string", () => {
        expect(() => Room.availableRooms([], "17/02/2002", "18/02/2002")).toThrow();
    });

    it("date is boolean", () => {
        expect(() => Room.availableRooms([], null, false)).toThrow();
    });
});

describe("Room.availableRooms Dates make sense", () => {

    it("same date", () => {
        expect(() => Room.availableRooms([], new Date(2023, 6, 12), new Date(2023, 6, 12))).not.toThrow();
    });

    it("same date", () => {
        expect(() => Room.availableRooms([], new Date(2022, 11, 21), new Date(2022, 11, 21))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => Room.availableRooms([], new Date(2023, 6, 12), new Date(2023, 6, 16))).not.toThrow();
    });

    it("date make sense", () => {
        expect(() => Room.availableRooms([], new Date(2022, 4, 11), new Date(2025, 11, 1))).not.toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => Room.availableRooms([], new Date(2025, 4, 11), new Date(2025, 4, 10))).toThrow();
    });

    it("date DON'T make sense", () => {
        expect(() => Room.availableRooms([], new Date(2026, 1, 1), new Date(2025, 11, 2))).toThrow();
    });
});

describe("Room.availableRooms return is correct", () => {
    const room0 = new Room("a", [], 1, 0);

    const room1 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 12),
                new Date(2023, 6, 14),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    const room2 = new Room(
        "a",
        [
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 11),
                new Date(2023, 6, 13),
                0,
                new Room("a", [], 1, 0)
            ),
            new Booking(
                "Name",
                "email",
                new Date(2023, 6, 15),
                new Date(2023, 6, 17),
                0,
                new Room("a", [], 1, 0)
            )
        ],
        1,
        0
    );

    it("Should be [] (empty rooms)", () => {
        expect(Room.availableRooms([], new Date(2023, 6, 15), new Date(2023, 6, 19))).toEqual([]);
    });

    it("Should be []", () => {
        expect(Room.totalOccupancyPercentage([room1, room2], new Date(2023, 6, 12), new Date(2023, 6, 15))).toEqual([]);
    });

    it("Should be [room0]", () => {
        expect(Room.totalOccupancyPercentage([room0], new Date(2023, 7, 15), new Date(2023, 7, 19))).toEqual([room0]);
    });

    it("Should be [room1]", () => {
        expect(Room.totalOccupancyPercentage([room1], new Date(2023, 7, 15), new Date(2023, 7, 19))).toEqual([room1]);
    });

    it("Should be [room2]", () => {
        expect(Room.totalOccupancyPercentage([room2], new Date(2023, 6, 14), new Date(2023, 6, 14))).toEqual([room2]);
    });

    it("Should be [room2]", () => {
        expect(Room.totalOccupancyPercentage([room1, room2], new Date(2023, 6, 9), new Date(2023, 6, 12))).toEqual([room2]);
    });

    it("Should be [room0]", () => {
        expect(Room.totalOccupancyPercentage([room1, room0, room2], new Date(2023, 6, 12), new Date(2023, 6, 15))).toEqual([room0]);
    });

    it("Should be [room2]", () => {
        expect(Room.totalOccupancyPercentage([room1, room2], new Date(2023, 6, 16), new Date(2023, 6, 19))).toEqual([room2]);
    });
});

// Booking Constructor Tests    /////////////////////////////////////////////////////////////////////////////////////////
// Booking.name                 /////////////////////////////////////////////////////////////////////////////////////////
describe("Booking.name is a string", () => {
    it("is string", () => {
        expect(typeof (new Booking("Some Name", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).name)).toBe("string");
    });

    it("is string", () => {
        expect(typeof (new Booking("a", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).name)).toBe("string");
    });

    it("is int", () => {
        expect(() => new Booking(1, "e", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is float", () => {
        expect(() => new Booking(1.2, "e", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is boolean", () => {
        expect(() => new Booking(true, "e", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is null", () => {
        expect(() => new Booking(null, "e", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });
});

describe("Booking.name.length is greater than 0", () => {
    it("is > 0", () => {
        expect(new Booking("Some Name", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).name.length).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Booking("a", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).name.length).toBeGreaterThan(0);
    });

    it("equals 0", () => {
        expect(() => new Booking("", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });
});

// Booking.email                /////////////////////////////////////////////////////////////////////////////////////////
describe("Booking.email is a string", () => {
    it("is string", () => {
        expect(typeof (new Booking("a", "Some Email", new Date(), new Date(), 0, new Room("a", [], 1, 0)).email)).toBe("string");
    });

    it("is string", () => {
        expect(typeof (new Booking("a", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).email)).toBe("string");
    });

    it("is int", () => {
        expect(() => new Booking("a", 8, new Date(), new Date(), 0, new Room("a", [], 1, 0)).email).toThrow();
    });

    it("is float", () => {
        expect(() => new Booking("a", 4.2, new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is boolean", () => {
        expect(() => new Booking("a", false, new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is null", () => {
        expect(() => new Booking("a", null, new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });
});

describe("Booking.name.length is greater than 0", () => {
    it("is > 0", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 0, new Room("a", [], 1, 0)).email.length).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Booking("a", "e", new Date(), new Date(), 0, new Room("a", [], 1, 0)).email.length).toBeGreaterThan(0);
    });

    it("equals 0", () => {
        expect(() => new Booking("a", "", new Date(), new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });
});

// Booking.checkIn              /////////////////////////////////////////////////////////////////////////////////////////
describe("Booking.checkIn is Date", () => {
    it("is Date", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 0, new Room("a", [], 1, 0)).checkIn instanceof Date).toBeTruthy();
    });

    it("is String", () => {
        expect(() => new Booking("a", "Some email", "12/12/12", new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is null", () => {
        expect(() => new Booking("a", "Some email", null, new Date(), 0, new Room("a", [], 1, 0))).toThrow();
    });
});

// Booking.checkOut             /////////////////////////////////////////////////////////////////////////////////////////
describe("Booking.checkIn is Date", () => {
    it("is Date", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 0, new Room("a", [], 1, 0)).checkOut instanceof Date).toBeTruthy();
    });

    it("is String", () => {
        expect(() => new Booking("a", "Some email", new Date(), "12/12/12", 0, new Room("a", [], 1, 0))).toThrow();
    });

    it("is null", () => {
        expect(() => new Booking("a", "Some email", new Date(), null, 0, new Room("a", [], 1, 0))).toThrow();
    });
});

// Booking.discount             /////////////////////////////////////////////////////////////////////////////////////////
describe("Booking.discount to be a number", () => {
    it("is int", () => {
        expect(typeof (new Booking("a", "Some email", new Date(), new Date(), 0, new Room("a", [], 1, 0).discount))).toBe("number");
    });

    it("is float", () => {
        expect(typeof (new Booking("a", "Some email", new Date(), new Date(), 32.1, new Room("a", [], 1, 0).discount))).toBe("number");
    });

    it("is string", () => {
        expect(typeof (new Booking("a", "Some email", new Date(), new Date(), "10", new Room("a", [], 1, 0).discount))).toBe("number");
    });

    it("is null", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), null, new Room("a", [], 1, 0)) }).toThrow();
    });

    it("is boolean", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), true, new Room("a", [], 1, 0)) }).toThrow();
    });
});

describe("Booking.discount to be >= 0", () => {
    it("is 0", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 0, new Room("a", [], 1, 0)).discount).toBeGreaterThanOrEqual(0);
    });

    it("is > 0", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 2, new Room("a", [], 1, 0)).discount).toBeGreaterThan(0);
    });

    it("is > 0", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 99, new Room("a", [], 1, 0)).discount).toBeGreaterThan(0);
    });

    it("is < 0", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), -10, new Room("a", [], 1, 0)) }).toThrow();
    });

    it("is < 0", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), -1, new Room("a", [], 1, 0)) }).toThrow();
    });
});

describe("Booking.discount to be <= 100", () => {
    it("is 100", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 100, new Room("a", [], 1, 0)).discount).toBeLessThanOrEqual(100);
    });

    it("is < 100", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 87, new Room("a", [], 1, 0)).discount).toBeLessThanOrEqual(100);
    });

    it("is < 100", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 43, new Room("a", [], 1, 0)).discount).toBeLessThanOrEqual(100);
    });

    it("is > 100", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), 3432, new Room("a", [], 1, 0)) }).toThrow();
    });

    it("is > 100", () => {
        expect(() => { new Booking("a", "Some email", new Date(), new Date(), 101, new Room("a", [], 1, 0)) }).toThrow();
    });
});

describe("Booking.discount to be an int", () => {
    it("is int", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 21, new Room("a", [], 1, 0)).discount % 1).toEqual(0);
    });

    it("is int", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 43, new Room("a", [], 1, 0)).discount % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 5.1, new Room("a", [], 1, 0)).discount % 1).toEqual(0);
    });

    it("is float", () => {
        expect(new Booking("a", "Some email", new Date(), new Date(), 2.54, new Room("a", [], 1, 0)).discount % 1).toEqual(0);
    });
});