

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

export class Section {
    name: string;
    cellId: CellId;
    cellElement: HTMLElement | null;
    cellsLong: number;
    cellsTall: number;
    startingItems: StaringItem[];
    items: Item[];


    constructor({ name, cellId, cellsLong, cellsTall, startingItems }: {
        name: string,
        cellId: CellId,
        cellsLong: number,
        cellsTall: number,
        startingItems: StaringItem[]
    }) {
        this.name = name;
        this.cellId = cellId;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.startingItems = startingItems;
        this.cellElement = null;
        this.items = [];
    }
}

export class Template {
    name: string;
    sections: Section[];

    constructor({ name, sections }: { name: string, sections: Section[] }) {
        this.name = name;
        this.sections = sections;
    }

    static toJSON(template: Template): string {
        return JSON.stringify({
            name: template.name,
            sections: template.sections.map(section => ({
                name: section.name,
                cellId: section.cellId.toId(),
                cellsLong: section.cellsLong,
                cellsTall: section.cellsTall,
                startingItems: section.startingItems.map(item => ({
                    cell: item.cell.toId(),
                    item: {
                        id: item.item.id,
                        name: item.item.name,
                        icon: item.item.icon,
                        cellsLong: item.item.cellsLong,
                        cellsTall: item.item.cellsTall,
                        moveable: item.item.moveable,
                        starterItem: item.item.starterItem
                    }
                }))
            }))
        });
    }

    static fromJSON(json: string): Template {
        const data = JSON.parse(json);
        return new Template({
            name: data.name,
            sections: data.sections.map((section: any) => new Section({
                name: section.name,
                cellId: CellId.fromString(section.cellId),
                cellsLong: section.cellsLong,
                cellsTall: section.cellsTall,
                startingItems: section.startingItems.map((item: any) => new StaringItem({
                    cell: CellId.fromString(item.cell),
                    item: new Item({
                        id: item.item.id,
                        name: item.item.name,
                        icon: item.item.icon,
                        cellsLong: item.item.cellsLong,
                        cellsTall: item.item.cellsTall,
                        moveable: item.item.moveable,
                        starterItem: item.item.starterItem
                    })
                }))
            }))
        });
    }
}