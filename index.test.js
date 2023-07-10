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
