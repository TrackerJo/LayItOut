import { Area, CellId, InventoryItem, Item, Section, StaringItem, Template } from "../constants";

export function getLocalTemplates(): Template[] {
    return [
        new Template({
            name: "Template 1",
            id: "template1",
            sections: [new Section({
                cellId: new CellId({ x: 0, y: 0 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 2", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Main Area"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 300 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 3", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Kitchen"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 300 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 4", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 200,
                cellsTall: 300,
                startingItems: [],
                name: "Bathroom"
            })
            ]
        }), new Template({
            name: "Template 2",
            id: "template2",
            sections: [new Section({
                cellId: new CellId({ x: 0, y: 0 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 2", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Main Area"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 300 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 3", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Kitchen"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 300 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 4", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 200,
                cellsTall: 300,
                startingItems: [],
                name: "Bathroom"
            })
            ]
        }), new Template({
            name: "Template 3",
            id: "template3",
            sections: [new Section({
                cellId: new CellId({ x: 0, y: 0 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 2", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Main Area"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 300 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 3", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Kitchen"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 300 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 4", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 200,
                cellsTall: 300,
                startingItems: [],
                name: "Hallway"
            })
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

            new InventoryItem({ quantity: 60, item: new Item({ id: "1", name: "Chair", cellsLong: 2, cellsTall: 2, icon: "./assets/chair.png", displayItem: true }) }), new InventoryItem({ quantity: 4, item: new Item({ id: "2", name: "Table", cellsLong: 8, cellsTall: 4, icon: "./assets/rectangle_table.png", displayItem: true }) }),
            new InventoryItem({ quantity: 8, item: new Item({ id: "3", name: "Rounded Table", cellsLong: 4, cellsTall: 4, icon: "./assets/rounded_table.png", displayItem: true }) }),
        ],
        sections:
            [new Section({
                cellId: new CellId({ x: 0, y: 0 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 2", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Main Area"
            }),

            new Section({
                cellId: new CellId({ x: 500, y: 300 }),
                cellsLong: 300,
                cellsTall: 200,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 4", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Outdoor Area"
            }),
            new Section({
                cellId: new CellId({ x: 500, y: 0 }),
                cellsLong: 200,
                cellsTall: 300,
                startingItems: [],
                name: "Bathroom"
            }),
            new Section({
                cellId: new CellId({ x: 0, y: 300 }),
                cellsLong: 500,
                cellsTall: 300,
                startingItems: [new StaringItem({ cell: new CellId({ x: 0, y: 4 }), item: new Item({ id: "Start 3", name: "Kitchen", cellsLong: 8, cellsTall: 8, icon: "custom-Kitchen", starterItem: true, moveable: false }) })],
                name: "Kitchen"
            }),
            ]
    });
}