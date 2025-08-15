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

export const SectionModifierType = {
    TopWall: "TopWall",
    BottomWall: "BottomWall",
    LeftWall: "LeftWall",
    RightWall: "RightWall",
    TopRightCornerWall: "TopRightCornerWall",
    TopLeftCornerWall: "TopLeftCornerWall",
    BottomRightCornerWall: "BottomRightCornerWall",
    BottomLeftCornerWall: "BottomLeftCornerWall",
    Door: "Door",
    Window: "Window"
} as const;

export type SectionModifierType = typeof SectionModifierType[keyof typeof SectionModifierType];

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
    isSectionItem: boolean;
    isSectionModifier: boolean;
    sectionModifierType?: SectionModifierType;


    constructor({ id, cellsLong, cellsTall, initialElement, name, icon, moveable, starterItem, displayItem, sectionCell, rotation, isSectionItem, sectionModifierType, isSectionModifier }: {
        id: string, cellsLong: number, cellsTall: number, initialElement?: HTMLElement,
        isSectionItem?: boolean,
        name: string,
        icon: string,
        moveable?: boolean,
        starterItem?: boolean,
        displayItem?: boolean,
        sectionCell?: CellId,
        rotation?: number,
        isSectionModifier?: boolean,
        sectionModifierType?: SectionModifierType
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
        this.isSectionItem = isSectionItem ?? false;
        this.isSectionModifier = isSectionModifier ?? false;
        this.sectionModifierType = sectionModifierType;


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
            rotation: data.rotation || 0,
            isSectionItem: data.isSectionItem || false,

            isSectionModifier: data.isSectionModifier || false,
            sectionModifierType: data.sectionModifierType == "" ? undefined : data.sectionModifierType,
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
            isSectionItem: data.isSectionItem || false,
            isSectionModifier: data.isSectionModifier || false,
            sectionModifierType: data.sectionModifierType == "" ? undefined : data.sectionModifierType, // Handle optional sectionModifierType
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
            rotation: this.rotation || 0, // Ensure rotation is included
            isSectionItem: this.isSectionItem || false,
            isSectionModifier: this.isSectionModifier || false,
            sectionModifierType: this.sectionModifierType || "", // Handle optional sectionModifierType
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
            isSectionItem: this.isSectionItem || false,
            isSectionModifier: this.isSectionModifier || false,
            sectionModifierType: this.sectionModifierType || "",

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

    static fromDoc(data: DocumentData): StaringItem {
        return new StaringItem({
            cell: CellId.fromString(data.cell),
            item: Item.fromDoc(data.item)
        });
    }

    static fromJSON(data: any): StaringItem {
        return new StaringItem({
            cell: CellId.fromString(data.cell),
            item: Item.fromJSON(data.item)
        });
    }

    toJSON(): object {
        return {
            cell: this.cell.toId(),
            item: this.item.toJSON()
        };
    }

    toDoc(): DocumentData {
        return {
            cell: this.cell.toId(),
            item: this.item.toDoc()
        };
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
    modifierItems: StaringItem[];


    constructor({ name, cellId, cellsLong, cellsTall, startingItems, items, modifierItems }: {
        name: string,
        cellId: CellId,
        cellsLong: number,
        cellsTall: number,
        startingItems: StaringItem[],
        items?: Item[],
        modifierItems: StaringItem[]
    }) {
        this.name = name;
        this.cellId = cellId;
        this.cellsLong = cellsLong;
        this.cellsTall = cellsTall;
        this.startingItems = startingItems;
        this.cellElement = null;
        this.items = items || [];
        this.modifierItems = modifierItems;
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
            })),
            items: data.items ? data.items.map((item: any) => Item.fromJSON(item)) : [],
            modifierItems: data.modifierItems ? data.modifierItems.map((item: any) => StaringItem.fromJSON(item)) : []
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
            })) : [],
            items: data.items ? data.items.map((item: any) => Item.fromDoc(item)) : [],
            modifierItems: data.modifierItems ? data.modifierItems.map((item: any) => StaringItem.fromDoc(item)) : []
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
            })),
            items: this.items.map(item => item.toJSON()),
            modifierItems: this.modifierItems.map(item => item.toJSON())
        };
    }

    toDoc(): DocumentData {
        console.log("Section toDoc", this.items);
        return {
            name: this.name,
            cellId: this.cellId.toId(),
            cellsLong: this.cellsLong,
            cellsTall: this.cellsTall,
            startingItems: this.startingItems.map(item => ({
                cell: item.cell.toId(),
                item: item.item.toDoc()
            })),
            items: this.items.map(item => item.toDoc()),
            modifierItems: this.modifierItems.map(item => item.toDoc())
        };
    }
}

export class Template {
    name: string;
    sections: Section[];
    id: string;
    previewImage: string;
    inventoryItems: InventoryItem[];

