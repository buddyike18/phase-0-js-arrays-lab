// inventoryManagement.js

// Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the details of the first product in the array
function logFirstProduct() {
  console.log(products[0]);
}

// Function to update a product name given its index and a new name
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
    console.log(`Product at index ${index} updated to: ${products[index]}`);
  } else {
    console.log("Invalid product index.");
  }
}

// Function to remove the last product from the array
function removeLastProduct() {
  const removed = products.pop();
  console.log("Removed Product:", removed);
  return removed;
}

// Function to add a new product to the array
function addProduct(newProduct) {
  products.push(newProduct);
  console.log("Added Product:", newProduct);
}

// Export the functions and the products array for testing
module.exports = { products, logFirstProduct, updateProductName, removeLastProduct, addProduct };
