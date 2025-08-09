import { Area, CellId, InventoryItem, Item, Section, StaringItem, Template } from "../constants";

export function getLocalTemplates(): Template[] {
    return [
        new Template({
            name: "Rectangle Table",
            id: "template1",
            sections: [new Section({
                cellId: new CellId({ x: 0, y: 200 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [
                    new StaringItem({ cell: new CellId({ x: 0, y: 0 }), item: new Item({ id: "Table2", name: "Table", cellsLong: 8, cellsTall: 4, icon: "https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rectangle_Table.png?raw=true", starterItem: true, rotation: 1 }) }),
                ],
                name: "Main Area"
            }),

            new Section({
                cellId: new CellId({ x: 500, y: 200 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 400, y: 0 }),
                cellsLong: 100,
                cellsTall: 200,
                startingItems: [],
                name: "Hallway"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [],
                name: "Veranda"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 500 }),
                cellsLong: 300,
                cellsTall: 100,
                startingItems: [],
                name: "Kitchen"
            }),
            ]
        })

    ];
}

export function getLocalArea(): Area {
    return new Area({
        name: "Local Area",
        id: "vY4BHs3ebZZ1MUnqTEi7",
        templates: getLocalTemplates(),
        inventoryItems: [

            new InventoryItem({ quantity: 60, item: new Item({ id: "1", name: "Chair", cellsLong: 2, cellsTall: 2, icon: "https://github.com/TrackerJo/LayItOut/blob/main/src/assets/Chair.png?raw=true", displayItem: true }) }), new InventoryItem({ quantity: 4, item: new Item({ id: "2", name: "Table", cellsLong: 8, cellsTall: 4, icon: "https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rectangle_Table.png?raw=true", displayItem: true }) }),
            new InventoryItem({ quantity: 8, item: new Item({ id: "3", name: "Rounded Table", cellsLong: 4, cellsTall: 4, icon: "https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rounded_table.png?raw=true", displayItem: true }) }),
        ],
        sections:
            [new Section({
                cellId: new CellId({ x: 0, y: 200 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [
                    new StaringItem({ cell: new CellId({ x: 0, y: 0 }), item: new Item({ id: "Table2", name: "Table", cellsLong: 8, cellsTall: 4, icon: "https://github.com/TrackerJo/LayItOut/blob/main/src/assets/rectangle_Table.png?raw=true", starterItem: true, rotation: 1 }) }),
                ],
                name: "Main Area"
            }),

            new Section({
                cellId: new CellId({ x: 500, y: 200 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 400, y: 0 }),
                cellsLong: 100,
                cellsTall: 200,
                startingItems: [],
                name: "Hallway"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [],
                name: "Veranda"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 500 }),
                cellsLong: 300,
                cellsTall: 100,
                startingItems: [],
                name: "Kitchen"
            }),
            ]
    });
}