    constructor({ name, sections, id, previewImage, inventoryItems }: { name: string, sections: Section[], id: string, previewImage: string, inventoryItems: InventoryItem[] }) {
        this.name = name;
        this.sections = sections;
        this.id = id;
        this.previewImage = previewImage;
        this.inventoryItems = inventoryItems;
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toJSON()),
            previewImage: this.previewImage,
            inventoryItems: this.inventoryItems.map(item => item.toJSON())
        });
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toDoc()),
            previewImage: this.previewImage,
            inventoryItems: this.inventoryItems.map(item => item.toDoc())
        };
    }



    static fromJSON(json: string): Template {
        const data = JSON.parse(json);
        return new Template({
            name: data.name,
            id: data.id,
            sections: data.sections.map((section: any) => Section.fromJSON(section)),
            previewImage: data.previewImage,
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromJSON(item)) : []

        });
    }

    static fromDoc(data: DocumentData): Template {
        return new Template({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromDoc(section)) : [],
            previewImage: data.previewImage,
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromDoc(item)) : []
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
    previewImage: string;
    width: number;
    height: number;

    constructor({ name, sections, templates, inventoryItems, id, previewImage, width, height }: {
        name: string,
        sections: Section[],
        templates: Template[],
        inventoryItems: InventoryItem[],
        id: string,
        previewImage: string,
        width: number,
        height: number

    }) {
        this.name = name;
        this.sections = sections;
        this.templates = templates;
        this.inventoryItems = inventoryItems;
        this.id = id;
        this.previewImage = previewImage;
        this.width = width;
        this.height = height;
    }

    static fromDoc(data: DocumentData): Area {
        return new Area({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromDoc(section)) : [],
            templates: data.templates ? data.templates.map((template: any) => Template.fromDoc(template)) : [],
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromDoc(item)) : [],
            previewImage: data.previewImage || "",
            width: data.width,
            height: data.height
        });
    }

    static fromJSON(data: any): Area {
        return new Area({
            name: data.name,
            id: data.id,
            sections: data.sections ? data.sections.map((section: any) => Section.fromJSON(section)) : [],
            templates: data.templates ? data.templates.map((template: any) => Template.fromJSON(template)) : [],
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromJSON(item)) : [],
            previewImage: data.previewImage || "",
            width: data.width,
            height: data.height
        });
    }

    toJSON(): object {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toJSON()),
            templates: this.templates.map(template => template.toJSON()),
            inventoryItems: this.inventoryItems.map(item => item.toJSON()),
            previewImage: this.previewImage,
            width: this.width,
            height: this.height
        };
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            id: this.id,
            sections: this.sections.map(section => section.toDoc()),
            templates: this.templates.map(template => template.toDoc()),
            inventoryItems: this.inventoryItems.map(item => item.toDoc()),
            previewImage: this.previewImage || "",
            width: this.width,
            height: this.height
        };
    }
}

export class Company {
    name: string;
    id: string;
    code: string;
    users: string[];

    constructor({ name, id, code, users }: { name: string, id: string, code: string, users: string[] }) {
        this.name = name;
        this.id = id;
        this.code = code;
        this.users = users;
    }

    static fromDoc(data: DocumentData): Company {
        return new Company({
            name: data.name,
            id: data.id,
            code: data.code,
            users: data.users || []
        });
    }

    toDoc(): DocumentData {
        return {
            name: this.name,
            id: this.id,
            code: this.code,
            users: this.users || []
        };
    }

}

export class Design {
    id: string;
    name: string;
    areaId: string;
    previewImage: string;
    sections: Section[];
    inventoryItems: InventoryItem[];

    constructor({ id, name, areaId, previewImage, sections, inventoryItems }: {
        id: string,
        name: string,
        areaId: string,
        previewImage: string,
        sections: Section[],
        inventoryItems: InventoryItem[]
    }) {
        this.id = id;
        this.name = name;
        this.areaId = areaId;
        this.previewImage = previewImage;
        this.sections = sections;
        this.inventoryItems = inventoryItems;
    }

    static fromDoc(data: DocumentData): Design {
        return new Design({
            id: data.id,
            name: data.name,
            areaId: data.areaId,
            previewImage: data.previewImage || "",
            sections: data.sections ? data.sections.map((section: any) => Section.fromDoc(section)) : [],
            inventoryItems: data.inventoryItems ? data.inventoryItems.map((item: any) => InventoryItem.fromDoc(item)) : []
        });
    }

    toDoc(): DocumentData {
        return {
            id: this.id,
            name: this.name,
            areaId: this.areaId,
            previewImage: this.previewImage || "",
            sections: this.sections.map(section => section.toDoc()),
            inventoryItems: this.inventoryItems.map(item => item.toDoc())
        };
    }
}

export const premadeItems: Item[] = [
    new Item({
        id: "rectangular-table",
        name: "Rectangular Table",
        icon: "https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frectangle_Table.png?alt=media&token=b6a58b65-3082-4fa7-93a4-f93b71c01dc8",
        cellsLong: 8,
        cellsTall: 4,
        moveable: true,
        starterItem: true,
        displayItem: true
    }),
    new Item({
        id: "rounded-table",
        name: "Rounded Table",
        icon: "https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2Frounded_table.png?alt=media&token=f7c546ad-0247-420e-a146-46346751de00",
        cellsLong: 4,
        cellsTall: 4,
        moveable: true,
        starterItem: true,
        displayItem: true
    }),
    new Item({
        id: "chair",
        name: "Chair",
        icon: "https://firebasestorage.googleapis.com/v0/b/kazoom-layitout.firebasestorage.app/o/public%2FChair.png?alt=media&token=cde7cf8c-35d5-40da-a0ff-7cc96fd1996d",
        cellsLong: 2,
        cellsTall: 2,
        moveable: true,
        starterItem: true,
        displayItem: true
    }),
]