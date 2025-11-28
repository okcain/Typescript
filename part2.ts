//Defining the 'Shape' of our data (The Contract)
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inAvailable: boolean;
    rating?: number; // Optional property
}

const laptop: Product = {
    id: 1,
    name: "Gaming Laptop XYZ",
    price: 1500,
    category: "Electronics",
    inAvailable: true,
};

const coffeeMug: Product = {
    id: 2,
    name: "Developer Mug",
    price: 12,
    category: "Kitchen",
    inAvailable: true,
    rating: 4.5,
};

const mouse: Product = {
    id: 3,
    name: "Wireless Mouse",
    price: 25,
    category: "Electronics",
    inAvailable: false,
    rating: 4.2,
};

// Function to print product details

function printProductDetails(item: Product): void {
    console.log("-----------------------------------------");
    console.log(`Product Name: ${item.name}`);
    console.log(`Price: $${item.price}`);
    console.log(`Available: ${item.inAvailable ? "Yes" : "No"}`);
    if (item.rating) {
        console.log(`Rating: ${item.rating} stars`);
    }
    console.log("-----------------------------------------");
}

console.log("--- Online Store ---")
printProductDetails(laptop);
printProductDetails(coffeeMug);
printProductDetails(mouse);