const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// Craft Items 
const paper = {
    name: "Paper",
    location: "Desk",
    description: "I have list paper, sticky notes etc."
}

const pencils = {
    name: "Water color pencils",
    location: "Craft Drawer",
    description: "I enjoy water coloring."
}

const pens = {
    name: "Pens",
    location: "Desk",
    description: "I love my pens as I love to write."
}

const books = {
    name: "Books",
    location: "Book Self",
    description: "I love to read all kinds of books."
}

const stickers = {
    name: "Stickers",
    location: "Computer",
    description: "I love STICKERSSSS!!!"
}

//Furniture

const bookcase = {
    name: "Bookcase",
    location: "Bedroom",
    description: "This is a hand me down from my sister, which I re-did with new paint and stain."
}

const couch = {
    name: "Couch",
    location: "Living room",
    description: "I love to veg out!!"
}

const dresser = {
    name: "Dresser",
    location: "closet",
    description: "I got it off Craigslist baby."
}

const piano = {
    name: "Piano",
    location: "Living Room",
    description: "I learned piano as a kid and dream to get back into it."
}
// Electronics

const tv = {
    name: "TV",
    location: "Living Room",
    description: "I love to binge watch a good show."
}
const computer = {
    name: "Computer",
    location: "backpack",
    description: "My brother-in-law and sister gave it to me so I could come to NSS"
}


HomeInventoryDatabase.crafts.push(paper, pencils, pens, books, stickers)
HomeInventoryDatabase.furniture.push(bookcase, couch, dresser, piano)
HomeInventoryDatabase.electronics.push(tv, computer)

const saveDatabase = function (databaseObject, localStorageKey) {
    /* Convert the Object into a string. */
    let stringifiedDatabase = JSON.stringify(databaseObject)
    /* Create a key in local storage, and store the string
        version of your inventory database as the value */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "HomeInventory")

let parsedObject = JSON.parse(localStorage.getItem("HomeInventoryDatabase"))

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadDatabase("HomeInventory"));



