angularApp.factory("customService", function () {
    return {
        items: [
            {name: "Item 1", desc: "Description 1", price: 15.9},
            {name: "Item 2", desc: "Description 2", price: 60},
            {name: "Item 3", desc: "Description 3", price: 22.6}
        ]
    };
});