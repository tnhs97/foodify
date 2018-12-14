export default [
  {
    displayName: "Hot Drinks",
    slug: "hot-drinks",
    items: [
      {
        name: "Latte",
        price: 2.95,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "latte"
      },
      {
        name: "Americano",
        price: 2.5,
        options: ["size", "quantity", "decaf"],
        id: "americano"
      },
      {
        name: "Cappucino",
        price: 3.05,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "cappucino"
      },
      {
        name: "Espresso",
        price: 2.5,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "espresso"
      },
      {
        name: "Macchiato",
        price: 3.5,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "macchiato"
      }
    ]
  },
  {
    displayName: "Cold Drinks",
    slug: "cold-drinks",
    items: [
      {
        name: "Iced Latte",
        price: 2.95,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "iced-latte"
      },
      {
        name: "Iced Mocha",
        price: 2.5,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "iced-mocha"
      },
      {
        name: "Iced Chai",
        price: 3.05,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "iced-chai"
      },
      {
        name: "Iced Coffee",
        price: 2.5,
        options: ["milkType", "size", "quantity", "decaf"],
        id: ""
      },
      {
        name: "Frappe",
        price: 3.5,
        options: ["milkType", "size", "quantity", "decaf"],
        id: "frappe"
      }
    ]
  },
  {
    displayName: "Tea",
    slug: "tea",
    items: [
      {
        name: "Green",
        price: 2.95,
        options: ["size", "quantity", "hotOrCold"],
        id: "green"
      },
      {
        name: "Jasmine Green",
        price: 2.5,
        options: ["size", "quantity", "hotOrCold"],
        id: "jasmine-green"
      },
      {
        name: "Chai",
        price: 3.05,
        options: ["size", "quantity", "hotOrCold"],
        id: "chai"
      },
      {
        name: "Mint",
        price: 2.5,
        options: ["size", "quantity", "hotOrCold"],
        id: "mint"
      },
      {
        name: "Chamomile",
        price: 3.5,
        options: ["size", "quantity", "hotOrCold"],
        id: "chamomile"
      }
    ]
  },
  {
    displayName: "Bakery",
    slug: "bakery",
    items: [
      {
        name: "Croissant",
        price: 2.95,
        options: ["quantity"],
        id: "croissant"
      },
      {
        name: "Banana Muffin",
        price: 2.5,
        options: ["quantity"],
        id: "banana-muffin"
      },
      {
        name: "Blueberry Scone",
        price: 3.05,
        options: ["quantity"],
        id: "blueberry-scone"
      },
      {
        name: "Carrot Cake",
        price: 2.5,
        options: ["quantity"],
        id: "carrot-cake"
      },
      {
        name: "Home-Made Cookies",
        price: 3.5,
        options: ["quantity"],
        id: "home-made-cookies"
      }
    ]
  }
];
