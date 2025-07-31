export class CellId {
    x: number;
    y: number;

    constructor({ x, y }: { x: number, y: number }) {
        this.x = x;
        this.y = y;
    }

    toId(): string {
        return `Cell-${this.x}-${this.y}`
    }

    static fromString(id: string): CellId {
        return new CellId({ x: parseInt(id.split("-")[1]), y: parseInt(id.split("-")[2]) })
    }

}

export class Item {
    name: string;
    id: string;
    icon: string;
    cellsLong: number;
    cellsTall: number;
    hasMoved: boolean;
    initialElement?: HTMLElement;
    moveable: boolean;
    roation: number;
    starterItem: boolean;

    constructor({ id, cellsLong, cellsTall, initialElement, name, icon, moveable, starterItem }: {
        id: string, cellsLong: number, cellsTall: number, initialElement?: HTMLElement,
        name: string,
        icon: string,
        moveable?: boolean,
        starterItem?: boolean
    }) {
        this.id = id;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.hasMoved = false;
        this.initialElement = initialElement;

        this.name = name;
        this.icon = icon;
        this.roation = 0;
        this.moveable = moveable ?? true;
        this.starterItem = starterItem ?? false;
    }

}

export class InventoryItem {
    item: Item;
    quantity: number;

    constructor({ item, quantity }: { item: Item, quantity: number }) {
        this.item = item;
        this.quantity = quantity;
    }
}

export class StaringItem {
    cell: CellId;
    item: Item;

    constructor({ cell, item }: { cell: CellId, item: Item }) {
        this.cell = cell;
        this.item = item;
    }

}
