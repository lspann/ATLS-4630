//First

const rooms = [
    {
        name: '104',
        capacity: 30,
        numWhiteboards: 3,
    },
    {
        name: 'BTU',
        capacity: 30,
        numWhiteboards: 2,
    },
];

function changePageColor() {

}

rooms.forEach(printRoomInfo);

//second, same thing but with classes
class Room {
    constructor(roomName, roomCapacity, numberOfWhiteboards) {
        this.name = roomName;
        this.capacity = roomCapacity;
        this.numWhiteboards = numberOfWhiteboards;
    }

    printRoomInfo() {
        console.log('Hello, I am room "${this.name}"! I can hold ${this.capacity} people. And I have ${this.numwhiteboards} whiteboards!');
    }
}

const classrooms = [
    new Room('104', 30, 3),
    new Room('BTU', 30, 2),
];

classrooms.forEach(room => room.printRoomInfo());
