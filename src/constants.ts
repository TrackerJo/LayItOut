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

    roation: number;

    constructor({ id, cellsLong, cellsTall, initialElement, name, icon }: {
        id: string, cellsLong: number, cellsTall: number, initialElement?: HTMLElement,
        name: string,
        icon: string
    }) {
        this.id = id;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.hasMoved = false;
        this.initialElement = initialElement;

        this.name = name;
        this.icon = icon;
        this.roation = 0;
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