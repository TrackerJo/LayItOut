/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DocumentData } from "firebase/firestore";


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
    rotation: number;
    starterItem: boolean;
    isDisplayItem: boolean;
    sectionCell?: CellId;


    constructor({ id, cellsLong, cellsTall, initialElement, name, icon, moveable, starterItem, displayItem, sectionCell, rotation }: {
        id: string, cellsLong: number, cellsTall: number, initialElement?: HTMLElement,
        name: string,
        icon: string,
        moveable?: boolean,
        starterItem?: boolean,
        displayItem?: boolean,
        sectionCell?: CellId,
        rotation?: number
    }) {
        this.id = id;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.hasMoved = false;
        this.initialElement = initialElement;

        this.name = name;
        this.icon = icon;
        this.rotation = rotation || 0; // Ensure rotation is handled
        this.moveable = moveable ?? true;
        this.starterItem = starterItem ?? false;
        this.isDisplayItem = displayItem ?? false;
        this.sectionCell = sectionCell;


    }

    static fromDoc(data: DocumentData): Item {
        return new Item({
            id: data.id,
            name: data.name,
            icon: data.icon,
            cellsLong: data.cellsLong,
            cellsTall: data.cellsTall,
            moveable: data.moveable,
            starterItem: data.starterItem,
            displayItem: data.displayItem || false,
            rotation: data.rotation || 0, // Ensure rotation is handled
        });
    }

    static fromJSON(data: any): Item {
        return new Item({
            id: data.id,
            name: data.name,
            icon: data.icon,
            cellsLong: data.cellsLong,
            cellsTall: data.cellsTall,
            moveable: data.moveable,
            starterItem: data.starterItem,
            displayItem: data.displayItem || false,
            rotation: data.rotation || 0, // Ensure rotation is handled
        });
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            icon: this.icon,
            cellsLong: this.cellsLong,
            cellsTall: this.cellsTall,
            moveable: this.moveable,
            starterItem: this.starterItem,
            displayItem: this.isDisplayItem,
            rotation: this.rotation || 0 // Ensure rotation is included
        };
    }

    toDoc(): DocumentData {
        return {
            id: this.id,
            name: this.name,
            icon: this.icon,
            cellsLong: this.cellsLong,
            cellsTall: this.cellsTall,
            moveable: this.moveable,
            starterItem: this.starterItem,
            displayItem: this.isDisplayItem,

            rotation: this.rotation || 0 // Ensure rotation is included
        };
    }

}

export class InventoryItem {
    item: Item;
    quantity: number;

    constructor({ item, quantity }: { item: Item, quantity: number }) {
        this.item = item;
        this.quantity = quantity;
    }

    static fromDoc(data: DocumentData): InventoryItem {
        return new InventoryItem({
            item: Item.fromDoc(data.item),
            quantity: data.quantity
        });

    }

    static fromJSON(data: any): InventoryItem {
        return new InventoryItem({
            item: Item.fromJSON(data.item),
            quantity: data.quantity
        });
    }

    toJSON(): object {
        return {
            item: this.item.toJSON(),
            quantity: this.quantity
        };
    }

    toDoc(): DocumentData {
        return {
            item: this.item.toDoc(),
            quantity: this.quantity
        };
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


    constructor({ name, cellId, cellsLong, cellsTall, startingItems, items }: {
        name: string,
        cellId: CellId,
        cellsLong: number,
        cellsTall: number,
        startingItems: StaringItem[],
        items?: Item[]
    }) {
        this.name = name;
        this.cellId = cellId;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.startingItems = startingItems;
        this.cellElement = null;
        this.items = items || [];
    }

    static fromJSON(section: any): Section {
        const data = JSON.parse(section);
        return new Section({
            name: data.name,
            cellId: CellId.fromString(data.cellId),
            cellsLong: data.cellsLong,
            cellsTall: data.cellsTall,
            startingItems: data.startingItems.map((item: any) => new StaringItem({
                cell: CellId.fromString(item.cell),
                item: Item.fromJSON(item.item)
            }))
        });
    }

    static fromDoc(data: DocumentData): Section {
        return new Section({
            name: data.name,
            cellId: CellId.fromString(data.cellId),
            cellsLong: data.cellsLong,
            cellsTall: data.cellsTall,
            startingItems: data.startingItems ? data.startingItems.map((item: any) => new StaringItem({
                cell: CellId.fromString(item.cell),
                item: Item.fromDoc(item.item)
            })) : []
        });
    }

    toJSON(): object {
        return {
            name: this.name,
            cellId: this.cellId.toId(),
            cellsLong: this.cellsLong,
            cellsTall: this.cellsTall,
            startingItems: this.startingItems.map(item => ({
                cell: item.cell.toId(),
                item: item.item.toJSON()
            }))
        };
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            cellId: this.cellId.toId(),
            cellsLong: this.cellsLong,
            cellsTall: this.cellsTall,
            startingItems: this.startingItems.map(item => ({
                cell: item.cell.toId(),
                item: item.item.toDoc()
            }))
        };
    }
}

export class Template {
    name: string;
    sections: Section[];
    id: string;

    constructor({ name, sections, id }: { name: string, sections: Section[], id: string }) {
        this.name = name;
        this.sections = sections;
        this.id = id;
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toJSON())
        });
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toDoc()),
        };
    }



    static fromJSON(json: string): Template {
        const data = JSON.parse(json);
        return new Template({
            name: data.name,
            id: data.id,
            sections: data.sections.map((section: any) => Section.fromJSON(section))

        });
    }

    static fromDoc(data: DocumentData): Template {
        return new Template({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromDoc(section)) : []
        });
    }
}

export class DisplayItem {
    name: string;
    item: Item;

    constructor({ name, item }: { name: string, item: Item }) {
        this.name = name;
        this.item = item;
    }

}

export class Area {
    id: string;
    name: string;
    sections: Section[];
    templates: Template[];
    inventoryItems: InventoryItem[];

    constructor({ name, sections, templates, inventoryItems, id: string }: {
        name: string,
        sections: Section[],
        templates: Template[],
        inventoryItems: InventoryItem[],
        id: string

    }) {
        this.name = name;
        this.sections = sections;
        this.templates = templates;
        this.inventoryItems = inventoryItems;
        this.id = string;
    }

    static fromDoc(data: DocumentData): Area {
        return new Area({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromDoc(section)) : [],
            templates: data.templates ? data.templates.map((template: any) => Template.fromDoc(template)) : [],
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromDoc(item)) : []
        });
    }

    static fromJSON(data: any): Area {
        return new Area({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromJSON(section)) : [],
            templates: data.templates ? data.templates.map((template: any) => Template.fromJSON(template)) : [],
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromJSON(item)) : []
        });
    }

    toJSON(): object {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toJSON()),
            templates: this.templates.map(template => template.toJSON()),
            inventoryItems: this.inventoryItems.map(item => item.toJSON())
        };
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toJSON()),
            templates: this.templates.map(template => template.toDoc()),
            inventoryItems: this.inventoryItems.map(item => item.toDoc())
        };
    }
}